// // // // // src/pages/Candidates.jsx

// // // // import { useEffect, useState } from 'react'
// // // // import Toast from '../components/Toast'
// // // // import AddCandidateModal from '../components/AddCandidateModal'

// // // // export default function Candidates() {
// // // //   const [candidates, setCandidates] = useState([])
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [error, setError] = useState(null)
// // // //   const [toasts, setToasts] = useState([])
// // // //   const [openAdd, setOpenAdd] = useState(false) // controls AddCandidateModal
// // // //   const [viewMode, setViewMode] = useState('grid') // grid | compact

// // // //   // Toast helpers
// // // //   function pushToast(toast) {
// // // //     const id = Date.now()
// // // //     setToasts(prev => [...prev, { id, ...toast }])
// // // //     setTimeout(() => removeToast(id), 4000)
// // // //   }
// // // //   function removeToast(id) {
// // // //     setToasts(prev => prev.filter(t => t.id !== id))
// // // //   }

// // // //   // Fetch candidates for jobId=1 (later we’ll make it dynamic)
// // // //   useEffect(() => {
// // // //     async function fetchCandidates() {
// // // //       setLoading(true)
// // // //       setError(null)
// // // //       try {
// // // //         const res = await fetch('/jobs/1/candidates')
// // // //         if (!res.ok) throw new Error('Network error')
// // // //         const data = await res.json()
// // // //         setCandidates(data)
// // // //       } catch (err) {
// // // //         setError(err.message)
// // // //       } finally {
// // // //         setLoading(false)
// // // //       }
// // // //     }
// // // //     fetchCandidates()
// // // //   }, [])

// // // //   // Move candidate between stages
// // // //   async function moveCandidate(candidate, newStage) {
// // // //     const snapshot = [...candidates]
// // // //     setCandidates(prev =>
// // // //       prev.map(c => (c.id === candidate.id ? { ...c, stage: newStage } : c))
// // // //     )
// // // //     try {
// // // //       const res = await fetch(`/candidates/${candidate.id}`, {
// // // //         method: 'PATCH',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({ stage: newStage })
// // // //       })
// // // //       if (!res.ok) throw new Error('Update failed')
// // // //       const saved = await res.json()
// // // //       setCandidates(prev => prev.map(c => (c.id === saved.id ? saved : c)))
// // // //       pushToast({
// // // //         type: 'success',
// // // //         message: `${saved.name} moved to ${saved.stage}`
// // // //       })
// // // //     } catch (err) {
// // // //       setCandidates(snapshot)
// // // //       pushToast({ type: 'error', message: 'Failed to move candidate' })
// // // //     }
// // // //   }

// // // //   // Add new candidate (called by modal)
// // // //   function handleCreated(candidate) {
// // // //     setCandidates(prev => [...prev, candidate])
// // // //     pushToast({ type: 'success', message: `${candidate.name} added` })
// // // //   }

// // // //   // Toggle view mode
// // // //   function toggleViewMode() {
// // // //     setViewMode(m => (m === 'grid' ? 'compact' : 'grid'))
// // // //   }

// // // //   if (loading) return <p>Loading candidates...</p>
// // // //   if (error) return <p className="text-red-500">Error: {error}</p>

// // // //   const stages = ['applied', 'interview', 'hired', 'rejected']

// // // //   return (
// // // //     <div>
// // // //       {/* Header with title + buttons */}
// // // //       <div className="flex justify-between items-center mb-4">
// // // //         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
// // // //           Candidates (Job 1)
// // // //         </h1>
// // // //         <div className="flex gap-3 items-center">
// // // //           {/* View toggle button */}
// // // //           <button
// // // //             onClick={toggleViewMode}
// // // //             className="px-3 py-2 rounded-md border bg-transparent flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
// // // //             title="Toggle view"
// // // //             aria-pressed={viewMode === 'compact'}
// // // //           >
// // // //             {viewMode === 'grid' ? 'Compact view' : 'Grid view'}
// // // //           </button>

// // // //           {/* Add Candidate button – same style as + New Job */}
// // // //           <button
// // // //             onClick={() => setOpenAdd(true)}
// // // //             className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center gap-2"
// // // //           >
// // // //             <span className="text-lg leading-none">＋</span>
// // // //             <span>Add Candidate</span>
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Candidates board */}
// // // //       {viewMode === 'grid' ? (
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //           {stages.map(stage => (
// // // //             <div
// // // //               key={stage}
// // // //               className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
// // // //             >
// // // //               <h2 className="text-lg font-semibold mb-2 capitalize text-gray-800 dark:text-gray-100">
// // // //                 {stage}
// // // //               </h2>
// // // //               <ul className="space-y-2">
// // // //                 {candidates
// // // //                   .filter(c => c.stage === stage)
// // // //                   .map(c => (
// // // //                     <li
// // // //                       key={c.id}
// // // //                       className="p-4 rounded-xl bg-white dark:bg-gray-800 transition-transform transform hover:-translate-y-1 hover:shadow-lg shadow-sm dark:shadow-none dark:ring-1 dark:ring-white/6 flex justify-between items-start gap-3"
// // // //                     >
// // // //                       <div>
// // // //                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
// // // //                           {c.name}
// // // //                         </h3>
// // // //                         <p className="text-sm text-gray-500 dark:text-gray-300">
// // // //                           {c.email}
// // // //                         </p>
// // // //                         <p className="mt-1 text-xs text-gray-400 italic">
// // // //                           Stage: {c.stage}
// // // //                         </p>
// // // //                       </div>

