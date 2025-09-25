// // // src/pages/Dashboard.jsx
// // import React from "react";
// // import { Link } from "react-router-dom";

// // export default function Dashboard() {
// //   const pages = [
// //     { name: "Jobs Board", path: "/jobs" },
// //     { name: "Candidates", path: "/candidates" },
// //     { name: "Candidates Board", path: "/candidates-board" }, // 👈 link to your CandidateBoard
// //     { name: "Assessments", path: "/assessments" },
// //   ];

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-slate-900">
// //       <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md w-96">
// //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
// //           HR Dashboard
// //         </h2>
// //         <ul className="space-y-3">
// //           {pages.map((page) => (
// //             <li key={page.path}>
// //               <Link
// //                 to={page.path}
// //                 className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// //               >
// //                 {page.name}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }









// import React, { useState, useEffect } from "react";
// import { Briefcase, Users, ClipboardList, BarChart3, Bell, Search, Settings, LogOut, Plus, TrendingUp, Calendar, Star } from "lucide-react";

// export default function Dashboard() {
//   const [activeCard, setActiveCard] = useState(null);
//   const [notifications, setNotifications] = useState(3);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [greeting, setGreeting] = useState("");

//   // Set greeting based on time of day
//   useEffect(() => {
//     const hour = new Date().getHours();
//     if (hour < 12) setGreeting("Good Morning");
//     else if (hour < 17) setGreeting("Good Afternoon");
//     else setGreeting("Good Evening");
//   }, []);

//   const dashboardCards = [
//     { 
//       name: "Jobs Board", 
//       path: "/jobs",
//       icon: Briefcase,
//       description: "Manage job postings and openings",
//       color: "from-blue-500 to-blue-600",
//       hoverColor: "from-blue-600 to-blue-700",
//       stats: "12 Active",
//       trend: "+3 this week"
//     },
//     { 
//       name: "Candidates", 
//       path: "/candidates",
//       icon: Users,
//       description: "View and manage candidate profiles",
//       color: "from-emerald-500 to-emerald-600",
//       hoverColor: "from-emerald-600 to-emerald-700",
//       stats: "248 Total",
//       trend: "+15 this week"
//     },
//     { 
//       name: "Candidates Board", 
//       path: "/candidates-board",
//       icon: ClipboardList,
//       description: "Kanban view of candidate pipeline",
//       color: "from-purple-500 to-purple-600",
//       hoverColor: "from-purple-600 to-purple-700",
//       stats: "8 In Process",
//       trend: "2 interviews today"
//     },
//     { 
//       name: "Assessments", 
//       path: "/assessments",
//       icon: BarChart3,
//       description: "Create and review assessments",
//       color: "from-orange-500 to-orange-600",
//       hoverColor: "from-orange-600 to-orange-700",
//       stats: "5 Pending",
//       trend: "3 completed today"
//     }
//   ];

//   const quickStats = [
//     { label: "Open Positions", value: "12", change: "+2", icon: Briefcase },
//     { label: "Active Candidates", value: "248", change: "+15", icon: Users },
//     { label: "Interviews Today", value: "6", change: "0", icon: Calendar },
//     { label: "Completion Rate", value: "94%", change: "+2%", icon: TrendingUp }
//   ];

//   const recentActivities = [
//     { action: "New candidate applied", job: "Senior Developer", time: "2 min ago", type: "application" },
//     { action: "Interview scheduled", candidate: "Sarah Chen", time: "1 hour ago", type: "interview" },
//     { action: "Assessment completed", candidate: "Mike Johnson", time: "3 hours ago", type: "assessment" },
//     { action: "Job posting published", job: "UX Designer", time: "1 day ago", type: "job" }
//   ];

//   const handleCardClick = async (card) => {
//     setActiveCard(card.name);
//     setIsLoading(true);
    
//     // Simulate navigation with optimistic feedback
//     await new Promise(resolve => setTimeout(resolve, 800));
    
//     // In a real app, this would use navigate(card.path)
//     alert(`Navigating to ${card.name}...`);
    
