// // // // src/mocks/handlers.js
// // // import { http, HttpResponse, delay } from "msw";
// // // import Dexie from "dexie";

// // // // ---------- Dexie DB setup ----------
// // // const db = new Dexie("TalentFlowDB");
// // // db.version(2).stores({
// // //   jobs: "++id, title, slug, status, order, tags, location, mode, salary, experience, roleDescription, company",
// // //   candidates: "++id, name, email, stage, jobId",
// // //   assessments: "++id, jobId, sections",
// // // });

// // // // ---------- Seed Data ----------
// // // async function seedData() {
// // //   try {
// // //     const count = await db.jobs.count();
// // //     if (count === 0) {
// // //       console.log("🌱 Seeding DB...");

// // //       // --- 30 Jobs ---
// // //       const jobTitles = [
// // //         "Frontend Developer","Backend Developer","Fullstack Engineer","Mobile App Developer","DevOps Engineer",
// // //         "QA Engineer","Data Scientist","Machine Learning Engineer","Product Manager","UI/UX Designer",
// // //         "Cloud Engineer","Database Administrator","Game Developer","Embedded Systems Engineer","Cybersecurity Analyst",
// // //         "Technical Writer","System Architect","Blockchain Developer","AI Researcher","Site Reliability Engineer",
// // //         "AR/VR Developer","Automation Engineer","SEO Specialist","Support Engineer","Network Engineer",
// // //         "IT Consultant","Software Engineer","Test Automation Specialist","Integration Engineer","Business Analyst"
// // //       ];
// // //       const jobs = jobTitles.map((title, i) => ({
// // //         title,
// // //         slug: title.toLowerCase().replace(/\s+/g, "-"),
// // //         status: i % 5 === 0 ? "archived" : "active",
// // //         order: i + 1,
// // //         tags: [title.split(" ")[0].toLowerCase()],
// // //         location: i % 2 === 0 ? "Remote" : "Bangalore",
// // //         mode: i % 3 === 0 ? "Contract" : "Full-time",
// // //         salary: `${6 + (i % 10)} LPA`,
// // //         experience: `${1 + (i % 5)}+ years`,
// // //         roleDescription: `Exciting role as ${title} at TalentFlow`,
// // //         company: "TalentFlow",
// // //       }));
// // //       await db.jobs.bulkAdd(jobs);

// // //       // --- 1000 Candidates ---
// // //       const candidates = Array.from({ length: 1000 }).map((_, i) => ({
// // //         name: `Candidate ${i + 1}`,
// // //         email: `candidate${i + 1}@mail.com`,
// // //         stage: ["applied", "screen", "tech", "offer", "hired", "rejected"][i % 6],
// // //         jobId: (i % jobTitles.length) + 1,
// // //       }));
// // //       await db.candidates.bulkAdd(candidates);

// // //       // --- 3 Assessments ---
// // //       const assessments = [1, 2, 3].map((jobId) => ({
// // //         jobId,
// // //         sections: [
// // //           {
// // //             title: "General Skills",
// // //             questions: [
// // //               { type: "short-text", label: "Introduce yourself" },
// // //               { type: "numeric", label: "Years of relevant experience?", min: 0, max: 20 },
// // //               { type: "multi-choice", label: "Preferred technologies?", options: ["React", "Node", "Java", "Python"] },
// // //             ],
// // //           },
// // //         ],
// // //       }));
// // //       await db.assessments.bulkAdd(assessments);

// // //       console.log("✅ Database seeded!");
// // //     }
// // //   } catch (e) {
// // //     console.error("Seed error", e);
// // //   }
// // // }
// // // seedData();

// // // // ---------- Config ----------
// // // const FAILURE_RATE = Number(import.meta.env.VITE_MSW_FAILURE_RATE ?? 0.0);
// // // const MIN_DELAY = Number(import.meta.env.VITE_MSW_MIN_DELAY ?? 200);
// // // const MAX_DELAY = Number(import.meta.env.VITE_MSW_MAX_DELAY ?? 700);

// // // async function simulateNetwork() {
// // //   const ms = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
// // //   await delay(ms);
// // //   if (FAILURE_RATE > 0 && Math.random() < FAILURE_RATE) {
// // //     throw HttpResponse.error();
// // //   }
// // // }

// // // function json(body, status = 200) {
// // //   return HttpResponse.json(body, { status });
// // // }

// // // // ---------- Handlers ----------
// // // export const handlers = [
// // //   // ========== Jobs ==========
// // //   http.get("/jobs", async ({ request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const all = await db.jobs.toArray();
// // //       const url = new URL(request.url);

// // //       const search = url.searchParams.get("search") || "";
// // //       const status = url.searchParams.get("status") || "";
// // //       const tag = url.searchParams.get("tag") || "";
// // //       const page = Number(url.searchParams.get("page") || 1);
// // //       const pageSize = Number(url.searchParams.get("pageSize") || 6);

// // //       let results = all;
// // //       if (search)
// // //         results = results.filter((j) =>
// // //           j.title.toLowerCase().includes(search.toLowerCase())
// // //         );
// // //       if (status) results = results.filter((j) => j.status === status);
// // //       if (tag) results = results.filter((j) => j.tags?.includes(tag));

// // //       results.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

// // //       const total = results.length;
// // //       const start = (page - 1) * pageSize;
// // //       const paged = results.slice(start, start + pageSize);

// // //       return json({ data: paged, total }, 200);
// // //     } catch {
// // //       return json({ message: "Server error" }, 500);
// // //     }
// // //   }),

// // //   http.get("/jobs/:id", async ({ params }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const job = await db.jobs.get(Number(params.id));
// // //       return job ? json(job, 200) : json({ message: "Not found" }, 404);
// // //     } catch {
// // //       return json({ message: "Server error" }, 500);
// // //     }
// // //   }),

// // //   http.post("/jobs", async ({ request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const body = await request.json();
// // //       if (!body?.title || !body?.slug) return json({ message: "Missing fields" }, 400);

// // //       const exists = await db.jobs.where("slug").equals(body.slug).first();
// // //       if (exists) return json({ message: "Slug exists" }, 400);

