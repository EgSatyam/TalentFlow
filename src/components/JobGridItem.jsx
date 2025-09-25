// import { useState } from "react";
// import { formatDistanceToNow } from "date-fns";
// import ArchiveIcon from "@heroicons/react/24/outline/ArchiveBoxIcon";
// import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
// import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
// import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// export default function JobGridItem({
//   job,
//   listeners,
//   onArchive,
//   onEdit,
//   onDelete,
//   onDetails,
//   loadingStates,
// }) {
//   // Defensive check to prevent rendering with a null or undefined job
//   if (!job) {
//     return null;
//   }

//   const { attributes, setNodeRef, transform, transition } = useSortable({
//     id: job.id,
//   });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const buttonClass =
//     "p-2.5 rounded-full transition-colors duration-200 ease-in-out";
//   const iconClass = "w-5 h-5";

//   // New check for valid date
//   const isValidDate = !isNaN(new Date(job.createdAt).getTime());

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       className="relative flex flex-col p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <div className="flex items-center space-x-3">
//           <span
//             className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
//               job.color
//                 ? `bg-${job.color}-100 text-${job.color}-600 dark:bg-${job.color}-900 dark:text-${job.color}-300`
//                 : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
//             }`}
//           >
//             {job.title[0]}
//           </span>
//           <div>
//             <h3
//               className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-1"
//               title={job.title}
//             >
//               {job.title}
//             </h3>
//             <p className="text-sm text-slate-500 dark:text-slate-400">
//               {job.company}
//             </p>
//           </div>
//         </div>

//         <div className="relative">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className={`${buttonClass} text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700`}
//             aria-label="More actions"
//           >
//             <EllipsisVerticalIcon className={iconClass} />
//           </button>

//           {isMenuOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-700 rounded-md shadow-lg py-1 z-10">
//               <button
//                 onClick={() => {
//                   onEdit(job);
//                   setIsMenuOpen(false);
//                 }}
//                 className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600"
//               >
//                 <PencilIcon className="w-4 h-4 mr-2" />
//                 Edit
//               </button>
//               <button
//                 onClick={() => {
//                   onArchive(job);
//                   setIsMenuOpen(false);
//                 }}
//                 disabled={loadingStates[`archive-${job.id}`]}
//                 className="w-full text-left flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600"
//               >
//                 <ArchiveIcon className="w-4 h-4 mr-2" />
//                 {job.status === "active" ? "Archive" : "Unarchive"}
//               </button>
//               <button
//                 onClick={() => {
//                   onDelete(job);
//                   setIsMenuOpen(false);
//                 }}
//                 disabled={loadingStates[`delete-${job.id}`]}
//                 className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
//               >
//                 <TrashIcon className="w-4 h-4 mr-2" />
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
//         {job.description}
//       </p>

//       <div className="mt-auto">
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           {job.tags &&
//             job.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full"
//               >
//                 {tag}
//               </span>
//             ))}
//         </div>
//         <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
//           <span className="flex items-center space-x-1">
//             <svg
//               className="w-4 h-4 text-slate-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M8 7V3m8 4V3m-9 8h.01M12 11h.01M15 11h.01M7 16h.01M11 16h.01M15 16h.01M7 21h.01M11 21h.01M15 21h.01M18 9v6a3 3 0 01-3 3h-6a3 3 0 01-3-3v-6a3 3 0 013-3h6a3 3 0 013 3z"
//               />
//             </svg>
//             <span>
//               {!isNaN(new Date(job.createdAt).getTime())
//                 ? formatDistanceToNow(new Date(job.createdAt), {
//                     addSuffix: true,
//                   })
//                 : "Date not available"}
//             </span>
//           </span>
//           <button
//             onClick={() => onDetails(job)}
//             className="px-3 py-1 text-blue-600 dark:text-blue-400 hover:underline"
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/JobGridItem.jsx

// import React from "react";

// export default function JobGridItem({ job, listeners, onDetails }) {
//   return (
//     <div
//       onClick={() => onDetails(job)}
//       className="p-4 bg-white rounded shadow relative"
//     >
//       {/* Drag handle (☰ icon) */}
//       <button
//         {...listeners}
//         onClick={(e) => e.stopPropagation()}
//         className="absolute top-2 left-2 cursor-grab text-gray-500"
//       >
//         ☰
//       </button>

//       <h3 className="text-lg font-bold">{job.title}</h3>
//       <p className="text-sm text-gray-500">{job.slug}</p>
//     </div>
//   );
// }

// src/components/JobGridItem.jsx
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ArchiveIcon from "@heroicons/react/24/outline/ArchiveBoxIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import { HiDotsHorizontal } from "react-icons/hi";

export default function JobGridItem({
  job,
  listeners,
  onArchive,
  onEdit,
  onDelete,
  onDetails,
  loadingStates,
}) {
  if (!job) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonClass =
    "p-2.5 rounded-full transition-colors duration-200 ease-in-out";
  const iconClass = "w-5 h-5";

  const isValidDate = !isNaN(new Date(job.createdAt).getTime());

  return (
    <div className="relative flex flex-col p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg">
      {/* ✅ Drag handle (doesn’t trigger details click) */}
      
        <div>

      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <span
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                job.color
                ? `bg-${job.color}-100 text-${job.color}-600 dark:bg-${job.color}-900 dark:text-${job.color}-300`
                : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
            }`}
            >
            {job.title[0]}
          </span>
          <div>
            <h3
              className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-1"
              title={job.title}
              >
              {job.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {job.company}
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${buttonClass} text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700`}
            aria-label="More actions"
            >
            <EllipsisVerticalIcon className={iconClass} />
          </button>

          {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-700 rounded-md shadow-lg py-1 z-10">
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

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
        {job.description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {job.tags &&
            job.tags.map((tag) => (
                <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full"
                >
                {tag}
              </span>
            ))}
        </div>
        <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h.01M12 11h.01M15 11h.01M7 16h.01M11 16h.01M15 16h.01M7 21h.01M11 21h.01M15 21h.01M18 9v6a3 3 0 01-3 3h-6a3 3 0 01-3-3v-6a3 3 0 013-3h6a3 3 0 013 3z"
                />
            </svg>
            <span>
              {isValidDate
                ? formatDistanceToNow(new Date(job.createdAt), {
                    addSuffix: true,
                })
                : "Date not available"}
            </span>
          </span>
          <button
            onClick={() => onDetails(job)}
            className="px-3 py-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
            View Details
          </button>
        </div>
        
        </div>
      </div>

      <div 
        {...listeners}
        onClick={(e) => e.stopPropagation()}
        className="w-full flex justify-center items-center text-center cursor-grab text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
      >
        <HiDotsHorizontal />
      </div>
    </div>
  );
}
