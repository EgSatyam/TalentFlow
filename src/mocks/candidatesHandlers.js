import { http, HttpResponse } from "msw";

export const candidatesHandlers = [
  http.get("/candidates", () => {
    return HttpResponse.json([
      {
        id: "cand-1",
        name: "Alice",
        email: "alice@example.com",
        stage: "applied",
      },
      {
        id: "cand-2",
        name: "Bob",
        email: "bob@example.com",
        stage: "screen",
      },
    ]);
  }),
];
