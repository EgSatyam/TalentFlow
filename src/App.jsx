// // // // // import { useContext } from "react";
// // // // // import { Routes, Route } from "react-router-dom";
// // // // // import Navbar from "./components/Navbar";
// // // // // import Jobs from "./pages/Jobs/Jobs.jsx";
// // // // // import CandidatesVirtualized from "./pages/candidates/CandidatesVirtualized.jsx";
// // // // // import Assessments from "./pages/assessment";
// // // // // import { ThemeContext } from "./contexts/ThemeContext";
// // // // // import CandidateBoard from "./pages/candidates/CandidateBoard.jsx";
// // // // // import AssessmentPage from "./pages/assessment";
// // // // // import SubmissionsPage from "./pages/assessment/SubmissionsPage";
// // // // // import Candidates from "./pages/candidates2/Candidates.jsx";
// // // // // function App() {
// // // // //   const { theme } = useContext(ThemeContext);

// // // // //   const pageClasses =
// // // // //     theme === "dark"
// // // // //       ? "min-h-screen bg-gray-900 text-white"
// // // // //       : "min-h-screen bg-gray-50 text-gray-900";

// // // // //   return (
// // // // //     <div className={pageClasses}>
// // // // //       <Navbar />
// // // // //       <main className="p-6 max-w-7xl mx-auto">
// // // // //         <Routes>
// // // // //           <Route path="/jobs" element={<Jobs />} />
// // // // //           <Route path="/candidates" element={<Candidates />} />
// // // // //           <Route path="/assessments" element={<AssessmentPage />} />
// // // // //           <Route path="/" element={<Jobs />} />
// // // // //           <Route path="/board" element={<CandidateBoard />} />
// // // // //           <Route path="/assessments/:jobId/submissions" element={<SubmissionsPage />} />
// // // // //         </Routes>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;





// // // // import { useContext } from "react";
// // // // import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// // // // import Navbar from "./components/Navbar";
// // // // import Jobs from "./pages/Jobs/Jobs.jsx";
// // // // import CandidatesVirtualized from "./pages/candidates/CandidatesVirtualized.jsx";
// // // // import Assessments from "./pages/assessment";
// // // // import { ThemeContext } from "./contexts/ThemeContext";
// // // // import CandidateBoard from "./pages/candidates/CandidateBoard.jsx";
// // // // import AssessmentPage from "./pages/assessment";
// // // // import SubmissionsPage from "./pages/assessment/SubmissionsPage";
// // // // import Candidates from "./pages/candidates2/Candidates.jsx";
// // // // import Login from "./pages/Login.jsx";        
// // // // import Dashboard from "./pages/Dashboard.jsx"; 

// // // // function PrivateRoute({ children }) {
// // // //   const isAuth = localStorage.getItem("isAuthenticated") === "true";
// // // //   return isAuth ? children : <Navigate to="/login" />;
// // // // }

// // // // function App() {
// // // //   const { theme } = useContext(ThemeContext);
// // // //   const location = useLocation(); // 👈 get current route

// // // //   const pageClasses =
// // // //     theme === "dark"
// // // //       ? "min-h-screen bg-gray-900 text-white"
// // // //       : "min-h-screen bg-gray-50 text-gray-900";

// // // //   // Hide navbar on login page
// // // //   const hideNavbar = location.pathname === "/login";

// // // //   return (
// // // //     <div className={pageClasses}>
// // // //       {!hideNavbar && <Navbar />} {/* 👈 conditionally render */}
// // // //       <main className="p-6 max-w-7xl mx-auto">
// // // //         <Routes>
// // // //           {/* Auth */}
// // // //           <Route path="/login" element={<Login />} />
// // // //           <Route
// // // //             path="/dashboard"
// // // //             element={
// // // //               <PrivateRoute>
// // // //                 <Dashboard />
// // // //               </PrivateRoute>
// // // //             }
// // // //           />

// // // //           {/* Existing modules */}
// // // //           <Route path="/jobs" element={<Jobs />} />
// // // //           <Route path="/candidates" element={<Candidates />} />
// // // //           <Route path="/assessments" element={<AssessmentPage />} />
// // // //           <Route path="/candidates-board" element={<CandidateBoard />} />
// // // //           <Route
// // // //             path="/assessments/:jobId/submissions"
// // // //             element={<SubmissionsPage />}
// // // //           />

// // // //           {/* Default route → send to login */}
// // // //           <Route path="/" element={<Navigate to="/login" />} />
// // // //           {/* <Route path="*" element={<Navigate to="/login" />} /> */}
// // // //         </Routes>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;







// // // import { useContext } from "react";
// // // import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Jobs from "./pages/Jobs/Jobs.jsx";
// // // import CandidateBoard from "./pages/candidates/CandidateBoard.jsx";
// // // import AssessmentPage from "./pages/assessment"; // ✅ single import
// // // import SubmissionsPage from "./pages/assessment/SubmissionsPage";
// // // import Candidates from "./pages/candidates2/Candidates.jsx";
// // // import Login from "./pages/Login.jsx";
// // // import Dashboard from "./pages/Dashboard.jsx";
// // // import { ThemeContext } from "./contexts/ThemeContext";

