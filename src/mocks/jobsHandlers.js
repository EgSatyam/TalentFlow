import { http, HttpResponse } from "msw";

export const jobsHandlers = [
  http.get("/jobs", () => {
    return HttpResponse.json([
      {
        id: "job-1",
        title: "Frontend Developer",
        slug: "frontend-developer",
        status: "active",
        tags: ["React", "JavaScript"],
        order: 1,
      },
      {
        id: "job-2",
        title: "Backend Developer",
        slug: "backend-developer",
        status: "archived",
        tags: ["Node", "Express"],
        order: 2,
      },
    ]);
  }),
];