// // //       const id = await db.jobs.add({ ...body, status: body.status ?? "active" });
// // //       const job = await db.jobs.get(id);
// // //       return json(job, 201);
// // //     } catch {
// // //       return json({ message: "Server error" }, 500);
// // //     }
// // //   }),

// // //   http.patch("/jobs/:id", async ({ params, request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const body = await request.json();
// // //       const id = Number(params.id);
// // //       await db.jobs.update(id, body);
// // //       const job = await db.jobs.get(id);
// // //       return job ? json(job, 200) : json({ message: "Not found" }, 404);
// // //     } catch {
// // //       return json({ message: "Server error" }, 500);
// // //     }
// // //   }),

// // //   http.delete("/jobs/:id", async ({ params }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       await db.jobs.delete(Number(params.id));
// // //       return json({ success: true }, 200);
// // //     } catch {
// // //       return json({ message: "Server error" }, 500);
// // //     }
// // //   }),

// // //   http.post("/jobs/reorder", async ({ request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const { order } = await request.json();
// // //       if (!Array.isArray(order)) return json({ message: "Invalid order" }, 400);
// // //       for (let i = 0; i < order.length; i++) {
// // //         await db.jobs.update(Number(order[i]), { order: i + 1 });
// // //       }
// // //       const all = await db.jobs.toArray();
// // //       all.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
// // //       return json(all, 200);
// // //     } catch {
// // //       return json({ message: "Server error" }, 500);
// // //     }
// // //   }),

// // //   // ========== Candidates ==========
// // //   http.get("/jobs/:jobId/candidates", async ({ params }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const list = await db.candidates.where("jobId").equals(Number(params.jobId)).toArray();
// // //       return json(list, 200);
// // //     } catch {
// // //       return json({ message: "Error fetching candidates" }, 500);
// // //     }
// // //   }),

// // //   http.post("/jobs/:jobId/candidates", async ({ params, request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const body = await request.json();
// // //       if (!body.name || !body.email) return json({ message: "Missing fields" }, 400);
// // //       const id = await db.candidates.add({ jobId: Number(params.jobId), ...body });
// // //       const candidate = await db.candidates.get(id);
// // //       return json(candidate, 201);
// // //     } catch {
// // //       return json({ message: "Error creating candidate" }, 500);
// // //     }
// // //   }),

// // //   http.patch("/candidates/:id", async ({ params, request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const body = await request.json();
// // //       await db.candidates.update(Number(params.id), body);
// // //       const candidate = await db.candidates.get(Number(params.id));
// // //       return candidate ? json(candidate, 200) : json({ message: "Not found" }, 404);
// // //     } catch {
// // //       return json({ message: "Error updating candidate" }, 500);
// // //     }
// // //   }),

// // //   // ========== Assessments ==========
// // //   http.get("/assessments/:jobId", async ({ params }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const assessment = await db.assessments.where("jobId").equals(Number(params.jobId)).first();
// // //       return assessment ? json(assessment, 200) : json({ message: "Not found" }, 404);
// // //     } catch {
// // //       return json({ message: "Error fetching assessment" }, 500);
// // //     }
// // //   }),

// // //   http.put("/assessments/:jobId", async ({ params, request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const body = await request.json();
// // //       const jobId = Number(params.jobId);
// // //       const existing = await db.assessments.where("jobId").equals(jobId).first();
// // //       if (existing) {
// // //         await db.assessments.update(existing.id, body);
// // //         const updated = await db.assessments.get(existing.id);
// // //         return json(updated, 200);
// // //       } else {
// // //         const id = await db.assessments.add({ jobId, ...body });
// // //         const created = await db.assessments.get(id);
// // //         return json(created, 201);
// // //       }
// // //     } catch {
// // //       return json({ message: "Error saving assessment" }, 500);
// // //     }
// // //   }),

// // //   http.post("/assessments/:jobId/submit", async ({ params, request }) => {
// // //     try {
// // //       await simulateNetwork();
// // //       const body = await request.json();
// // //       // Just echo back for now (since real submit storage optional)
// // //       return json({ jobId: Number(params.jobId), response: body }, 201);
// // //     } catch {
// // //       return json({ message: "Error submitting assessment" }, 500);
// // //     }
// // //   }),
// // // ];





// // import { http, HttpResponse, delay } from "msw";
// // import { db } from "../db/db";  // ✅ import db from separate file

// // // ---------- Config ----------
// // const FAILURE_RATE = Number(import.meta.env.VITE_MSW_FAILURE_RATE ?? 0.0);
// // const MIN_DELAY = Number(import.meta.env.VITE_MSW_MIN_DELAY ?? 200);
// // const MAX_DELAY = Number(import.meta.env.VITE_MSW_MAX_DELAY ?? 700);

// // async function simulateNetwork() {
// //   const ms = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
// //   await delay(ms);
// //   if (FAILURE_RATE > 0 && Math.random() < FAILURE_RATE) {
// //     throw HttpResponse.error();
// //   }
// // }

// // function json(body, status = 200) {
// //   return HttpResponse.json(body, { status });
// // }

// // // ---------- Handlers ----------
// // export const handlers = [
// //   // ========== Jobs ==========
// //   http.get("/jobs", async ({ request }) => {
// //     try {
// //       await simulateNetwork();
// //       const all = await db.jobs.toArray();
// //       const url = new URL(request.url);

// //       const search = url.searchParams.get("search") || "";
// //       const status = url.searchParams.get("status") || "";
// //       const tag = url.searchParams.get("tag") || "";
// //       const page = Number(url.searchParams.get("page") || 1);
// //       const pageSize = Number(url.searchParams.get("pageSize") || 6);

// //       let results = all;
// //       if (search)
// //         results = results.filter((j) =>
// //           j.title.toLowerCase().includes(search.toLowerCase())
// //         );
// //       if (status) results = results.filter((j) => j.status === status);
// //       if (tag) results = results.filter((j) => j.tags?.includes(tag));

// //       results.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

// //       const total = results.length;
// //       const start = (page - 1) * pageSize;
// //       const paged = results.slice(start, start + pageSize);

// //       return json({ data: paged, total }, 200);
// //     } catch {
// //       return json({ message: "Server error" }, 500);
// //     }
// //   }),

