import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ArchiveIcon from "@heroicons/react/24/outline/ArchiveBoxIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function JobListItem({
  job,
  listeners,
  onArchive,
  onEdit,
  onDelete,
  onDetails,
  loadingStates,
}) {
  // Defensive check to prevent rendering with a null or undefined job
  if (!job) {
    return null;
  }

  const { attributes, setNodeRef, transform, transition } = useSortable({
    id: job.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonClass =
    "p-2.5 rounded-full transition-colors duration-200 ease-in-out";
  const iconClass = "w-5 h-5";
    
  // New check for valid date
  const isValidDate = !isNaN(new Date(job.createdAt).getTime());

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="flex items-center space-x-4">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
            job.color
              ? `bg-${job.color}-100 text-${job.color}-600 dark:bg-${job.color}-900 dark:text-${job.color}-300`
              : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
          }`}
        >
          {job.title[0]}
        </span>
        <div className="flex-1">
          <h3
            className="text-base font-semibold text-slate-900 dark:text-white line-clamp-1"
            title={job.title}
          >
            {job.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {job.company}
          </p>
        </div>
      </div>

      <div className="flex-grow flex items-center space-x-4 px-4">
        <span className="flex-shrink-0 text-sm text-slate-500 dark:text-slate-400">
          {isValidDate
            ? formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })
            : "Date not available"}
        </span>
        <div className="flex-1 flex flex-wrap gap-2">
          {job.tags &&
            job.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>

      <div className="relative flex items-center space-x-2">
        <button
          onClick={() => onDetails(job)}
          className="px-3 py-1 text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Details
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${buttonClass} text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700`}
          aria-label="More actions"
        >
          <EllipsisVerticalIcon className={iconClass} />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-700 rounded-md shadow-lg py-1 z-10">
            <button
              onClick={() => {
                onEdit(job);
                setIsMenuOpen(false);
              }}
              className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600"
            >
              <PencilIcon className="w-4 h-4 mr-2" />
              Edit
            </button>
            <button
              onClick={() => {
                onArchive(job);
                setIsMenuOpen(false);
              }}
              disabled={loadingStates[`archive-${job.id}`]}
              className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600"
            >
              <ArchiveIcon className="w-4 h-4 mr-2" />
              {job.status === "active" ? "Archive" : "Unarchive"}
            </button>
            <button
              onClick={() => {
                onDelete(job);
                setIsMenuOpen(false);
              }}
              disabled={loadingStates[`delete-${job.id}`]}
              className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
            >
              <TrashIcon className="w-4 h-4 mr-2" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}