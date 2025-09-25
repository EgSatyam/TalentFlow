// // // import React, { useState, useEffect } from "react";
// // // import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
// // // import { CSS } from "@dnd-kit/utilities";
// // // import { fetchCandidatesByStage } from "../helpers/candidates";

// // // const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// // // export default function JobsBoard({ jobId }) {
// // //   const [items, setItems] = useState(() =>
// // //     Object.fromEntries(STAGES.map((s) => [s, []]))
// // //   );

// // //   // Load from helper
// // //   useEffect(() => {
// // //     async function loadData() {
// // //       const data = await fetchCandidatesByStage(jobId);
// // //       setItems(data);
// // //     }
// // //     loadData();
// // //   }, [jobId]);

// // //   function handleDragEnd(event) {
// // //     const { active, over } = event;
// // //     if (!over) return;

// // //     const fromStage = Object.keys(items).find((stage) =>
// // //       items[stage].some((c) => c.id === active.id)
// // //     );
// // //     const toStage = over.id;

// // //     if (fromStage && toStage && fromStage !== toStage) {
// // //       setItems((prev) => {
// // //         const candidate = prev[fromStage].find((c) => c.id === active.id);

// // //         const next = { ...prev };
// // //         next[fromStage] = next[fromStage].filter((c) => c.id !== active.id);
// // //         next[toStage] = [...next[toStage], { ...candidate, stage: toStage }];
// // //         return next;
// // //       });

// // //       // TODO: persist stage change back to Dexie
// // //       // db.candidates.update(active.id, { stage: toStage });
// // //     }
// // //   }

// // //   return (
// // //     <DndContext onDragEnd={handleDragEnd}>
// // //       <div
// // //         style={{
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(6, 1fr)",
// // //           gap: 16,
// // //         }}
// // //       >
// // //         {STAGES.map((stage) => (
// // //           <StageColumn key={stage} id={stage} items={items[stage]} />
// // //         ))}
// // //       </div>
// // //     </DndContext>
// // //   );
// // // }

// // // // Stage Column
// // // function StageColumn({ id, items }) {
// // //   const { isOver, setNodeRef } = useDroppable({ id });
// // //   const style = {
// // //     background: isOver ? "#e6ffed" : "#f9fafb",
// // //     border: "2px dashed #ccc",
// // //     borderRadius: 8,
// // //     padding: 12,
// // //     minHeight: 300,
// // //     display: "flex",
// // //     flexDirection: "column",
// // //     gap: 8,
// // //   };

// // //   return (
// // //     <div ref={setNodeRef} style={style}>
// // //       <h3 style={{ margin: 0, fontWeight: "bold", textTransform: "capitalize" }}>
// // //         {id}
// // //       </h3>
// // //       {items.length > 0 ? (
// // //         items.map((candidate) => (
// // //           <CandidateCard key={candidate.id} id={candidate.id} candidate={candidate} />
// // //         ))
// // //       ) : (
// // //         <span style={{ color: "#999" }}>Drop here</span>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // Candidate Card
// // // function CandidateCard({ id, candidate }) {
// // //   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
// // //   const style = {
// // //     padding: "8px 12px",
// // //     borderRadius: 6,
// // //     background: "#2563eb",
// // //     color: "#fff",
// // //     cursor: "grab",
// // //     userSelect: "none",
// // //     transform: transform ? CSS.Translate.toString(transform) : undefined,
// // //   };

// // //   return (
// // //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // //       <div style={{ fontWeight: "bold" }}>{candidate.name}</div>
// // //       <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>{candidate.email}</div>
// // //     </div>
// // //   );
// // // }





// // import React, { useState, useEffect } from "react";
// // import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
// // import { CSS } from "@dnd-kit/utilities";
// // import { fetchCandidatesByStage } from "../helpers/candidates";

// // const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// // export default function JobsBoard({ jobId }) {
// //   const [items, setItems] = useState(() =>
// //     Object.fromEntries(STAGES.map((s) => [s, []]))
// //   );
// //   const [page, setPage] = useState(1);
// //   const pageSize = 20;

// //   // Load from helper
// //   useEffect(() => {
// //     async function loadData() {
// //       const data = await fetchCandidatesByPage({ page, pageSize });
// //       setItems(data);
// //     }
// //     loadData();
// //   }, [jobId, page]);