// //   http.get("/jobs/:id", async ({ params }) => {
// //     try {
// //       await simulateNetwork();
// //       const job = await db.jobs.get(Number(params.id));
// //       return job ? json(job, 200) : json({ message: "Not found" }, 404);
// //     } catch {
// //       return json({ message: "Server error" }, 500);
// //     }
// //   }),

// //   http.post("/jobs", async ({ request }) => {
// //     try {
// //       await simulateNetwork();
// //       const body = await request.json();
// //       if (!body?.title || !body?.slug) return json({ message: "Missing fields" }, 400);

// //       const exists = await db.jobs.where("slug").equals(body.slug).first();
// //       if (exists) return json({ message: "Slug exists" }, 400);

// //       const id = await db.jobs.add({ ...body, status: body.status ?? "active" });
// //       const job = await db.jobs.get(id);
// //       return json(job, 201);
// //     } catch {
// //       return json({ message: "Server error" }, 500);
// //     }
// //   }),

// //   http.patch("/jobs/:id", async ({ params, request }) => {
// //     try {
// //       await simulateNetwork();
// //       const body = await request.json();
// //       const id = Number(params.id);
// //       await db.jobs.update(id, body);
// //       const job = await db.jobs.get(id);
// //       return job ? json(job, 200) : json({ message: "Not found" }, 404);
// //     } catch {
// //       return json({ message: "Server error" }, 500);
// //     }
// //   }),

// //   http.delete("/jobs/:id", async ({ params }) => {
// //     try {
// //       await simulateNetwork();
// //       await db.jobs.delete(Number(params.id));
// //       return json({ success: true }, 200);
// //     } catch {
// //       return json({ message: "Server error" }, 500);
// //     }
// //   }),

// //   http.post("/jobs/reorder", async ({ request }) => {
// //     try {
// //       await simulateNetwork();
// //       const { order } = await request.json();
// //       if (!Array.isArray(order)) return json({ message: "Invalid order" }, 400);
// //       for (let i = 0; i < order.length; i++) {
// //         await db.jobs.update(Number(order[i]), { order: i + 1 });
// //       }
// //       const all = await db.jobs.toArray();
// //       all.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
// //       return json(all, 200);
// //     } catch {
// //       return json({ message: "Server error" }, 500);
// //     }
// //   }),

// //   // ========== Candidates ==========
// //   http.get("/jobs/:jobId/candidates", async ({ params }) => {
// //     try {
// //       await simulateNetwork();
// //       const list = await db.candidates.where("jobId").equals(Number(params.jobId)).toArray();
// //       return json(list, 200);
// //     } catch {
// //       return json({ message: "Error fetching candidates" }, 500);
// //     }
// //   }),

// //   http.post("/jobs/:jobId/candidates", async ({ params, request }) => {
// //     try {
// //       await simulateNetwork();
// //       const body = await request.json();
// //       if (!body.name || !body.email) return json({ message: "Missing fields" }, 400);
// //       const id = await db.candidates.add({ jobId: Number(params.jobId), ...body });
// //       const candidate = await db.candidates.get(id);
// //       return json(candidate, 201);
// //     } catch {
// //       return json({ message: "Error creating candidate" }, 500);
// //     }
// //   }),

// //   http.patch("/candidates/:id", async ({ params, request }) => {
// //     try {
// //       await simulateNetwork();
// //       const body = await request.json();
// //       await db.candidates.update(Number(params.id), body);
// //       const candidate = await db.candidates.get(Number(params.id));
// //       return candidate ? json(candidate, 200) : json({ message: "Not found" }, 404);
// //     } catch {
// //       return json({ message: "Error updating candidate" }, 500);
// //     }
// //   }),

// //   // ========== Assessments ==========
// //   http.get("/assessments/:jobId", async ({ params }) => {
// //     try {
// //       await simulateNetwork();
// //       const assessment = await db.assessments.where("jobId").equals(Number(params.jobId)).first();
// //       return assessment ? json(assessment, 200) : json({ message: "Not found" }, 404);
// //     } catch {
// //       return json({ message: "Error fetching assessment" }, 500);
// //     }
// //   }),

// //   http.put("/assessments/:jobId", async ({ params, request }) => {
// //     try {
// //       await simulateNetwork();
// //       const body = await request.json();
// //       const jobId = Number(params.jobId);
// //       const existing = await db.assessments.where("jobId").equals(jobId).first();
// //       if (existing) {
// //         await db.assessments.update(existing.id, body);
// //         const updated = await db.assessments.get(existing.id);
// //         return json(updated, 200);
// //       } else {
// //         const id = await db.assessments.add({ jobId, ...body });
// //         const created = await db.assessments.get(id);
// //         return json(created, 201);
// //       }
// //     } catch {
// //       return json({ message: "Error saving assessment" }, 500);
// //     }
// //   }),

// //   http.post("/assessments/:jobId/submit", async ({ params, request }) => {
// //     try {
// //       await simulateNetwork();
// //       const body = await request.json();
// //       return json({ jobId: Number(params.jobId), response: body }, 201);
// //     } catch {
// //       return json({ message: "Error submitting assessment" }, 500);
// //     }
// //   }),
// // ];






// import { http, HttpResponse, delay } from "msw";
// import { db } from "../db/db";  // ✅ central DB



// // ---------- Config ----------
// const FAILURE_RATE = Number(import.meta.env.VITE_MSW_FAILURE_RATE ?? 0.0);
// const MIN_DELAY = Number(import.meta.env.VITE_MSW_MIN_DELAY ?? 200);
// const MAX_DELAY = Number(import.meta.env.VITE_MSW_MAX_DELAY ?? 700);

// async function simulateNetwork() {
//   const ms = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
//   await delay(ms);
//   if (FAILURE_RATE > 0 && Math.random() < FAILURE_RATE) {
//     throw HttpResponse.error();
//   }
// }

// function json(body, status = 200) {
//   return HttpResponse.json(body, { status });
// }



// // ---------- Handlers ----------
// export const handlers = [
//   http.get("/ping", () => {
//   console.log("✅ MSW caught /ping");
//   return HttpResponse.json({ pong: true });
// }),