// // // //                       <div className="flex flex-col gap-2">
// // // //                         {stages
// // // //                           .filter(s => s !== stage)
// // // //                           .map(s => (
// // // //                             <button
// // // //                               key={s}
// // // //                               onClick={() => moveCandidate(c, s)}
// // // //                               className={`text-xs px-3 py-1 rounded-md border transition ${
// // // //                                 s === 'rejected'
// // // //                                   ? 'border-red-500 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-700/10 dark:text-red-300 hover:bg-red-100'
// // // //                                   : s === 'hired'
// // // //                                   ? 'border-green-600 bg-green-50 text-green-800 dark:border-green-500 dark:bg-green-700/10 dark:text-green-200 hover:bg-green-100'
// // // //                                   : 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-700/10 dark:text-indigo-200 hover:bg-indigo-100'
// // // //                               }`}
// // // //                             >
// // // //                               Move to {s}
// // // //                             </button>
// // // //                           ))}
// // // //                       </div>
// // // //                     </li>
// // // //                   ))}
// // // //               </ul>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       ) : (
// // // //         <ul className="space-y-2">
// // // //           {candidates.map(c => (
// // // //             <li
// // // //               key={c.id}
// // // //               className="p-2 rounded-lg bg-white dark:bg-gray-800 flex justify-between items-center gap-3 transition-transform transform hover:-translate-y-0.5 hover:shadow-md"
// // // //             >
// // // //               <div>
// // // //                 <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
// // // //                   {c.name}
// // // //                 </h3>
// // // //                 <p className="text-xs text-gray-500 dark:text-gray-300">
// // // //                   {c.email}
// // // //                 </p>
// // // //                 <span className="text-[10px] text-gray-400 italic">
// // // //                   Stage: {c.stage}
// // // //                 </span>
// // // //               </div>
// // // //               <div className="flex gap-1">
// // // //                 {stages
// // // //                   .filter(s => s !== c.stage)
// // // //                   .map(s => (
// // // //                     <button
// // // //                       key={s}
// // // //                       onClick={() => moveCandidate(c, s)}
// // // //                       className={`text-xs px-2 py-1 rounded-md border transition ${
// // // //                         s === 'rejected'
// // // //                           ? 'border-red-500 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-700/10 dark:text-red-300 hover:bg-red-100'
// // // //                           : s === 'hired'
// // // //                           ? 'border-green-600 bg-green-50 text-green-800 dark:border-green-500 dark:bg-green-700/10 dark:text-green-200 hover:bg-green-100'
// // // //                           : 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-700/10 dark:text-indigo-200 hover:bg-indigo-100'
// // // //                       }`}
// // // //                     >
// // // //                       {s}
// // // //                     </button>
// // // //                   ))}
// // // //               </div>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       )}

// // // //       {/* Add Candidate Modal */}
// // // //       <AddCandidateModal
// // // //         open={openAdd}
// // // //         onClose={() => setOpenAdd(false)}
// // // //         jobId={1}
// // // //         onCreated={handleCreated}
// // // //       />

// // // //       {/* Toast notifications */}
// // // //       <Toast toasts={toasts} onClose={removeToast} />
// // // //     </div>
// // // //   )
// // // // }




// // // // src/pages/Candidates.jsx

// // // // import { useState, useMemo } from "react";
// // // // import Toast from "../components/Toast";
// // // // import AddCandidateModal from "../components/AddCandidateModal";

// // // // export default function Candidates() {
// // // //   const [candidates, setCandidates] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [toasts, setToasts] = useState([]);
// // // //   const [openAdd, setOpenAdd] = useState(false);
// // // //   const [viewMode, setViewMode] = useState("grid"); // grid | compact
// // // //   const [page, setPage] = useState(1);
// // // //   const pageSize = 50; // show 50 per page
// // // //   const [total, setTotal] = useState(0);

// // // //   // Toast helpers
// // // //   function pushToast(toast) {
// // // //     const id = Date.now();
// // // //     setToasts((prev) => [...prev, { id, ...toast }]);
// // // //     setTimeout(() => removeToast(id), 4000);
// // // //   }
// // // //   function removeToast(id) {
// // // //     setToasts((prev) => prev.filter((t) => t.id !== id));
// // // //   }

