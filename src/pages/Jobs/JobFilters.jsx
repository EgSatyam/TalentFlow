// // export default function JobFilters({
// //   query,
// //   setQuery,
// //   statusFilter,
// //   setStatusFilter,
// //   tagFilter,
// //   setTagFilter,
// //   sortBy,
// //   setSortBy,
// //   allTags,
// //   toggleViewMode,
// //   viewMode,
// //   onCreate,
// // }) {
// //   return (
// //     <div className="mb-8">
// //       {/* Header Section */}
// //       <div className="flex items-center justify-between mb-8">
// //         <div className="relative">
// //           <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-2">
// //             Job Management
// //           </h1>
// //           <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
// //             Manage your job listings with ease
// //           </p>
// //           <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
// //         </div>
        
// //         {/* Primary Action */}
// //         <button
// //           className="group relative px-8 py-3.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white rounded-2xl hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 transition-all duration-300 shadow-xl shadow-slate-600/25 hover:shadow-2xl hover:shadow-slate-600/35 hover:-translate-y-1 font-semibold text-lg border border-slate-500/20 hover:border-slate-400/30"
// //           onClick={onCreate}
// //         >
// //           <span className="flex items-center gap-3">
// //             <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
// //               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
// //             </svg>
// //             Create New Job
// //           </span>
// //           <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
// //         </button>
// //       </div>

// //       {/* Filters Section */}
// //       <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm">
// //         {/* Glass morphism top border */}
// //         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600 rounded-full"></div>
        
// //         <div className="flex items-center justify-between flex-wrap gap-6">
// //           {/* Search Section */}
// //           <div className="flex items-center gap-6 flex-wrap flex-1 min-w-0">
// //             {/* Search Input */}
// //             <div className="relative group">
// //               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
// //                 <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
// //                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
// //                 </svg>
// //               </div>
// //               <input
// //                 value={query}
// //                 onChange={(e) => setQuery(e.target.value)}
// //                 placeholder="Search job titles..."
// //                 className="w-80 pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600"
// //               />
// //             </div>

// //             {/* Filter Controls */}
// //             <div className="flex items-center gap-4">
// //               {/* Status Filter */}
// //               <div className="relative">
// //                 <select
// //                   value={statusFilter}
// //                   onChange={(e) => setStatusFilter(e.target.value)}
// //                   className="appearance-none w-40 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
// //                 >
// //                   <option value="">All Status</option>
// //                   <option value="active">✅ Active</option>
// //                   <option value="archived">📦 Archived</option>
// //                 </select>
// //                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
// //                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                   </svg>
// //                 </div>
// //               </div>

// //               {/* Tags Filter */}
// //               <div className="relative">
// //                 <select
// //                   value={tagFilter}
// //                   onChange={(e) => setTagFilter(e.target.value)}
// //                   className="appearance-none w-44 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
// //                 >
// //                   <option value="">🏷️ All Tags</option>
// //                   {allTags.map((tag) => (
// //                     <option key={tag} value={tag}>
// //                       {tag}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
// //                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                   </svg>
// //                 </div>
// //               </div>

// //               {/* Sort Filter */}
// //               <div className="relative">
// //                 <select
// //                   value={sortBy}
// //                   onChange={(e) => setSortBy(e.target.value)}
// //                   className="appearance-none w-36 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
// //                 >
// //                   <option value="newest">🕐 Newest</option>
// //                   <option value="oldest">⏰ Oldest</option>
// //                   <option value="az">🔤 A–Z</option>
// //                   <option value="za">🔽 Z–A</option>
// //                 </select>
// //                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
// //                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                   </svg>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* View Toggle */}
// //           <div className="flex items-center">
// //             <div className="relative bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-1.5 shadow-inner">
// //               <div className={`absolute top-1.5 bottom-1.5 bg-white dark:bg-slate-600 rounded-xl shadow-lg transition-all duration-300 ${
// //                 viewMode === "grid" ? "left-1.5 right-1/2 mr-1" : "right-1.5 left-1/2 ml-1"
// //               }`}></div>
              
// //               <div className="relative flex">
// //                 <button
// //                   onClick={() => viewMode !== "grid" && toggleViewMode()}
// //                   className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
// //                     viewMode === "grid"
// //                       ? "text-slate-700 dark:text-slate-200 z-10"
// //                       : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
// //                   }`}
// //                 >
// //                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
// //                   </svg>
// //                   Grid
// //                 </button>
                
