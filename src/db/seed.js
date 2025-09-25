// // // import { db } from "./db";

// // // const jobTitles = [
// // //   "Frontend Developer","Backend Developer","Fullstack Engineer","Mobile App Developer","DevOps Engineer",
// // //   "QA Engineer","Data Scientist","Machine Learning Engineer","Product Manager","UI/UX Designer",
// // //   "Cloud Engineer","Database Administrator","Game Developer","Embedded Systems Engineer","Cybersecurity Analyst",
// // //   "Technical Writer","System Architect","Blockchain Developer","AI Researcher","Site Reliability Engineer",
// // //   "AR/VR Developer","Automation Engineer","SEO Specialist","Support Engineer","Network Engineer",
// // //   "IT Consultant","Software Engineer","Test Automation Specialist","Integration Engineer","Business Analyst"
// // // ];

// // // const sampleJobs = jobTitles.map((title, i) => ({
// // //   title,
// // //   slug: title.toLowerCase().replace(/\s+/g, "-"),
// // //   status: i % 5 === 0 ? "archived" : "active",
// // //   order: i + 1,
// // //   tags: [title.split(" ")[0].toLowerCase()],
// // //   location: i % 2 === 0 ? "Remote" : "Bangalore",
// // //   mode: i % 3 === 0 ? "Contract" : "Full-time",
// // //   salary: `${6 + (i % 10)} LPA`,
// // //   experience: `${1 + (i % 5)}+ years`,
// // //   roleDescription: `Exciting role as ${title} at TalentFlow`,
// // //   company: "TalentFlow"
// // // }));

// // // const sampleCandidates = Array.from({ length: 1000 }).map((_, i) => ({
// // //   name: `Candidate ${i + 1}`,
// // //   email: `candidate${i + 1}@mail.com`,
// // //   stage: ["applied", "screen", "tech", "offer", "hired", "rejected"][i % 6],
// // //   jobId: (i % jobTitles.length) + 1
// // // }));

// // // const sampleAssessments = [1, 2, 3].map((jobId) => ({
// // //   jobId,
// // //   sections: [
// // //     {
// // //       title: "General Skills",
// // //       questions: [
// // //         { type: "short-text", label: "Introduce yourself" },
// // //         { type: "numeric", label: "Years of relevant experience?", min: 0, max: 20 },
// // //         { type: "multi-choice", label: "Preferred technologies?", options: ["React", "Node", "Java", "Python"] }
// // //       ]
// // //     }
// // //   ]
// // // }));

// // // export async function seedDatabase() {
// // //   const jobsCount = await db.jobs.count();
// // //   if (jobsCount === 0) {
// // //     await db.jobs.bulkAdd(sampleJobs);
// // //     await db.candidates.bulkAdd(sampleCandidates);
// // //     await db.assessments.bulkAdd(sampleAssessments);
// // //     console.log("✅ Database seeded with jobs, candidates, and assessments!");
// // //   } else {
// // //     console.log("⚡ Database already seeded, skipping.");
// // //   }
// // // }
// // import { db } from "./db";

// // export async function seedDatabase() {
// //   try {
// //     const count = await db.jobs.count();
// //     if (count > 0) return; // ✅ already seeded

// //     console.log("🌱 Seeding DB...");

