// // // // // // // // import React, {useState} from 'react';
// // // // // // // // import {DndContext} from '@dnd-kit/core';


// // // // // // // // export default function CandidateBaord() {
// // // // // // // //   const containers = ['A', 'B', 'C'];
// // // // // // // //   const [parent, setParent] = useState(null);

// // // // // // // //   const draggableMarkup = (
// // // // // // // //     <Draggable id="draggable">Drag me</Draggable>
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <DndContext onDragEnd={handleDragEnd}>
// // // // // // // //       {/* If not placed in any container, render the draggable outside */}
// // // // // // // //       {parent === null ? draggableMarkup : null}

// // // // // // // //       <div style={{display: 'flex', gap: 16}}>
// // // // // // // //         {containers.map((id) => (
// // // // // // // //           <Droppable key={id} id={id}>
// // // // // // // //             {/* Render inside if this container is the parent */}
// // // // // // // //             {parent === id ? draggableMarkup : 'Drop here'}
// // // // // // // //           </Droppable>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </DndContext>
// // // // // // // //   );

// // // // // // // //   function handleDragEnd(event) {
// // // // // // // //     const {over} = event;
// // // // // // // //     // If dropped over a container set its id as parent, otherwise clear
// // // // // // // //     setParent(over ? over.id : null);
// // // // // // // //   }
// // // // // // // // }






// // // // // // // // import {useDroppable} from '@dnd-kit/core';

// // // // // // // // function Droppable({id, children}) {
// // // // // // // //   const {isOver, setNodeRef} = useDroppable({id});
// // // // // // // //   const style = {
// // // // // // // //     width: 160,
// // // // // // // //     minHeight: 120,
// // // // // // // //     padding: 12,
// // // // // // // //     border: '2px dashed #ccc',
// // // // // // // //     borderRadius: 8,
// // // // // // // //     background: isOver ? '#e6ffed' : '#fff',
// // // // // // // //     display: 'flex',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div ref={setNodeRef} style={style}>
// // // // // // // //       {children}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }




// // // // // // // // import {useDraggable} from '@dnd-kit/core';
// // // // // // // // import {CSS} from '@dnd-kit/utilities';

// // // // // // // // function Draggable({id, children}) {
// // // // // // // //   const {attributes, listeners, setNodeRef, transform} = useDraggable({id});
// // // // // // // //   const style = {
// // // // // // // //     padding: '8px 12px',
// // // // // // // //     borderRadius: 6,
// // // // // // // //     background: '#2563eb',
// // // // // // // //     color: '#fff',
// // // // // // // //     cursor: 'grab',
// // // // // // // //     userSelect: 'none',
// // // // // // // //     transform: transform ? CSS.Translate.toString(transform) : undefined,
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // // // // // // //       {children}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }




// // // // // // // import React, { useState } from "react";
// // // // // // // import { DndContext } from "@dnd-kit/core";
// // // // // // // import { useDroppable } from "@dnd-kit/core";
// // // // // // // import { useDraggable } from "@dnd-kit/core";
// // // // // // // import { CSS } from "@dnd-kit/utilities";

// // // // // // // // Main board
// // // // // // // export default function CandidateBoard() {
// // // // // // //   const containers = ["A", "B", "C"];

// // // // // // //   // Initial data: each container has some candidates
// // // // // // //   const [items, setItems] = useState({
// // // // // // //     A: ["Alice", "Arjun"],
// // // // // // //     B: ["Bob", "Bhavna"],
// // // // // // //     C: ["Charlie", "Chitra"],
// // // // // // //   });

// // // // // // //   // Handle drag end
// // // // // // //   function handleDragEnd(event) {
// // // // // // //     const { active, over } = event;
// // // // // // //     if (!over) return;

// // // // // // //     const fromContainer = Object.keys(items).find((key) =>
// // // // // // //       items[key].includes(active.id)
// // // // // // //     );
// // // // // // //     const toContainer = over.id;

// // // // // // //     if (fromContainer && toContainer && fromContainer !== toContainer) {
// // // // // // //       setItems((prev) => {
// // // // // // //         const newItems = { ...prev };
// // // // // // //         // Remove from old container
// // // // // // //         newItems[fromContainer] = newItems[fromContainer].filter(
// // // // // // //           (item) => item !== active.id
// // // // // // //         );
// // // // // // //         // Add to new container
// // // // // // //         newItems[toContainer] = [...newItems[toContainer], active.id];
// // // // // // //         return newItems;
// // // // // // //       });
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <DndContext onDragEnd={handleDragEnd}>
// // // // // // //       <div style={{ display: "flex", gap: 16 }}>
// // // // // // //         {containers.map((id) => (
// // // // // // //           <Droppable key={id} id={id}>
// // // // // // //             {items[id].length > 0 ? (
// // // // // // //               items[id].map((name) => (
// // // // // // //                 <Draggable key={name} id={name}>
// // // // // // //                   {name}
// // // // // // //                 </Draggable>
// // // // // // //               ))
// // // // // // //             ) : (
// // // // // // //               <span style={{ color: "#999" }}>Drop here</span>
// // // // // // //             )}
// // // // // // //           </Droppable>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </DndContext>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Droppable column
// // // // // // // function Droppable({ id, children }) {
// // // // // // //   const { isOver, setNodeRef } = useDroppable({ id });
// // // // // // //   const style = {
// // // // // // //     width: 200,
// // // // // // //     minHeight: 200,
// // // // // // //     padding: 12,
// // // // // // //     border: "2px dashed #ccc",
// // // // // // //     borderRadius: 8,
// // // // // // //     background: isOver ? "#e6ffed" : "#fff",
// // // // // // //     display: "flex",
// // // // // // //     flexDirection: "column",
// // // // // // //     gap: 8,
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div ref={setNodeRef} style={style}>
// // // // // // //       <h3 style={{ margin: 0, fontWeight: "bold" }}>Column {id}</h3>
// // // // // // //       {children}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Draggable card
// // // // // // // function Draggable({ id, children }) {
// // // // // // //   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
// // // // // // //   const style = {
// // // // // // //     padding: "8px 12px",
// // // // // // //     borderRadius: 6,
// // // // // // //     background: "#2563eb",
// // // // // // //     color: "#fff",
// // // // // // //     cursor: "grab",
// // // // // // //     userSelect: "none",
// // // // // // //     transform: transform ? CSS.Translate.toString(transform) : undefined,
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // // // // // //       {children}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }




// // // // // // import React, { useState } from "react";
// // // // // // import { DndContext } from "@dnd-kit/core";
// // // // // // import { useDroppable, useDraggable } from "@dnd-kit/core";
// // // // // // import { CSS } from "@dnd-kit/utilities";

// // // // // // // --- Stages of the pipeline ---
// // // // // // const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// // // // // // // Dummy candidates by stage
// // // // // // const initialData = {
// // // // // //   applied: ["Alice", "Arjun"],
// // // // // //   screening: ["Bob", "Bhavna"],
// // // // // //   tech: ["Charlie", "Chitra"],
// // // // // //   offer: ["Om", "Olivia"],
// // // // // //   hired: ["Hari"],
// // // // // //   rejected: ["Rani"],
// // // // // // };

// // // // // // export default function JobsBoard() {
// // // // // //   const [items, setItems] = useState(initialData);

// // // // // //   function handleDragEnd(event) {
// // // // // //     const { active, over } = event;
// // // // // //     if (!over) return;

// // // // // //     const fromStage = Object.keys(items).find((stage) =>
// // // // // //       items[stage].includes(active.id)
// // // // // //     );
// // // // // //     const toStage = over.id;

// // // // // //     if (fromStage && toStage && fromStage !== toStage) {
// // // // // //       setItems((prev) => {
// // // // // //         const next = { ...prev };
// // // // // //         next[fromStage] = next[fromStage].filter((c) => c !== active.id);
// // // // // //         next[toStage] = [...next[toStage], active.id];
// // // // // //         return next;
// // // // // //       });
// // // // // //     }
// // // // // //   }

// // // // // //   return (
// // // // // //     <DndContext onDragEnd={handleDragEnd}>
// // // // // //       <div
// // // // // //         style={{
// // // // // //           display: "grid",
// // // // // //           gridTemplateColumns: "repeat(6, 1fr)",
// // // // // //           gap: 16,
// // // // // //         }}
// // // // // //       >
// // // // // //         {STAGES.map((stage) => (
// // // // // //           <StageColumn key={stage} id={stage} items={items[stage]} />
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </DndContext>
// // // // // //   );
// // // // // // }

// // // // // // // --- Stage Column (Droppable) ---
// // // // // // function StageColumn({ id, items }) {
// // // // // //   const { isOver, setNodeRef } = useDroppable({ id });
// // // // // //   const style = {
// // // // // //     background: isOver ? "#e6ffed" : "#f9fafb",
// // // // // //     border: "2px dashed #ccc",
// // // // // //     borderRadius: 8,
// // // // // //     padding: 12,
// // // // // //     minHeight: 300,
// // // // // //     display: "flex",
// // // // // //     flexDirection: "column",
// // // // // //     gap: 8,
// // // // // //   };

// // // // // //   return (
// // // // // //     <div ref={setNodeRef} style={style}>
// // // // // //       <h3 style={{ margin: 0, fontWeight: "bold", textTransform: "capitalize" }}>
// // // // // //         {id}
// // // // // //       </h3>
// // // // // //       {items.length > 0 ? (
// // // // // //         items.map((name) => (
// // // // // //           <CandidateCard key={name} id={name}>
// // // // // //             {name}
// // // // // //           </CandidateCard>
// // // // // //         ))
// // // // // //       ) : (
// // // // // //         <span style={{ color: "#999" }}>Drop here</span>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // // --- Candidate Card (Draggable) ---
// // // // // // function CandidateCard({ id, children }) {
// // // // // //   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
// // // // // //   const style = {
// // // // // //     padding: "8px 12px",
// // // // // //     borderRadius: 6,
// // // // // //     background: "#2563eb",
// // // // // //     color: "#fff",
// // // // // //     cursor: "grab",
// // // // // //     userSelect: "none",
// // // // // //     transform: transform ? CSS.Translate.toString(transform) : undefined,
// // // // // //   };

// // // // // //   return (
// // // // // //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // // // // //       {children}
// // // // // //     </div>
// // // // // //   );
// // // // // // }