// //                 <button
// //                   onClick={() => viewMode !== "list" && toggleViewMode()}
// //                   className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
// //                     viewMode === "list"
// //                       ? "text-slate-700 dark:text-slate-200 z-10"
// //                       : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
// //                   }`}
// //                 >
// //                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
// //                   </svg>
// //                   List
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }






// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { Search, Plus, Grid3X3, List, Filter, SortAsc, X, Check } from "lucide-react";

// export default function JobFilters({
//   query,
//   setQuery,
//   statusFilter,
//   setStatusFilter,
//   tagFilter,
//   setTagFilter,
//   sortBy,
//   setSortBy,
//   allTags = [],
//   toggleViewMode,
//   viewMode,
//   onCreate,
//   totalJobs = 0,
//   filteredCount = 0,
//   isLoading = false
// }) {
//   // Local state for optimistic updates
//   const [localQuery, setLocalQuery] = useState(query || "");
//   const [isSearching, setIsSearching] = useState(false);
//   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
//   const [appliedFiltersCount, setAppliedFiltersCount] = useState(0);
  
//   // Debounce search queries for better performance
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       if (localQuery !== query) {
//         setIsSearching(true);
//         setQuery(localQuery);
//         // Simulate search delay for optimistic feedback
//         setTimeout(() => setIsSearching(false), 300);
//       }
//     }, 300);

//     return () => clearTimeout(timeoutId);
//   }, [localQuery, query, setQuery]);

//   // Count applied filters
//   useEffect(() => {
//     let count = 0;
//     if (query && query.trim()) count++;
//     if (statusFilter && statusFilter !== "") count++;
//     if (tagFilter && tagFilter !== "") count++;
//     if (sortBy && sortBy !== "newest") count++;
//     setAppliedFiltersCount(count);
//   }, [query, statusFilter, tagFilter, sortBy]);

//   // Clear all filters
//   const clearAllFilters = useCallback(() => {
//     setLocalQuery("");
//     setQuery("");
//     setStatusFilter("");
//     setTagFilter("");
//     setSortBy("newest");
//   }, [setQuery, setStatusFilter, setTagFilter, setSortBy]);

//   // Filter options with better UX
//   const statusOptions = useMemo(() => [
//     { value: "", label: "All Status", icon: "🔍", count: totalJobs },
//     { value: "active", label: "Active", icon: "✅", count: Math.floor(totalJobs * 0.7) },
//     { value: "archived", label: "Archived", icon: "📦", count: Math.floor(totalJobs * 0.3) }
//   ], [totalJobs]);

//   const sortOptions = useMemo(() => [
//     { value: "newest", label: "Newest First", icon: "🕒" },
//     { value: "oldest", label: "Oldest First", icon: "⏰" },
//     { value: "az", label: "A → Z", icon: "🔤" },
//     { value: "za", label: "Z → A", icon: "🔽" }
//   ], []);

//   // Handle filter changes with optimistic updates
//   const handleFilterChange = (filterType, value) => {
//     switch (filterType) {
//       case 'status':
//         setStatusFilter(value);
//         break;
//       case 'tag':
//         setTagFilter(value);
//         break;
//       case 'sort':
//         setSortBy(value);
//         break;
//       default:
//         break;
//     }
//   };

//   // Quick filter buttons for common actions
//   const quickFilters = [
//     { label: "Active Jobs", action: () => handleFilterChange('status', 'active') },
//     { label: "Recent", action: () => handleFilterChange('sort', 'newest') },
//     { label: "Clear All", action: clearAllFilters }
//   ];

//   return (
//     <div className="mb-8 space-y-6">
//       {/* Header Section */}
//       <div className="flex items-center justify-between">
//         <div className="relative">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-2">
//             Job Management
//           </h1>
//           <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
//             <p className="text-lg font-medium">
//               Manage your job listings with ease
//             </p>
//             {appliedFiltersCount > 0 && (
//               <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
//                 {appliedFiltersCount} filter{appliedFiltersCount !== 1 ? 's' : ''} applied
//               </span>
//             )}
//           </div>
//           <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
//         </div>
        
//         {/* Primary Action */}
//         <button
//           onClick={onCreate}
//           disabled={isLoading}
//           className="group relative px-8 py-3.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white rounded-2xl hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 disabled:from-slate-400 disabled:via-slate-400 disabled:to-slate-400 transition-all duration-300 shadow-xl shadow-slate-600/25 hover:shadow-2xl hover:shadow-slate-600/35 hover:-translate-y-1 disabled:hover:translate-y-0 font-semibold text-lg border border-slate-500/20 hover:border-slate-400/30 disabled:cursor-not-allowed"
//         >
//           <span className="flex items-center gap-3">
//             {isLoading ? (
//               <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
//             ) : (
//               <Plus className="w-5 h-5 transition-transform group-hover:scale-110" />
//             )}
//             Create New Job
//           </span>
//           <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
//         </button>
//       </div>

//       {/* Results Summary */}
//       {(query || statusFilter || tagFilter) && (
//         <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
//           <div className="flex items-center space-x-3">
//             <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//             <span className="text-blue-800 dark:text-blue-200 font-medium">
//               Showing {isSearching ? '...' : filteredCount} of {totalJobs} jobs
//             </span>
//             {query && (
//               <span className="text-blue-600 dark:text-blue-400">
//                 for "{query}"
//               </span>
//             )}
//           </div>
//           {appliedFiltersCount > 0 && (
//             <button
//               onClick={clearAllFilters}
//               className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
//             >
//               <X className="w-4 h-4" />
//               <span>Clear filters</span>
//             </button>
//           )}
//         </div>
//       )}

//       {/* Main Filters Section */}
//       <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm relative overflow-hidden">
//         {/* Glass morphism top border */}
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600 rounded-full"></div>
        
//         <div className="flex items-center justify-between flex-wrap gap-6">
//           {/* Search Section */}
//           <div className="flex items-center gap-4 flex-wrap flex-1 min-w-0">
//             {/* Search Input */}
//             <div className="relative group">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 {isSearching ? (
//                   <div className="w-5 h-5 border-2 border-slate-400/20 border-t-slate-400 rounded-full animate-spin" />
//                 ) : (
//                   <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors" />
//                 )}
//               </div>
//               <input
//                 value={localQuery}
//                 onChange={(e) => setLocalQuery(e.target.value)}
//                 placeholder="Search job titles, companies, skills..."
//                 className="w-80 pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600"
//               />
//               {localQuery && (
//                 <button
//                   onClick={() => {
//                     setLocalQuery("");
//                     setQuery("");
//                   }}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               )}
//             </div>

//             {/* Filter Controls */}
//             <div className="flex items-center gap-3">
//               {/* Status Filter */}
//               <div className="relative">
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => handleFilterChange('status', e.target.value)}
//                   className="appearance-none w-40 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
//                 >
//                   {statusOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.icon} {option.label}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//                 {statusFilter && (
//                   <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
//                     <Check className="w-2.5 h-2.5 text-white" />
//                   </div>
//                 )}
//               </div>