// // Debug logger - logs every request MSW sees
// // Debug logger - logs every request MSW sees
// http.all("*", ({ request }, res, ctx) => {
//   console.log("👀 MSW intercepted:", request.method, request.url);
//   return res(ctx.passthrough()); // ✅ forward to network if not handled
// }),



//   // ========== Jobs ==========
//   http.get("/jobs", async ({ request }) => {
//     console.log("📦 GET /jobs");
//     try {
//       await simulateNetwork();
//       const all = await db.jobs.toArray();
//       // const url = new URL(request.url);
// const url = new URL(
//      request.url,
//       typeof window !== "undefined" ? window.location.origin : "http://localhost"
//      );
//       const search = url.searchParams.get("search") || "";
//       const status = url.searchParams.get("status") || "";
//       const tag = url.searchParams.get("tag") || "";
//       const page = Number(url.searchParams.get("page") || 1);
//       const pageSize = Number(url.searchParams.get("pageSize") || 6);

//       let results = all;
//       if (search) {
//         results = results.filter((j) =>
//           j.title.toLowerCase().includes(search.toLowerCase())
//         );
//       }
//       if (status) results = results.filter((j) => j.status === status);
//       if (tag) results = results.filter((j) => j.tags?.includes(tag));

//       results.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

//       const total = results.length;
//       const start = (page - 1) * pageSize;
//       const paged = results.slice(start, start + pageSize);
//       console.log("paged: ",paged)
//       // const sortedPaged = [...paged].sort((a,b)=>(a.order - b.order))
//       // conosle.log("sortedPaged: ",sortedPaged)
//       return json({ data: paged, total }, 200);
//     } catch(err) {
//       console.log(err)
//       return json({ message: "Server error" }, 500);
//     }
//   }),

//   http.get("/jobs/:id", async ({ params }) => {
//     try {
//       await simulateNetwork();
//       const job = await db.jobs.get(Number(params.id));
//       return job ? json(job, 200) : json({ message: "Not found" }, 404);
//     } catch {
//       return json({ message: "Server error" }, 500);
//     }
//   }),

//   http.post("/jobs", async ({ request }) => {
//     try {
//       await simulateNetwork();
//       const body = await request.json();
//       if (!body?.title || !body?.slug) return json({ message: "Missing fields" }, 400);

//       const exists = await db.jobs.where("slug").equals(body.slug).first();
//       if (exists) return json({ message: "Slug exists" }, 400);

//       const id = await db.jobs.add({ ...body, status: body.status ?? "active" });
//       const job = await db.jobs.get(id);
//       return json(job, 201);
//     } catch {
//       return json({ message: "Server error" }, 500);
//     }
//   }),

//   http.patch("/jobs/:id", async ({ params, request }) => {
//     try {
//       await simulateNetwork();
//       const body = await request.json();
//       const id = Number(params.id);
//       await db.jobs.update(id, body);
//       const job = await db.jobs.get(id);
//       return job ? json(job, 200) : json({ message: "Not found" }, 404);
//     } catch {
//       return json({ message: "Server error" }, 500);
//     }
//   }),

//   http.delete("/jobs/:id", async ({ params }) => {
//     try {
//       await simulateNetwork();
//       await db.jobs.delete(Number(params.id));
//       return json({ success: true }, 200);
//     } catch {
//       return json({ message: "Server error" }, 500);
//     }
//   }),

//   // http.post("/jobs/reorder", async ({ request }) => {
//   //   try {
//   //     console.log("inside the reorder")
//   //     await simulateNetwork();
//   //     const { order } = await request.json();
//   //     console.log("order: ", order)
//   //     if (!Array.isArray(order)) return json({ message: "Invalid order" }, 400);
//   //     for (let i = 0; i < order.length; i++) {
//   //       await db.jobs.update(Number(order[i]), { order: i + 1 });
//   //     }
//   //     const all = await db.jobs.toArray();
//   //     all.sort((a, b) => (a.order) - (b.order));
//   //     return json(all, 200);
//   //   } catch {
//   //     return json({ message: "Server error" }, 500);
//   //   }
//   // }),

//   http.post("/jobs/reorder", async ({ request }) => {
//     try {
//       console.log("inside reorder");
//       await simulateNetwork();

//       const { fromId, toId } = await request.json();

//       if (!fromId || !toId) {
//         return json({ message: "Invalid payload" }, 400);
//       }

//       const fromJob = await db.jobs.get(Number(fromId));
//       const toJob = await db.jobs.get(Number(toId));

//       if (!fromJob || !toJob) {
//         return json({ message: "Jobs not found" }, 404);
//       }

//       // swap their `order` values
//       await db.jobs.update(fromJob.id, { order: toJob.order });
//       await db.jobs.update(toJob.id, { order: fromJob.order });

//       // return sorted list
//       const all = await db.jobs.toArray();
//       all.sort((a, b) => a.order - b.order);

//       return json(all, 200);
//     } catch (err) {
//       console.error(err);
//       return json({ message: "Server error" }, 500);
//     }
//   }),
//   // ========== Candidates (per job) ==========
//   http.get("/jobs/:jobId/candidates", async ({ params }) => {
//     try {
//       await simulateNetwork();
//       const list = await db.candidates
//         .where("jobId")
//         .equals(Number(params.jobId))
//         .toArray();
//       return json(list, 200);
//     } catch {
//       return json({ message: "Error fetching candidates" }, 500);
//     }
//   }),

//   http.post("/jobs/:jobId/candidates", async ({ params, request }) => {
//     try {
//       await simulateNetwork();
//       const body = await request.json();
//       if (!body.name || !body.email) return json({ message: "Missing fields" }, 400);
//       const id = await db.candidates.add({ jobId: Number(params.jobId), ...body });
//       const candidate = await db.candidates.get(id);
//       return json(candidate, 201);
//     } catch {
//       return json({ message: "Error creating candidate" }, 500);
//     }
//   }),

//   http.patch("/candidates/:id", async ({ params, request }) => {
//     try {
//       await simulateNetwork();
//       const body = await request.json();
//       await db.candidates.update(Number(params.id), body);
//       const candidate = await db.candidates.get(Number(params.id));
//       return candidate ? json(candidate, 200) : json({ message: "Not found" }, 404);
//     } catch {
//       return json({ message: "Error updating candidate" }, 500);
//     }
//   }),