// // // // // // // dummy data testing 


// // // // // import React, { useState } from "react";
// // // // // import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
// // // // // import { CSS } from "@dnd-kit/utilities";

// // // // // // --- Stages of the pipeline ---
// // // // // const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// // // // // // Dummy candidate objects
// // // // // const initialData = {
// // // // //   applied: [
// // // // //     { id: "c1", name: "Alice", email: "alice@mail.com", stage: "applied", jobId: 1 },
// // // // //     { id: "c2", name: "Arjun", email: "arjun@mail.com", stage: "applied", jobId: 1 },
// // // // //   ],
// // // // //   screening: [
// // // // //     { id: "c3", name: "Bob", email: "bob@mail.com", stage: "screening", jobId: 1 },
// // // // //     { id: "c4", name: "Bhavna", email: "bhavna@mail.com", stage: "screening", jobId: 2 },
// // // // //   ],
// // // // //   tech: [
// // // // //     { id: "c5", name: "Charlie", email: "charlie@mail.com", stage: "tech", jobId: 2 },
// // // // //     { id: "c6", name: "Chitra", email: "chitra@mail.com", stage: "tech", jobId: 1 },
// // // // //   ],
// // // // //   offer: [
// // // // //     { id: "c7", name: "Om", email: "om@mail.com", stage: "offer", jobId: 3 },
// // // // //     { id: "c8", name: "Olivia", email: "olivia@mail.com", stage: "offer", jobId: 3 },
// // // // //   ],
// // // // //   hired: [
// // // // //     { id: "c9", name: "Hari", email: "hari@mail.com", stage: "hired", jobId: 1 },
// // // // //   ],
// // // // //   rejected: [
// // // // //     { id: "c10", name: "Rani", email: "rani@mail.com", stage: "rejected", jobId: 2 },
// // // // //   ],
// // // // // };

// // // // // export default function JobsBoard() {
// // // // //   const [items, setItems] = useState(initialData);

// // // // //   function handleDragEnd(event) {
// // // // //     const { active, over } = event;
// // // // //     if (!over) return;

// // // // //     // Find which stage the candidate came from
// // // // //     const fromStage = Object.keys(items).find((stage) =>
// // // // //       items[stage].some((c) => c.id === active.id)
// // // // //     );
// // // // //     const toStage = over.id;

// // // // //     if (fromStage && toStage && fromStage !== toStage) {
// // // // //       setItems((prev) => {
// // // // //         const candidate = prev[fromStage].find((c) => c.id === active.id);

// // // // //         const next = { ...prev };
// // // // //         // remove from old stage
// // // // //         next[fromStage] = next[fromStage].filter((c) => c.id !== active.id);
// // // // //         // add to new stage, update its stage property
// // // // //         next[toStage] = [...next[toStage], { ...candidate, stage: toStage }];
// // // // //         return next;
// // // // //       });
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <DndContext onDragEnd={handleDragEnd}>
// // // // //       <div
// // // // //         style={{
// // // // //           display: "grid",
// // // // //           gridTemplateColumns: "repeat(6, 1fr)",
// // // // //           gap: 16,
// // // // //         }}
// // // // //       >
// // // // //         {STAGES.map((stage) => (
// // // // //           <StageColumn key={stage} id={stage} items={items[stage]} />
// // // // //         ))}
// // // // //       </div>
// // // // //     </DndContext>
// // // // //   );
// // // // // }

// // // // // // --- Stage Column (Droppable) ---
// // // // // function StageColumn({ id, items }) {
// // // // //   const { isOver, setNodeRef } = useDroppable({ id });
// // // // //   const style = {
// // // // //     background: isOver ? "#e6ffed" : "#f9fafb",
// // // // //     border: "2px dashed #ccc",
// // // // //     borderRadius: 8,
// // // // //     padding: 12,
// // // // //     minHeight: 300,
// // // // //     display: "flex",
// // // // //     flexDirection: "column",
// // // // //     gap: 8,
// // // // //   };

// // // // //   return (
// // // // //     <div ref={setNodeRef} style={style}>
// // // // //       <h3 style={{ margin: 0, fontWeight: "bold", textTransform: "capitalize" }}>
// // // // //         {id}
// // // // //       </h3>
// // // // //       {items.length > 0 ? (
// // // // //         items.map((candidate) => (
// // // // //           <CandidateCard key={candidate.id} id={candidate.id} candidate={candidate} />
// // // // //         ))
// // // // //       ) : (
// // // // //         <span style={{ color: "#999" }}>Drop here</span>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // --- Candidate Card (Draggable) ---
// // // // // function CandidateCard({ id, candidate }) {
// // // // //   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
// // // // //   const style = {
// // // // //     padding: "8px 12px",
// // // // //     borderRadius: 6,
// // // // //     background: "#2563eb",
// // // // //     color: "#fff",
// // // // //     cursor: "grab",
// // // // //     userSelect: "none",
// // // // //     transform: transform ? CSS.Translate.toString(transform) : undefined,
// // // // //   };

// // // // //   return (
// // // // //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // // // //       <div style={{ fontWeight: "bold" }}>{candidate.name}</div>
// // // // //       <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>{candidate.email}</div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // //  start


// // // // import React, { useState, useEffect } from "react";
// // // // import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
// // // // import { CSS } from "@dnd-kit/utilities";
// // // // import { fetchCandidatesFromBackend } from "../../helpers/api";
// // // // // backend API

// // // // const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// // // // export default function CandidatesBoard({ jobId }) {
// // // //   const [items, setItems] = useState(() =>
// // // //     Object.fromEntries(STAGES.map((s) => [s, []]))
// // // //   );
// // // //   const [page, setPage] = useState(1);
// // // //   const pageSize = 50;
// // // //   const [total, setTotal] = useState(0);

// // // //   useEffect(() => {
// // // //     async function loadPage() {
// // // //       console.log(`[LOG] Fetching candidates (page=${page}, pageSize=${pageSize}, jobId=${jobId})`);

// // // //       try {
// // // //         const result = await fetchCandidatesFromBackend({ page, pageSize, jobId });
// // // //         console.log("[LOG] Raw API result:", result);

// // // //         const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
// // // //         result.data.forEach((c) => {
// // // //           if (grouped[c.stage]) grouped[c.stage].push(c);
// // // //         });

// // // //         // Sort candidates inside each stage by name (optional)
// // // //         for (const stage of STAGES) {
// // // //           grouped[stage].sort((a, b) => a.name.localeCompare(b.name));
// // // //         }

// // // //         console.log("[LOG] Grouped candidates by stage:", grouped);

// // // //         setItems(grouped);
// // // //         setTotal(result.total);
// // // //       } catch (err) {
// // // //         console.error("[ERROR] Failed to fetch candidates:", err);
// // // //       }
// // // //     }

// // // //     loadPage();
// // // //   }, [jobId, page]);

// // // //   function handleDragEnd(event) {
// // // //     const { active, over } = event;
// // // //     if (!over) return;

// // // //     const fromStage = Object.keys(items).find((stage) =>
// // // //       items[stage].some((c) => c.id === active.id)
// // // //     );
// // // //     const toStage = over.id;

// // // //     if (fromStage && toStage && fromStage !== toStage) {
// // // //       console.log(`[LOG] Moving candidate ${active.id} from ${fromStage} → ${toStage}`);

// // // //       setItems((prev) => {
// // // //         const candidate = prev[fromStage].find((c) => c.id === active.id);

// // // //         const next = { ...prev };
// // // //         next[fromStage] = next[fromStage].filter((c) => c.id !== active.id);
// // // //         next[toStage] = [...next[toStage], { ...candidate, stage: toStage }];

// // // //         // Sort inside new stage after drop
// // // //         next[toStage].sort((a, b) => a.name.localeCompare(b.name));

// // // //         console.log("[LOG] Updated board after drag:", next);
// // // //         return next;
// // // //       });
// // // //         // still comment
// // // //       // TODO: persist stage change to backend
// // // //       // await fetch(`/api/candidates/${active.id}`, {
// // // //       //   method: "PATCH",
// // // //       //   headers: { "Content-Type": "application/json" },
// // // //       //   body: JSON.stringify({ stage: toStage })
// // // //       // });
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <DndContext onDragEnd={handleDragEnd}>
// // // //         <div
// // // //           style={{
// // // //             display: "grid",
// // // //             gridTemplateColumns: "repeat(6, 1fr)",
// // // //             gap: 16,
// // // //           }}
// // // //         >
// // // //           {STAGES.map((stage) => (
// // // //             <StageColumn key={stage} id={stage} items={items[stage]} />
// // // //           ))}
// // // //         </div>
// // // //       </DndContext>

// // // //       {/* Pagination */}
// // // //       <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
// // // //         <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
// // // //           Prev
// // // //         </button>
// // // //         <span>
// // // //           Page {page} / {Math.ceil(total / pageSize)}
// // // //         </span>
// // // //         <button
// // // //           onClick={() => setPage((p) => p + 1)}
// // // //           disabled={page * pageSize >= total}
// // // //         >
// // // //           Next
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // Stage Column
// // // // function StageColumn({ id, items }) {
// // // //   const { isOver, setNodeRef } = useDroppable({ id });
// // // //   const style = {
// // // //     background: isOver ? "#e6ffed" : "#f9fafb",
// // // //     border: "2px dashed #ccc",
// // // //     borderRadius: 8,
// // // //     padding: 12,
// // // //     minHeight: 300,
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     gap: 8,
// // // //   };

// // // //   return (
// // // //     <div ref={setNodeRef} style={style}>
// // // //       <h3 style={{ margin: 0, fontWeight: "bold", textTransform: "capitalize" }}>{id}</h3>
// // // //       {items.length > 0 ? (
// // // //         items.map((candidate) => (
// // // //           <CandidateCard key={candidate.id} id={candidate.id} candidate={candidate} />
// // // //         ))
// // // //       ) : (
// // // //         <span style={{ color: "#999" }}>Drop here</span>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // // Candidate Card
// // // // function CandidateCard({ id, candidate }) {
// // // //   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
// // // //   const style = {
// // // //     padding: "8px 12px",
// // // //     borderRadius: 6,
// // // //     background: "#2563eb",
// // // //     color: "#fff",
// // // //     cursor: "grab",
// // // //     userSelect: "none",
// // // //     transform: transform ? CSS.Translate.toString(transform) : undefined,
// // // //   };

