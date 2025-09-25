import Dexie from "dexie";

// ---------- Dexie DB setup ----------
const db = new Dexie("TalentFlowDB");

db.version(1).stores({
  assessments: "jobId", // store builder per job
  submissions: "++id, jobId, candidateId", // store candidate responses
});

// ---------- Helpers: Assessments ----------
export async function saveAssessment(jobId, assessment) {
  await db.assessments.put({
    jobId,
    assessment,
    updatedAt: new Date().toISOString(),
  });
}

export async function loadAssessment(jobId) {
  const entry = await db.assessments.get(jobId);
  return entry ? entry.assessment : null;
}

// ---------- Helpers: Submissions ----------
export async function saveSubmission(jobId, candidateId, response) {
  await db.submissions.add({
    jobId,
    candidateId,
    response,
    createdAt: new Date().toISOString(),
  });
}

export async function loadSubmissions(jobId, candidateId) {
  if (candidateId) {
    return await db.submissions
      .where({ jobId, candidateId })
      .toArray();
  }
  return await db.submissions.where("jobId").equals(jobId).toArray();
}

export default db;