// // // function PrivateRoute({ children }) {
// // //   const isAuth = localStorage.getItem("isAuthenticated") === "true";
// // //   return isAuth ? children : <Navigate to="/login" />;
// // // }

// // // function App() {
// // //   const { theme } = useContext(ThemeContext);
// // //   const location = useLocation();

// // //   const pageClasses =
// // //     theme === "dark"
// // //       ? "min-h-screen bg-gray-900 text-white"
// // //       : "min-h-screen bg-gray-50 text-gray-900";

// // //   const hideNavbar = location.pathname === "/login";

// // //   return (
// // //     <div className={pageClasses}>
// // //       {!hideNavbar && <Navbar />}
// // //       <main className="p-6 max-w-7xl mx-auto">
// // //         <Routes>
// // //           {/* Auth */}
// // //           <Route path="/login" element={<Login />} />
// // //           <Route
// // //             path="/dashboard"
// // //             element={
// // //               <PrivateRoute>
// // //                 <Dashboard />
// // //               </PrivateRoute>
// // //             }
// // //           />

// // //           {/* Pages */}
// // //           <Route path="/jobs" element={<Jobs />} />
// // //           <Route path="/candidates" element={<Candidates />} />
// // //           <Route path="/candidate-board" element={<CandidateBoard />} />
// // //           <Route path="/assessments" element={<AssessmentPage />} />
// // //           <Route
// // //             path="/assessments/:jobId/submissions"
// // //             element={<SubmissionsPage />}
// // //           />
// // //           <Route path="/assessments/:jobId" element={<AssessmentBuilder />} />


// // //           {/* Optional alias if you ever need /board */}
// // //           {/* <Route path="/board" element={<CandidateBoard />} /> */}

// // //           {/* Default route → send to login */}
// // //           <Route path="/" element={<Navigate to="/login" />} />
// // //           {/* Catch-all for invalid URLs */}
// // //           <Route path="*" element={<Navigate to="/login" />} />
// // //         </Routes>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // export default App;







// // import React, { useContext, useState, useEffect } from "react";
// // import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Jobs from "./pages/Jobs/Jobs.jsx";
// // import CandidateBoard from "./pages/candidates/CandidateBoard.jsx";
// // import AssessmentPage from "./pages/assessment";
// // import AssessmentBuilder from "./pages/assessment/components/AssessmentBuilder";
// // import SubmissionsPage from "./pages/assessment/SubmissionsPage";
// // import Candidates from "./pages/candidates2/Candidates.jsx";
// // import Login from "./pages/Login.jsx";
// // import Dashboard from "./pages/Dashboard.jsx";
// // import { ThemeContext } from "./contexts/ThemeContext";


// // // ✅ New overview page
// // // function AssessmentsOverview() {
// // //   const [assessments, setAssessments] = React.useState([]);

// // //   React.useEffect(() => {
// // //     fetch("/assessments")
// // //       .then((res) => res.json())
// // //       .then((data) => setAssessments(data))
// // //       .catch((err) => console.error("❌ Failed to load assessments", err));
// // //   }, []);

// // //   return (
// // //     <div className="p-6">
// // //       <h1 className="text-2xl font-bold mb-4">Available Assessments</h1>
// // //       <ul className="space-y-2">
// // //         {assessments.map((a) => (
// // //           <li key={a.id}>
// // //             <a
// // //               href={`/assessments/${a.jobId}`}
// // //               className="text-blue-500 hover:underline"
// // //             >
// // //               {a.title}
// // //             </a>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }


// // // ✅ New overview page
// // function AssessmentsOverview() {
// //   const [assessments, setAssessments] = React.useState([]);

// //   React.useEffect(() => {
// //     fetch("/assessments")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log("📌 /assessments response:", data);

// //         // Handle both array and object with data field
// //         if (Array.isArray(data)) {
// //           setAssessments(data);
// //         } else if (Array.isArray(data.data)) {
// //           setAssessments(data.data);
// //         } else {
// //           setAssessments([]); // fallback
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("❌ Failed to load assessments", err);
// //         setAssessments([]);
// //       });
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Available Assessments</h1>
// //       {assessments.length === 0 ? (
// //         <p className="text-gray-500">No assessments available.</p>
// //       ) : (
// //         <ul className="space-y-2">
// //           {assessments.map((a) => (
// //             <li key={a.id}>
// //               <Link
// //                 to={`/assessments/${a.jobId}`}
// //                 className="text-blue-500 hover:underline"
// //               >
// //                 {a.title}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }

// // function PrivateRoute({ children }) {
// //   const isAuth = localStorage.getItem("isAuthenticated") === "true";
// //   return isAuth ? children : <Navigate to="/login" />;
// // }

// // function App() {
// //   const { theme } = useContext(ThemeContext);
// //   const location = useLocation();

// //   const pageClasses =
// //     theme === "dark"
// //       ? "min-h-screen bg-gray-900 text-white"
// //       : "min-h-screen bg-gray-50 text-gray-900";

// //   const hideNavbar = location.pathname === "/login";