// //     // --- 30 Jobs ---
// //     const jobTitles = [
// //       "Frontend Developer","Backend Developer","Fullstack Engineer","Mobile App Developer","DevOps Engineer",
// //       "QA Engineer","Data Scientist","Machine Learning Engineer","Product Manager","UI/UX Designer",
// //       "Cloud Engineer","Database Administrator","Game Developer","Embedded Systems Engineer","Cybersecurity Analyst",
// //       "Technical Writer","System Architect","Blockchain Developer","AI Researcher","Site Reliability Engineer",
// //       "AR/VR Developer","Automation Engineer","SEO Specialist","Support Engineer","Network Engineer",
// //       "IT Consultant","Software Engineer","Test Automation Specialist","Integration Engineer","Business Analyst"
// //     ];
// //     const jobs = jobTitles.map((title, i) => ({
// //       title,
// //       slug: title.toLowerCase().replace(/\s+/g, "-"),
// //       status: i % 5 === 0 ? "archived" : "active",
// //       order: i + 1,
// //       tags: [title.split(" ")[0].toLowerCase()],
// //       location: i % 2 === 0 ? "Remote" : "Bangalore",
// //       mode: i % 3 === 0 ? "Contract" : "Full-time",
// //       salary: `${6 + (i % 10)} LPA`,
// //       experience: `${1 + (i % 5)}+ years`,
// //       roleDescription: `Exciting role as ${title} at TalentFlow`,
// //       company: "TalentFlow",
// //     }));
// //     await db.jobs.bulkAdd(jobs);

// //     // --- 1000 Candidates ---
// //     const candidates = Array.from({ length: 1000 }).map((_, i) => ({
// //       name: `Candidate ${i + 1}`,
// //       email: `candidate${i + 1}@mail.com`,
// //       stage: ["applied", "screen", "tech", "offer", "hired", "rejected"][i % 6],
// //       jobId: (i % jobTitles.length) + 1,
// //     }));
// //     await db.candidates.bulkAdd(candidates);

// //     // --- 3 Assessments ---
// //     const assessments = [1, 2, 3].map((jobId) => ({
// //       jobId,
// //       sections: [
// //         {
// //           title: "General Skills",
// //           questions: [
// //             { type: "short-text", label: "Introduce yourself" },
// //             { type: "numeric", label: "Years of relevant experience?", min: 0, max: 20 },
// //             { type: "multi-choice", label: "Preferred technologies?", options: ["React", "Node", "Java", "Python"] },
// //           ],
// //         },
// //       ],
// //     }));
// //     await db.assessments.bulkAdd(assessments);

// //     console.log("✅ Database seeded!");
// //   } catch (e) {
// //     console.error("Seed error", e);
// //   }
// // }



// import { db } from "./db";

// export async function seedDatabase(force = false) {
//   try {
//     if (force) {
//       console.log("⚠️ Clearing DB before reseed...");
//       await db.jobs.clear();
//       await db.candidates.clear();
//       await db.assessments.clear();
//     }

//     const count = await db.jobs.count();
//     if (count > 0 && !force) {
//       console.log("⚡ Database already seeded, skipping.");
//       return;
//     }

//     console.log("🌱 Seeding DB...");

//     // --- 30 Jobs ---
//     const jobTitles = [
//       "Frontend Developer","Backend Developer","Fullstack Engineer","Mobile App Developer","DevOps Engineer",
//       "QA Engineer","Data Scientist","Machine Learning Engineer","Product Manager","UI/UX Designer",
//       "Cloud Engineer","Database Administrator","Game Developer","Embedded Systems Engineer","Cybersecurity Analyst",
//       "Technical Writer","System Architect","Blockchain Developer","AI Researcher","Site Reliability Engineer",
//       "AR/VR Developer","Automation Engineer","SEO Specialist","Support Engineer","Network Engineer",
//       "IT Consultant","Software Engineer","Test Automation Specialist","Integration Engineer","Business Analyst"
//     ];

//     const jobs = jobTitles.map((title, i) => ({
//       title,
//       slug: title.toLowerCase().replace(/\s+/g, "-"),
//       status: i % 5 === 0 ? "archived" : "active",
//       order: i + 1,
//       tags: [title.split(" ")[0].toLowerCase()],
//       location: i % 2 === 0 ? "Remote" : "Bangalore",
//       mode: i % 3 === 0 ? "Contract" : "Full-time",
//       salary: `${6 + (i % 10)} LPA`,
//       experience: `${1 + (i % 5)}+ years`,
//       roleDescription: `Exciting role as ${title} at TalentFlow`,
//       company: "TalentFlow",
//     }));

//     await db.jobs.bulkAdd(jobs);
//     console.log("✅ Jobs seeded:", jobs.length);