// // // //   return (
// // // //     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
// // // //       <div style={{ fontWeight: "bold" }}>{candidate.name}</div>
// // // //       <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>{candidate.email}</div>
// // // //     </div>
// // // //   );
// // // // }






// // // import React, { useState, useEffect } from "react";
// // // import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
// // // import { CSS } from "@dnd-kit/utilities";

// // // // --- Stages of the pipeline ---
// // // const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// // // export default function CandidatesBoard({ jobId }) {
// // //   const [items, setItems] = useState(() =>
// // //     Object.fromEntries(STAGES.map((s) => [s, []]))
// // //   );
// // //   const [page, setPage] = useState(1);
// // //   const pageSize = 50;
// // //   const [total, setTotal] = useState(0);

// // //   useEffect(() => {
// // //     let mounted = true;

// // //     async function loadPage() {
// // //       console.log(
// // //         `[LOG] Fetching candidates (page=${page}, pageSize=${pageSize}, jobId=${jobId})`
// // //       );

// // //       try {
// // //         // choose endpoint: per-job or global
// // //         const url = jobId
// // //           ? `/jobs/${jobId}/candidates?page=${page}&pageSize=${pageSize}`
// // //           : `/candidates?page=${page}&pageSize=${pageSize}`;

// // //         const res = await fetch(url);
// // //         if (!res.ok) throw new Error(`HTTP ${res.status}`);

// // //         const parsed = await res.json();
// // //         // handlers may return { data, total } OR plain array
// // //         const data = Array.isArray(parsed) ? parsed : parsed.data ?? [];
// // //         const totalCount = parsed.total ?? (Array.isArray(parsed) ? parsed.length : data.length);

// // //         console.log("[LOG] Raw API result:", parsed);

// // //         // group by stage
// // //         const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
// // //         (data || []).forEach((c) => {
// // //           if (c?.stage && grouped[c.stage]) grouped[c.stage].push(c);
// // //         });

// // //         // stable sort inside stages
// // //         for (const stage of STAGES) {
// // //           grouped[stage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
// // //         }

// // //         if (!mounted) return;
// // //         setItems(grouped);
// // //         setTotal(totalCount);
// // //       } catch (err) {
// // //         console.error("[ERROR] Failed to fetch candidates:", err);
// // //       }
// // //     }

// // //     loadPage();
// // //     return () => {
// // //       mounted = false;
// // //     };
// // //   }, [jobId, page]);

// // //   // make handler async so we can persist changes
// // //   async function handleDragEnd(event) {
// // //     const { active, over } = event;
// // //     if (!over) return;

// // //     const fromStage = Object.keys(items).find((stage) =>
// // //       items[stage].some((c) => String(c.id) === String(active.id))
// // //     );
// // //     const toStage = over.id;
// // //     if (!fromStage || !toStage || fromStage === toStage) return;

// // //     console.log(`[LOG] Moving candidate ${active.id} from ${fromStage} → ${toStage}`);

// // //     // find candidate object (from current state)
// // //     const candidate = items[fromStage].find((c) => String(c.id) === String(active.id));
// // //     if (!candidate) {
// // //       console.warn("Candidate not found in state for id:", active.id);
// // //       return;
// // //     }

// // //     // optimistic update
// // //     setItems((prev) => {
// // //       const next = { ...prev };
// // //       next[fromStage] = next[fromStage].filter((c) => String(c.id) !== String(active.id));
// // //       next[toStage] = [...next[toStage], { ...candidate, stage: toStage }];
// // //       next[toStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
// // //       return next;
// // //     });

// // //     // persist change to mock backend
// // //     try {
// // //       const res = await fetch(`/candidates/${active.id}`, {
// // //         method: "PATCH",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ stage: toStage }),
// // //       });
// // //       if (!res.ok) throw new Error(`Persist failed (${res.status})`);
// // //       // optionally update with returned candidate
// // //       const updated = await res.json().catch(() => null);
// // //       if (updated) {
// // //         setItems((prev) => {
// // //           const next = { ...prev };
// // //           // replace candidate object in toStage with returned one (if present)
// // //           next[toStage] = next[toStage].map((c) => (String(c.id) === String(active.id) ? updated : c));
// // //           return next;
// // //         });
// // //       }
// // //     } catch (err) {
// // //       console.error("[ERROR] Failed to persist stage change, rolling back:", err);
// // //       // rollback
// // //       setItems((prev) => {
// // //         const next = { ...prev };
// // //         next[toStage] = next[toStage].filter((c) => String(c.id) !== String(active.id));
// // //         next[fromStage] = [...next[fromStage], { ...candidate, stage: fromStage }];
// // //         next[fromStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
// // //         return next;
// // //       });
// // //     }
// // //   }

// // //   return (
// // //     <div>
// // //       <DndContext onDragEnd={handleDragEnd}>
// // //         <div
// // //           style={{
// // //             display: "grid",
// // //             gridTemplateColumns: "repeat(6, 1fr)",
// // //             gap: 16,
// // //           }}
// // //         >
// // //           {STAGES.map((stage) => (
// // //             <StageColumn key={stage} id={stage} items={items[stage] ?? []} />
// // //           ))}
// // //         </div>
// // //       </DndContext>

// // //       {/* Pagination */}
// // //       <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
// // //         <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
// // //           Prev
// // //         </button>
// // //         <span>
// // //           Page {page} / {Math.max(1, Math.ceil(total / pageSize))}
// // //         </span>
// // //         <button onClick={() => setPage((p) => p + 1)} disabled={page * pageSize >= total}>
// // //           Next
// // //         </button>
// // //       </div>
// // //     </div>
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
// // //       <h3 style={{ margin: 0, fontWeight: "bold", textTransform: "capitalize" }}>{id}</h3>
// // //       {items && items.length > 0 ? (
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

// // // Modern color palette
// // const colors = {
// //   electricIndigo: '#6366f1',
// //   cyberCyan: '#06b6d4',
// //   emeraldGreen: '#10b981',
// //   amberGold: '#f59e0b',
// //   crimsonRed: '#ef4444',
// //   violetPurple: '#8b5cf6',
// //   slateGray: '#64748b',
// //   midnightBlack: '#1f2937'
// // };

// // // Stage configurations with colors and icons
// // const STAGE_CONFIG = {
// //   applied: { 
// //     color: colors.cyberCyan, 
// //     bgColor: '#ecfeff', 
// //     icon: '📝',
// //     label: 'Applied'
// //   },
// //   screening: { 
// //     color: colors.amberGold, 
// //     bgColor: '#fefce8', 
// //     icon: '👁️',
// //     label: 'Screening'
// //   },
// //   tech: { 
// //     color: colors.violetPurple, 
// //     bgColor: '#f3f4f6', 
// //     icon: '💻',
// //     label: 'Technical'
// //   },
// //   offer: { 
// //     color: colors.electricIndigo, 
// //     bgColor: '#eef2ff', 
// //     icon: '💼',
// //     label: 'Offer'
// //   },
// //   hired: { 
// //     color: colors.emeraldGreen, 
// //     bgColor: '#ecfdf5', 
// //     icon: '✅',
// //     label: 'Hired'
// //   },
// //   rejected: { 
// //     color: colors.crimsonRed, 
// //     bgColor: '#fef2f2', 
// //     icon: '❌',
// //     label: 'Rejected'
// //   }
// // };

// // const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// // export default function CandidatesBoard({ jobId }) {
// //   const [items, setItems] = useState(() =>
// //     Object.fromEntries(STAGES.map((s) => [s, []]))
// //   );
// //   const [page, setPage] = useState(1);
// //   const pageSize = 50;
// //   const [total, setTotal] = useState(0);
// //   const [draggedCandidate, setDraggedCandidate] = useState(null);
// //   const [dragOverStage, setDragOverStage] = useState(null);

// //   useEffect(() => {
// //     let mounted = true;

// //     async function loadPage() {
// //       console.log(
// //         `[LOG] Fetching candidates (page=${page}, pageSize=${pageSize}, jobId=${jobId})`
// //       );

// //       try {
// //         // choose endpoint: per-job or global
// //         const url = jobId
// //           ? `/jobs/${jobId}/candidates?page=${page}&pageSize=${pageSize}`
// //           : `/candidates?page=${page}&pageSize=${pageSize}`;

// //         const res = await fetch(url);
// //         if (!res.ok) throw new Error(`HTTP ${res.status}`);

// //         const parsed = await res.json();
// //         // handlers may return { data, total } OR plain array
// //         const data = Array.isArray(parsed) ? parsed : parsed.data ?? [];
// //         const totalCount = parsed.total ?? (Array.isArray(parsed) ? parsed.length : data.length);

// //         console.log("[LOG] Raw API result:", parsed);

// //         // group by stage
// //         const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
// //         (data || []).forEach((c) => {
// //           if (c?.stage && grouped[c.stage]) grouped[c.stage].push(c);
// //         });

// //         // stable sort inside stages
// //         for (const stage of STAGES) {
// //           grouped[stage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
// //         }

// //         if (!mounted) return;
// //         setItems(grouped);
// //         setTotal(totalCount);
// //       } catch (err) {
// //         console.error("[ERROR] Failed to fetch candidates:", err);
// //       }
// //     }

// //     loadPage();
// //     return () => {
// //       mounted = false;
// //     };
// //   }, [jobId, page]);

// //   // Find candidate by ID across all stages
// //   const findCandidateById = (id) => {
// //     for (const stage of STAGES) {
// //       const candidate = items[stage]?.find(c => String(c.id) === String(id));
// //       if (candidate) return { candidate, stage };
// //     }
// //     return null;
// //   };

// //   // Handle drag start
// //   const handleDragStart = (e, candidateId) => {
// //     const result = findCandidateById(candidateId);
// //     if (result) {
// //       setDraggedCandidate({ ...result.candidate, fromStage: result.stage });
// //       e.dataTransfer.setData('text/plain', candidateId);
// //       e.dataTransfer.effectAllowed = 'move';
// //     }
// //   };

// //   // Handle drag end
// //   const handleDragEnd = () => {
// //     setDraggedCandidate(null);
// //     setDragOverStage(null);
// //   };

