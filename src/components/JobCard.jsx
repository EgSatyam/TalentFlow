import JobActions from "./JobActions";

export default function JobCard({ job, viewMode, onDetails, onArchive, onEdit, onDelete }) {
  // --- GRID VIEW ---
  if (viewMode === "grid") {
    return (
      <li className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition flex flex-col gap-3">
        <div className="flex justify-between items-start gap-3">
          {/* Title + Slug + Tags */}
          <div onClick={() => onDetails(job)} className="cursor-pointer flex-1">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">Slug: {job.slug}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {job.tags?.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-100 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons moved to JobActions */}
          <JobActions job={job} onArchive={onArchive} onEdit={onEdit} onDelete={onDelete} size="sm" />
        </div>
      </li>
    );
  }

  // --- COMPACT VIEW ---
  return (
    <li className="p-2 rounded-lg bg-white dark:bg-gray-800 flex justify-between items-center gap-3 hover:shadow-md transition">
      <div onClick={() => onDetails(job)} className="cursor-pointer">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{job.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-300">Slug: {job.slug}</p>
      </div>

      {/* Buttons moved to JobActions */}
      <JobActions job={job} onArchive={onArchive} onEdit={onEdit} onDelete={onDelete} size="xs" />
    </li>
  );
}