//     // --- 1000 Candidates ---
//     const candidates = Array.from({ length: 1000 }).map((_, i) => ({
//       name: `Candidate ${i + 1}`,
//       email: `candidate${i + 1}@mail.com`,
//       stage: ["applied", "screen", "tech", "offer", "hired", "rejected"][i % 6],
//       jobId: (i % jobTitles.length) + 1,
//     }));

//     console.log("Seeding", candidates.length, "candidates...");
//     await db.candidates.bulkAdd(candidates);
//     console.log("✅ Candidates seeded:", candidates.length);

//     // --- 3 Assessments ---
//     const assessments = [1, 2, 3].map((jobId) => ({
//       jobId,
//       sections: [
//         {
//           title: "General Skills",
//           questions: [
//             { type: "short-text", label: "Introduce yourself" },
//             { type: "numeric", label: "Years of relevant experience?", min: 0, max: 20 },
//             { type: "multi-choice", label: "Preferred technologies?", options: ["React", "Node", "Java", "Python"] },
//           ],
//         },
//       ],
//     }));

//     await db.assessments.bulkAdd(assessments);
//     console.log("✅ Assessments seeded:", assessments.length);

//     console.log("🎉 Database seeding complete!");
//   } catch (e) {
//     console.error("❌ Seed error", e);
//   }
// }






import { db } from "./db";
import { seedAssessments } from "./seedAssessments";

export async function seedDatabase(force = false) {
  try {
    if (force) {
      console.log("⚠️ Clearing DB before reseed...");
      await db.jobs.clear();
      await db.candidates.clear();
      await db.assessments.clear();
    }

    const count = await db.jobs.count();
    if (count > 0 && !force) {
      console.log("⚡ Database already seeded, skipping.");
      return;
    }

    console.log("🌱 Seeding DB...");

    // --- Jobs ---
    const jobTitles = [
      "Frontend Developer","Backend Developer","Fullstack Engineer","Mobile App Developer","DevOps Engineer",
      "QA Engineer","Data Scientist","Machine Learning Engineer","Product Manager","UI/UX Designer",
      "Cloud Engineer","Database Administrator","Game Developer","Embedded Systems Engineer","Cybersecurity Analyst",
      "Technical Writer","System Architect","Blockchain Developer","AI Researcher","Site Reliability Engineer",
      "AR/VR Developer","Automation Engineer","SEO Specialist","Support Engineer","Network Engineer",
      "IT Consultant","Software Engineer","Test Automation Specialist","Integration Engineer","Business Analyst"
    ];

    const jobs = jobTitles.map((title, i) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      status: i % 5 === 0 ? "archived" : "active",
      order: i + 1,
      tags: [title.split(" ")[0].toLowerCase()],
      location: i % 2 === 0 ? "Remote" : "Bangalore",
      mode: i % 3 === 0 ? "Contract" : "Full-time",
      salary: `${6 + (i % 10)} LPA`,
      experience: `${1 + (i % 5)}+ years`,
      roleDescription: `Exciting role as ${title} at TalentFlow`,
      company: "TalentFlow",
    }));

    await db.jobs.bulkAdd(jobs);
    console.log("✅ Jobs seeded:", jobs.length);

    // --- Candidates ---
    const candidates = Array.from({ length: 1000 }).map((_, i) => ({
      name: `Candidate ${i + 1}`,
      email: `candidate${i + 1}@mail.com`,
      stage: ["applied", "screen", "tech", "offer", "hired", "rejected"][i % 6],
      jobId: (i % jobTitles.length) + 1,
    }));

    await db.candidates.bulkAdd(candidates);
    console.log("✅ Candidates seeded:", candidates.length);

    // --- Assessments ---
    await db.assessments.bulkAdd(seedAssessments);
    console.log("✅ Assessments seeded:", seedAssessments.length);

    console.log("🎉 Database seeding complete!");
  } catch (e) {
    console.error("❌ Seed error", e);
  }
}