// //   function handleDragEnd(event) {
// //     const { active, over } = event;
// //     if (!over) return;

// //     const fromStage = Object.keys(items).find((stage) =>
// //       items[stage].some((c) => c.id === active.id)
// //     );
// //     const toStage = over.id;

// //     if (fromStage && toStage && fromStage !== toStage) {
// //       setItems((prev) => {
// //         const candidate = prev[fromStage].find((c) => c.id === active.id);

// //         const next = { ...prev };
// //         next[fromStage] = next[fromStage].filter((c) => c.id !== active.id);
// //         next[toStage] = [...next[toStage], { ...candidate, stage: toStage }];
// //         return next;
// //       });

// //       // TODO: persist stage change
// //       // db.candidates.update(active.id, { stage: toStage });
// //     }
// //   }

// //   return (
// //     <div>
// //       <DndContext onDragEnd={handleDragEnd}>
// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(6, 1fr)",
// //             gap: 16,
// //           }}
// //         >
// //           {STAGES.map((stage) => (
// //             <StageColumn key={stage} id={stage} items={items[stage]} />
// //           ))}
// //         </div>
// //       </DndContext>

// //       {/* Pagination controls */}
// //       <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
// //         <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
// //         <span>Page {page}</span>
// //         <button onClick={() => setPage((p) => p + 1)}>Next</button>
// //       </div>
// //     </div>
// //   );
// // }

// // // Stage Column
// // function StageColumn({ id, items }) {
// //   const { isOver, setNodeRef } = useDroppable({ id });
// //   const style = {
// //     background: isOver ? "#e6ffed" : "#f9fafb",
// //     border: "2px dashed #ccc",
// //     borderRadius: 8,
// //     padding: 12,
// //     minHeight: 300,
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: 8,
// //   };

// //   return (
// //     <div ref={setNodeRef} style={style}>
// //       <h3 style={{ margin: 0, fontWeight: "bold", textTransform: "capitalize" }}>
// //         {id}
// //       </h3>
// //       {items.length > 0 ? (
// //         items.map((candidate) => (
// //           <CandidateCard key={candidate.id} id={candidate.id} candidate={candidate} />
// //         ))
// //       ) : (
// //         <span style={{ color: "#999" }}>Drop here</span>
// //       )}
// //     </div>
// //   );
// // }

// // // Candidate Card
// // function CandidateCard({ id, candidate }) {
// //   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
// //   const style = {
// //     padding: "8px 12px",
// //     borderRadius: 6,
// //     background: "#2563eb",
// //     color: "#fff",
// //     cursor: "grab",
// //     userSelect: "none",
// //     transform: transform ? CSS.Translate.toString(transform) : undefined,
// //   };

// //   return (
// //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// //       <div style={{ fontWeight: "bold" }}>{candidate.name}</div>
// //       <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>{candidate.email}</div>
// //     </div>
// //   );
// // }






// import React, { useState, useEffect } from "react";
// import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";
// import { fetchCandidatesByPage } from "../helpers/candidates";

// const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// export default function JobsBoard({ jobId }) {
//   const [items, setItems] = useState(() =>
//     Object.fromEntries(STAGES.map((s) => [s, []]))
//   );
//   const [page, setPage] = useState(1);
//   const pageSize = 50;

//   // Load paged candidates and group by stage
//   useEffect(() => {
//     async function loadData() {
//       const candidates = await fetchCandidatesByPage({ page, pageSize, jobId });

//       const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
//       candidates.forEach((c) => {
//         if (grouped[c.stage]) grouped[c.stage].push(c);
//       });

//       setItems(grouped);
//     }
//     loadData();
//   }, [jobId, page]);

//   function handleDragEnd(event) {
//     const { active, over } = event;
//     if (!over) return;

//     const fromStage = Object.keys(items).find((stage) =>
//       items[stage].some((c) => c.id === active.id)
//     );
//     const toStage = over.id;

//     if (fromStage && toStage && fromStage !== toStage) {
//       setItems((prev) => {
//         const candidate = prev[fromStage].find((c) => c.id === active.id);