//   // ========== Candidates (global) ==========
//   // http.get("/candidates", async ({ request }) => {
//   //   try {
//   //     await simulateNetwork();
//   //     const url = new URL(request.url);

//   //     const search = url.searchParams.get("search") || "";
//   //     const stage = url.searchParams.get("stage") || "";
//   //     const page = Number(url.searchParams.get("page") || 1);
//   //     const pageSize = Number(url.searchParams.get("pageSize") || 50);

//   //     let results = await db.candidates.toArray();

//   //     if (search) {
//   //       results = results.filter(
//   //         (c) =>
//   //           c.name.toLowerCase().includes(search.toLowerCase()) ||
//   //           c.email.toLowerCase().includes(search.toLowerCase())
//   //       );
//   //     }
//   //     if (stage) {
//   //       results = results.filter((c) => c.stage === stage);
//   //     }

//   //     const total = results.length;
//   //     const start = (page - 1) * pageSize;
//   //     const paged = results.slice(start, start + pageSize);

//   //     return json({ data: paged, total }, 200);
//   //   } catch {
//   //     return json({ message: "Error fetching candidates" }, 500);
//   //   }
//   // }),

// //  http.get("/candidates", async ({ request }) => {
// //   try {
// //     await simulateNetwork();
// //     const all = await db.candidates.toArray();
// //     const url = new URL(request.url, "http://localhost");

// //     const stage = url.searchParams.get("stage") || "";
// //     const page = Number(url.searchParams.get("page") || 1);
// //     const pageSize = Number(url.searchParams.get("pageSize") || 50);

// //     let results = all;
// //     if (stage) {
// //       results = results.filter((c) => c.stage === stage);
// //     }

// //     const total = results.length;
// //     const start = (page - 1) * pageSize;
// //     const paged = results.slice(start, start + pageSize);

// //     return json({ data: paged, total }, 200);
// //   } catch (err) {
// //     return json({ message: "Error fetching candidates" }, 500);
// //   }
// // }),


// // http.get("/candidates", async ({ request }) => {
// //   try {
// //     await simulateNetwork();
// //     const all = await db.candidates.toArray();
// //     const url = new URL(request.url, "http://localhost");

// //     const stage = url.searchParams.get("stage") || "";
// //     const page = Number(url.searchParams.get("page") || 1);
// //     const pageSize = Number(url.searchParams.get("pageSize") || 50);

// //     let results = all;
// //     if (stage) {
// //       results = results.filter((c) => c.stage === stage);
// //     }

// //     // ensure consistent order
// //     results.sort((a, b) => a.id - b.id);

// //     const total = results.length;
// //     const start = (page - 1) * pageSize;
// //     const paged = results.slice(start, start + pageSize);

// //     console.log("Candidates request:", { page, pageSize, start, end: start + pageSize, returned: paged.length });

// //     return json({ data: paged, total }, 200);
// //   } catch (err) {
// //     return json({ message: "Error fetching candidates" }, 500);
// //   }
// // }),


// // http.get("/candidates", async ({ request }) => {
// //   try {
// //     await simulateNetwork();
// //     const all = await db.candidates.toArray();
// //     const url = new URL(request.url, "http://localhost");

// //     const stage = url.searchParams.get("stage") || "";
// //     const page = Number(url.searchParams.get("page") || 1);
// //     const pageSize = Number(url.searchParams.get("pageSize") || 50);

// //     let results = all;
// //     if (stage) {
// //       results = results.filter((c) => c.stage === stage);
// //     }

// //     // ✅ Ensure stable order
// //     results.sort((a, b) => a.id - b.id);

// //     const total = results.length;
// //     const start = (page - 1) * pageSize;
// //     const end = start + pageSize;
// //     const paged = results.slice(start, end);

// //     console.log("📡 /candidates request", {
// //       page,
// //       pageSize,
// //       start,
// //       end,
// //       returned: paged.length,
// //       total,
// //     });

// //     return json({ data: paged, total }, 200);
// //   } catch (err) {
// //     console.error("❌ Error in /candidates handler", err);
// //     return json({ message: "Error fetching candidates" }, 500);
// //   }
// // }),


// // http.get("/candidates", async ({ request }) => {
// //     try {
// //       await simulateNetwork();

// //       const url = new URL(request.url);
// //       const page = parseInt(url.searchParams.get("page") || "1", 10);
// //       const pageSize = parseInt(url.searchParams.get("pageSize") || "50", 10);
// //       const search = url.searchParams.get("search") || "";
// //       const stage = url.searchParams.get("stage") || "";

// //       let query = db.candidates;

// //       // Filtering: search (by name/email)
// //       if (search) {
// //         query = query.filter((c) =>
// //           c.name.toLowerCase().includes(search.toLowerCase()) ||
// //           c.email.toLowerCase().includes(search.toLowerCase())
// //         );
// //       }

// //       // Filtering: stage
// //       if (stage) {
// //         query = query.filter((c) => c.stage === stage);
// //       }

// //       const all = await query.toArray();
// //       const total = all.length;

// //       const start = (page - 1) * pageSize;
// //       const end = start + pageSize;
// //       const paginated = all.slice(start, end);

// //       return HttpResponse.json(
// //         {
// //           data: paginated,
// //           total,
// //           hasMore: end < total
// //         },
// //         { status: 200 }
// //       );
// //     } catch (err) {
// //       console.error("Error fetching candidates:", err);
// //       return HttpResponse.json(
// //         { message: "Error fetching candidates" },
// //         { status: 500 }
// //       );
// //     }
// //   }),

// http.get("/candidates", async ({ request }) => {
//   try {
//     await simulateNetwork();

//     const url = new URL(request.url);
//     const page = parseInt(url.searchParams.get("page") || "1", 10);
//     const pageSize = parseInt(url.searchParams.get("pageSize") || "50", 10);
//     const search = url.searchParams.get("search") || "";
//     const stage = url.searchParams.get("stage") || "";

//     console.log(`📦 GET /candidates?page=${page}&pageSize=${pageSize}&search=${search}&stage=${stage}`);

//     let query = db.candidates;

