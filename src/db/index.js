// import Dexie from "dexie";

// export const db = new Dexie("TalentFlowDB");

// db.version(1).stores({
//   jobs: "++id, title, slug, status, order",
//   candidates: "++id, jobId, name, email, stage",
//   assessments: "++id, jobId" // 👈 new table
// });





import Dexie from "dexie";

export const db = new Dexie("TalentFlowDB");

db.version(2).stores({
  jobs: "++id, title, slug, status, order",
  candidates: "++id, jobId, name, email, stage",
  assessments: "++id, jobId",
  submissions: "++id, jobId, candidateId"  // ✅ add this
});