// //   return (
// //     <div className={pageClasses}>
// //       {!hideNavbar && <Navbar />}
// //       <main className="p-6 max-w-7xl mx-auto">
// //         <Routes>
// //           {/* Auth */}
// //           <Route path="/login" element={<Login />} />
// //           <Route
// //             path="/dashboard"
// //             element={
// //               <PrivateRoute>
// //                 <Dashboard />
// //               </PrivateRoute>
// //             }
// //           />

// //           {/* Pages */}
// //           <Route path="/jobs" element={<Jobs />} />
// //           <Route path="/candidates" element={<Candidates />} />
// //           <Route path="/candidate-board" element={<CandidateBoard />} />

// //           {/* ✅ Assessments */}
// //           <Route path="/assessments" element={<AssessmentsOverview />} />
// //           <Route path="/assessments/:jobId" element={<AssessmentPage />} />
// //           <Route
// //             path="/assessments/:jobId/submissions"
// //             element={<SubmissionsPage />}
// //           />

// //           {/* Default */}
// //           <Route path="/" element={<Navigate to="/login" />} />
// //           <Route path="*" element={<Navigate to="/login" />} />
// //         </Routes>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;



// import React, { useContext } from "react";
// import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Jobs from "./pages/Jobs/Jobs.jsx";
// import CandidateBoard from "./pages/candidates/CandidateBoard.jsx";
// import AssessmentsBuilderPage from "./pages/assessment/pages/AssessmentsBuilderPage"; // ✅ fixed
// // import SubmissionsPage from "./pages/assessment/SubmissionsPage"; // if this file exists
// import Candidates from "./pages/candidates2/Candidates.jsx";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import { ThemeContext } from "./contexts/ThemeContext";

// // ✅ Assessments overview
// function AssessmentsOverview() {
//   const [assessments, setAssessments] = React.useState([]);

//   React.useEffect(() => {
//     fetch("/assessments")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("📌 /assessments response:", data);

//         if (Array.isArray(data)) {
//           setAssessments(data);
//         } else if (Array.isArray(data.data)) {
//           setAssessments(data.data);
//         } else {
//           setAssessments([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Failed to load assessments", err);
//         setAssessments([]);
//       });
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Available Assessments</h1>
//       {assessments.length === 0 ? (
//         <p className="text-gray-500">No assessments available.</p>
//       ) : (
//         <ul className="space-y-2">
//           {assessments.map((a) => (
//             <li key={a.id}>
//               <Link
//                 to={`/assessments/${a.jobId}`}
//                 className="text-blue-500 hover:underline"
//               >
//                 {a.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// function PrivateRoute({ children }) {
//   const isAuth = localStorage.getItem("isAuthenticated") === "true";
//   return isAuth ? children : <Navigate to="/login" />;
// }

// function App() {
//   const { theme } = useContext(ThemeContext);
//   const location = useLocation();

//   const pageClasses =
//     theme === "dark"
//       ? "min-h-screen bg-gray-900 text-white"
//       : "min-h-screen bg-gray-50 text-gray-900";

//   const hideNavbar = location.pathname === "/login";

//   return (
//     <div className={pageClasses}>
//       {!hideNavbar && <Navbar />}
//       <main className="p-6 max-w-7xl mx-auto">
//         <Routes>
//           {/* Auth */}
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />

//           {/* Pages */}
//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/candidates" element={<Candidates />} />
//           <Route path="/candidate-board" element={<CandidateBoard />} />

//           {/* ✅ Assessments */}
//           <Route path="/assessments" element={<AssessmentsOverview />} />
//           <Route path="/assessments/:jobId" element={<AssessmentsBuilderPage />} />
//           {/* <Route
//             path="/assessments/:jobId/submissions"
//             element={<SubmissionsPage />}
//           /> */}

//           {/* Default */}
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;






import { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs/Jobs.jsx";
import CandidateBoard from "./pages/candidates/CandidateBoard.jsx";
import AssessmentPage from "./pages/assessment/AssessmentPage.jsx";
 // ✅ old assessment page
import SubmissionsPage from "./pages/assessment/SubmissionsPage"; // ✅ if it exists
import Candidates from "./pages/candidates2/Candidates.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { ThemeContext } from "./contexts/ThemeContext";

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  return isAuth ? children : <Navigate to="/login" />;
}

function App() {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const pageClasses =
    theme === "dark"
      ? "min-h-screen bg-gray-900 text-white"
      : "min-h-screen bg-gray-50 text-gray-900";

  // hide navbar on login
  const hideNavbar = location.pathname === "/login";

  return (
    <div className={pageClasses}>
      {!hideNavbar && <Navbar />}
      <main className="p-6 max-w-7xl mx-auto">
        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Main Pages */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          {/* <Route path="/candidate-board" element={<CandidateBoard />} /> */}
          <Route
  path="/candidate-board"
  element={
    <PrivateRoute>
      <CandidateBoard />
    </PrivateRoute>
  }
/>

          {/* Assessments */}
          <Route path="/assessments" element={<AssessmentPage />} />
          <Route
            path="/assessments/:jobId/submissions"
            element={<SubmissionsPage />}
          />

          {/* Default */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
