// import { useState, useEffect } from "react";
// import { FixedSizeList as List } from "react-window";

// export default function CandidatesVirtualized({ fetchCandidates, total }) {
//   const [candidates, setCandidates] = useState([]);
//   const [page, setPage] = useState(1);
//   const pageSize = 50;

//   useEffect(() => {
//     setCandidates([]); // reset when search/stage changes
//     loadPage(1);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [fetchCandidates]);

//   async function loadPage(pageNum) {
//     if (typeof fetchCandidates !== "function") return;
//     const { data } = await fetchCandidates(pageNum, pageSize);
//     setCandidates((prev) => [...prev, ...data]);
//     setPage(pageNum);
//   }

//   const Row = ({ index, style }) => {
//     const candidate = candidates[index];

//     // Trigger lazy loading when reaching end of loaded data
//     if (!candidate && index >= candidates.length - 1 && candidates.length < total) {
//       loadPage(page + 1);
//     }

//     if (!candidate) {
//       return (
//         <div style={style} className="px-4 py-3 border-b text-gray-400">
//           Loading...
//         </div>
//       );
//     }

//     return (
//       <div
//         style={style}
//         className="px-4 py-3 border-b flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800"
//       >
//         <div>
//           <h3 className="font-medium text-gray-900 dark:text-white">
//             {candidate.name}
//           </h3>
//           <p className="text-sm text-gray-500">{candidate.email}</p>
//         </div>
//         <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 capitalize">
//           {candidate.stage}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <List
//       height={600} // fixed height viewport
//       itemCount={Number.isFinite(total) ? total : 0}
//       itemSize={72}
//       width="100%"
//     >
//       {Row}
//     </List>
//   );
// }




import { useState, useEffect, useOptimistic, startTransition, useCallback } from "react";
import { FixedSizeList as List } from "react-window";

