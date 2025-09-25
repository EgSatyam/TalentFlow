import React from "react";

export default function JobActions({
  job,
  onArchive,
  onEdit,
  onDelete,
  loadingArchive,
  loadingDelete,
}) {
  return (
    <div className="flex gap-3">
      {/* Archive / Unarchive */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onArchive(job);
        }}
        disabled={loadingArchive}
        className={`flex-1 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300 ${
          job.status === "active"
            ? "bg-amber-50 text-amber-700 border border-amber-200/60 hover:bg-amber-100 hover:border-amber-300 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800/50 dark:hover:bg-amber-950/50 shadow-sm hover:shadow-md hover:shadow-amber-200/50 dark:hover:shadow-amber-900/20"
            : "bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100 hover:border-emerald-300 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/50 dark:hover:bg-emerald-950/50 shadow-sm hover:shadow-md hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/20"
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loadingArchive ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : job.status === "active" ? (
          "Archive"
        ) : (
          "Unarchive"
        )}
      </button>

      {/* Edit */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(job);
        }}
        className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 dark:hover:from-slate-500 dark:hover:via-slate-400 dark:hover:to-slate-500 transition-all duration-300 shadow-lg shadow-slate-600/25 hover:shadow-xl hover:shadow-slate-600/35 hover:-translate-y-0.5 border border-slate-500/20 hover:border-slate-400/30"
      >
        <span className="flex items-center justify-center gap-1.5">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          Edit
        </span>
      </button>

      {/* Delete */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(job);
        }}
        disabled={loadingDelete}
        className="flex-1 text-sm font-medium px-4 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loadingDelete ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          "Delete"
        )}
      </button>
    </div>
  );
}