// //   // Handle drop
// //   const handleDrop = async (e, toStage) => {
// //     e.preventDefault();
    
// //     if (!draggedCandidate || draggedCandidate.fromStage === toStage) {
// //       setDraggedCandidate(null);
// //       setDragOverStage(null);
// //       return;
// //     }

// //     const candidate = draggedCandidate;
// //     const fromStage = candidate.fromStage;

// //     console.log(`[LOG] Moving candidate ${candidate.name || candidate.id} from ${fromStage} → ${toStage}`);

// //     // find candidate object (from current state)
// //     const candidateObj = items[fromStage].find((c) => String(c.id) === String(candidate.id));
// //     if (!candidateObj) {
// //       console.warn("Candidate not found in state for id:", candidate.id);
// //       return;
// //     }

// //     // optimistic update
// //     setItems((prev) => {
// //       const next = { ...prev };
// //       next[fromStage] = next[fromStage].filter((c) => String(c.id) !== String(candidate.id));
// //       next[toStage] = [...next[toStage], { ...candidateObj, stage: toStage }];
// //       next[toStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
// //       return next;
// //     });

// //     setDraggedCandidate(null);
// //     setDragOverStage(null);

// //     // persist change to backend
// //     try {
// //       const res = await fetch(`/candidates/${candidate.id}`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ stage: toStage }),
// //       });
// //       if (!res.ok) throw new Error(`Persist failed (${res.status})`);
// //       // optionally update with returned candidate
// //       const updated = await res.json().catch(() => null);
// //       if (updated) {
// //         setItems((prev) => {
// //           const next = { ...prev };
// //           // replace candidate object in toStage with returned one (if present)
// //           next[toStage] = next[toStage].map((c) => (String(c.id) === String(candidate.id) ? updated : c));
// //           return next;
// //         });
// //       }
// //     } catch (err) {
// //       console.error("[ERROR] Failed to persist stage change, rolling back:", err);
// //       // rollback
// //       setItems((prev) => {
// //         const next = { ...prev };
// //         next[toStage] = next[toStage].filter((c) => String(c.id) !== String(candidate.id));
// //         next[fromStage] = [...next[fromStage], { ...candidateObj, stage: fromStage }];
// //         next[fromStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
// //         return next;
// //       });
// //     }
// //   };

// //   // Handle drag over
// //   const handleDragOver = (e, stageId) => {
// //     e.preventDefault();
// //     e.dataTransfer.dropEffect = 'move';
// //     setDragOverStage(stageId);
// //   };

// //   // Handle drag leave
// //   const handleDragLeave = (e) => {
// //     // Only clear if leaving the stage entirely
// //     if (!e.currentTarget.contains(e.relatedTarget)) {
// //       setDragOverStage(null);
// //     }
// //   };

// //   const totalCandidates = Object.values(items).flat().length;

// //   return (
// //     <div style={{ 
// //       minHeight: '100vh', 
// //       background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
// //       padding: '2rem'
// //     }}>
// //       {/* Header */}
// //       <div style={{ marginBottom: '2rem' }}>
// //         <h1 style={{ 
// //           fontSize: '2.5rem', 
// //           fontWeight: 'bold', 
// //           color: colors.midnightBlack,
// //           marginBottom: '0.5rem',
// //           background: `linear-gradient(135deg, ${colors.electricIndigo}, ${colors.cyberCyan})`,
// //           WebkitBackgroundClip: 'text',
// //           WebkitTextFillColor: 'transparent',
// //           backgroundClip: 'text'
// //         }}>
// //           Candidate Pipeline
// //         </h1>
// //         <p style={{ 
// //           color: colors.slateGray, 
// //           fontSize: '1.1rem',
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '1rem'
// //         }}>
// //           <span>📊 {totalCandidates} candidates total</span>
// //           {totalCandidates === 0 && (
// //             <span style={{ 
// //               display: 'flex', 
// //               alignItems: 'center', 
// //               gap: '0.5rem',
// //               color: colors.electricIndigo 
// //             }}>
// //               <div style={{
// //                 width: '16px',
// //                 height: '16px',
// //                 border: `2px solid ${colors.electricIndigo}20`,
// //                 borderTop: `2px solid ${colors.electricIndigo}`,
// //                 borderRadius: '50%',
// //                 animation: 'spin 1s linear infinite'
// //               }} />
// //               Loading...
// //             </span>
// //           )}
// //         </p>
// //       </div>

// //       {/* Board */}
// //       <div
// //         className="candidate-board"
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(6, 1fr)",
// //           gap: "1.5rem",
// //           marginBottom: "2rem",
// //           overflowX: "auto",
// //           minHeight: "500px"
// //         }}
// //       >
// //         {STAGES.map((stage) => (
// //           <StageColumn 
// //             key={stage} 
// //             id={stage} 
// //             items={items[stage] ?? []} 
// //             config={STAGE_CONFIG[stage]}
// //             isDragOver={dragOverStage === stage}
// //             onDrop={handleDrop}
// //             onDragOver={handleDragOver}
// //             onDragLeave={handleDragLeave}
// //             onDragStart={handleDragStart}
// //             onDragEnd={handleDragEnd}
// //           />
// //         ))}
// //       </div>

// //       {/* Enhanced Pagination */}
// //       <div style={{ 
// //         display: "flex", 
// //         justifyContent: "center",
// //         alignItems: "center",
// //         gap: "1rem",
// //         marginTop: "2rem",
// //         padding: "1rem",
// //         backgroundColor: "white",
// //         borderRadius: "12px",
// //         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
// //       }}>
// //         <button 
// //           onClick={() => setPage((p) => Math.max(1, p - 1))} 
// //           disabled={page === 1}
// //           style={{
// //             padding: "0.75rem 1.5rem",
// //             borderRadius: "8px",
// //             border: "none",
// //             background: page === 1 ? colors.slateGray + "20" : colors.electricIndigo,
// //             color: page === 1 ? colors.slateGray : "white",
// //             cursor: page === 1 ? "not-allowed" : "pointer",
// //             fontWeight: "500",
// //             transition: "all 0.2s ease"
// //           }}
// //         >
// //           ← Previous
// //         </button>
        
// //         <span style={{ 
// //           fontSize: "1rem",
// //           color: colors.midnightBlack,
// //           fontWeight: "500"
// //         }}>
// //           Page {page} of {Math.max(1, Math.ceil(total / pageSize))}
// //         </span>
        
// //         <button
// //           onClick={() => setPage((p) => p + 1)}
// //           disabled={page * pageSize >= total}
// //           style={{
// //             padding: "0.75rem 1.5rem",
// //             borderRadius: "8px",
// //             border: "none",
// //             background: page * pageSize >= total ? colors.slateGray + "20" : colors.electricIndigo,
// //             color: page * pageSize >= total ? colors.slateGray : "white",
// //             cursor: page * pageSize >= total ? "not-allowed" : "pointer",
// //             fontWeight: "500",
// //             transition: "all 0.2s ease"
// //           }}
// //         >
// //           Next →
// //         </button>
// //       </div>

// //       {/* Global styles for animations */}
// //       <style>{`
// //         @keyframes spin {
// //           from { transform: rotate(0deg); }
// //           to { transform: rotate(360deg); }
// //         }
// //         @keyframes slideIn {
// //           from { opacity: 0; transform: translateY(10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         @keyframes pulse {
// //           0%, 100% { transform: scale(1); }
// //           50% { transform: scale(1.05); }
// //         }
// //         @keyframes glow {
// //           0%, 100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.3); }
// //           50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.6); }
// //         }
// //         @keyframes shimmer {
// //           0% { transform: translateX(-100%); }
// //           100% { transform: translateX(100%); }
// //         }
// //         /* Responsive adjustments */
// //         @media (max-width: 1400px) {
// //           .candidate-board {
// //             grid-template-columns: repeat(3, 1fr) !important;
// //           }
// //         }
// //         @media (max-width: 768px) {
// //           .candidate-board {
// //             grid-template-columns: repeat(2, 1fr) !important;
// //           }
// //         }
// //         @media (max-width: 480px) {
// //           .candidate-board {
// //             grid-template-columns: 1fr !important;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // // Enhanced Stage Column
// // function StageColumn({ 
// //   id, 
// //   items, 
// //   config, 
// //   isDragOver,
// //   onDrop,
// //   onDragOver,
// //   onDragLeave,
// //   onDragStart,
// //   onDragEnd
// // }) {
  
// //   const style = {
// //     background: isDragOver 
// //       ? `linear-gradient(135deg, ${config.color}10, ${config.color}20)` 
// //       : "white",
// //     border: isDragOver 
// //       ? `2px solid ${config.color}` 
// //       : "2px solid transparent",
// //     borderRadius: "16px",
// //     padding: "1.5rem",
// //     minHeight: "400px",
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "1rem",
// //     boxShadow: isDragOver 
// //       ? `0 8px 25px -5px ${config.color}40` 
// //       : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
// //     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
// //     transform: isDragOver ? "scale(1.02)" : "scale(1)",
// //     position: "relative",
// //     overflow: "hidden"
// //   };

// //   return (
// //     <div 
// //       style={style}
// //       onDrop={(e) => onDrop(e, id)}
// //       onDragOver={(e) => onDragOver(e, id)}
// //       onDragLeave={onDragLeave}
// //     >
// //       {/* Background decoration */}
// //       <div style={{
// //         position: "absolute",
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         height: "4px",
// //         background: `linear-gradient(90deg, ${config.color}, ${config.color}80)`,
// //         borderRadius: "16px 16px 0 0"
// //       }} />
      
// //       {/* Header */}
// //       <div style={{ 
// //         display: "flex", 
// //         alignItems: "center", 
// //         gap: "0.75rem",
// //         marginBottom: "0.5rem"
// //       }}>
// //         <span style={{ fontSize: "1.5rem" }}>{config.icon}</span>
// //         <h3 style={{ 
// //           margin: 0, 
// //           fontWeight: "bold", 
// //           color: colors.midnightBlack,
// //           fontSize: "1.25rem"
// //         }}>
// //           {config.label}
// //         </h3>
// //         <span style={{
// //           backgroundColor: config.color + "20",
// //           color: config.color,
// //           padding: "0.25rem 0.75rem",
// //           borderRadius: "12px",
// //           fontSize: "0.875rem",
// //           fontWeight: "600",
// //           marginLeft: "auto"
// //         }}>
// //           {items?.length || 0}
// //         </span>
// //       </div>