//     // Filtering: search (by name/email)
//     if (search) {
//       query = query.filter(
//         (c) =>
//           c.name.toLowerCase().includes(search.toLowerCase()) ||
//           c.email.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Filtering: stage
//     if (stage) {
//       query = query.filter((c) => c.stage === stage);
//     }

//     // Load all (filtered)
//     const all = await query.toArray();

//     // Sort: by name for stable UI
//     all.sort((a, b) => a.name.localeCompare(b.name));

//     const total = all.length;

//     // Apply pagination
//     const start = (page - 1) * pageSize;
//     const end = start + pageSize;
//     const paginated = all.slice(start, end);

//     console.log(`📦 Returning ${paginated.length} candidates of ${total} total`);

//     return HttpResponse.json(
//       {
//         data: paginated,
//         total,
//         hasMore: end < total,
//       },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("❌ Error fetching candidates:", err);
//     return HttpResponse.json(
//       { message: "Error fetching candidates" },
//       { status: 500 }
//     );
//   }
// }),





//   // ========== Assessments ==========
// //   http.get("/assessments/:jobId", async ({ params }) => {
// //   try {
// //     await simulateNetwork();
// //     const assessment = await db.assessments.where("jobId").equals(params.jobId).first();
// //     return assessment ? json(assessment, 200) : json({ message: "Not found" }, 404);
// //   } catch {
// //     return json({ message: "Error fetching assessment" }, 500);
// //   }
// // }),


// //   http.put("/assessments/:jobId", async ({ params, request }) => {
// //     try {
// //       await simulateNetwork();
// //       const body = await request.json();
// //       // const jobId = Number(params.jobId);
// //       const jobId = params.jobId;
// //       // const existing = await db.assessments.where("jobId").equals(jobId).first();
// //       const existing = await db.assessments.where("jobId").equals(jobId).first();
// //       if (existing) {
// //         await db.assessments.update(existing.id, body);
// //         const updated = await db.assessments.get(existing.id);
// //         return json(updated, 200);
// //       } else {
// //         const id = await db.assessments.add({ jobId, ...body });
// //         const created = await db.assessments.get(id);
// //         return json(created, 201);
// //       }
// //     } catch {
// //       return json({ message: "Error saving assessment" }, 500);
// //     }
// //   }),

// //   // http.post("/assessments/:jobId/submit", async ({ params, request }) => {
// //   //   try {
// //   //     await simulateNetwork();
// //   //     const body = await request.json();
// //   //     return json({ jobId: Number(params.jobId), response: body }, 201);
// //   //   } catch {
// //   //     return json({ message: "Error submitting assessment" }, 500);
// //   //   }
// //   // }),

// //   http.post("/assessments/:jobId/submit", async ({ params, request }) => {
// //   try {
// //     await simulateNetwork();
// //     const body = await request.json();

// //     const submission = {
// //       jobId: params.jobId,                 // ✅ keep as string
// //       candidateId: body.candidateId ?? null,
// //       response: body.response ?? body,     // fallback if only response is sent
// //       createdAt: new Date().toISOString(),
// //     };

// //     // ✅ Save submission to IndexedDB
// //     await db.submissions.add(submission);

// //     return HttpResponse.json({ success: true }, { status: 201 });
// //   } catch (err) {
// //     console.error("Error submitting assessment:", err);
// //     return HttpResponse.json({ message: "Error submitting assessment" }, { status: 500 });
// //   }
// // }),



// //    http.get("/candidates/all", async () => {
// //     try {
// //       await simulateNetwork();
// //       const all = await db.candidates.toArray();
// //       return HttpResponse.json(
// //         {
// //           data: all,
// //           total: all.length,
// //         },
// //         { status: 200 }
// //       );
// //     } catch (err) {
// //       return HttpResponse.json(
// //         { message: "Error fetching candidates" },
// //         { status: 500 }
// //       );
// //     }
// //   }),
// // ];


// // ========== Assessments ==========
// // ========== Assessments list ==========
// // ========== Assessments list ==========
// http.get("/assessments", async () => {
//   try {
//     await simulateNetwork();
//     const all = await db.assessments.toArray();
//     return HttpResponse.json({ data: all, total: all.length }, { status: 200 });
//   } catch (err) {
//     console.error("❌ Error fetching assessments:", err);
//     return HttpResponse.json({ message: "Error fetching assessments" }, { status: 500 });
//   }
// }),




// http.get("/assessments/:jobId", async ({ params }) => {
//   try {
//     await simulateNetwork();

//     // Try to load existing assessment
//     // let assessment = await db.assessments
//     //   .where("jobId")
//     //   .equals(params.jobId)
//     //   .first();


//     let assessment = await db.assessments
//   .where("jobId")
//   .equals(params.jobId)  // force number
//   .first();




//     // If not found, seed with an empty default
//     // if (!assessment) {
//     //   assessment = {
//     //     jobId: params.jobId,
//     //     sections: [
//     //       {
//     //         id: crypto.randomUUID(),
//     //         title: "Section 1",
//     //         description: "",
//     //         questions: [],
//     //       },
//     //     ],
//     //   };
//     //   await db.assessments.add(assessment);
//     // }

//     if (!assessment) {
//   return HttpResponse.json({ message: "Not found" }, { status: 404 });
// }



//     return HttpResponse.json(assessment, { status: 200 });
//   } catch (err) {
//     console.error("Error fetching assessment:", err);
//     return HttpResponse.json({ message: "Error fetching assessment" }, { status: 500 });
//   }
// }),

// http.put("/assessments/:jobId", async ({ params, request }) => {
//   try {
//     await simulateNetwork();
//     const body = await request.json();
//     const jobId = params.jobId;

//     const existing = await db.assessments.where("jobId").equals(jobId).first();

//     if (existing) {
//       // update existing entry (merge jobId back in)
//       await db.assessments.update(existing.id, { ...body, jobId });
//       const updated = await db.assessments.get(existing.id);
//       return HttpResponse.json(updated, { status: 200 });
//     } else {
//       // create new entry if somehow missing
//       const id = await db.assessments.add({ jobId, ...body });
//       const created = await db.assessments.get(id);
//       return HttpResponse.json(created, { status: 201 });
//     }
//   } catch (err) {
//     console.error("Error saving assessment:", err);
//     return HttpResponse.json({ message: "Error saving assessment" }, { status: 500 });
//   }
// }),