// // // //   // Fetch candidates globally with pagination
// // // //   async function fetchCandidates(pageNum = page) {
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     try {
// // // //       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// // // //       if (!res.ok) throw new Error("Network error");
// // // //       const data = await res.json();
// // // //       setCandidates(data.data);
// // // //       setTotal(data.total);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   // Load candidates when page changes
// // // //   useMemo(() => {
// // // //     fetchCandidates(page);
// // // //   }, [page]);

// // // //   // Move candidate between stages
// // // //   async function moveCandidate(candidate, newStage) {
// // // //     const snapshot = [...candidates];
// // // //     setCandidates((prev) =>
// // // //       prev.map((c) => (c.id === candidate.id ? { ...c, stage: newStage } : c))
// // // //     );
// // // //     try {
// // // //       const res = await fetch(`/candidates/${candidate.id}`, {
// // // //         method: "PATCH",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ stage: newStage }),
// // // //       });
// // // //       if (!res.ok) throw new Error("Update failed");
// // // //       const saved = await res.json();
// // // //       setCandidates((prev) => prev.map((c) => (c.id === saved.id ? saved : c)));
// // // //       pushToast({
// // // //         type: "success",
// // // //         message: `${saved.name} moved to ${saved.stage}`,
// // // //       });
// // // //     } catch (err) {
// // // //       setCandidates(snapshot);
// // // //       pushToast({ type: "error", message: "Failed to move candidate" });
// // // //     }
// // // //   }

// // // //   // Add new candidate (called by modal)
// // // //   function handleCreated(candidate) {
// // // //     setCandidates((prev) => [candidate, ...prev]);
// // // //     pushToast({ type: "success", message: `${candidate.name} added` });
// // // //   }

// // // //   // Toggle view mode
// // // //   function toggleViewMode() {
// // // //     setViewMode((m) => (m === "grid" ? "compact" : "grid"));
// // // //   }

// // // //   if (loading) return <p>Loading candidates...</p>;
// // // //   if (error) return <p className="text-red-500">Error: {error}</p>;

// // // //   const stages = ["applied", "screen", "tech", "offer", "hired", "rejected"];
// // // //   const totalPages = Math.ceil(total / pageSize) || 1;

// // // //   return (
// // // //     <div>
// // // //       {/* Header */}
// // // //       <div className="flex justify-between items-center mb-4">
// // // //         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
// // // //           Candidates
// // // //         </h1>
// // // //         <div className="flex gap-3 items-center">
// // // //           <button
// // // //             onClick={toggleViewMode}
// // // //             className="px-3 py-2 rounded-md border bg-transparent flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
// // // //             title="Toggle view"
// // // //           >
// // // //             {viewMode === "grid" ? "Compact view" : "Grid view"}
// // // //           </button>

// // // //           <button
// // // //             onClick={() => setOpenAdd(true)}
// // // //             className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center gap-2"
// // // //           >
// // // //             <span className="text-lg leading-none">＋</span>
// // // //             <span>Add Candidate</span>
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Candidate List */}
// // // //       {viewMode === "grid" ? (
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //           {stages.map((stage) => (
// // // //             <div
// // // //               key={stage}
// // // //               className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
// // // //             >
// // // //               <h2 className="text-lg font-semibold mb-2 capitalize text-gray-800 dark:text-gray-100">
// // // //                 {stage}
// // // //               </h2>
// // // //               <ul className="space-y-2">
// // // //                 {candidates
// // // //                   .filter((c) => c.stage === stage)
// // // //                   .map((c) => (
// // // //                     <li
// // // //                       key={c.id}
// // // //                       className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex justify-between items-start gap-3"
// // // //                     >
// // // //                       <div>
// // // //                         <h3 className="font-semibold">{c.name}</h3>
// // // //                         <p className="text-sm text-gray-500">{c.email}</p>
// // // //                         <p className="text-xs italic text-gray-400">
// // // //                           Stage: {c.stage}
// // // //                         </p>
// // // //                       </div>
// // // //                       <div className="flex flex-col gap-1">
// // // //                         {stages
// // // //                           .filter((s) => s !== stage)
// // // //                           .map((s) => (
// // // //                             <button
// // // //                               key={s}
// // // //                               onClick={() => moveCandidate(c, s)}
// // // //                               className="text-xs px-2 py-1 rounded border hover:bg-gray-100 dark:hover:bg-gray-700"
// // // //                             >
// // // //                               Move to {s}
// // // //                             </button>
// // // //                           ))}
// // // //                       </div>
// // // //                     </li>
// // // //                   ))}
// // // //               </ul>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       ) : (
// // // //         <ul className="space-y-2">
// // // //           {candidates.map((c) => (
// // // //             <li
// // // //               key={c.id}
// // // //               className="p-2 rounded-lg bg-white dark:bg-gray-800 flex justify-between items-center"
// // // //             >
// // // //               <div>
// // // //                 <h3 className="font-semibold">{c.name}</h3>
// // // //                 <p className="text-sm text-gray-500">{c.email}</p>
// // // //                 <span className="text-xs italic text-gray-400">
// // // //                   Stage: {c.stage}
// // // //                 </span>
// // // //               </div>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       )}

// // // //       {/* Pagination */}
// // // //       <div className="flex justify-center items-center gap-4 py-6">
// // // //         <button
// // // //           onClick={() => setPage((p) => Math.max(1, p - 1))}
// // // //           disabled={page === 1}
// // // //           className="px-3 py-1 border rounded disabled:opacity-50"
// // // //         >
// // // //           Prev
// // // //         </button>
// // // //         <span>
// // // //           Page {page} of {totalPages}
// // // //         </span>
// // // //         <button
// // // //           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// // // //           disabled={page === totalPages}
// // // //           className="px-3 py-1 border rounded disabled:opacity-50"
// // // //         >
// // // //           Next
// // // //         </button>
// // // //       </div>

// // // //       {/* Add Candidate Modal */}
// // // //       <AddCandidateModal
// // // //         open={openAdd}
// // // //         onClose={() => setOpenAdd(false)}
// // // //         jobId={1}
// // // //         onCreated={handleCreated}
// // // //       />

// // // //       {/* Toast notifications */}
// // // //       <Toast toasts={toasts} onClose={removeToast} />
// // // //     </div>
// // // //   );
// // // // }



// // // import { useState, useMemo, useOptimistic, startTransition, useCallback } from "react";
// // // import Toast from "../components/Toast";
// // // import AddCandidateModal from "../components/AddCandidateModal";

// // // export default function Candidates() {
// // //   const [candidates, setCandidates] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [toasts, setToasts] = useState([]);
// // //   const [openAdd, setOpenAdd] = useState(false);
// // //   const [viewMode, setViewMode] = useState("grid"); // grid | compact
// // //   const [page, setPage] = useState(1);
// // //   const pageSize = 50; // show 50 per page
// // //   const [total, setTotal] = useState(0);
// // //   const [loadingStates, setLoadingStates] = useState({});

