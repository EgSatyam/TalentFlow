// import React, { useEffect, useState } from "react";

// export default function SubmissionsPage({ jobId = "job-1" }) {
//   const [submissions, setSubmissions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/assessments/${jobId}/submissions`);
//         if (!res.ok) throw new Error("Failed to fetch submissions");
//         const data = await res.json();
//         if (mounted) setSubmissions(data);
//       } catch (err) {
//         console.error("Error loading submissions:", err);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => (mounted = false);
//   }, [jobId]);

//   if (loading) return <div className="p-6">Loading submissions...</div>;

//   if (submissions.length === 0)
//     return <div className="p-6">No submissions yet for this job.</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">
//         Submissions for Job: {jobId}
//       </h1>

//       <div className="space-y-4">
//         {submissions.map((sub) => (
//           <div
//             key={sub.id}
//             className="p-4 border rounded bg-white dark:bg-slate-800"
//           >
//             <div className="text-sm text-slate-500 mb-2">
//               Candidate: {sub.candidateId || "Anonymous"} •{" "}
//               {new Date(sub.createdAt).toLocaleString()}
//             </div>
//             <pre className="bg-gray-100 dark:bg-slate-900 p-2 rounded text-xs overflow-auto">
//               {JSON.stringify(sub.response, null, 2)}
//             </pre>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
// import { db } from "../../mocks/handlers"; // adjust path
import { db } from "../../db/db";   // ✅ correct

export default function SubmissionsPage({ jobId = "job-1", assessment }) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`/assessments/${jobId}/submissions`);
        if (!res.ok) throw new Error("Failed to fetch submissions");
        const data = await res.json();
        if (mounted) setSubmissions(data);
      } catch (err) {
        console.error("Error loading submissions:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [jobId]);

  const downloadFile = async (fileId, name, type) => {
    const fileRec = await db.files.get(fileId);
    if (!fileRec) return alert("File not found");
    const url = URL.createObjectURL(fileRec.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (loading) return <div className="p-6">Loading submissions...</div>;
  if (submissions.length === 0)
    return <div className="p-6">No submissions yet for this job.</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Submissions for Job: {jobId}
      </h1>

      {submissions.map((sub) => (
        <div key={sub.id} className="p-4 border rounded bg-white dark:bg-slate-800 mb-4">
          <div className="text-sm text-slate-500 mb-2">
            Candidate: {sub.candidateId || "Anonymous"} •{" "}
            {new Date(sub.createdAt).toLocaleString()}
          </div>

          {assessment?.sections.map((sec) => (
            <div key={sec.id} className="mb-3">
              <h2 className="font-semibold">{sec.title}</h2>
              <div className="ml-4 space-y-2">
                {sec.questions.map((q) => {
                  const answer = sub.response[q.id];
                  if (!answer) return null;

                  return (
                    <div key={q.id}>
                      <div className="text-sm font-medium">{q.label}</div>
                      <div className="text-xs text-slate-700">
                        {q.type === "multi-choice"
                          ? answer.join(", ")
                          : q.type === "file-upload"
                          ? (
                            <button
                              className="text-blue-600 underline"
                              onClick={() =>
                                downloadFile(answer.fileId, answer.name, answer.type)
                              }
                            >
                              {answer.name} ({Math.round(answer.size / 1024)} KB)
                            </button>
                          )
                          : answer.toString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