// http.post("/assessments/:jobId/submit", async ({ params, request }) => {
//   try {
//     await simulateNetwork();
//     const body = await request.json();

//     const submission = {
//       jobId: params.jobId,                // keep jobId as string
//       candidateId: body.candidateId ?? null,
//       response: body.response ?? body,
//       createdAt: new Date().toISOString(),
//     };

//     await db.submissions.add(submission);

//     return HttpResponse.json({ success: true }, { status: 201 });
//   } catch (err) {
//     console.error("Error submitting assessment:", err);
//     return HttpResponse.json({ message: "Error submitting assessment" }, { status: 500 });
//   }
// }),


// http.get("/assessments/:jobId/submissions", async ({ params }) => {
//   try {
//     await simulateNetwork();

//     const subs = await db.submissions
//       .where("jobId")
//       .equals(params.jobId)
//       .toArray();

//     return HttpResponse.json(subs, { status: 200 });
//   } catch (err) {
//     console.error("Error fetching submissions:", err);
//     return HttpResponse.json(
//       { message: "Error fetching submissions" },
//       { status: 500 }
//     );
//   }
// }),






// ];


import { http, HttpResponse, delay } from "msw";
import { db } from "../db/db";

// ---------- Config ----------
const FAILURE_RATE = Number(import.meta.env.VITE_MSW_FAILURE_RATE ?? 0.0);
const MIN_DELAY = Number(import.meta.env.VITE_MSW_MIN_DELAY ?? 200);
const MAX_DELAY = Number(import.meta.env.VITE_MSW_MAX_DELAY ?? 700);

async function simulateNetwork() {
  const ms = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
  await delay(ms);
  if (FAILURE_RATE > 0 && Math.random() < FAILURE_RATE) {
    throw HttpResponse.error();
  }
}

function json(body, status = 200) {
  return HttpResponse.json(body, { status });
}