// // //   // Optimistic updates
// // //   const [optimisticCandidates, addOptimisticUpdate] = useOptimistic(
// // //     candidates,
// // //     (state, action) => {
// // //       switch (action.type) {
// // //         case "move":
// // //           return state.map((candidate) =>
// // //             candidate.id === action.candidateId
// // //               ? { ...candidate, stage: action.newStage }
// // //               : candidate
// // //           );
// // //         case "add":
// // //           return [action.candidate, ...state];
// // //         default:
// // //           return state;
// // //       }
// // //     }
// // //   );

// // //   // Toast helpers
// // //   const pushToast = useCallback((toast) => {
// // //     const id = Date.now() + Math.floor(Math.random() * 1000);
// // //     setToasts((prev) => [...prev, { id, ...toast }]);
// // //   }, []);

// // //   function removeToast(id) {
// // //     setToasts((prev) => prev.filter((t) => t.id !== id));
// // //   }

// // //   // Fetch candidates globally with pagination
// // //   async function fetchCandidates(pageNum = page) {
// // //     setLoading(true);
// // //     setError(null);
// // //     try {
// // //       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// // //       if (!res.ok) throw new Error("Network error");
// // //       const data = await res.json();
// // //       setCandidates(data.data);
// // //       setTotal(data.total);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   // Load candidates when page changes
// // //   useMemo(() => {
// // //     fetchCandidates(page);
// // //   }, [page]);

// // //   // Move candidate between stages with optimistic updates
// // //   async function moveCandidate(candidate, newStage) {
// // //     // Start optimistic update
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ 
// // //         type: "move", 
// // //         candidateId: candidate.id, 
// // //         newStage 
// // //       });
// // //     });

// // //     // Set loading state
// // //     setLoadingStates((prev) => ({ 
// // //       ...prev, 
// // //       [`move-${candidate.id}`]: true 
// // //     }));

// // //     try {
// // //       const res = await fetch(`/candidates/${candidate.id}`, {
// // //         method: "PATCH",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ stage: newStage }),
// // //       });
      
// // //       if (!res.ok) throw new Error("Update failed");
      
// // //       const saved = await res.json();
      
// // //       // Update real state
// // //       setCandidates((prev) => 
// // //         prev.map((c) => (c.id === saved.id ? saved : c))
// // //       );
      
// // //       pushToast({
// // //         type: "success",
// // //         title: "Stage Updated!",
// // //         message: `${saved.name} moved to ${saved.stage}`,
// // //       });
// // //     } catch (err) {
// // //       // Revert optimistic update by refetching or reverting state
// // //       setCandidates(candidates);
// // //       pushToast({ 
// // //         type: "error", 
// // //         title: "Move Failed",
// // //         message: "Failed to move candidate. Changes have been reverted." 
// // //       });
// // //     } finally {
// // //       setLoadingStates((prev) => ({ 
// // //         ...prev, 
// // //         [`move-${candidate.id}`]: false 
// // //       }));
// // //     }
// // //   }

// // //   // Add new candidate with optimistic updates
// // //   async function handleCreated(candidateData) {
// // //     // Create temporary candidate with optimistic ID
// // //     const tempCandidate = {
// // //       id: `temp-${Date.now()}`,
// // //       ...candidateData,
// // //       createdAt: new Date().toISOString()
// // //     };

// // //     // Start optimistic update
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ 
// // //         type: "add", 
// // //         candidate: tempCandidate 
// // //       });
// // //     });

// // //     setLoadingStates((prev) => ({ ...prev, "add-candidate": true }));

// // //     try {
// // //       const res = await fetch("/candidates", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(candidateData),
// // //       });

// // //       if (!res.ok) throw new Error("Failed to create candidate");

// // //       const savedCandidate = await res.json();
      
// // //       // Update real state with actual candidate from server
// // //       setCandidates((prev) => [savedCandidate, ...prev.filter(c => !c.id.toString().startsWith('temp-'))]);
      
// // //       pushToast({ 
// // //         type: "success", 
// // //         title: "Candidate Added!",
// // //         message: `${savedCandidate.name} has been successfully added.` 
// // //       });
      
// // //       setOpenAdd(false);
// // //     } catch (err) {
// // //       // Remove optimistic candidate on error
// // //       setCandidates(candidates);
// // //       pushToast({ 
// // //         type: "error", 
// // //         title: "Addition Failed",
// // //         message: "Failed to add candidate. Please try again." 
// // //       });
// // //     } finally {
// // //       setLoadingStates((prev) => ({ ...prev, "add-candidate": false }));
// // //     }
// // //   }

// // //   // Toggle view mode
// // //   function toggleViewMode() {
// // //     setViewMode((m) => (m === "grid" ? "compact" : "grid"));
// // //   }

// // //   if (loading) return <p>Loading candidates...</p>;
// // //   if (error) return <p className="text-red-500">Error: {error}</p>;

// // //   const stages = ["applied", "screen", "tech", "offer", "hired", "rejected"];
// // //   const totalPages = Math.ceil(total / pageSize) || 1;

// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="flex justify-between items-center mb-4">
// // //         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
// // //           Candidates
// // //         </h1>
// // //         <div className="flex gap-3 items-center">
// // //           <button
// // //             onClick={toggleViewMode}
// // //             className="px-3 py-2 rounded-md border bg-transparent flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
// // //             title="Toggle view"
// // //           >
// // //             {viewMode === "grid" ? "Compact view" : "Grid view"}
// // //           </button>