//               {/* Tags Filter */}
//               <div className="relative">
//                 <select
//                   value={tagFilter}
//                   onChange={(e) => handleFilterChange('tag', e.target.value)}
//                   className="appearance-none w-44 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
//                 >
//                   <option value="">🏷️ All Tags</option>
//                   {allTags.map((tag) => (
//                     <option key={tag} value={tag}>
//                       {tag}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//                 {tagFilter && (
//                   <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
//                     <Check className="w-2.5 h-2.5 text-white" />
//                   </div>
//                 )}
//               </div>

//               {/* Sort Filter */}
//               <div className="relative">
//                 <select
//                   value={sortBy}
//                   onChange={(e) => handleFilterChange('sort', e.target.value)}
//                   className="appearance-none w-40 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
//                 >
//                   {sortOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.icon} {option.label}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                   <SortAsc className="w-4 h-4 text-slate-400" />
//                 </div>
//                 {sortBy !== "newest" && (
//                   <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
//                     <Check className="w-2.5 h-2.5 text-white" />
//                   </div>
//                 )}
//               </div>

//               {/* Advanced Filters Toggle */}
//               <button
//                 onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
//                 className={`px-4 py-3.5 rounded-2xl transition-all duration-300 font-medium shadow-sm hover:shadow-md flex items-center space-x-2 ${
//                   showAdvancedFilters 
//                     ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800' 
//                     : 'bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600'
//                 } border`}
//               >
//                 <Filter className="w-4 h-4" />
//                 <span>Filters</span>
//                 {appliedFiltersCount > 0 && (
//                   <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {appliedFiltersCount}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* View Toggle */}
//           <div className="flex items-center space-x-3">
//             {/* Quick Filters */}
//             <div className="hidden md:flex items-center space-x-2">
//               {quickFilters.map((filter, index) => (
//                 <button
//                   key={index}
//                   onClick={filter.action}
//                   className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
//                 >
//                   {filter.label}
//                 </button>
//               ))}
//             </div>

