// // // // // src/main.jsx
// // // // import React from 'react'
// // // // import ReactDOM from 'react-dom/client'
// // // // import { BrowserRouter } from 'react-router-dom'
// // // // import App from './App.jsx'
// // // // import './index.css'
// // // // import { ThemeProvider } from './contexts/ThemeContext'
// // // // import { worker } from './mocks/browser'

// // // // async function init() {
// // // //   if (import.meta.env.DEV) {
// // // //     await worker.start({ onUnhandledRequest: 'bypass' })
// // // //     console.log('[MSW] Mock Service Worker started')
// // // //   }

// // // //   ReactDOM.createRoot(document.getElementById('root')).render(
// // // //     <React.StrictMode>
// // // //       <BrowserRouter>
// // // //         <ThemeProvider>
// // // //           <App />
// // // //         </ThemeProvider>
// // // //       </BrowserRouter>
// // // //     </React.StrictMode>,
// // // //   )
// // // // }








// // // // init()
// // // // src/main.jsx
// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import { BrowserRouter } from "react-router-dom";
// // // import App from "./App.jsx";
// // // import "./index.css";
// // // import { ThemeProvider } from "./contexts/ThemeContext";
// // // import { worker } from "./mocks/browser";
// // // import { db } from "./mocks/handlers"; // ✅ we already defined Dexie in handlers
// // // // (if you move db/seed logic into its own file later, you can import from there)

// // // async function seedDatabase() {
// // //   const jobsCount = await db.jobs.count();
// // //   if (jobsCount === 0) {
// // //     console.log("⚡ Database will be seeded by handlers.js on startup");
// // //     // note: our handlers.js already calls seedData() internally
// // //   }
// // // }

// // // async function init() {
// // //   if (import.meta.env.DEV) {
// // //     await worker.start({ onUnhandledRequest: "bypass" });
// // //     console.log("[MSW] Mock Service Worker started");
// // //   }

// // //   // ✅ Ensure DB seeded before app render
// // //   await seedDatabase();

// // //   ReactDOM.createRoot(document.getElementById("root")).render(
// // //     <React.StrictMode>
// // //       <BrowserRouter>
// // //         <ThemeProvider>
// // //           <App />
// // //         </ThemeProvider>
// // //       </BrowserRouter>
// // //     </React.StrictMode>
// // //   );
// // // }

// // // init();




// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter } from "react-router-dom";
// // import App from "./App.jsx";
// // import "./index.css";
// // import { ThemeProvider } from "./contexts/ThemeContext";
// // import { worker } from "./mocks/browser";
// // import { seedDatabase } from "./db/seed";  // ✅ import seeding here

// // async function init() {
// //   if (import.meta.env.DEV) {
// //     await worker.start({ onUnhandledRequest: "bypass" });
// //     console.log("[MSW] Mock Service Worker started");
// //   }

// //   // ✅ Ensure DB seeded
// //   await seedDatabase();

// //   ReactDOM.createRoot(document.getElementById("root")).render(
// //     <React.StrictMode>
// //       <BrowserRouter>
// //         <ThemeProvider>
// //           <App />
// //         </ThemeProvider>
// //       </BrowserRouter>
// //     </React.StrictMode>
// //   );
// // }

// // init();


// // start

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import { worker } from "./mocks/browser";
// import { seedDatabase } from "./db/seed";

// async function init() {
//   if (import.meta.env.DEV) {
//     await worker.start({ onUnhandledRequest: "bypass" });
//     console.log("[MSW] Mock Service Worker started");
//   }

//   // ✅ Force reseed once to clear out old 50 candidates
//   await seedDatabase(true);

//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <ThemeProvider>
//           <App />
//         </ThemeProvider>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// }

// init();




import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { worker } from "./mocks/browser";
import { seedDatabase } from "./db/seed";

async function init() {
  if (import.meta.env.DEV) {
    // 🟢 Start MSW first
    await worker.start({ onUnhandledRequest: "warn" });
    console.log("✅ [MSW] Mock Service Worker started");
  }

  // 🟢 Then seed the DB
  await seedDatabase(true);

  // 🟢 Finally render React
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

init();