// // //           <button
// // //             onClick={() => setOpenAdd(true)}
// // //             disabled={loadingStates["add-candidate"]}
// // //             className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
// // //           >
// // //             {loadingStates["add-candidate"] ? (
// // //               <>
// // //                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
// // //                 <span>Adding...</span>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <span className="text-lg leading-none">＋</span>
// // //                 <span>Add Candidate</span>
// // //               </>
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Candidate List */}
// // //       {viewMode === "grid" ? (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {stages.map((stage) => (
// // //             <div
// // //               key={stage}
// // //               className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
// // //             >
// // //               <h2 className="text-lg font-semibold mb-2 capitalize text-gray-800 dark:text-gray-100">
// // //                 {stage}
// // //               </h2>
// // //               <ul className="space-y-2">
// // //                 {optimisticCandidates
// // //                   .filter((c) => c.stage === stage)
// // //                   .map((c) => (
// // //                     <li
// // //                       key={c.id}
// // //                       className={`p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex justify-between items-start gap-3 ${
// // //                         c.id.toString().startsWith('temp-') ? 'opacity-75' : ''
// // //                       }`}
// // //                     >
// // //                       <div>
// // //                         <h3 className="font-semibold">{c.name}</h3>
// // //                         <p className="text-sm text-gray-500">{c.email}</p>
// // //                         <p className="text-xs italic text-gray-400">
// // //                           Stage: {c.stage}
// // //                         </p>
// // //                         {c.id.toString().startsWith('temp-') && (
// // //                           <p className="text-xs text-blue-500">Adding...</p>
// // //                         )}
// // //                       </div>
// // //                       <div className="flex flex-col gap-1">
// // //                         {stages
// // //                           .filter((s) => s !== stage)
// // //                           .map((s) => (
// // //                             <button
// // //                               key={s}
// // //                               onClick={() => moveCandidate(c, s)}
// // //                               disabled={loadingStates[`move-${c.id}`] || c.id.toString().startsWith('temp-')}
// // //                               className="text-xs px-2 py-1 rounded border hover:bg-gray-100 dark:hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
// // //                             >
// // //                               {loadingStates[`move-${c.id}`] ? (
// // //                                 <div className="flex items-center gap-1">
// // //                                   <div className="w-2 h-2 border border-current border-t-transparent rounded-full animate-spin" />
// // //                                   <span>Moving...</span>
// // //                                 </div>
// // //                               ) : (
// // //                                 `Move to ${s}`
// // //                               )}
// // //                             </button>
// // //                           ))}
// // //                       </div>
// // //                     </li>
// // //                   ))}
// // //               </ul>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       ) : (
// // //         <ul className="space-y-2">
// // //           {optimisticCandidates.map((c) => (
// // //             <li
// // //               key={c.id}
// // //               className={`p-2 rounded-lg bg-white dark:bg-gray-800 flex justify-between items-center ${
// // //                 c.id.toString().startsWith('temp-') ? 'opacity-75' : ''
// // //               }`}
// // //             >
// // //               <div>
// // //                 <h3 className="font-semibold">{c.name}</h3>
// // //                 <p className="text-sm text-gray-500">{c.email}</p>
// // //                 <span className="text-xs italic text-gray-400">
// // //                   Stage: {c.stage}
// // //                 </span>
// // //                 {c.id.toString().startsWith('temp-') && (
// // //                   <span className="text-xs text-blue-500 ml-2">Adding...</span>
// // //                 )}
// // //               </div>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}

// // //       {/* Pagination */}
// // //       <div className="flex justify-center items-center gap-4 py-6">
// // //         <button
// // //           onClick={() => setPage((p) => Math.max(1, p - 1))}
// // //           disabled={page === 1}
// // //           className="px-3 py-1 border rounded disabled:opacity-50"
// // //         >
// // //           Prev
// // //         </button>
// // //         <span>
// // //           Page {page} of {totalPages}
// // //         </span>
// // //         <button
// // //           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// // //           disabled={page === totalPages}
// // //           className="px-3 py-1 border rounded disabled:opacity-50"
// // //         >
// // //           Next
// // //         </button>
// // //       </div>

// // //       {/* Add Candidate Modal */}
// // //       <AddCandidateModal
// // //         open={openAdd}
// // //         onClose={() => setOpenAdd(false)}
// // //         jobId={1}
// // //         onCreated={handleCreated}
// // //       />

// // //       {/* Toast notifications */}
// // //       <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
// // //         {toasts.map((toast) => (
// // //           <Toast
// // //             key={toast.id}
// // //             {...toast}
// // //             onClose={() => removeToast(toast.id)}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useState, useMemo, useOptimistic, startTransition, useCallback } from "react";
// // import Toast from "../components/Toast";
// // import AddCandidateModal from "../components/AddCandidateModal";
// // import CandidatesVirtualized from "./candidates/"; // ✅ import

// // export default function Candidates() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [toasts, setToasts] = useState([]);
// //   const [openAdd, setOpenAdd] = useState(false);
// //   const [viewMode, setViewMode] = useState("grid"); // grid | compact | virtualized
// //   const [page, setPage] = useState(1);
// //   const pageSize = 50;
// //   const [total, setTotal] = useState(0);
// //   const [loadingStates, setLoadingStates] = useState({});