//     setIsLoading(false);
//     setActiveCard(null);
//   };

//   const handleQuickAction = (action) => {
//     alert(`Quick action: ${action}`);
//   };

//   const filteredCards = dashboardCards.filter(card =>
//     card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     card.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//       {/* Header */}
//       <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
//                 <Briefcase className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
//                   TalentFlow
//                 </h1>
//                 <p className="text-sm text-slate-600 dark:text-slate-400">HR Management System</p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               {/* Search */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-64"
//                 />
//               </div>
              
//               {/* Notifications */}
//               <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
//                 <Bell className="w-5 h-5" />
//                 {notifications > 0 && (
//                   <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
//                     {notifications}
//                   </span>
//                 )}
//               </button>
              
//               {/* Settings */}
//               <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
//                 <Settings className="w-5 h-5" />
//               </button>
              
//               {/* Logout */}
//               <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
//                 <LogOut className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Greeting Section */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
//             {greeting}, HR Team! 👋
//           </h2>
//           <p className="text-slate-600 dark:text-slate-400">
//             Here's what's happening with your recruitment pipeline today.
//           </p>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {quickStats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl">
//                   <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <span className={`text-sm font-medium px-2 py-1 rounded-full ${
//                   stat.change.startsWith('+') ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' :
//                   stat.change === '0' ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' :
//                   'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
//                 }`}>
//                   {stat.change}
//                 </span>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</p>
//                 <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Dashboard Cards */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Quick Access</h3>
//               <button
//                 onClick={() => handleQuickAction("Create New Job")}
//                 className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
//               >
//                 <Plus className="w-4 h-4" />
//                 <span>New Job</span>
//               </button>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {filteredCards.map((card) => (
//                 <div
//                   key={card.name}
//                   onClick={() => handleCardClick(card)}
//                   className={`group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
//                     activeCard === card.name ? 'ring-2 ring-blue-500 scale-105' : ''
//                   }`}
//                 >
//                   {/* Background gradient on hover */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
//                   <div className="relative">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className={`p-3 bg-gradient-to-br ${card.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                         <card.icon className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="text-right">
//                         <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{card.stats}</p>
//                         <p className="text-xs text-slate-500 dark:text-slate-500">{card.trend}</p>
//                       </div>
//                     </div>
                    
//                     <div className="mb-4">
//                       <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                         {card.name}
//                       </h4>
//                       <p className="text-sm text-slate-600 dark:text-slate-400">
//                         {card.description}
//                       </p>
//                     </div>
                    
//                     {/* Loading state */}
//                     {activeCard === card.name && isLoading && (
//                       <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex items-center justify-center rounded-2xl">
//                         <div className="flex items-center space-x-2">
//                           <div className="w-5 h-5 border-2 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
//                           <span className="text-sm text-slate-600 dark:text-slate-400">Loading...</span>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Recent Activity Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6">
//               <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
//                 <Star className="w-5 h-5 mr-2 text-yellow-500" />
//                 Recent Activity
//               </h3>
              