//             {/* View Mode Toggle */}
//             <div className="relative bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-1.5 shadow-inner">
//               <div className={`absolute top-1.5 bottom-1.5 bg-white dark:bg-slate-600 rounded-xl shadow-lg transition-all duration-300 ${
//                 viewMode === "grid" ? "left-1.5 right-1/2 mr-1" : "right-1.5 left-1/2 ml-1"
//               }`}></div>
              
//               <div className="relative flex">
//                 <button
//                   onClick={() => viewMode !== "grid" && toggleViewMode()}
//                   className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
//                     viewMode === "grid"
//                       ? "text-slate-700 dark:text-slate-200 z-10"
//                       : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
//                   }`}
//                 >
//                   <Grid3X3 className="w-4 h-4" />
//                   Grid
//                 </button>
                
//                 <button
//                   onClick={() => viewMode !== "list" && toggleViewMode()}
//                   className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
//                     viewMode === "list"
//                       ? "text-slate-700 dark:text-slate-200 z-10"
//                       : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
//                   }`}
//                 >
//                   <List className="w-4 h-4" />
//                   List
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Advanced Filters Section */}
//         {showAdvancedFilters && (
//           <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 animate-in slide-in-from-top duration-300">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Department</label>
//                 <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 text-sm">
//                   {/* <option value="">All Departments</option>
//                   <option value="engineering">Engineering</option>
//                   <option value="marketing">Marketing</option>
//                   <option value="sales">Sales</option>
//                   <option value="hr">Human Resources</option> */}
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Experience Level</label>
//                 <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 text-sm">
//                   <option value="">All Levels</option>
//                   <option value="entry">Entry Level</option>
//                   <option value="mid">Mid Level</option>
//                   <option value="senior">Senior Level</option>
//                   <option value="executive">Executive</option>
//                 </select>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Type</label>
//                 <select className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 text-sm">
//                   <option value="">All Types</option>
//                   <option value="remote">Remote</option>
//                   <option value="hybrid">Hybrid</option>
//                   <option value="onsite">On-site</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Search, Plus, Grid3X3, List, X, Check } from "lucide-react";

