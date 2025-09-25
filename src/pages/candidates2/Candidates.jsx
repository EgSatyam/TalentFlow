// import { useState, useCallback } from "react";
// import CandidatesVirtualized from "./CandidatesVirtualized";

// export default function Candidates() {
//   const [search, setSearch] = useState("");
//   const [stage, setStage] = useState("");
//   const [total, setTotal] = useState(0);

//   // API wrapper
//   const fetchCandidates = useCallback(
//     async (page = 1, pageSize = 50) => {
//       try {
//         const res = await fetch(
//           `/candidates?search=${search}&stage=${stage}&page=${page}&pageSize=${1000}`
//         );
//         if (!res.ok) throw new Error("Network error");
//         const data = await res.json();
//         setTotal(data.total || 0);
//         return { data: data.data || [], total: data.total || 0 };
//       } catch (err) {
//         console.error("Fetch failed:", err);
//         return { data: [], total: 0 };
//       }
//     },
//     [search, stage]
//   );

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//         Candidates
//       </h1>

//       {/* Search + Stage filter */}
//       <div className="flex gap-4">
//         <input
//           type="text"
//           placeholder="Search by name/email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded px-3 py-2 flex-1"
//         />
//         <select
//           value={stage}
//           onChange={(e) => setStage(e.target.value)}
//           className="border rounded px-3 py-2"
//         >
//           <option value="">All stages</option>
//           <option value="applied">Applied</option>
//           <option value="screen">Screen</option>
//           <option value="tech">Tech</option>
//           <option value="offer">Offer</option>
//           <option value="hired">Hired</option>
//           <option value="rejected">Rejected</option>
//         </select>
//       </div>

//       {/* Virtualized List */}
//       <CandidatesVirtualized fetchCandidates={fetchCandidates} total={total} />
//     </div>
//   );
// }





import { useState, useCallback } from "react";
import CandidatesVirtualized from "./CandidatesVirtualized";
import { Users, TrendingUp, Calendar, Search, Filter } from "lucide-react";

export default function Candidates() {
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("");
  const [total, setTotal] = useState(0);

  // API wrapper
  const fetchCandidates = useCallback(
    async (page = 1, pageSize = 50) => {
      try {
        const res = await fetch(
          `/candidates?search=${search}&stage=${stage}&page=${page}&pageSize=${1000}`
        );
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setTotal(data.total || 0);
        return { data: data.data || [], total: data.total || 0 };
      } catch (err) {
        console.error("Fetch failed:", err);
        return { data: [], total: 0 };
      }
    },
    [search, stage]
  );

  return (
    <div className="p-4 space-y-4">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/40 dark:shadow-slate-900/40">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(167,85,221,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Icon with modern styling */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
                <Users className="w-6 h-6 text-white" />
              </div>
              
              {/* Title and subtitle */}
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
                  Candidates
                </h1>
                {/* <p className="text-slate-600 dark:text-slate-400 font-medium mt-1">
                  Manage your talent pipeline
                </p> */}
              </div>
            </div>
            
            {/* Stats badges */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  +12% this month
                </span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {total} total
                </span>
              </div>
            </div>
          </div>
          
          {/* Mobile stats - shown on small screens */}
          <div className="sm:hidden flex items-center space-x-3 mt-4 pt-4 border-t border-white/30 dark:border-slate-700/50">
            <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                +12%
              </span>
            </div>
            <div className="flex items-center px-3 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg border border-white/60 dark:border-slate-700/60 shadow-sm">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {total}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search + Stage filter */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 dark:text-slate-500" />
            </div>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
            />
          </div>
          
          {/* Stage Filter */}
          <div className="relative sm:min-w-[200px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-slate-400 dark:text-slate-500" />
            </div>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white appearance-none cursor-pointer transition-colors"
            >
              <option value="">All stages</option>
              <option value="applied">Applied</option>
              <option value="screen">Screen</option>
              <option value="tech">Tech Interview</option>
              <option value="offer">Offer Extended</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Search Results Summary */}
        {(search || stage) && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
              <span>
                Showing results for: {search && `"${search}"`} {search && stage && " in "} {stage && `${stage} stage`}
              </span>
              <button
                onClick={() => {
                  setSearch("");
                  setStage("");
                }}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Virtualized List */}
      <CandidatesVirtualized fetchCandidates={fetchCandidates} total={total} />
    </div>
  );
}