// //       {/* Candidates */}
// //       {items && items.length > 0 ? (
// //         <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
// //           {items.map((candidate, index) => (
// //             <CandidateCard 
// //               key={candidate.id} 
// //               candidate={candidate} 
// //               stageColor={config.color}
// //               index={index}
// //               onDragStart={onDragStart}
// //               onDragEnd={onDragEnd}
// //             />
// //           ))}
// //         </div>
// //       ) : (
// //         <div style={{ 
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           height: "200px",
// //           color: colors.slateGray,
// //           textAlign: "center"
// //         }}>
// //           <div style={{ 
// //             fontSize: "3rem", 
// //             marginBottom: "1rem",
// //             opacity: 0.5
// //           }}>
// //             📭
// //           </div>
// //           <p style={{ 
// //             margin: 0,
// //             fontSize: "1rem",
// //             fontWeight: "500"
// //           }}>
// //             {isDragOver ? "Drop candidate here" : "No candidates yet"}
// //           </p>
// //         </div>
// //       )}
      
// //       {/* Drop indicator */}
// //       {isDragOver && (
// //         <div style={{
// //           position: "absolute",
// //           bottom: "1rem",
// //           left: "1rem",
// //           right: "1rem",
// //           height: "2px",
// //           background: config.color,
// //           borderRadius: "1px",
// //           animation: "pulse 2s infinite"
// //         }} />
// //       )}
// //     </div>
// //   );
// // }

// // // Enhanced Candidate Card
// // function CandidateCard({ candidate, stageColor, index, onDragStart, onDragEnd }) {
// //   const [isDragging, setIsDragging] = useState(false);
  
// //   const style = {
// //     padding: "1rem",
// //     borderRadius: "12px",
// //     background: isDragging 
// //       ? `linear-gradient(135deg, ${stageColor}90, ${stageColor}70)`
// //       : `linear-gradient(135deg, ${stageColor}, ${stageColor}90)`,
// //     color: "#fff",
// //     cursor: "grab",
// //     userSelect: "none",
// //     boxShadow: isDragging 
// //       ? "0 20px 25px -5px rgba(0, 0, 0, 0.3)" 
// //       : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
// //     transition: isDragging ? "none" : "all 0.2s ease",
// //     opacity: isDragging ? 0.8 : 1,
// //     transform: isDragging ? "rotate(2deg) scale(1.05)" : "none",
// //     animation: isDragging ? "glow 1.5s infinite" : `slideIn 0.3s ease ${index * 0.1}s both`,
// //     position: "relative",
// //     overflow: "hidden"
// //   };

// //   const handleDragStart = (e) => {
// //     setIsDragging(true);
// //     onDragStart(e, candidate.id);
// //   };

// //   const handleDragEnd = (e) => {
// //     setIsDragging(false);
// //     onDragEnd(e);
// //   };

// //   return (
// //     <div 
// //       draggable
// //       style={style}
// //       onDragStart={handleDragStart}
// //       onDragEnd={handleDragEnd}
// //       onMouseDown={() => setIsDragging(false)}
// //     >
// //       {/* Shimmer effect overlay */}
// //       <div style={{
// //         position: "absolute",
// //         top: 0,
// //         left: 0,
// //         width: "100%",
// //         height: "100%",
// //         background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
// //         transform: "translateX(-100%)",
// //         animation: isDragging ? "none" : "shimmer 3s infinite",
// //         pointerEvents: "none"
// //       }} />
      
// //       <div style={{ 
// //         display: "flex", 
// //         alignItems: "center", 
// //         gap: "0.75rem",
// //         marginBottom: "0.5rem"
// //       }}>
// //         <div style={{
// //           width: "40px",
// //           height: "40px",
// //           borderRadius: "50%",
// //           background: "rgba(255,255,255,0.2)",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           fontSize: "1.25rem",
// //           fontWeight: "bold",
// //           border: "2px solid rgba(255,255,255,0.3)"
// //         }}>
// //           {candidate.name ? candidate.name.charAt(0).toUpperCase() : '👤'}
// //         </div>
// //         <div style={{ flex: 1, minWidth: 0 }}>
// //           <div style={{ 
// //             fontWeight: "bold", 
// //             fontSize: "1rem",
// //             marginBottom: "0.25rem",
// //             overflow: "hidden",
// //             textOverflow: "ellipsis",
// //             whiteSpace: "nowrap"
// //           }}>
// //             {candidate.name || 'Unknown Candidate'}
// //           </div>
// //           <div style={{ 
// //             fontSize: "0.875rem", 
// //             opacity: 0.9,
// //             overflow: "hidden",
// //             textOverflow: "ellipsis",
// //             whiteSpace: "nowrap"
// //           }}>
// //             {candidate.email || 'No email provided'}
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Skills tags - only show if skills exist */}
// //       {candidate.skills && candidate.skills.length > 0 && (
// //         <div style={{ 
// //           display: "flex", 
// //           gap: "0.25rem", 
// //           flexWrap: "wrap",
// //           marginTop: "0.75rem"
// //         }}>
// //           {candidate.skills.slice(0, 2).map((skill, i) => (
// //             <span key={i} style={{
// //               background: "rgba(255,255,255,0.2)",
// //               padding: "0.25rem 0.5rem",
// //               borderRadius: "6px",
// //               fontSize: "0.75rem",
// //               fontWeight: "500",
// //               border: "1px solid rgba(255,255,255,0.1)"
// //             }}>
// //               {skill}
// //             </span>
// //           ))}
// //           {candidate.skills.length > 2 && (
// //             <span style={{
// //               background: "rgba(255,255,255,0.2)",
// //               padding: "0.25rem 0.5rem",
// //               borderRadius: "6px",
// //               fontSize: "0.75rem",
// //               fontWeight: "500",
// //               border: "1px solid rgba(255,255,255,0.1)"
// //             }}>
// //               +{candidate.skills.length - 2}
// //             </span>
// //           )}
// //         </div>
// //       )}
      
// //       {/* Applied date if available */}
// //       {candidate.appliedDate && (
// //         <div style={{
// //           marginTop: "0.5rem",
// //           fontSize: "0.75rem",
// //           opacity: 0.8,
// //           display: "flex",
// //           alignItems: "center",
// //           gap: "0.25rem"
// //         }}>
// //           📅 {new Date(candidate.appliedDate).toLocaleDateString()}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






// import React, { useState, useEffect } from "react";

// // Modern color palette
// const colors = {
//   electricIndigo: '#6366f1',
//   cyberCyan: '#06b6d4',
//   emeraldGreen: '#10b981',
//   amberGold: '#f59e0b',
//   crimsonRed: '#ef4444',
//   violetPurple: '#8b5cf6',
//   slateGray: '#64748b',
//   midnightBlack: '#1f2937'
// };

// // Stage configurations with colors and icons
// const STAGE_CONFIG = {
//   applied: { 
//     color: colors.cyberCyan, 
//     bgColor: '#ecfeff', 
//     icon: '📝',
//     label: 'Applied'
//   },
//   screening: { 
//     color: colors.amberGold, 
//     bgColor: '#fefce8', 
//     icon: '👁️',
//     label: 'Screening'
//   },
//   tech: { 
//     color: colors.violetPurple, 
//     bgColor: '#f3f4f6', 
//     icon: '💻',
//     label: 'Technical'
//   },
//   offer: { 
//     color: colors.electricIndigo, 
//     bgColor: '#eef2ff', 
//     icon: '💼',
//     label: 'Offer'
//   },
//   hired: { 
//     color: colors.emeraldGreen, 
//     bgColor: '#ecfdf5', 
//     icon: '✅',
//     label: 'Hired'
//   },
//   rejected: { 
//     color: colors.crimsonRed, 
//     bgColor: '#fef2f2', 
//     icon: '❌',
//     label: 'Rejected'
//   }
// };

// const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

// export default function CandidatesBoard({ jobId }) {
//   const [items, setItems] = useState(() =>
//     Object.fromEntries(STAGES.map((s) => [s, []]))
//   );
//   const [page, setPage] = useState(1);
//   const pageSize = 50;
//   const [total, setTotal] = useState(0);
//   const [draggedCandidate, setDraggedCandidate] = useState(null);
//   const [dragOverStage, setDragOverStage] = useState(null);

//   useEffect(() => {
//     let mounted = true;

//     async function loadPage() {
//       console.log(
//         `[LOG] Fetching candidates (page=${page}, pageSize=${pageSize}, jobId=${jobId})`
//       );

//       try {
//         // choose endpoint: per-job or global
//         const url = jobId
//           ? `/jobs/${jobId}/candidates?page=${page}&pageSize=${pageSize}`
//           : `/candidates?page=${page}&pageSize=${pageSize}`;

//         const res = await fetch(url);
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);

//         const parsed = await res.json();
//         // handlers may return { data, total } OR plain array
//         const data = Array.isArray(parsed) ? parsed : parsed.data ?? [];
//         const totalCount = parsed.total ?? (Array.isArray(parsed) ? parsed.length : data.length);

//         console.log("[LOG] Raw API result:", parsed);

//         // group by stage
//         const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
//         (data || []).forEach((c) => {
//           if (c?.stage && grouped[c.stage]) grouped[c.stage].push(c);
//         });

//         // stable sort inside stages
//         for (const stage of STAGES) {
//           grouped[stage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
//         }

//         if (!mounted) return;
//         setItems(grouped);
//         setTotal(totalCount);
//       } catch (err) {
//         console.error("[ERROR] Failed to fetch candidates:", err);
//       }
//     }

//     loadPage();
//     return () => {
//       mounted = false;
//     };
//   }, [jobId, page]);

//   // Find candidate by ID across all stages
//   const findCandidateById = (id) => {
//     for (const stage of STAGES) {
//       const candidate = items[stage]?.find(c => String(c.id) === String(id));
//       if (candidate) return { candidate, stage };
//     }
//     return null;
//   };

//   // Handle drag start
//   const handleDragStart = (e, candidateId) => {
//     const result = findCandidateById(candidateId);
//     if (result) {
//       setDraggedCandidate({ ...result.candidate, fromStage: result.stage });
//       e.dataTransfer.setData('text/plain', candidateId);
//       e.dataTransfer.effectAllowed = 'move';
//     }
//   };

