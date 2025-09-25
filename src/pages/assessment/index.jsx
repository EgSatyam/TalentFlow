// import React from "react";
// import AssessmentBuilder from "./components/AssessmentBuilder";

// export default function AssessmentPage() {
//   const jobId = "job-1"; // temporary until we use route param
//   return (
//     <div className="p-6">
//       <AssessmentBuilder jobId={jobId} />
//     </div>
//   );
// }


import React from "react";
import { useParams } from "react-router-dom";   // ⬅️ import useParams
import AssessmentBuilder from "./components/AssessmentBuilder";

export default function AssessmentPage() {
  const { jobId } = useParams();   // ⬅️ get jobId from URL param

  return (
    <div className="p-6">
      <AssessmentBuilder jobId={jobId} />
    </div>
  );
}
