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
  const assessments = [
  {
  jobId: 1,
  title: "Frontend Developer Assessment",
  form: {
    sections: [
      {
        id: 1,
        title: "JavaScript Basics",
        description: "Test your JS fundamentals",
        questions: [
          {
            id: 101,
            type: "single-choice",
            question: "What does `===` check in JavaScript?",
            required: true,
            options: [
              {
                label: "Only value",
                conditionalQuestion: {
                  id: 1011,
                  type: "short-text",
                  question: "Give an example where value-only comparison can fail.",
                  validation: { maxLength: 100 }
                }
              },
              {
                label: "Value and type",
                conditionalQuestion: {
                  id: 1012,
                  type: "short-text",
                  question: "Why is strict equality better than `==`?",
                  validation: { maxLength: 100 }
                }
              },
              {
                label: "Memory reference",
                conditionalQuestion: {
                  id: 1013,
                  type: "short-text",
                  question: "Which operator is used for reference comparison?",
                  validation: { maxLength: 100 }
                }
              }
            ]
          },
          {
            id: 102,
            type: "short-text",
            question: "Explain event delegation in JavaScript.",
            required: true,
            validation: { maxLength: 150 }
          },
          {
            id: 103,
            type: "numeric",
            question: "What is the result of `parseInt('08')` in older JS versions?",
            validation: { min: 0, max: 20 }
          },
          {
            id: 104,
            type: "multi-choice",
            question: "Which of these are array methods?",
            options: [
              "map()" ,
              "filter()",
              "reduce()",
              "assign()" 
            ]
          }
        ]
      },
      {
        id: 2,
        title: "React",
        description: "Core React concepts",
        questions: [
          {
            id: 105,
            type: "short-text",
            question: "What is JSX?",
            validation: { maxLength: 100 }
          },
          {
            id: 106,
            type: "single-choice",
            question: "Which hook is used for managing state?",
            options: [
              {
                label: "useEffect",
                conditionalQuestion: {
                  id: 1061,
                  type: "short-text",
                  question: "When would you use useEffect for state-like behavior?",
                  validation: { maxLength: 100 }
                }
              },
              {
                label: "useState",
                conditionalQuestion: {
                  id: 1062,
                  type: "short-text",
                  question: "Give an example of initializing state with useState.",
                  validation: { maxLength: 100 }
                }
              },
              {
                label: "useReducer",
                conditionalQuestion: {
                  id: 1063,
                  type: "long-text",
                  question: "When would you use useReducer over useState?",
                  validation: { maxLength: 200 }
                }
              }
            ]
          },
          {
            id: 107,
            type: "long-text",
            question: "Explain reconciliation in React.",
            validation: { maxLength: 300 }
          },
          {
            id: 108,
            type: "multi-choice",
            question: "Which of the following are React lifecycle methods (class)?",
            options: [
              "componentDidMount",
              "componentDidUpdate" ,
              "componentWillUnmount" ,
              "onMounted" 
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Frontend UI",
        description: "CSS & HTML basics",
        questions: [
          {
            id: 109,
            type: "short-text",
            question: "What does flex:1 mean in CSS Flexbox?",
            validation: { maxLength: 80 }
          },
          {
            id: 110,
            type: "file-upload",
            question: "Upload a screenshot of a UI you built",
            validation: { fileType: "image", maxSizeMB: 2, multiple: false }
          }
        ]
      }
    ]
  }
},

  {
    jobId: 2,
    title: "Backend Developer Technical Assessment",
    form: {
      sections: [
        {
          id: 4,
          title: "Databases",
          description: "SQL and database knowledge",
          questions: [
            {
              id: 201,
              type: "short-text",
              question: "What is the difference between SQL and NoSQL databases?",
              required: true,
              validation: { maxLength: 120 }
            },
            {
              id: 202,
              type: "numeric",
              question: "How many types of normalization forms exist?",
              validation: { min: 1, max: 10 }
            },
            {
              id: 203,
              type: "multi-choice",
              question: "Which of these are SQL commands?",
              options: [
                "SELECT" ,
                 "INSERT" ,
                 "FETCH" ,
                "UPDATE" 
              ]
            },
            {
              id: 204,
              type: "single-choice",
              question: "Which indexing strategy speeds up queries most?",
              options: [
                { label: "Clustered Index" },
                { label: "Non-Clustered Index" },
                { label: "No Index" }
              ]
            }
          ]
        },
        {
          id: 5,
          title: "System Design",
          description: "Scalability & architecture",
          questions: [
            {
              id: 205,
              type: "long-text",
              question: "Design a URL shortener service like bit.ly. Describe your DB schema and scaling strategy.",
              validation: { maxLength: 500 }
            },
            {
              id: 206,
              type: "short-text",
              question: "What is horizontal scaling?",
              validation: { maxLength: 80 }
            },
            {
              id: 207,
              type: "single-choice",
              question: "Choose the best architecture for high read-heavy systems:",
              options: [
                { label: "Master-Slave replication" },
                { label: "Master-Master replication" },
                { 
                  label: "Sharding",
                  conditionalQuestion: {
                    id: 2071,
                    type: "short-text",
                    question: "When would you NOT use sharding?",
                    validation: { maxLength: 100 }
                  }
                }
              ]
            },
            {
              id: 208,
              type: "single-choice",
              question: "Which of these are caching solutions?",
              options: [
                { label: "Redis" },
                { label: "Memcached" },
                { label: "Kafka" },
                { label: "ElasticSearch" }
              ]
            }
          ]
        },
        {
          id: 6,
          title: "APIs & Security",
          description: "Web API and security basics",
          questions: [
            {
              id: 209,
              type: "short-text",
              question: "What is an idempotent HTTP method?",
              validation: { maxLength: 120 }
            },
            {
              id: 210,
              type: "file-upload",
              question: "Upload a code snippet implementing JWT authentication",
              validation: { fileType: "document", maxSizeMB: 3, multiple: false }
            }
          ]
        }
      ]
    }
  },

  {
    jobId: 3,
    title: "General Aptitude & HR Assessment",
    form: {
      sections: [
        {
          id: 7,
          title: "Logical Reasoning",
          description: "Basic aptitude questions",
          questions: [
            {
              id: 301,
              type: "numeric",
              question: "If a train travels 60 km in 1.5 hours, what is its average speed?",
              validation: { min: 0, max: 500 }
            },
            {
              id: 302,
              type: "single-choice",
              question: "Which shape has 5 sides?",
              options: [
                { label: "Triangle" },
                { label: "Pentagon" },
                { 
                  label: "Hexagon",
                  conditionalQuestion: {
                    id: 3021,
                    type: "short-text",
                    question: "How many diagonals does this shape have?",
                    validation: { min: 0, max: 20 }
                  }
                }
              ]
            },
            {
              id: 303,
              type: "single-choice",
              question: "Which of these are prime numbers?",
              options: [
                { label: "2" },
                { label: "3" },
                { label: "4" },
                { label: "5" }
              ]
            },
            {
              id: 304,
              type: "short-text",
              question: "Solve: 15 * 12 = ?",
              validation: { maxLength: 5 }
            }
          ]
        },
        {
          id: 8,
          title: "Verbal Ability",
          description: "English grammar and comprehension",
          questions: [
            {
              id: 305,
              type: "single-choice",
              question: "Choose the correct spelling:",
              options: [
                { label: "Recieve" },
                { label: "Receive" },
                { label: "Receeve" }
              ]
            },
            {
              id: 306,
              type: "long-text",
              question: "Write a short passage about your favorite book.",
              validation: { maxLength: 300 }
            },
            {
              id: 307,
              type: "short-text",
              question: "What is the synonym of 'happy'?",
              validation: { maxLength: 50 }
            },
            {
              id: 308,
              type: "single-choice",
              question: "Which are articles in English?",
              options: [
                { label: "a" },
                { label: "an" },
                { label: "the" },
                { label: "on" }
              ]
            }
          ]
        },
        {
          id: 9,
          title: "HR Questions",
          description: "Soft skills & motivation",
          questions: [
            {
              id: 309,
              type: "long-text",
              question: "Why do you want to join our company?",
              required: true,
              validation: { maxLength: 300 }
            },
            {
              id: 310,
              type: "file-upload",
              question: "Upload your resume",
              placeholder: "Please upload your CV",
              validation: { fileType: "document", maxSizeMB: 5, multiple: false }
            },
            {
              id: 311,
              type: "single-choice",
              question: "Would you relocate for this job?",
              options: [
                { label: "Yes" },
                { 
                  label: "No", 
                  conditionalQuestion: {
                    id: 3111,
                    type: "long-text",
                    question: "Explain why relocation is not possible.",
                    validation: { maxLength: 200 }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
];

await db.assessments.bulkAdd(assessments);
}