// //   // Optimistic updates
// //   const [optimisticCandidates, addOptimisticUpdate] = useOptimistic(
// //     candidates,
// //     (state, action) => {
// //       switch (action.type) {
// //         case "move":
// //           return state.map((candidate) =>
// //             candidate.id === action.candidateId
// //               ? { ...candidate, stage: action.newStage }
// //               : candidate
// //           );
// //         case "add":
// //           return [action.candidate, ...state];
// //         default:
// //           return state;
// //       }
// //     }
// //   );

// //   // Toast helpers
// //   const pushToast = useCallback((toast) => {
// //     const id = Date.now() + Math.floor(Math.random() * 1000);
// //     setToasts((prev) => [...prev, { id, ...toast }]);
// //   }, []);

// //   function removeToast(id) {
// //     setToasts((prev) => prev.filter((t) => t.id !== id));
// //   }

// //   // Fetch candidates (paginated) for your current UI
// //   async function fetchCandidates(pageNum = page) {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// //       if (!res.ok) throw new Error("Network error");
// //       const data = await res.json();
// //       setCandidates(data.data);
// //       setTotal(data.total);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   // ✅ API for Virtualized list (used by CandidatesVirtualized)
// //   const fetchCandidatesAPI = useCallback(async (pageNum = 1) => {
// //     try {
// //       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
// //       if (!res.ok) throw new Error("Network error");
// //       const data = await res.json();

// //       return {
// //         data: data.data || [],
// //         total: data.total || 0,
// //       };
// //     } catch (err) {
// //       console.error("Virtualized fetch failed:", err);
// //       return { data: [], total: 0 };
// //     }
// //   }, []);

// //   // Load candidates when page changes (for grid/compact views)
// //   useMemo(() => {
// //     fetchCandidates(page);
// //   }, [page]);

// //   // Move candidate between stages with optimistic updates
// //   async function moveCandidate(candidate, newStage) {
// //     startTransition(() => {
// //       addOptimisticUpdate({ type: "move", candidateId: candidate.id, newStage });
// //     });

// //     setLoadingStates((prev) => ({ ...prev, [`move-${candidate.id}`]: true }));

// //     try {
// //       const res = await fetch(`/candidates/${candidate.id}`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ stage: newStage }),
// //       });

// //       if (!res.ok) throw new Error("Update failed");

// //       const saved = await res.json();

// //       setCandidates((prev) => prev.map((c) => (c.id === saved.id ? saved : c)));

// //       pushToast({
// //         type: "success",
// //         title: "Stage Updated!",
// //         message: `${saved.name} moved to ${saved.stage}`,
// //       });
// //     } catch (err) {
// //       setCandidates(candidates);
// //       pushToast({
// //         type: "error",
// //         title: "Move Failed",
// //         message: "Failed to move candidate. Changes reverted.",
// //       });
// //     } finally {
// //       setLoadingStates((prev) => ({ ...prev, [`move-${candidate.id}`]: false }));
// //     }
// //   }

// //   // Add new candidate with optimistic updates
// //   async function handleCreated(candidateData) {
// //     const tempCandidate = {
// //       id: `temp-${Date.now()}`,
// //       ...candidateData,
// //       createdAt: new Date().toISOString(),
// //     };

// //     startTransition(() => {
// //       addOptimisticUpdate({ type: "add", candidate: tempCandidate });
// //     });

// //     setLoadingStates((prev) => ({ ...prev, "add-candidate": true }));

// //     try {
// //       const res = await fetch("/candidates", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(candidateData),
// //       });

// //       if (!res.ok) throw new Error("Failed to create candidate");

// //       const savedCandidate = await res.json();

// //       setCandidates((prev) => [
// //         savedCandidate,
// //         ...prev.filter((c) => !c.id.toString().startsWith("temp-")),
// //       ]);

// //       pushToast({
// //         type: "success",
// //         title: "Candidate Added!",
// //         message: `${savedCandidate.name} has been successfully added.`,
// //       });

// //       setOpenAdd(false);
// //     } catch (err) {
// //       setCandidates(candidates);
// //       pushToast({
// //         type: "error",
// //         title: "Addition Failed",
// //         message: "Failed to add candidate. Please try again.",
// //       });
// //     } finally {
// //       setLoadingStates((prev) => ({ ...prev, "add-candidate": false }));
// //     }
// //   }

// //   // Toggle view mode
// //   function toggleViewMode() {
// //     setViewMode((m) =>
// //       m === "grid" ? "compact" : m === "compact" ? "virtualized" : "grid"
// //     );
// //   }

// //   if (loading) return <p>Loading candidates...</p>;
// //   if (error) return <p className="text-red-500">Error: {error}</p>;

// //   const stages = ["applied", "screen", "tech", "offer", "hired", "rejected"];
// //   const totalPages = Math.ceil(total / pageSize) || 1;

// //   return (
// //     <div>
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
// //           Candidates
// //         </h1>
// //         <div className="flex gap-3 items-center">
// //           <button
// //             onClick={toggleViewMode}
// //             className="px-3 py-2 rounded-md border bg-transparent flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
// //             title="Toggle view"
// //           >
// //             {viewMode === "grid"
// //               ? "Compact view"
// //               : viewMode === "compact"
// //               ? "Virtualized view"
// //               : "Grid view"}
// //           </button>

