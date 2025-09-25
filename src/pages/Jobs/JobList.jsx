// import React, { useState, useMemo } from "react";
// import {
//   DndContext,
//   closestCenter,
//   useSensor,
//   useSensors,
//   PointerSensor,
// } from "@dnd-kit/core";
// import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import JobGridItem from "../../components/JobGridItem";
// import JobListItem from "../../components/JobListItem";
// import SortableItem from "../../components/SortableItem";

// export default function JobList({
//   jobs,
//   viewMode,
//   onReorder,
//   onArchive,
//   onEdit,
//   onDelete,
//   onDetails,
//   loadingStates,
// }) {
//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       const from = jobs.findIndex((job) => job.id === active.id);
//       const to = jobs.findIndex((job) => job.id === over.id);
//       onReorder(from, to);
//     }
//   };

//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 8,
//       },
//     })
//   );

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCenter}
//       onDragEnd={handleDragEnd}
//     >
//       <SortableContext items={jobs.map(job => job.id)} strategy={verticalListSortingStrategy}>
//         <div
//           className={`grid gap-6 ${
//             viewMode === "grid"
//               ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
//               : "grid-cols-1"
//           }`}
//         >
//           {jobs.map((job) => {
//             if (!job) return null; // Defensive check for undefined jobs
//             return (
//               <SortableItem key={job.id} id={job.id}>
//                 {(listeners) =>
//                   viewMode === "grid" ? (
//                     <JobGridItem
//                       job={job}
//                       listeners={listeners}
//                       onArchive={onArchive}
//                       onEdit={onEdit}
//                       onDelete={onDelete}
//                       onDetails={onDetails}
//                       loadingStates={loadingStates}
//                     />
//                   ) : (
//                     <JobListItem
//                       job={job}
//                       listeners={listeners}
//                       onArchive={onArchive}
//                       onEdit={onEdit}
//                       onDelete={onDelete}
//                       onDetails={onDetails}
//                       loadingStates={loadingStates}
//                     />
//                   )
//                 }
//               </SortableItem>
//             );
//           })}
//         </div>
//       </SortableContext>
//     </DndContext>
//   );
// }

// src/pages/Jobs/JobList.jsx
import React from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import JobGridItem from "../../components/JobGridItem";
import JobListItem from "../../components/JobListItem";
import SortableItem from "../../components/SortableItem";

export default function JobList({
  jobs,
  viewMode,
  onReorder,
  onArchive,
  onEdit,
  onDelete,
  onDetails,
  loadingStates,
}) {
  console.log("job render:",jobs)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  const handleDragEnd = ({ active, over }) => {
    console.log("📦 Drag End Event:", { active, over });

    if (!over || active.id === over.id) {
      console.log("⚠️ No valid drop target or same item dropped.");
      return;
    }

const fromJob = jobs.find((job) => String(job.id) === String(active.id));
const toJob = jobs.find((job) => String(job.id) === String(over.id));

console.log("🔍 Drag IDs:", { fromId: fromJob?.id, toId: toJob?.id });

if (!fromJob || !toJob) {
  console.error("❌ Could not find valid job IDs!", { jobs, active, over });
  return;
}

// console.log(`✅ Reordering from jobId ${fromJob.id} → jobId ${toJob.id}`);
onReorder(fromJob, toJob);
  };

  // console.log("📋 Rendering JobList:", { jobs, viewMode });

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={jobs.map((job) => String(job.id))}
        strategy={viewMode === "grid" ? rectSortingStrategy : verticalListSortingStrategy}
      >
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {jobs.map((job, idx) =>
            job ? (
              <SortableItem key={job.id} id={String(job.id)}>
                {(listeners) => {
                  // console.log(`🎨 Rendering job card [${idx}]`, job);
                  return viewMode === "grid" ? (
                    <JobGridItem
                      job={job}
                      listeners={listeners}
                      onArchive={onArchive}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onDetails={onDetails}
                      loadingStates={loadingStates}
                    />
                  ) : (
                    <JobListItem
                      job={job}
                      listeners={listeners}
                      onArchive={onArchive}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onDetails={onDetails}
                      loadingStates={loadingStates}
                    />
                  );
                }}
              </SortableItem>
            ) : (
              console.warn("⚠️ Skipping invalid job:", job) || null
            )
          )}
        </div>
      </SortableContext>
    </DndContext>
  );
}
