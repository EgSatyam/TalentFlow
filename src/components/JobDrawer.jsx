// src/components/JobDrawer.jsx
import { X } from "lucide-react";

export default function JobDrawer({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="relative w-full sm:w-96 bg-white dark:bg-gray-800 shadow-xl h-full overflow-y-auto p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <X />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {job.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          {job.company} • {job.location} • {job.mode}
        </p>
        <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-200">
          <li><strong>Salary:</strong> {job.salary}</li>
          <li><strong>Experience:</strong> {job.experience}</li>
          <li><strong>Status:</strong> {job.status}</li>
        </ul>
        <h2 className="text-lg font-semibold mb-2">Role Description</h2>
        <p>{job.roleDescription}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {job.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
