import { http, HttpResponse, delay } from "msw";
import {
  saveAssessment,
  loadAssessment,
  saveSubmission,
  loadSubmissions,
} from "../db/assessments";

// Artificial delay + error rate
async function maybeDelay() {
  await delay(300 + Math.random() * 900); // 200–1200ms
  if (Math.random() < 0.07) {
    // ~7% error rate
    throw HttpResponse.json(
      { message: "Random network error" },
      { status: 500 }
    );
  }
}

export const assessmentsHandlers = [
  // GET /assessments/:jobId
  http.get("/assessments/:jobId", async ({ params }) => {
    try {
      await maybeDelay();
      const { jobId } = params;
      const assessment = await loadAssessment(jobId);
      return HttpResponse.json(
        assessment || { jobId, sections: [] },
        { status: 200 }
      );
    } catch (err) {
      return err instanceof HttpResponse ? err : HttpResponse.error();
    }
  }),

  // PUT /assessments/:jobId
  http.put("/assessments/:jobId", async ({ params, request }) => {
    try {
      await maybeDelay();
      const { jobId } = params;
      const data = await request.json();
      await saveAssessment(jobId, data);
      return HttpResponse.json({ success: true }, { status: 200 });
    } catch (err) {
      return err instanceof HttpResponse ? err : HttpResponse.error();
    }
  }),

  // POST /assessments/:jobId/submit
  http.post("/assessments/:jobId/submit", async ({ params, request }) => {
    try {
      await maybeDelay();
      const { jobId } = params;
      const { candidateId, response } = await request.json();
      await saveSubmission(jobId, candidateId, response);
      return HttpResponse.json({ success: true }, { status: 201 });
    } catch (err) {
      return err instanceof HttpResponse ? err : HttpResponse.error();
    }
  }),

  // GET /assessments/:jobId/submissions?candidateId=123
  http.get("/assessments/:jobId/submissions", async ({ params, request }) => {
    try {
      await maybeDelay();
      const { jobId } = params;
      const url = new URL(request.url);
      const candidateId = url.searchParams.get("candidateId");
      const subs = await loadSubmissions(jobId, candidateId);
      return HttpResponse.json(subs, { status: 200 });
    } catch (err) {
      return err instanceof HttpResponse ? err : HttpResponse.error();
    }
  }),
];
