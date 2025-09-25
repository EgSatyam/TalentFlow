export default function JobFilters({
  query,
  setQuery,
  statusFilter,
  setStatusFilter,
  tagFilter,
  setTagFilter,
  sortBy,
  setSortBy,
  allTags,
  toggleViewMode,
  viewMode,
  onCreate,
}) {
  return (
    <div className="mb-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-2">
            Job Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
            Manage your job listings with ease
          </p>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
        </div>
        
        {/* Primary Action */}
        <button
          className="group relative px-8 py-3.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white rounded-2xl hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 transition-all duration-300 shadow-xl shadow-slate-600/25 hover:shadow-2xl hover:shadow-slate-600/35 hover:-translate-y-1 font-semibold text-lg border border-slate-500/20 hover:border-slate-400/30"
          onClick={onCreate}
        >
          <span className="flex items-center gap-3">
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create New Job
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </button>
      </div>

      {/* Filters Section */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm">
        {/* Glass morphism top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600 rounded-full"></div>
        
        <div className="flex items-center justify-between flex-wrap gap-6">
          {/* Search Section */}
          <div className="flex items-center gap-6 flex-wrap flex-1 min-w-0">
            {/* Search Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search job titles..."
                className="w-80 pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-4">
              {/* Status Filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none w-40 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
                >
                  <option value="">All Status</option>
                  <option value="active">✅ Active</option>
                  <option value="archived">📦 Archived</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Tags Filter */}
              <div className="relative">
                <select
                  value={tagFilter}
                  onChange={(e) => setTagFilter(e.target.value)}
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
              </div>

              {/* Sort Filter */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-36 px-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 dark:focus:ring-blue-400/20 dark:focus:border-blue-400/50 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 cursor-pointer pr-10"
                >
                  <option value="newest">🕐 Newest</option>
                  <option value="oldest">⏰ Oldest</option>
                  <option value="az">🔤 A–Z</option>
                  <option value="za">🔽 Z–A</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center">
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
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