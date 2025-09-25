// src/db/seedAssessments.js

export const seedAssessments = [
  {
    jobId: "job-1",
    title: "Frontend Developer Assessment",
    sections: [
      {
        title: "Core Frontend",
        questions: [
          { id: "q1", type: "single-choice", text: "What is the output of typeof null in JavaScript?", options: ["object", "null", "undefined", "boolean"], required: true },
          { id: "q2", type: "multi-choice", text: "Which hooks are provided by React?", options: ["useState", "useEffect", "useWorker", "useLayoutEffect"], required: true },
          { id: "q3", type: "short-text", text: "Explain virtual DOM in your own words.", required: true },
          { id: "q4", type: "long-text", text: "Build a small component that renders a list of users.", required: false },
          { id: "q5", type: "single-choice", text: "CSS Flexbox: which property defines alignment on the cross-axis?", options: ["justify-content", "align-items", "align-content", "flex-direction"], required: true },
          { id: "q6", type: "short-text", text: "What is the difference between == and === in JavaScript?", required: true },
          { id: "q7", type: "numeric", text: "What range of years do you have experience with React?", min: 0, max: 10, required: false },
          { id: "q8", type: "file-upload", text: "Upload a screenshot of a responsive layout you’ve built." },
          { id: "q9", type: "multi-choice", text: "Which libraries are commonly used for state management in React?", options: ["Redux", "MobX", "Zustand", "Flux"], required: false },
          { id: "q10", type: "short-text", text: "What is tree shaking in bundlers like Webpack/Vite?", required: false }
        ]
      }
    ]
  },
  {
    jobId: "job-2",
    title: "Backend Engineer Assessment",
    sections: [
      {
        title: "Backend Knowledge",
        questions: [
          { id: "q1", type: "multi-choice", text: "What are the four main HTTP methods in REST?", options: ["GET", "POST", "PUT", "DELETE", "PATCH"], required: true },
          { id: "q2", type: "multi-choice", text: "Which database types have you worked with?", options: ["SQL", "NoSQL", "In-Memory", "Graph"], required: true },
          { id: "q3", type: "long-text", text: "Write a short explanation of ACID properties.", required: true },
          { id: "q4", type: "numeric", text: "What port does HTTP run on by default?", min: 0, max: 65535, required: true },
          { id: "q5", type: "single-choice", text: "Which Node.js module is used to create an HTTP server?", options: ["http", "fs", "net", "express"], required: true },
          { id: "q6", type: "short-text", text: "What’s the difference between synchronous and asynchronous code?", required: true },
          { id: "q7", type: "long-text", text: "Provide a code snippet of an Express route that handles a GET request.", required: false },
          { id: "q8", type: "file-upload", text: "Upload your ER diagram for a past project." },
          { id: "q9", type: "long-text", text: "If a job requires scaling API traffic 10x, what approaches would you consider?", required: false },
          { id: "q10", type: "multi-choice", text: "Which caching solutions have you used?", options: ["Redis", "Memcached", "Varnish", "CDN"], required: false }
        ]
      }
    ]
  },
  {
    jobId: "job-3",
    title: "HR Manager Assessment",
    sections: [
      {
        title: "Recruitment Knowledge",
        questions: [
          { id: "q1", type: "numeric", text: "How many years of experience do you have in recruitment?", min: 0, max: 20, required: true },
          { id: "q2", type: "multi-choice", text: "Which ATS tools have you worked with?", options: ["Greenhouse", "Lever", "Workday", "Naukri ATS"], required: false },
          { id: "q3", type: "long-text", text: "Describe your approach to candidate sourcing.", required: true },
          { id: "q4", type: "single-choice", text: "What is your preferred communication channel with candidates?", options: ["Email", "Phone", "LinkedIn", "WhatsApp"], required: true },
          { id: "q5", type: "short-text", text: "How do you handle a candidate rejecting an offer?", required: true },
          { id: "q6", type: "file-upload", text: "Upload a sample candidate feedback form you’ve used." },
          { id: "q7", type: "multi-choice", text: "Which social platforms do you use for outreach?", options: ["LinkedIn", "Naukri", "GitHub", "Twitter"], required: false },
          { id: "q8", type: "single-choice", text: "Do you track diversity metrics in hiring?", options: ["Yes", "No"], required: true },
          { id: "q9", type: "long-text", text: "Explain how you coordinate with hiring managers during the interview process.", required: true },
          { id: "q10", type: "short-text", text: "What’s one metric you use to evaluate the success of your recruitment pipeline?", required: false }
        ]
      }
    ]
  }
];