export default function CandidatesVirtualized({ 
  fetchCandidates, 
  total, 
  onCandidateUpdate,
  onCandidateDelete,
  searchTerm = "",
  selectedStage = "all" 
}) {
  const [candidates, setCandidates] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pageSize = 50;

  // Optimistic updates for candidate operations
  const [optimisticCandidates, addOptimisticUpdate] = useOptimistic(
    candidates,
    (state, action) => {
      switch (action.type) {
        case 'update_candidate':
          return state.map(candidate =>
            candidate.id === action.candidateId 
              ? { ...candidate, ...action.patch }
              : candidate
          );
        case 'delete_candidate':
          return state.filter(candidate => candidate.id !== action.candidateId);
        case 'update_stage':
          return state.map(candidate =>
            candidate.id === action.candidateId 
              ? { ...candidate, stage: action.stage }
              : candidate
          );
        default:
          return state;
      }
    }
  );

  useEffect(() => {
    setCandidates([]);
    setError(null);
    loadPage(1);
  }, [fetchCandidates, searchTerm, selectedStage]);

  const loadPage = useCallback(async (pageNum) => {
    if (typeof fetchCandidates !== "function") return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data } = await fetchCandidates(pageNum, pageSize);
      setCandidates((prev) => pageNum === 1 ? data : [...prev, ...data]);
      setPage(pageNum);
    } catch (err) {
      setError("Failed to load candidates. Please try again.");
      console.error("Error loading candidates:", err);
    } finally {
      setLoading(false);
    }
  }, [fetchCandidates, pageSize]);

  // Optimistic stage update
  const handleStageUpdate = useCallback(async (candidateId, newStage) => {
    startTransition(() => {
      addOptimisticUpdate({ type: 'update_stage', candidateId, stage: newStage });
    });

    try {
      if (onCandidateUpdate) {
        await onCandidateUpdate(candidateId, { stage: newStage });
      }
    } catch (err) {
      console.error("Error updating candidate stage:", err);
      // Revert optimistic update on error
      setCandidates(prev => prev.map(c => 
        c.id === candidateId ? { ...c, stage: c.stage } : c
      ));
    }
  }, [onCandidateUpdate]);

  // Optimistic delete
  const handleDelete = useCallback(async (candidateId) => {
    startTransition(() => {
      addOptimisticUpdate({ type: 'delete_candidate', candidateId });
    });

    try {
      if (onCandidateDelete) {
        await onCandidateDelete(candidateId);
      }
    } catch (err) {
      console.error("Error deleting candidate:", err);
      // Revert would require more complex state management
      setError("Failed to delete candidate. Please refresh the page.");
    }
  }, [onCandidateDelete]);

  const getStageColor = (stage) => {
    const stageColors = {
      'applied': 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600',
      'screening': 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700',
      'interview': 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700',
      'assessment': 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700',
      'offer': 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700',
      'hired': 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700',
      'rejected': 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
    };
    return stageColors[stage?.toLowerCase()] || stageColors['applied'];
  };

  const Row = ({ index, style }) => {
    const candidate = optimisticCandidates[index];

    // Trigger lazy loading when reaching end of loaded data
    if (!candidate && index >= optimisticCandidates.length - 1 && optimisticCandidates.length < total && !loading) {
      loadPage(page + 1);
    }

    if (!candidate) {
      return (
        <div style={style} className="px-6 py-4 border-b border-slate-200/60 dark:border-slate-700/60">
          <div className="flex items-center gap-4 animate-pulse">
            <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg w-48"></div>
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-lg w-32"></div>
            </div>
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-20"></div>
          </div>
        </div>
      );
    }

    const stageColorClasses = getStageColor(candidate.stage);

    return (
      <div
        style={style}
        className="px-6 py-4 border-b border-slate-200/60 dark:border-slate-700/60 hover:bg-gradient-to-r hover:from-slate-50/50 hover:to-blue-50/30 dark:hover:from-slate-800/50 dark:hover:to-slate-700/50 transition-all duration-300 group"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {/* Avatar */}
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 group-hover:shadow-xl group-hover:shadow-indigo-500/35 transition-all duration-300">
              {candidate.name?.charAt(0)?.toUpperCase() || 'C'}
            </div>

            {/* Candidate Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {candidate.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                  {candidate.email}
                </p>
              </div>
            </div>
          </div>

          {/* Stage Badge and Actions */}
          <div className="flex items-center gap-3">
            <select
              value={candidate.stage}
              onChange={(e) => handleStageUpdate(candidate.id, e.target.value)}
              className={`text-sm px-3 py-2 rounded-xl border font-medium cursor-pointer transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${stageColorClasses}`}
            >
              <option value="applied">Applied</option>
              <option value="screening">Screening</option>
              <option value="interview">Interview</option>
              <option value="assessment">Assessment</option>
              <option value="offer">Offer</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={() => {/* Handle view/edit */}}
                className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
                title="View Details"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button
                onClick={() => handleDelete(candidate.id)}
                className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                title="Delete Candidate"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Something went wrong</h3>
          <p className="text-slate-500 dark:text-slate-400">{error}</p>
          <button
            onClick={() => loadPage(1)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl hover:from-indigo-500 hover:to-violet-500 font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/25"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden shadow-xl shadow-slate-200/60 dark:shadow-slate-900/40">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-slate-50/50 to-blue-50/30 dark:from-slate-800/50 dark:to-slate-700/30 border-b border-slate-200/60 dark:border-slate-700/60">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Candidates
          </h3>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full font-medium">
              {total.toLocaleString()} total
            </span>
            {loading && (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Virtualized List */}
      <List
        height={600}
        itemCount={Number.isFinite(total) ? total : 0}
        itemSize={80}
        width="100%"
      >
        {Row}
      </List>

      {/* Empty State */}
      {optimisticCandidates.length === 0 && !loading && (
        <div className="flex items-center justify-center h-96">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">No candidates found</h3>
            <p className="text-slate-500 dark:text-slate-400">
              {searchTerm || selectedStage !== "all" 
                ? "Try adjusting your search or filters"
                : "Candidates will appear here once applications are received"
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}