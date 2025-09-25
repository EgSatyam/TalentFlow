import { useNavigate } from "react-router-dom";

export default function JobDetailsModal({ job, onClose }) {
  if (!job) return null;
  const navigate = useNavigate();
  const jobId = job.id
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 animate-fadeInScale">
        <h2 className="text-2xl font-bold mb-3">{job.title}</h2>
        <p className="text-sm text-gray-500 mb-4">Slug: {job.slug}</p>
        <div className="space-y-3">
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Location:</strong> {job.location || "Not specified"}</p>
          <p><strong>Mode:</strong> {job.mode || "Not specified"}</p>
          <p><strong>Salary:</strong> {job.salary || "Not specified"}</p>
          <p><strong>Experience:</strong> {job.experience || "Not specified"}</p>
          <p><strong>Company:</strong> {job.company || "Not specified"}</p>
          <p><strong>Role:</strong> {job.roleDescription || "Not specified"}</p>
          <div><strong>Tags:</strong> {job.tags?.join(", ") || "None"}</div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate(`/assessments/${jobId}`)}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Assingnment
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}
