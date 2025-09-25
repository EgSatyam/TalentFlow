// // // src/mocks/browser.js
// // // Import setupWorker from the browser entrypoint
// // import { setupWorker } from 'msw/browser'
// // import { handlers } from './handlers'

// // export const worker = setupWorker(...handlers)
 import { setupWorker } from "msw/browser";
 import { handlers } from "./handlers";

// export const worker = setupWorker(...handlers);
// import { setupWorker } from "msw/browser";
// import { jobsHandlers } from "./jobsHandlers";
// import { candidatesHandlers } from "./candidatesHandlers";
// import { assessmentsHandlers } from "./assessmentsHandlers";

export const worker = setupWorker(...handlers);
  // ...jobsHandlers,
  // ...candidatesHandlers,
  // ...assessmentsHandlers
// );
