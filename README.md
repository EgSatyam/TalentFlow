🌟 TalentFlow – A Mini Hiring Platform

TalentFlow is a front-end React application designed to simulate a modern hiring platform for HR teams.
It enables job management, candidate tracking, and assessment creation — all without a real backend (powered by MSW/IndexedDB for persistence).

🚀 Features
🔹 Jobs

Create, edit, and archive jobs.
Server-like pagination & filtering (title, status, tags).
Reorder jobs via drag-and-drop (with optimistic updates & rollback on failure).
Deep linking to job details: /jobs/:jobId.

🔹 Candidates

Virtualized candidate list (1,000+ seeded).
Client-side search (name/email) & server-like stage filtering.
Candidate profile route: /candidates/:id showing timeline of status changes.
Move candidates between stages with a kanban board (drag-and-drop).
Add notes with @mentions (suggestions from a local list).

🔹 Assessments

Job-specific assessment builder (sections & multiple question types).
Question types: single-choice, multi-choice, text (short/long), numeric (with validation), file upload stub.
Live preview pane for real-time assessment rendering.
Runtime validation (required fields, numeric range, max length).
Conditional questions (e.g., show Q3 only if Q1 === "Yes").
Candidate submissions stored locally.



Live Link:https://talent-flow-omega-ten.vercel.app