// ---------- Handlers ----------
export const handlers = [
  // ========== Ping ==========
  http.get("/ping", () => {
    console.log("✅ MSW caught /ping");
    return HttpResponse.json({ pong: true });
  }),

  // ========== Jobs ==========
  http.get("/jobs", async ({ request }) => {
    console.log("inside jobs")
    try {
      await simulateNetwork();

      const url = new URL(request.url, "http://localhost");
      const search = url.searchParams.get("search") || "";
      const status = url.searchParams.get("status") || "";
      const tag = url.searchParams.get("tag") || "";
      const page = Number(url.searchParams.get("page") || 1);
      const pageSize = Number(url.searchParams.get("pageSize") || 6);

      let results = await db.jobs.toArray();

      if (search) {
        results = results.filter((j) =>
          j.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (status) {
        results = results.filter((j) => j.status === status);
      }
      if (tag) {
        results = results.filter((j) => j.tags?.includes(tag));
      }

      results.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

      const total = results.length;
      const start = (page - 1) * pageSize;
      const paged = results.slice(start, start + pageSize);

      return json({ data: paged, total }, 200);
    } catch (err) {
      console.error("❌ Error fetching jobs", err);
      return json({ message: "Server error" }, 500);
    }
  }),

  http.get("/jobs/:id", async ({ params }) => {
    try {
      await simulateNetwork();
      const job = await db.jobs.get(Number(params.id));
      return job ? json(job, 200) : json({ message: "Not found" }, 404);
    } catch {
      return json({ message: "Server error" }, 500);
    }
  }),

  http.post("/jobs/reorder", async ({ request }) => {
    try {
      await simulateNetwork();
      const { fromId, toId } = await request.json();

      const fromJob = await db.jobs.get(Number(fromId));
      const toJob = await db.jobs.get(Number(toId));

      if (!fromJob || !toJob) {
        return json({ message: "Jobs not found" }, 404);
      }

      await db.jobs.update(fromJob.id, { order: toJob.order });
      await db.jobs.update(toJob.id, { order: fromJob.order });

      const all = await db.jobs.toArray();
      all.sort((a, b) => a.order - b.order);

      return json(all, 200);
    } catch (err) {
      console.error("❌ Error reordering jobs", err);
      return json({ message: "Server error" }, 500);
    }
  }),

  // ========== Candidates ==========
  // Update candidate stage (or other fields)
http.patch("/candidates/:id", async ({ params, request }) => {
  try {
    await simulateNetwork();
    const id = Number(params.id);
    const body = await request.json();

    const candidate = await db.candidates.get(id);
    if (!candidate) {
      return HttpResponse.json({ message: "Candidate not found" }, { status: 404 });
    }

    await db.candidates.update(id, { ...candidate, ...body });
    const updated = await db.candidates.get(id);

    return HttpResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("❌ Error updating candidate:", err);
    return HttpResponse.json({ message: "Error updating candidate" }, { status: 500 });
  }
}),

  http.get("/candidates", async ({ request }) => {
    try {
      await simulateNetwork();

      const url = new URL(request.url, "http://localhost");
      const search = url.searchParams.get("search") || "";
      const stage = url.searchParams.get("stage") || "";
      const page = Number(url.searchParams.get("page") || 1);
      const pageSize = Number(url.searchParams.get("pageSize") || 50);

      let results = await db.candidates.toArray();

      if (search) {
        results = results.filter(
          (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (stage) {
        results = results.filter((c) => c.stage === stage);
      }

      results.sort((a, b) => a.id - b.id);

      const total = results.length;
      const start = (page - 1) * pageSize;
      const paged = results.slice(start, start + pageSize);

      return json({ data: paged, total }, 200);
    } catch (err) {
      console.error("❌ Error fetching candidates", err);
      return json({ message: "Error fetching candidates" }, 500);
    }
  }),

  // // ========== Assessments ==========
  // http.get("/assessments", async () => {
  //   try {
  //     await simulateNetwork();
  //     const all = await db.assessments.toArray();
  //     return HttpResponse.json({ data: all, total: all.length }, { status: 200 });
  //   } catch (err) {
  //     console.error("❌ Error fetching assessments", err);
  //     return HttpResponse.json({ message: "Error fetching assessments" }, { status: 500 });
  //   }
  // }),

  // http.get("/assessments/:jobId", async ({ params }) => {
  //   try {
  //     await simulateNetwork();
  //     const assessment = await db.assessments
  //       .where("jobId")
  //       .equals(params.jobId) // jobId kept as string ("job-1")
  //       .first();

  //     return assessment
  //       ? HttpResponse.json(assessment, { status: 200 })
  //       : HttpResponse.json({ message: "Not found" }, { status: 404 });
  //   } catch (err) {
  //     console.error("❌ Error fetching assessment", err);
  //     return HttpResponse.json({ message: "Error fetching assessment" }, { status: 500 });
  //   }
  // }),

  // http.put("/assessments/:jobId", async ({ params, request }) => {
  //   try {
  //     await simulateNetwork();
  //     const body = await request.json();
  //     const jobId = params.jobId;

  //     const existing = await db.assessments.where("jobId").equals(jobId).first();
  //     if (existing) {
  //       await db.assessments.update(existing.id, { ...body, jobId });
  //       const updated = await db.assessments.get(existing.id);
  //       return HttpResponse.json(updated, { status: 200 });
  //     } else {
  //       const id = await db.assessments.add({ jobId, ...body });
  //       const created = await db.assessments.get(id);
  //       return HttpResponse.json(created, { status: 201 });
  //     }
  //   } catch (err) {
  //     console.error("❌ Error saving assessment", err);
  //     return HttpResponse.json({ message: "Error saving assessment" }, { status: 500 });
  //   }
  // }),

  // http.post("/assessments/:jobId/submit", async ({ params, request }) => {
  //   try {
  //     await simulateNetwork();
  //     const body = await request.json();

  //     const submission = {
  //       jobId: params.jobId,
  //       candidateId: body.candidateId ?? null,
  //       response: body.response ?? body,
  //       createdAt: new Date().toISOString(),
  //     };

  //     await db.submissions.add(submission);

  //     return HttpResponse.json({ success: true }, { status: 201 });
  //   } catch (err) {
  //     console.error("❌ Error submitting assessment", err);
  //     return HttpResponse.json({ message: "Error submitting assessment" }, { status: 500 });
  //   }
  // }),

  // http.get("/assessments/:jobId/submissions", async ({ params }) => {
  //   try {
  //     await simulateNetwork();
  //     const subs = await db.submissions.where("jobId").equals(params.jobId).toArray();
  //     return HttpResponse.json(subs, { status: 200 });
  //   } catch (err) {
  //     console.error("❌ Error fetching submissions", err);
  //     return HttpResponse.json({ message: "Error fetching submissions" }, { status: 500 });
  //   }
  // }),

  http.get(
      "/sample-assessments/:type",
      async ({params}) => {
        const type = params.type
        console.log("/sample assesment: ", params.type)
        // const { type } = request.params;
        console.log("type: ", type);
  
        const map = {
          frontend: 1,
          backend: 2,
          general: 3,
        };
  
        const jobId = map[type];
        if (!jobId) {
          return new Response(
            404,
            { "Content-Type": "application/json" },
            { error: `Sample assessment not found for type: ${type}` }
          );
        }
  
        const assessment = await db.assessments
          .where("jobId")
          .equals(jobId)
          .first();
        console.log("assessment: ", assessment)
        if (!assessment) {
          return new Response(
            404,
            { "Content-Type": "application/json" },
            { error: `No assessment seeded for jobId: ${jobId}` }
          );
        }
  
        console.log("sample assessment:", assessment)
        return HttpResponse.json(assessment.form);
      }),
      
    // ✅ GET /assessments/:jobId
    http.get(
      "/assessments/:jobId",
      async ({params,request}) => {
        const jobId = params.jobId
        // const { jobId }/ = request.params;
        console.log("inside assessment", request)
        console.log("Get assesment:", jobId)
        const assessment = await db.assessments
        .where("jobId")
        .equals(Number(jobId))
        .first();
        
        console.log("Get assesment: assesment",assessment)
        if (!assessment) {
          return new Response(
            404,
            { "Content-Type": "application/json" },
            { error: `Assessment not found for jobId: ${jobId}` }
          );
        }
  
        return HttpResponse.json(assessment.form);
      }),
  
    // PUT /assessments/:jobId
    http.put(
      "/assessments/:jobId",
      async ({params, request}) => {
        const { jobId } = params;
        const data = JSON.parse(request.requestBody);
  
        console.log("[PUT /assessments] Incoming data:", jobId, data);
  
        // Check if an assessment already exists
        const existing = await db.assessments.where("jobId").equals(Number(jobId)).first();
  
        if (existing) {
          await db.assessments.update(existing.id, {
            form: data,
          });
          console.log("[PUT /assessments] Updated existing assessment:", existing.id);
        } else {
          await db.assessments.add({
            jobId: Number(jobId),
            form: data,
          });
          console.log("[PUT /assessments] Inserted new assessment");
        }
  
        const saved = await db.assessments.where("jobId").equals(Number(jobId)).first();
        console.log("[PUT /assessments] Final saved assessment:", saved);
  
        return HttpResponse.json({ jobId: Number(jobId), form: data });
      }),
  
    http.post(
      "/assessments/:jobId/submit",
      async ({request,params}) => {
        const { jobId } = params;
        const data = JSON.parse(request.requestBody);
        const jobIdNum = Number(jobId);
  
        // Check if a submission already exists for this job + candidate
        const existing = await db.submissions
          .where({ jobId: jobIdNum, candidateId: data.candidateId })
          .first();
  
        const submission = {
          jobId: jobIdNum,
          candidateId: data.candidateId,
          response: data.response,
          submittedAt: new Date().toISOString(),
        };
  
        if (existing) {
          await db.submissions.update(existing.id, submission);
          console.log(
            `[POST /assessments/${jobId}/submit] Updated submission for candidate ${data.candidateId}`
          );
        } else {
          await db.submissions.add(submission);
          console.log(
            `[POST /assessments/${jobId}/submit] Created new submission for candidate ${data.candidateId}`
          );
        }
  
        return HttpResponse.json({
          success: true,
          jobId: jobIdNum,
          candidateId: data.candidateId,
          submittedAt: submission.submittedAt,
        })
      })
];