//   // Handle drag end
//   const handleDragEnd = () => {
//     setDraggedCandidate(null);
//     setDragOverStage(null);
//   };

//   // Handle drop
//   const handleDrop = async (e, toStage) => {
//     e.preventDefault();
    
//     if (!draggedCandidate || draggedCandidate.fromStage === toStage) {
//       setDraggedCandidate(null);
//       setDragOverStage(null);
//       return;
//     }

//     const candidate = draggedCandidate;
//     const fromStage = candidate.fromStage;

//     console.log(`[LOG] Moving candidate ${candidate.name || candidate.id} from ${fromStage} → ${toStage}`);

//     // find candidate object (from current state)
//     const candidateObj = items[fromStage].find((c) => String(c.id) === String(candidate.id));
//     if (!candidateObj) {
//       console.warn("Candidate not found in state for id:", candidate.id);
//       return;
//     }

//     // optimistic update
//     setItems((prev) => {
//       const next = { ...prev };
//       next[fromStage] = next[fromStage].filter((c) => String(c.id) !== String(candidate.id));
//       next[toStage] = [...next[toStage], { ...candidateObj, stage: toStage }];
//       next[toStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
//       return next;
//     });

//     setDraggedCandidate(null);
//     setDragOverStage(null);

//     // persist change to backend
//     try {
//       const res = await fetch(`/candidates/${candidate.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ stage: toStage }),
//       });
//       if (!res.ok) throw new Error(`Persist failed (${res.status})`);
//       // optionally update with returned candidate
//       const updated = await res.json().catch(() => null);
//       if (updated) {
//         setItems((prev) => {
//           const next = { ...prev };
//           // replace candidate object in toStage with returned one (if present)
//           next[toStage] = next[toStage].map((c) => (String(c.id) === String(candidate.id) ? updated : c));
//           return next;
//         });
//       }
//     } catch (err) {
//       console.error("[ERROR] Failed to persist stage change, rolling back:", err);
//       // rollback
//       setItems((prev) => {
//         const next = { ...prev };
//         next[toStage] = next[toStage].filter((c) => String(c.id) !== String(candidate.id));
//         next[fromStage] = [...next[fromStage], { ...candidateObj, stage: fromStage }];
//         next[fromStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
//         return next;
//       });
//     }
//   };

//   // Handle drag over
//   const handleDragOver = (e, stageId) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//     setDragOverStage(stageId);
//   };

//   // Handle drag leave
//   const handleDragLeave = (e) => {
//     // Only clear if leaving the stage entirely
//     if (!e.currentTarget.contains(e.relatedTarget)) {
//       setDragOverStage(null);
//     }
//   };

//   const totalCandidates = Object.values(items).flat().length;

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//       padding: '2rem'
//     }}>
//       {/* Header */}
//       <div style={{ marginBottom: '2rem' }}>
//         <h1 style={{ 
//           fontSize: '2.5rem', 
//           fontWeight: 'bold', 
//           color: colors.midnightBlack,
//           marginBottom: '0.5rem',
//           background: `linear-gradient(135deg, ${colors.electricIndigo}, ${colors.cyberCyan})`,
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text'
//         }}>
//           Candidate Pipeline
//         </h1>
//         <p style={{ 
//           color: colors.slateGray, 
//           fontSize: '1.1rem',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '1rem'
//         }}>
//            {/* <span>📊 {totalCandidates} candidates total</span> */}
//           {totalCandidates === 0 && (
//             <span style={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: '0.5rem',
//               color: colors.electricIndigo 
//             }}> 
//               <div style={{
//                 width: '16px',
//                 height: '16px',
//                 border: `2px solid ${colors.electricIndigo}20`,
//                 borderTop: `2px solid ${colors.electricIndigo}`,
//                 borderRadius: '50%',
//                 animation: 'spin 1s linear infinite'
//               }} />
//               Loading...
//             </span>
//           )}
//         </p>
//       </div>

//       {/* Board */}
//       <div
//         className="candidate-board"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(6, 1fr)",
//           gap: "1.5rem",
//           marginBottom: "2rem",
//           overflowX: "auto",
//           minHeight: "500px"
//         }}
//       >
//         {STAGES.map((stage) => (
//           <StageColumn 
//             key={stage} 
//             id={stage} 
//             items={items[stage] ?? []} 
//             config={STAGE_CONFIG[stage]}
//             isDragOver={dragOverStage === stage}
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDragStart={handleDragStart}
//             onDragEnd={handleDragEnd}
//           />
//         ))}
//       </div>

//       {/* Enhanced Pagination */}
//       <div style={{ 
//         display: "flex", 
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "1rem",
//         marginTop: "2rem",
//         padding: "1rem",
//         backgroundColor: "white",
//         borderRadius: "12px",
//         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
//       }}>
//         <button 
//           onClick={() => setPage((p) => Math.max(1, p - 1))} 
//           disabled={page === 1}
//           style={{
//             padding: "0.75rem 1.5rem",
//             borderRadius: "8px",
//             border: "none",
//             background: page === 1 ? colors.slateGray + "20" : colors.electricIndigo,
//             color: page === 1 ? colors.slateGray : "white",
//             cursor: page === 1 ? "not-allowed" : "pointer",
//             fontWeight: "500",
//             transition: "all 0.2s ease"
//           }}
//         >
//           ← Previous
//         </button>
        
//         <span style={{ 
//           fontSize: "1rem",
//           color: colors.midnightBlack,
//           fontWeight: "500"
//         }}>
//           Page {page} of {Math.max(1, Math.ceil(total / pageSize))}
//         </span>
        
//         <button
//           onClick={() => setPage((p) => p + 1)}
//           disabled={page * pageSize >= total}
//           style={{
//             padding: "0.75rem 1.5rem",
//             borderRadius: "8px",
//             border: "none",
//             background: page * pageSize >= total ? colors.slateGray + "20" : colors.electricIndigo,
//             color: page * pageSize >= total ? colors.slateGray : "white",
//             cursor: page * pageSize >= total ? "not-allowed" : "pointer",
//             fontWeight: "500",
//             transition: "all 0.2s ease"
//           }}
//         >
//           Next →
//         </button>
//       </div>

//       {/* Global styles for animations */}
//       <style>{`
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes slideIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.3); }
//           50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.6); }
//         }
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         /* Responsive adjustments */
//         @media (max-width: 1400px) {
//           .candidate-board {
//             grid-template-columns: repeat(3, 1fr) !important;
//           }
//         }
//         @media (max-width: 768px) {
//           .candidate-board {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
//         @media (max-width: 480px) {
//           .candidate-board {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// // Enhanced Stage Column
// function StageColumn({ 
//   id, 
//   items, 
//   config, 
//   isDragOver,
//   onDrop,
//   onDragOver,
//   onDragLeave,
//   onDragStart,
//   onDragEnd
// }) {
  
//   const style = {
//     background: isDragOver 
//       ? `linear-gradient(135deg, ${config.color}10, ${config.color}20)` 
//       : "white",
//     border: isDragOver 
//       ? `2px solid ${config.color}` 
//       : "2px solid transparent",
//     borderRadius: "16px",
//     padding: "1.5rem",
//     minHeight: "400px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//     boxShadow: isDragOver 
//       ? `0 8px 25px -5px ${config.color}40` 
//       : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     transform: isDragOver ? "scale(1.02)" : "scale(1)",
//     position: "relative",
//     overflow: "hidden"
//   };

//   return (
//     <div 
//       style={style}
//       onDrop={(e) => onDrop(e, id)}
//       onDragOver={(e) => onDragOver(e, id)}
//       onDragLeave={onDragLeave}
//     >
//       {/* Background decoration */}
//       <div style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: "4px",
//         background: `linear-gradient(90deg, ${config.color}, ${config.color}80)`,
//         borderRadius: "16px 16px 0 0"
//       }} />
      
//       {/* Header */}
//       <div style={{ 
//         display: "flex", 
//         alignItems: "center", 
//         gap: "0.75rem",
//         marginBottom: "0.5rem"
//       }}>
//         <span style={{ fontSize: "1.5rem" }}>{config.icon}</span>
//         <h3 style={{ 
//           margin: 0, 
//           fontWeight: "bold", 
//           color: colors.midnightBlack,
//           fontSize: "1.25rem"
//         }}>
//           {config.label}
//         </h3>
//         <span style={{
//           backgroundColor: config.color + "20",
//           color: config.color,
//           padding: "0.25rem 0.75rem",
//           borderRadius: "12px",
//           fontSize: "0.875rem",
//           fontWeight: "600",
//           marginLeft: "auto"
//         }}>
//           {items?.length || 0}
//         </span>
//       </div>

//       {/* Candidates */}
//       {items && items.length > 0 ? (
//         <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
//           {items.map((candidate, index) => (
//             <CandidateCard 
//               key={candidate.id} 
//               candidate={candidate} 
//               stageColor={config.color}
//               index={index}
//               onDragStart={onDragStart}
//               onDragEnd={onDragEnd}
//             />
//           ))}
//         </div>
//       ) : (
//         <div style={{ 
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "200px",
//           color: colors.slateGray,
//           textAlign: "center"
//         }}>
//           <div style={{ 
//             fontSize: "3rem", 
//             marginBottom: "1rem",
//             opacity: 0.5
//           }}>
//             📭
//           </div>
//           <p style={{ 
//             margin: 0,
//             fontSize: "1rem",
//             fontWeight: "500"
//           }}>
//             {isDragOver ? "Drop candidate here" : "No candidates yet"}
//           </p>
//         </div>
//       )}
      
//       {/* Drop indicator */}
//       {isDragOver && (
//         <div style={{
//           position: "absolute",
//           bottom: "1rem",
//           left: "1rem",
//           right: "1rem",
//           height: "2px",
//           background: config.color,
//           borderRadius: "1px",
//           animation: "pulse 2s infinite"
//         }} />
//       )}
//     </div>
//   );
// }

// // Enhanced Candidate Card
// function CandidateCard({ candidate, stageColor, index, onDragStart, onDragEnd }) {
//   const [isDragging, setIsDragging] = useState(false);
  
