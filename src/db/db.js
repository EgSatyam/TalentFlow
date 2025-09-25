// import Dexie from "dexie";

// export const db = new Dexie("TalentFlowDB");

// db.version(1).stores({
//   jobs: "++id, title, slug, status, order, tags, location, mode, salary, experience, roleDescription, company",
//   candidates: "++id, name, email, stage, jobId",
//   assessments: "++id, jobId, sections"
// });
import Dexie from "dexie";

// ✅ Central Dexie DB schema
export const db = new Dexie("TalentFlowDB");

db.version(3).stores({
  jobs: "++id, title, slug, status, order, tags, location, mode, salary, experience, roleDescription, company",
  candidates: "++id, name, email, stage, jobId",
  assessments: "++id, jobId, sections",
  submissions: "++id, jobId, candidateId",
  files: "++id, name, type, size",
});