//               <div className="space-y-4">
//                 {recentActivities.map((activity, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
//                   >
//                     <div className={`w-2 h-2 rounded-full mt-2 ${
//                       activity.type === 'application' ? 'bg-green-500' :
//                       activity.type === 'interview' ? 'bg-blue-500' :
//                       activity.type === 'assessment' ? 'bg-orange-500' :
//                       'bg-purple-500'
//                     }`}></div>
//                     <div className="flex-1">
//                       <p className="text-sm text-slate-800 dark:text-white font-medium">
//                         {activity.action}
//                       </p>
//                       {activity.job && (
//                         <p className="text-xs text-slate-600 dark:text-slate-400">
//                           {activity.job}
//                         </p>
//                       )}
//                       {activity.candidate && (
//                         <p className="text-xs text-slate-600 dark:text-slate-400">
//                           {activity.candidate}
//                         </p>
//                       )}
//                       <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
//                         {activity.time}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <button className="w-full mt-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
//                 View All Activity →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Users,
  ClipboardList,
  BarChart3,
  Search,
  Settings,
  LogOut,
  Plus,
  TrendingUp,
  Calendar,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [activeCard, setActiveCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [greeting, setGreeting] = useState("");

  const navigate = useNavigate();

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const dashboardCards = [
    {
      name: "Jobs Board",
      path: "/jobs",
      icon: Briefcase,
      description: "Manage job postings and openings",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700",
      stats: "30 Active",
      trend: "+3 this week",
    },
    {
      name: "Candidates",
      path: "/candidates",
      icon: Users,
      description: "View and manage candidate profiles",
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "from-emerald-600 to-emerald-700",
      stats: "1000 Total",
      trend: "+15 this week",
    },
    {
      name: "Candidates Board",
      path: "/candidates-board",
      icon: ClipboardList,
      description: "Kanban view of candidate pipeline",
      color: "from-purple-500 to-purple-600",
      hoverColor: "from-purple-600 to-purple-700",
      stats: "8 In Process",
      trend: "2 interviews today",
    },
    {
      name: "Assessments",
      path: "/assessments",
      icon: BarChart3,
      description: "Create and review assessments",
      color: "from-orange-500 to-orange-600",
      hoverColor: "from-orange-600 to-orange-700",
      stats: "5 Pending",
      trend: "3 completed today",
    },
  ];

  const quickStats = [
    { label: "Open Positions", value: "28", change: "+2", icon: Briefcase },
    { label: "Active Candidates", value: "985", change: "+15", icon: Users },
    { label: "Interviews Today", value: "6", change: "0", icon: Calendar },
    { label: "Completion Rate", value: "94%", change: "+2%", icon: TrendingUp },
  ];

  const recentActivities = [
    {
      action: "New candidate applied",
      job: "Senior Developer",
      time: "2 min ago",
      type: "application",
    },
    {
      action: "Interview scheduled",
      candidate: "Sarah Chen",
      time: "1 hour ago",
      type: "interview",
    },
    {
      action: "Assessment completed",
      candidate: "Mike Johnson",
      time: "3 hours ago",
      type: "assessment",
    },
    {
      action: "Job posting published",
      job: "UX Designer",
      time: "1 day ago",
      type: "job",
    },
  ];

  const handleCardClick = async (card) => {
    setActiveCard(card.name);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    navigate(card.path); // ✅ real navigation

    setIsLoading(false);
    setActiveCard(null);
  };

  const handleQuickAction = (action) => {
    alert(`Quick action: ${action}`);
  };

  const filteredCards = dashboardCards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  TalentFlow
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  HR Management System
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-64"
                />
              </div>

              {/* Settings */}
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                <Settings className="w-5 h-5" />
              </button>

              {/* Logout */}
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Greeting Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            {greeting}, HR Team! 👋
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Here's what's happening with your recruitment pipeline today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl">
                  <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.change.startsWith("+")
                      ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      : stat.change === "0"
                      ? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      : "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard Cards */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                Quick Access
              </h3>
              <button
                onClick={() => handleQuickAction("Create New Job")}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                <span>New Job</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCards.map((card) => (
                <div
                  key={card.name}
                  onClick={() => handleCardClick(card)}
                  className={`group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    activeCard === card.name ? "ring-2 ring-blue-500 scale-105" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 bg-gradient-to-br ${card.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {card.stats}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">
                          {card.trend}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {card.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {card.description}
                      </p>
                    </div>

                    {activeCard === card.name && isLoading && (
                      <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex items-center justify-center rounded-2xl">
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            Loading...
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Recent Activity
              </h3>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "application"
                          ? "bg-green-500"
                          : activity.type === "interview"
                          ? "bg-blue-500"
                          : activity.type === "assessment"
                          ? "bg-orange-500"
                          : "bg-purple-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-800 dark:text-white font-medium">
                        {activity.action}
                      </p>
                      {activity.job && (
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {activity.job}
                        </p>
                      )}
                      {activity.candidate && (
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {activity.candidate}
                        </p>
                      )}
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                View All Activity →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