export default function JobFilters({
  query,
  setQuery,
  statusFilter,
  setStatusFilter,
  tagFilter,
  setTagFilter,
  sortBy,
  setSortBy,
  allTags = [],
  toggleViewMode,
  viewMode,
  onCreate,
  totalJobs = 0,
  filteredCount = 0,
  isLoading = false
}) {
  // Local state for optimistic updates
  const [localQuery, setLocalQuery] = useState(query || "");
  const [isSearching, setIsSearching] = useState(false);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState(0);
  
  // Debounce search queries for better performance
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localQuery !== query) {
        setIsSearching(true);
        setQuery(localQuery);
        // Simulate search delay for optimistic feedback
        setTimeout(() => setIsSearching(false), 300);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localQuery, query, setQuery]);

  // Count applied filters
  useEffect(() => {
    let count = 0;
    if (query && query.trim()) count++;
    if (statusFilter && statusFilter !== "") count++;
    if (tagFilter && tagFilter !== "") count++;
    if (sortBy && sortBy !== "newest") count++;
    setAppliedFiltersCount(count);
  }, [query, statusFilter, tagFilter, sortBy]);

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setLocalQuery("");
    setQuery("");
    setStatusFilter("");
    setTagFilter("");
    setSortBy("newest");
  }, [setQuery, setStatusFilter, setTagFilter, setSortBy]);

  // Filter options with better UX
  const statusOptions = useMemo(() => [
    { value: "", label: "All Status", icon: "🔍", count: totalJobs },
    { value: "active", label: "Active", icon: "✅", count: Math.floor(totalJobs * 0.7) },
    { value: "archived", label: "Archived", icon: "📦", count: Math.floor(totalJobs * 0.3) }
  ], [totalJobs]);

  const sortOptions = useMemo(() => [
    { value: "newest", label: "Newest First", icon: "🕒" },
    { value: "oldest", label: "Oldest First", icon: "⏰" },
    { value: "az", label: "A → Z", icon: "🔤" },
    { value: "za", label: "Z → A", icon: "🔽" }
  ], []);

  // Handle filter changes with optimistic updates
  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'status':
        setStatusFilter(value);
        break;
      case 'tag':
        setTagFilter(value);
        break;
      case 'sort':
        setSortBy(value);
        break;
      default:
        break;
    }
  };



  return (
    <div className="mb-8 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="relative">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-2">
            Job Management
          </h1>
          <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
            <p className="text-lg font-medium">
              Manage your job listings with ease
            </p>
            {appliedFiltersCount > 0 && (
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                {appliedFiltersCount} filter{appliedFiltersCount !== 1 ? 's' : ''} applied
              </span>
            )}
          </div>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
        </div>
        
        {/* Primary Action */}
        <button
          onClick={onCreate}
          disabled={isLoading}
          className="group relative px-8 py-3.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white rounded-2xl hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 disabled:from-slate-400 disabled:via-slate-400 disabled:to-slate-400 transition-all duration-300 shadow-xl shadow-slate-600/25 hover:shadow-2xl hover:shadow-slate-600/35 hover:-translate-y-1 disabled:hover:translate-y-0 font-semibold text-lg border border-slate-500/20 hover:border-slate-400/30 disabled:cursor-not-allowed"
        >
          <span className="flex items-center gap-3">
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <Plus className="w-5 h-5 transition-transform group-hover:scale-110" />
            )}
            Create New Job
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </button>
      </div>

      {/* Results Summary */}
      {(query || statusFilter || tagFilter) && (
        <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-800 dark:text-blue-200 font-medium">
              Showing {isSearching ? '...' : filteredCount} of {totalJobs} jobs
            </span>
            {query && (
              <span className="text-blue-600 dark:text-blue-400">
                for "{query}"
              </span>
            )}
          </div>
          {appliedFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Clear filters</span>
            </button>
          )}
        </div>
      )}

      {/* Main Filters Section */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm relative overflow-hidden">
        {/* Glass morphism top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600 rounded-full"></div>
        
        <div className="flex items-center justify-between flex-wrap gap-6">
          {/* Search Section */}
          <div className="flex items-center gap-4 flex-wrap flex-1 min-w-0">
            {/* Search Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-slate-400/20 border-t-slate-400 rounded-full animate-spin" />
                ) : (
                  <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors" />
                )}
              </div>
              <input
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search job titles, companies, skills..."
                className="w-80 pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600"
              />
              {localQuery && (
                <button
                  onClick={() => {
                    setLocalQuery("");
                    setQuery("");
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-3">
              {/* Status Filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="appearance-none w-40 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {statusFilter && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>

              {/* Tags Filter */}
              <div className="relative">
                <select
                  value={tagFilter}
                  onChange={(e) => handleFilterChange('tag', e.target.value)}
                  className="appearance-none w-44 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
                >
                  <option value="">🏷️ All Tags</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {tagFilter && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>

              {/* Sort Filter */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="appearance-none w-40 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {sortBy !== "newest" && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>


            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center">
            {/* View Mode Toggle */}
            <div className="relative bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-1.5 shadow-inner">
              <div className={`absolute top-1.5 bottom-1.5 bg-white dark:bg-slate-600 rounded-xl shadow-lg transition-all duration-300 ${
                viewMode === "grid" ? "left-1.5 right-1/2 mr-1" : "right-1.5 left-1/2 ml-1"
              }`}></div>
              
              <div className="relative flex">
                <button
                  onClick={() => viewMode !== "grid" && toggleViewMode()}
                  className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    viewMode === "grid"
                      ? "text-slate-700 dark:text-slate-200 z-10"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                  Grid
                </button>
                
                <button
                  onClick={() => viewMode !== "list" && toggleViewMode()}
                  className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    viewMode === "list"
                      ? "text-slate-700 dark:text-slate-200 z-10"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <List className="w-4 h-4" />
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}