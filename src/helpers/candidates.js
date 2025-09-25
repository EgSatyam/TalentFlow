// // import { db } from "../db"; // Dexie instance

// // // Fetch all candidates grouped by stage
// // export async function fetchCandidatesByStage(jobId = null) {
// //   let candidates = await db.candidates.toArray();

// //   // Optional: filter by jobId
// //   if (jobId) {
// //     candidates = candidates.filter((c) => c.jobId === jobId);
// //   }

// //   // Group into { stage: [] }
// //   const stages = ["applied", "screening", "tech", "offer", "hired", "rejected"];
// //   const grouped = Object.fromEntries(stages.map((s) => [s, []]));

// //   candidates.forEach((c) => {
// //     if (grouped[c.stage]) {
// //       grouped[c.stage].push(c);
// //     }
// //   });

// //   return grouped;
// // }




// import { db } from "../db"; // Dexie instance

// /**
//  * Fetch candidates grouped by stage, with optional job filter + pagination.
//  * @param {Object} options
//  * @param {number} options.page - page number (1-based)
//  * @param {number} options.pageSize - number of candidates per page
//  * @param {number|null} options.jobId - optional filter by jobId
//  */
// export async function fetchCandidatesByStage({ page = 1, pageSize = 20, jobId = null }) {
//   let query = db.candidates;

//   if (jobId) {
//     query = query.where("jobId").equals(jobId);
//   }

//   // Paginate
//   const offset = (page - 1) * pageSize;
//   const candidates = await query.offset(offset).limit(pageSize).toArray();

//   // Group into { stage: [] }
//   const stages = ["applied", "screening", "tech", "offer", "hired", "rejected"];
//   const grouped = Object.fromEntries(stages.map((s) => [s, []]));

//   candidates.forEach((c) => {
//     if (grouped[c.stage]) {
//       grouped[c.stage].push(c);
//     }
//   });

//   return grouped;
// }




import { db } from "../db"; // Dexie instance

/**
 * Fetch candidates by page.
 * Example: page=1 → 1–50, page=2 → 51–100 ...
 *
 * @param {Object} options
 * @param {number} options.page - page number (1-based)
 * @param {number} options.pageSize - number of candidates per page
 * @param {number|null} options.jobId - optional filter by jobId
 * @returns {Array} candidates for that page
 */
export async function fetchCandidatesByPage({ page = 1, pageSize = 50, jobId = null }) {
  if (page < 1) page = 1;

  let query = db.candidates;

  // Filter by job if provided
  if (jobId) {
    query = query.where("jobId").equals(jobId);
  }

  // Calculate offset
  const offset = (page - 1) * pageSize;

  // Return candidates for that page
  const candidates = await query.offset(offset).limit(pageSize).toArray();

  return candidates;
}