// //           <button
// //             onClick={() => setOpenAdd(true)}
// //             disabled={loadingStates["add-candidate"]}
// //             className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
// //           >
// //             {loadingStates["add-candidate"] ? (
// //               <>
// //                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
// //                 <span>Adding...</span>
// //               </>
// //             ) : (
// //               <>
// //                 <span className="text-lg leading-none">＋</span>
// //                 <span>Add Candidate</span>
// //               </>
// //             )}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Candidate List */}
// //       {viewMode === "grid" ? (
// //         // your grid view (unchanged)
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {stages.map((stage) => (
// //             <div
// //               key={stage}
// //               className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
// //             >
// //               <h2 className="text-lg font-semibold mb-2 capitalize text-gray-800 dark:text-gray-100">
// //                 {stage}
// //               </h2>
// //               <ul className="space-y-2">
// //                 {optimisticCandidates
// //                   .filter((c) => c.stage === stage)
// //                   .map((c) => (
// //                     <li key={c.id} className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
// //                       <div>
// //                         <h3 className="font-semibold">{c.name}</h3>
// //                         <p className="text-sm text-gray-500">{c.email}</p>
// //                       </div>
// //                     </li>
// //                   ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       ) : viewMode === "compact" ? (
// //         // your compact view (unchanged)
// //         <ul className="space-y-2">
// //           {optimisticCandidates.map((c) => (
// //             <li key={c.id} className="p-2 rounded-lg bg-white dark:bg-gray-800 flex justify-between items-center">
// //               <div>
// //                 <h3 className="font-semibold">{c.name}</h3>
// //                 <p className="text-sm text-gray-500">{c.email}</p>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         // ✅ Virtualized view
// //         <CandidatesVirtualized loadMoreCallback={fetchCandidatesAPI} />
// //       )}

// //       {/* Pagination (only for grid/compact) */}
// //       {viewMode !== "virtualized" && (
// //         <div className="flex justify-center items-center gap-4 py-6">
// //           <button
// //             onClick={() => setPage((p) => Math.max(1, p - 1))}
// //             disabled={page === 1}
// //             className="px-3 py-1 border rounded disabled:opacity-50"
// //           >
// //             Prev
// //           </button>
// //           <span>
// //             Page {page} of {totalPages}
// //           </span>
// //           <button
// //             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// //             disabled={page === totalPages}
// //             className="px-3 py-1 border rounded disabled:opacity-50"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       )}

// //       {/* Add Candidate Modal */}
// //       <AddCandidateModal
// //         open={openAdd}
// //         onClose={() => setOpenAdd(false)}
// //         jobId={1}
// //         onCreated={handleCreated}
// //       />

// //       {/* Toast notifications */}
// //       <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
// //         {toasts.map((toast) => (
// //           <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }






















































// import { useState, useEffect, useOptimistic, startTransition, useCallback } from "react";
// import Toast from "../components/Toast";
// import AddCandidateModal from "../components/AddCandidateModal";
// import CandidatesVirtualized from "./candidates/CandidatesVirtualized"; // ✅ import

// export default function Candidates() {
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [toasts, setToasts] = useState([]);
//   const [openAdd, setOpenAdd] = useState(false);
//   const [viewMode, setViewMode] = useState("grid"); // grid | compact | virtualized
//   const [page, setPage] = useState(1);
//   const pageSize = 50;
//   const [total, setTotal] = useState(0);
//   const [loadingStates, setLoadingStates] = useState({});

//   // Optimistic updates
//   const [optimisticCandidates, addOptimisticUpdate] = useOptimistic(
//     candidates,
//     (state, action) => {
//       switch (action.type) {
//         case "move":
//           return state.map((candidate) =>
//             candidate.id === action.candidateId
//               ? { ...candidate, stage: action.newStage }
//               : candidate
//           );
//         case "add":
//           return [action.candidate, ...state];
//         default:
//           return state;
//       }
//     }
//   );

//   // Toast helpers
//   const pushToast = useCallback((toast) => {
//     const id = Date.now() + Math.floor(Math.random() * 1000);
//     setToasts((prev) => [...prev, { id, ...toast }]);
//   }, []);

//   function removeToast(id) {
//     setToasts((prev) => prev.filter((t) => t.id !== id));
//   }

//   // Fetch candidates (paginated) for your current UI
//   async function fetchCandidates(pageNum = page) {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
//       if (!res.ok) throw new Error("Network error");
//       const data = await res.json();
//       setCandidates(data.data);
//       setTotal(data.total);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ✅ API for Virtualized list (used by CandidatesVirtualized)
//   const fetchCandidatesAPI = useCallback(async (pageNum = 1) => {
//     try {
//       const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
//       if (!res.ok) throw new Error("Network error");
//       const data = await res.json();

//       return {
//         data: data.data || [],
//         total: data.total || 0,
//       };
//     } catch (err) {
//       console.error("Virtualized fetch failed:", err);
//       return { data: [], total: 0 };
//     }
//   }, [pageSize]);

//   // Load candidates when page changes (for grid/compact views) — useEffect is correct here
//   useEffect(() => {
//     fetchCandidates(page);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page]);

//   // Move candidate between stages with optimistic updates
//   async function moveCandidate(candidate, newStage) {
//     startTransition(() => {
//       addOptimisticUpdate({ type: "move", candidateId: candidate.id, newStage });
//     });

//     setLoadingStates((prev) => ({ ...prev, [`move-${candidate.id}`]: true }));

//     try {
//       const res = await fetch(`/candidates/${candidate.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ stage: newStage }),
//       });

//       if (!res.ok) throw new Error("Update failed");

//       const saved = await res.json();

//       setCandidates((prev) => prev.map((c) => (c.id === saved.id ? saved : c)));

//       pushToast({
//         type: "success",
//         title: "Stage Updated!",
//         message: `${saved.name} moved to ${saved.stage}`,
//       });
//     } catch (err) {
//       setCandidates(candidates);
//       pushToast({
//         type: "error",
//         title: "Move Failed",
//         message: "Failed to move candidate. Changes reverted.",
//       });
//     } finally {
//       setLoadingStates((prev) => ({ ...prev, [`move-${candidate.id}`]: false }));
//     }
//   }

//   // Add new candidate with optimistic updates
//   async function handleCreated(candidateData) {
//     const tempCandidate = {
//       id: `temp-${Date.now()}`,
//       ...candidateData,
//       createdAt: new Date().toISOString(),
//     };

//     startTransition(() => {
//       addOptimisticUpdate({ type: "add", candidate: tempCandidate });
//     });

//     setLoadingStates((prev) => ({ ...prev, "add-candidate": true }));

//     try {
//       const res = await fetch("/candidates", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(candidateData),
//       });

//       if (!res.ok) throw new Error("Failed to create candidate");

//       const savedCandidate = await res.json();

//       setCandidates((prev) => [
//         savedCandidate,
//         ...prev.filter((c) => !c.id.toString().startsWith("temp-")),
//       ]);

//       pushToast({
//         type: "success",
//         title: "Candidate Added!",
//         message: `${savedCandidate.name} has been successfully added.`,
//       });

//       setOpenAdd(false);
//     } catch (err) {
//       setCandidates(candidates);
//       pushToast({
//         type: "error",
//         title: "Addition Failed",
//         message: "Failed to add candidate. Please try again.",
//       });
//     } finally {
//       setLoadingStates((prev) => ({ ...prev, "add-candidate": false }));
//     }
//   }

//   // Toggle view mode
//   function toggleViewMode() {
//     setViewMode((m) =>
//       m === "grid" ? "compact" : m === "compact" ? "virtualized" : "grid"
//     );
//   }

//   if (loading) return <p>Loading candidates...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   const stages = ["applied", "screen", "tech", "offer", "hired", "rejected"];
//   const totalPages = Math.ceil(total / pageSize) || 1;

//   // --- fallback wrapper to guarantee we pass a function prop to CandidatesVirtualized ---
//   const virtualizedCallback = fetchCandidatesAPI
//     ? fetchCandidatesAPI
//     : async (pageNum = 1) => {
//         try {
//           const res = await fetch(`/candidates?page=${pageNum}&pageSize=${pageSize}`);
//           if (!res.ok) throw new Error("Network error");
//           const data = await res.json();
//           return { data: data.data || [], total: data.total || 0 };
//         } catch (err) {
//           console.error("Fallback virtualized fetch failed:", err);
//           return { data: [], total: 0 };
//         }
//       };

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//           Candidates
//         </h1>
//         <div className="flex gap-3 items-center">
//           <button
//             onClick={toggleViewMode}
//             className="px-3 py-2 rounded-md border bg-transparent flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
//             title="Toggle view"
//           >
//             {viewMode === "grid"
//               ? "Compact view"
//               : viewMode === "compact"
//               ? "Virtualized view"
//               : "Grid view"}
//           </button>

//           <button
//             onClick={() => setOpenAdd(true)}
//             disabled={loadingStates["add-candidate"]}
//             className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loadingStates["add-candidate"] ? (
//               <>
//                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 <span>Adding...</span>
//               </>
//             ) : (
//               <>
//                 <span className="text-lg leading-none">＋</span>
//                 <span>Add Candidate</span>
//               </>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Candidate List */}
//       {viewMode === "grid" ? (
//         // your grid view (unchanged)
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stages.map((stage) => (
//             <div
//               key={stage}
//               className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
//             >
//               <h2 className="text-lg font-semibold mb-2 capitalize text-gray-800 dark:text-gray-100">
//                 {stage}
//               </h2>
//               <ul className="space-y-2">
//                 {optimisticCandidates
//                   .filter((c) => c.stage === stage)
//                   .map((c) => (
//                     <li key={c.id} className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
//                       <div>
//                         <h3 className="font-semibold">{c.name}</h3>
//                         <p className="text-sm text-gray-500">{c.email}</p>
//                       </div>
//                     </li>
//                   ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ) : viewMode === "compact" ? (
//         // your compact view (unchanged)
//         <ul className="space-y-2">
//           {optimisticCandidates.map((c) => (
//             <li key={c.id} className="p-2 rounded-lg bg-white dark:bg-gray-800 flex justify-between items-center">
//               <div>
//                 <h3 className="font-semibold">{c.name}</h3>
//                 <p className="text-sm text-gray-500">{c.email}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         // ✅ Virtualized view — guaranteed function passed
//         // <CandidatesVirtualized loadMoreCallback={virtualizedCallback} />
//         <div>esrS</div>
//       )}

//       {/* Pagination (only for grid/compact) */}
//       {viewMode !== "virtualized" && (
//         <div className="flex justify-center items-center gap-4 py-6">
//           <button
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             disabled={page === 1}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             Prev
//           </button>
//           <span>
//             Page {page} of {totalPages}
//           </span>
//           <button
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             disabled={page === totalPages}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Add Candidate Modal */}
//       <AddCandidateModal
//         open={openAdd}
//         onClose={() => setOpenAdd(false)}
//         jobId={1}
//         onCreated={handleCreated}
//       />

//       {/* Toast notifications */}
//       <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
//         {toasts.map((toast) => (
//           <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
//         ))}
//       </div>
//     </div>
//   );
// }