//   const style = {
//     padding: "0.5rem",
//     borderRadius: "8px",
//     background: isDragging 
//       ? `linear-gradient(135deg, ${stageColor}90, ${stageColor}70)`
//       : `linear-gradient(135deg, ${stageColor}, ${stageColor}90)`,
//     color: "#fff",
//     cursor: "grab",
//     userSelect: "none",
//     boxShadow: isDragging 
//       ? "0 15px 20px -5px rgba(0, 0, 0, 0.25)" 
//       : "0 1px 3px rgba(0, 0, 0, 0.12)",
//     transition: isDragging ? "none" : "all 0.15s ease",
//     opacity: isDragging ? 0.85 : 1,
//     transform: isDragging ? "rotate(0.5deg) scale(1.01)" : "none",
//     animation: isDragging ? "glow 1.5s infinite" : `slideIn 0.25s ease ${index * 0.03}s both`,
//     position: "relative",
//     overflow: "hidden",
//     minHeight: "auto",
//     fontSize: "0.75rem"
//   };

//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     onDragStart(e, candidate.id);
//   };

//   const handleDragEnd = (e) => {
//     setIsDragging(false);
//     onDragEnd(e);
//   };

//   return (
//     <div 
//       draggable
//       style={style}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//       onMouseDown={() => setIsDragging(false)}
//     >
//       {/* Subtle shimmer effect */}
//       <div style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
//         transform: "translateX(-100%)",
//         animation: isDragging ? "none" : "shimmer 5s infinite",
//         pointerEvents: "none"
//       }} />
      
//       {/* Main content */}
//       <div style={{ 
//         display: "flex", 
//         alignItems: "center", 
//         gap: "0.4rem",
//         marginBottom: "0.3rem"
//       }}>
//         <div style={{
//           width: "24px",
//           height: "24px",
//           borderRadius: "50%",
//           background: "rgba(255,255,255,0.3)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "0.7rem",
//           fontWeight: "600",
//           border: "1px solid rgba(255,255,255,0.2)",
//           flexShrink: 0
//         }}>
//           {candidate.name ? candidate.name.charAt(0).toUpperCase() : '👤'}
//         </div>
//         <div style={{ flex: 1, minWidth: 0, lineHeight: "1.2" }}>
//           <div style={{ 
//             fontWeight: "600", 
//             fontSize: "0.75rem",
//             marginBottom: "0.1rem",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             whiteSpace: "nowrap",
//             textShadow: "0 1px 1px rgba(0,0,0,0.1)"
//           }}>
//             {candidate.name || 'Unknown'}
//           </div>
//           <div style={{ 
//             fontSize: "0.65rem", 
//             opacity: 0.9,
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             whiteSpace: "nowrap",
//             fontWeight: "400"
//           }}>
//             {candidate.email ? 
//               (candidate.email.length > 20 ? 
//                 candidate.email.substring(0, 20) + '...' : 
//                 candidate.email
//               ) : 
//               'No email'
//             }
//           </div>
//         </div>
//       </div>
      
//       {/* Skills - more compact */}
//       {candidate.skills && candidate.skills.length > 0 && (
//         <div style={{ 
//           display: "flex", 
//           gap: "0.15rem", 
//           flexWrap: "wrap",
//           marginTop: "0.3rem",
//           marginBottom: "0.2rem"
//         }}>
//           {candidate.skills.slice(0, 2).map((skill, i) => (
//             <span key={i} style={{
//               background: "rgba(255,255,255,0.2)",
//               padding: "0.1rem 0.25rem",
//               borderRadius: "3px",
//               fontSize: "0.6rem",
//               fontWeight: "500",
//               border: "1px solid rgba(255,255,255,0.1)",
//               lineHeight: "1.1",
//               maxWidth: "60px",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               whiteSpace: "nowrap"
//             }}>
//               {skill.length > 6 ? skill.substring(0, 6) + '..' : skill}
//             </span>
//           ))}
//           {candidate.skills.length > 2 && (
//             <span style={{
//               background: "rgba(255,255,255,0.15)",
//               padding: "0.1rem 0.25rem",
//               borderRadius: "3px",
//               fontSize: "0.6rem",
//               fontWeight: "500",
//               border: "1px solid rgba(255,255,255,0.1)",
//               lineHeight: "1.1"
//             }}>
//               +{candidate.skills.length - 2}
//             </span>
//           )}
//         </div>
//       )}
      
//       {/* Applied date - very compact */}
//       {candidate.appliedDate && (
//         <div style={{
//           fontSize: "0.6rem",
//           opacity: 0.8,
//           display: "flex",
//           alignItems: "center",
//           gap: "0.15rem",
//           fontWeight: "400",
//           marginTop: "0.2rem"
//         }}>
//           📅 {new Date(candidate.appliedDate).toLocaleDateString('en-US', { 
//             month: 'numeric', 
//             day: 'numeric' 
//           })}
//         </div>
//       )}
//     </div>
//   );
// }










import React, { useState, useEffect } from "react";
import { Users, TrendingUp, Calendar, Target, Clock } from "lucide-react";

// Modern color palette
const colors = {
  electricIndigo: '#6366f1',
  cyberCyan: '#06b6d4',
  emeraldGreen: '#10b981',
  amberGold: '#f59e0b',
  crimsonRed: '#ef4444',
  violetPurple: '#8b5cf6',
  slateGray: '#64748b',
  midnightBlack: '#1f2937'
};

// Stage configurations with colors and icons
const STAGE_CONFIG = {
  applied: { 
    color: colors.cyberCyan, 
    bgColor: '#ecfeff', 
    icon: '📝',
    label: 'Applied'
  },
  screening: { 
    color: colors.amberGold, 
    bgColor: '#fefce8', 
    icon: '👁️',
    label: 'Screening'
  },
  tech: { 
    color: colors.violetPurple, 
    bgColor: '#f3f4f6', 
    icon: '💻',
    label: 'Technical'
  },
  offer: { 
    color: colors.electricIndigo, 
    bgColor: '#eef2ff', 
    icon: '💼',
    label: 'Offer'
  },
  hired: { 
    color: colors.emeraldGreen, 
    bgColor: '#ecfdf5', 
    icon: '✅',
    label: 'Hired'
  },
  rejected: { 
    color: colors.crimsonRed, 
    bgColor: '#fef2f2', 
    icon: '❌',
    label: 'Rejected'
  }
};

const STAGES = ["applied", "screening", "tech", "offer", "hired", "rejected"];