//         const next = { ...prev };
//         next[fromStage] = next[fromStage].filter((c) => c.id !== active.id);
//         next[toStage] = [...next[toStage], { ...candidate, stage: toStage }];
//         return next;
//       });

//       // TODO: persist stage change to Dexie
//       // db.candidates.update(active.id, { stage: toStage });
//     }
//   }

//   return (
//     <div>
//       <DndContext onDragEnd={handleDragEnd}>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(6, 1fr)",
//             gap: 16,
//           }}
//         >
//           {STAGES.map((stage) => (
//             <StageColumn key={stage} id={stage} items={items[stage]} />
//           ))}
//         </div>
//       </DndContext>

//       {/* Pagination controls */}
//       <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
//         <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
//         <span>Page {page}</span>
//         <button onClick={() => setPage((p) => p + 1)}>Next</button>
//       </div>
//     </div>
//   );
// }

// // Stage Column
// function StageColumn({ id, items }) {
//   const { isOver, setNodeRef } = useDroppable({ id });
//   const style = {
//     background: isOver ? "#e6ffed" : "#f9fafb",
//     border: "2px dashed #ccc",
//     borderRadius: 8,
//     padding: 12,
//     minHeight: 300,
//     display: "flex",
//     flexDirection: "column",
//     gap: 8,
//   };

//   return (
//     <div ref={setNodeRef} style={style}>
//       <h3 style={{ margin: 0, fontWeight: "bold", textTransform: "capitalize" }}>
//         {id}
//       </h3>
//       {items.length > 0 ? (
//         items.map((candidate) => (
//           <CandidateCard key={candidate.id} id={candidate.id} candidate={candidate} />
//         ))
//       ) : (
//         <span style={{ color: "#999" }}>Drop here</span>
//       )}
//     </div>
//   );
// }

// // Candidate Card
// function CandidateCard({ id, candidate }) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
//   const style = {
//     padding: "8px 12px",
//     borderRadius: 6,
//     background: "#2563eb",
//     color: "#fff",
//     cursor: "grab",
//     userSelect: "none",
//     transform: transform ? CSS.Translate.toString(transform) : undefined,
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
//       <div style={{ fontWeight: "bold" }}>{candidate.name}</div>
//       <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>{candidate.email}</div>
//     </div>
//   );
// }







import React, { useState, useEffect } from "react";
import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { fetchCandidatesFromBackend } from "../helpers/api";

const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

export default function JobsBoard({ jobId }) {
  const [items, setItems] = useState(() =>
    Object.fromEntries(STAGES.map((s) => [s, []]))
  );
  const [page, setPage] = useState(1);
  const pageSize = 50;
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPage() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchCandidatesFromBackend({ page, pageSize, jobId });
        const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
        result.data.forEach((c) => {
          if (grouped[c.stage]) grouped[c.stage].push(c);
        });
        setItems(grouped);
        setTotal(result.total);
      } catch (err) {
        console.error("Error fetching candidates:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    loadPage();
  }, [jobId, page]);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const fromStage = Object.keys(items).find((stage) =>
      items[stage].some((c) => c.id === active.id)
    );
    const toStage = over.id;

    if (fromStage && toStage && fromStage !== toStage) {
      setItems((prev) => {
        const candidate = prev[fromStage].find((c) => c.id === active.id);

        const next = { ...prev };
        next[fromStage] = next[fromStage].filter((c) => c.id !== active.id);
        next[toStage] = [...next[toStage], { ...candidate, stage: toStage }];
        return next;
      });

      // Optional: persist stage change via API
      // await fetch(`/api/candidates/${active.id}`, { method: "PUT", body: JSON.stringify({ stage: toStage }) });
    }
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      <DndContext onDragEnd={handleDragEnd}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap:16 }}>
          {STAGES.map((stage) => (
            <StageColumn key={stage} id={stage} items={items[stage]} />
          ))}
        </div>
      </DndContext>
      <div style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
        <span>Page {page} / {Math.ceil(total / pageSize)}</span>
        <button onClick={() => setPage(p => p + 1)} disabled={page * pageSize >= total}>Next</button>
      </div>
    </div>
  );
}

// StageColumn & CandidateCard same as earlier
