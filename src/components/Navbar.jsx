// // src/components/Navbar.jsx
// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { ThemeContext } from '../contexts/ThemeContext'

// export default function Navbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext)

//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/40">
//       {/* Premium glass effect top border */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>
      
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <Link to="/" className="group flex items-center space-x-4">
//               {/* Premium Logo Icon */}
//               <div className="relative">
//                 <div className="w-12 h-12 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-600/25 group-hover:shadow-xl group-hover:shadow-slate-600/35 transition-all duration-300 group-hover:scale-105 border border-slate-500/20">
//                   <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/40 group-hover:animate-pulse"></div>
//               </div>
              
//               {/* Logo Text */}
//               <div className="flex flex-col">
//                 <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-indigo-600 group-hover:to-purple-700 dark:group-hover:from-blue-400 dark:group-hover:via-indigo-300 dark:group-hover:to-purple-400 transition-all duration-300">
//                   TalentFlow
//                 </span>
//                 <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
//                   Hiring Platform
//                 </span>
//               </div>
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-2">
//             <Link 
//               to="/jobs" 
//               className="group relative px-6 py-3 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
//             >
//               <span className="flex items-center gap-2">
//                 <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
//                 </svg>
//                 Jobs
//               </span>
//               <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </Link>
            
//             <Link 
//               to="/candidates" 
//               className="group relative px-6 py-3 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
//             >
//               <span className="flex items-center gap-2">
//                 <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
//                 </svg>
//                 Candidates
//               </span>
//               <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </Link>
            
//             <Link 
//               to="/assessments" 
//               className="group relative px-6 py-3 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
//             >
//               <span className="flex items-center gap-2">
//                 <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
//                 </svg>
//                 Assessments
//               </span>
//               <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </Link>
//           </div>

//           {/* Right Side Actions */}
//           <div className="flex items-center space-x-4">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="group relative p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-300 shadow-sm hover:shadow-lg border border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600"
//               aria-label="Toggle theme"
//             >
//               {theme === 'dark' ? (
//                 <svg className="w-5 h-5 text-amber-500 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
//                 </svg>
//               ) : (
//                 <svg className="w-5 h-5 text-slate-600 transition-transform group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//                 </svg>
//               )}
//             </button>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden group relative p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-300 shadow-sm hover:shadow-lg border border-slate-200/60 dark:border-slate-700/60">
//               <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//               </svg>
//             </button>

//             {/* Profile/User Section */}
//             <div className="hidden sm:flex items-center">
//               <button className="group relative p-2 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 dark:hover:from-slate-500 dark:hover:via-slate-400 dark:hover:to-slate-500 transition-all duration-300 shadow-lg shadow-slate-600/25 hover:shadow-xl hover:shadow-slate-600/35 hover:scale-105 border border-slate-500/20">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/40 animate-pulse"></div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Hidden by default) */}
//       <div className="md:hidden border-t border-slate-200/60 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
//         <div className="px-6 py-4 space-y-2">
//           <Link to="/jobs" className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium transition-all duration-300">
//             Jobs
//           </Link>
//           <Link to="/candidates" className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium transition-all duration-300">
//             Candidates
//           </Link>
//           <Link to="/assessments" className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium transition-all duration-300">
//             Assessments
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }



// src/components/Navbar.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/40">
      {/* Premium glass effect top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            {/* <Link to="/" className="group flex items-center space-x-4"> */}
              {/* Premium Logo Icon */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-600/25 group-hover:shadow-xl group-hover:shadow-slate-600/35 transition-all duration-300 group-hover:scale-105 border border-slate-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/40 group-hover:animate-pulse"></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-indigo-600 group-hover:to-purple-700 dark:group-hover:from-blue-400 dark:group-hover:via-indigo-300 dark:group-hover:to-purple-400 transition-all duration-300">
                  TalentFlow
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                  Hiring Platform
                </span>
              </div>
            {/* </Link> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Jobs */}
            <Link 
              to="/jobs" 
              className="group relative px-6 py-3 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
                Jobs
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            {/* Candidates */}
            <Link 
              to="/candidates" 
              className="group relative px-6 py-3 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Candidates
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* ✅ Candidate Board */}
            <Link 
              to="/candidate-board" 
              className="group relative px-6 py-3 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18m-18 4.5h18m-18 4.5h18" />
                </svg>
                Candidate Board
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            {/* Assessments */}
            {/* <Link 
              to="/assessments" 
              className="group relative px-6 py-3 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Assessments
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link> */}
          </div>

          {/* Right Side Actions (unchanged) */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {/* ... existing code unchanged ... */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-slate-200/60 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
        <div className="px-6 py-4 space-y-2">
          <Link to="/jobs" className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium transition-all duration-300">
            Jobs
          </Link>
          <Link to="/candidates" className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium transition-all duration-300">
            Candidates
          </Link>
          <Link to="/board" className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium transition-all duration-300">
            Candidate Board
          </Link>
          <Link to="/assessments" className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium transition-all duration-300">
            Assessments
          </Link>
        </div>
      </div>
    </nav>
  )
}