export default function CandidatesBoard({ jobId }) {
  const [items, setItems] = useState(() =>
    Object.fromEntries(STAGES.map((s) => [s, []]))
  );
  const [page, setPage] = useState(1);
  const pageSize = 50;
  const [total, setTotal] = useState(0);
  const [draggedCandidate, setDraggedCandidate] = useState(null);
  const [dragOverStage, setDragOverStage] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadPage() {
      console.log(
        `[LOG] Fetching candidates (page=${page}, pageSize=${pageSize}, jobId=${jobId})`
      );

      try {
        // choose endpoint: per-job or global
        const url = jobId
          ? `/jobs/${jobId}/candidates?page=${page}&pageSize=${pageSize}`
          : `/candidates?page=${page}&pageSize=${pageSize}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const parsed = await res.json();
        // handlers may return { data, total } OR plain array
        const data = Array.isArray(parsed) ? parsed : parsed.data ?? [];
        const totalCount = parsed.total ?? (Array.isArray(parsed) ? parsed.length : data.length);

        console.log("[LOG] Raw API result:", parsed);

        // group by stage
        const grouped = Object.fromEntries(STAGES.map((s) => [s, []]));
        (data || []).forEach((c) => {
          if (c?.stage && grouped[c.stage]) grouped[c.stage].push(c);
        });

        // stable sort inside stages
        for (const stage of STAGES) {
          grouped[stage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
        }

        if (!mounted) return;
        setItems(grouped);
        setTotal(totalCount);
      } catch (err) {
        console.error("[ERROR] Failed to fetch candidates:", err);
      }
    }

    loadPage();
    return () => {
      mounted = false;
    };
  }, [jobId, page]);

  // Find candidate by ID across all stages
  const findCandidateById = (id) => {
    for (const stage of STAGES) {
      const candidate = items[stage]?.find(c => String(c.id) === String(id));
      if (candidate) return { candidate, stage };
    }
    return null;
  };

  // Handle drag start
  const handleDragStart = (e, candidateId) => {
    const result = findCandidateById(candidateId);
    if (result) {
      setDraggedCandidate({ ...result.candidate, fromStage: result.stage });
      e.dataTransfer.setData('text/plain', candidateId);
      e.dataTransfer.effectAllowed = 'move';
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    setDraggedCandidate(null);
    setDragOverStage(null);
  };

  // Handle drop
  const handleDrop = async (e, toStage) => {
    e.preventDefault();
    
    if (!draggedCandidate || draggedCandidate.fromStage === toStage) {
      setDraggedCandidate(null);
      setDragOverStage(null);
      return;
    }

    const candidate = draggedCandidate;
    const fromStage = candidate.fromStage;

    console.log(`[LOG] Moving candidate ${candidate.name || candidate.id} from ${fromStage} → ${toStage}`);

    // find candidate object (from current state)
    const candidateObj = items[fromStage].find((c) => String(c.id) === String(candidate.id));
    if (!candidateObj) {
      console.warn("Candidate not found in state for id:", candidate.id);
      return;
    }

    // optimistic update
    setItems((prev) => {
      const next = { ...prev };
      next[fromStage] = next[fromStage].filter((c) => String(c.id) !== String(candidate.id));
      next[toStage] = [...next[toStage], { ...candidateObj, stage: toStage }];
      next[toStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
      return next;
    });

    setDraggedCandidate(null);
    setDragOverStage(null);

    // persist change to backend
    try {
      const res = await fetch(`/candidates/${candidate.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stage: toStage }),
      });
      if (!res.ok) throw new Error(`Persist failed (${res.status})`);
      // optionally update with returned candidate
      const updated = await res.json().catch(() => null);
      if (updated) {
        setItems((prev) => {
          const next = { ...prev };
          // replace candidate object in toStage with returned one (if present)
          next[toStage] = next[toStage].map((c) => (String(c.id) === String(candidate.id) ? updated : c));
          return next;
        });
      }
    } catch (err) {
      console.error("[ERROR] Failed to persist stage change, rolling back:", err);
      // rollback
      setItems((prev) => {
        const next = { ...prev };
        next[toStage] = next[toStage].filter((c) => String(c.id) !== String(candidate.id));
        next[fromStage] = [...next[fromStage], { ...candidateObj, stage: fromStage }];
        next[fromStage].sort((a, b) => (a?.name ?? "").localeCompare(b?.name ?? ""));
        return next;
      });
    }
  };

  // Handle drag over
  const handleDragOver = (e, stageId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverStage(stageId);
  };

  // Handle drag leave
  const handleDragLeave = (e) => {
    // Only clear if leaving the stage entirely
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragOverStage(null);
    }
  };

  const totalCandidates = Object.values(items).flat().length;

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '2rem'
    }}>
      {/* Enhanced Modern Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/40 dark:shadow-slate-900/40 mb-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(167,85,221,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Icon with modern styling */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
                <Target className="w-6 h-6 text-white" />
              </div>
              
              {/* Title and subtitle */}
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
                  Candidate Pipeline
                </h1>
                <p className="text-slate-600 dark:text-slate-400 font-medium mt-1">
                  Track candidates through your hiring process
                </p>
              </div>
            </div>  
            
            {/* Stats badges */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                {/* <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {totalCandidates} total
                </span> */}
              </div>
              <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Active hiring
                </span>
              </div>
            </div>
          </div>
          
          {/* Mobile stats - shown on small screens */}
          <div className="sm:hidden flex items-center space-x-3 mt-4 pt-4 border-t border-white/30 dark:border-slate-700/50">
            <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
              <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              {/* <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {totalCandidates}
              </span> */}
            </div>
            <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Board */}
      <div
        className="candidate-board"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "1.5rem",
          marginBottom: "2rem",
          overflowX: "auto",
          minHeight: "500px"
        }}
      >
        {STAGES.map((stage) => (
          <StageColumn 
            key={stage} 
            id={stage} 
            items={items[stage] ?? []} 
            config={STAGE_CONFIG[stage]}
            isDragOver={dragOverStage === stage}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>

      {/* Enhanced Pagination */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginTop: "2rem",
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}>
        <button 
          onClick={() => setPage((p) => Math.max(1, p - 1))} 
          disabled={page === 1}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            background: page === 1 ? colors.slateGray + "20" : colors.electricIndigo,
            color: page === 1 ? colors.slateGray : "white",
            cursor: page === 1 ? "not-allowed" : "pointer",
            fontWeight: "500",
            transition: "all 0.2s ease"
          }}
        >
          ← Previous
        </button>
        
        <span style={{ 
          fontSize: "1rem",
          color: colors.midnightBlack,
          fontWeight: "500"
        }}>
          Page {page} of {Math.max(1, Math.ceil(total / pageSize))}
        </span>
        
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page * pageSize >= total}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            background: page * pageSize >= total ? colors.slateGray + "20" : colors.electricIndigo,
            color: page * pageSize >= total ? colors.slateGray : "white",
            cursor: page * pageSize >= total ? "not-allowed" : "pointer",
            fontWeight: "500",
            transition: "all 0.2s ease"
          }}
        >
          Next →
        </button>
      </div>

      {/* Global styles for animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.6); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        /* Responsive adjustments */
        @media (max-width: 1400px) {
          .candidate-board {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .candidate-board {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .candidate-board {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// Enhanced Stage Column
function StageColumn({ 
  id, 
  items, 
  config, 
  isDragOver,
  onDrop,
  onDragOver,
  onDragLeave,
  onDragStart,
  onDragEnd
}) {
  
  const style = {
    background: isDragOver 
      ? `linear-gradient(135deg, ${config.color}10, ${config.color}20)` 
      : "white",
    border: isDragOver 
      ? `2px solid ${config.color}` 
      : "2px solid transparent",
    borderRadius: "16px",
    padding: "1.5rem",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxShadow: isDragOver 
      ? `0 8px 25px -5px ${config.color}40` 
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isDragOver ? "scale(1.02)" : "scale(1)",
    position: "relative",
    overflow: "hidden"
  };

  return (
    <div 
      style={style}
      onDrop={(e) => onDrop(e, id)}
      onDragOver={(e) => onDragOver(e, id)}
      onDragLeave={onDragLeave}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: `linear-gradient(90deg, ${config.color}, ${config.color}80)`,
        borderRadius: "16px 16px 0 0"
      }} />
      
      {/* Header */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "0.75rem",
        marginBottom: "0.5rem"
      }}>
        <span style={{ fontSize: "1.5rem" }}>{config.icon}</span>
        <h3 style={{ 
          margin: 0, 
          fontWeight: "bold", 
          color: colors.midnightBlack,
          fontSize: "1.25rem"
        }}>
          {config.label}
        </h3>
        <span style={{
          backgroundColor: config.color + "20",
          color: config.color,
          padding: "0.25rem 0.75rem",
          borderRadius: "12px",
          fontSize: "0.875rem",
          fontWeight: "600",
          marginLeft: "auto"
        }}>
          {items?.length || 0}
        </span>
      </div>

      {/* Candidates */}
      {items && items.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {items.map((candidate, index) => (
            <CandidateCard 
              key={candidate.id} 
              candidate={candidate} 
              stageColor={config.color}
              index={index}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))}
        </div>
      ) : (
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "200px",
          color: colors.slateGray,
          textAlign: "center"
        }}>
          <div style={{ 
            fontSize: "3rem", 
            marginBottom: "1rem",
            opacity: 0.5
          }}>
            🔭
          </div>
          <p style={{ 
            margin: 0,
            fontSize: "1rem",
            fontWeight: "500"
          }}>
            {isDragOver ? "Drop candidate here" : "No candidates yet"}
          </p>
        </div>
      )}
      
      {/* Drop indicator */}
      {isDragOver && (
        <div style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          right: "1rem",
          height: "2px",
          background: config.color,
          borderRadius: "1px",
          animation: "pulse 2s infinite"
        }} />
      )}
    </div>
  );
}

// Enhanced Candidate Card
function CandidateCard({ candidate, stageColor, index, onDragStart, onDragEnd }) {
  const [isDragging, setIsDragging] = useState(false);
  
  const style = {
    padding: "0.5rem",
    borderRadius: "8px",
    background: isDragging 
      ? `linear-gradient(135deg, ${stageColor}90, ${stageColor}70)`
      : `linear-gradient(135deg, ${stageColor}, ${stageColor}90)`,
    color: "#fff",
    cursor: "grab",
    userSelect: "none",
    boxShadow: isDragging 
      ? "0 15px 20px -5px rgba(0, 0, 0, 0.25)" 
      : "0 1px 3px rgba(0, 0, 0, 0.12)",
    transition: isDragging ? "none" : "all 0.15s ease",
    opacity: isDragging ? 0.85 : 1,
    transform: isDragging ? "rotate(0.5deg) scale(1.01)" : "none",
    animation: isDragging ? "glow 1.5s infinite" : `slideIn 0.25s ease ${index * 0.03}s both`,
    position: "relative",
    overflow: "hidden",
    minHeight: "auto",
    fontSize: "0.75rem"
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    onDragStart(e, candidate.id);
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    onDragEnd(e);
  };

  return (
    <div 
      draggable
      style={style}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseDown={() => setIsDragging(false)}
    >
      {/* Subtle shimmer effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        transform: "translateX(-100%)",
        animation: isDragging ? "none" : "shimmer 5s infinite",
        pointerEvents: "none"
      }} />
      
      {/* Main content */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "0.4rem",
        marginBottom: "0.3rem"
      }}>
        <div style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.7rem",
          fontWeight: "600",
          border: "1px solid rgba(255,255,255,0.2)",
          flexShrink: 0
        }}>
          {candidate.name ? candidate.name.charAt(0).toUpperCase() : '👤'}
        </div>
        <div style={{ flex: 1, minWidth: 0, lineHeight: "1.2" }}>
          <div style={{ 
            fontWeight: "600", 
            fontSize: "0.75rem",
            marginBottom: "0.1rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textShadow: "0 1px 1px rgba(0,0,0,0.1)"
          }}>
            {candidate.name || 'Unknown'}
          </div>
          <div style={{ 
            fontSize: "0.65rem", 
            opacity: 0.9,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontWeight: "400"
          }}>
            {candidate.email ? 
              (candidate.email.length > 20 ? 
                candidate.email.substring(0, 20) + '...' : 
                candidate.email
              ) : 
              'No email'
            }
          </div>
        </div>
      </div>
      
      {/* Skills - more compact */}
      {candidate.skills && candidate.skills.length > 0 && (
        <div style={{ 
          display: "flex", 
          gap: "0.15rem", 
          flexWrap: "wrap",
          marginTop: "0.3rem",
          marginBottom: "0.2rem"
        }}>
          {candidate.skills.slice(0, 2).map((skill, i) => (
            <span key={i} style={{
              background: "rgba(255,255,255,0.2)",
              padding: "0.1rem 0.25rem",
              borderRadius: "3px",
              fontSize: "0.6rem",
              fontWeight: "500",
              border: "1px solid rgba(255,255,255,0.1)",
              lineHeight: "1.1",
              maxWidth: "60px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}>
              {skill.length > 6 ? skill.substring(0, 6) + '..' : skill}
            </span>
          ))}
          {candidate.skills.length > 2 && (
            <span style={{
              background: "rgba(255,255,255,0.15)",
              padding: "0.1rem 0.25rem",
              borderRadius: "3px",
              fontSize: "0.6rem",
              fontWeight: "500",
              border: "1px solid rgba(255,255,255,0.1)",
              lineHeight: "1.1"
            }}>
              +{candidate.skills.length - 2}
            </span>
          )}
        </div>
      )}
      
      {/* Applied date - very compact */}
      {candidate.appliedDate && (
        <div style={{
          fontSize: "0.6rem",
          opacity: 0.8,
          display: "flex",
          alignItems: "center",
          gap: "0.15rem",
          fontWeight: "400",
          marginTop: "0.2rem"
        }}>
          📅 {new Date(candidate.appliedDate).toLocaleDateString('en-US', { 
            month: 'numeric', 
            day: 'numeric' 
          })}
        </div>
      )}
    </div>
  );
}