// // // import React, { useState } from "react";
// // // import QuestionRenderer from "./QuestionRenderer";

// // // export default function PreviewForm({ assessment, onSubmit }) {
// // //   const [values, setValues] = useState({});
// // //   const [errors, setErrors] = useState({});

// // //   const handleChange = (qid, val) => {
// // //     setValues((prev) => ({ ...prev, [qid]: val }));
// // //   };

// // //   const validate = () => {
// // //     const errs = {};
// // //     for (const sec of assessment.sections) {
// // //       for (const q of sec.questions) {
// // //         // check conditional visibility
// // //         if (q.conditional && values[q.conditional.questionId] !== q.conditional.value) {
// // //           continue;
// // //         }
// // //         const val = values[q.id];
// // //         if (q.required) {
// // //           if (q.type === "multi-choice") {
// // //             if (!val || val.length === 0) errs[q.id] = "Required";
// // //           } else if (q.type === "file-upload") {
// // //             if (!val) errs[q.id] = "Required";
// // //           } else {
// // //             if (!val || String(val).trim() === "") errs[q.id] = "Required";
// // //           }
// // //         }
// // //         if (q.type === "numeric-range" && val) {
// // //           const n = Number(val);
// // //           if (q.min !== undefined && n < q.min) errs[q.id] = `Min ${q.min}`;
// // //           if (q.max !== undefined && n > q.max) errs[q.id] = `Max ${q.max}`;
// // //         }
// // //         if ((q.type === "short-text" || q.type === "long-text") && q.maxLength) {
// // //           if (val && val.length > q.maxLength) errs[q.id] = `Max ${q.maxLength} chars`;
// // //         }
// // //       }
// // //     }
// // //     setErrors(errs);
// // //     return Object.keys(errs).length === 0;
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (!validate()) {
// // //       alert("Please fix validation errors");
// // //       return;
// // //     }
// // //     if (onSubmit) {
// // //       onSubmit(values); // parent handles persistence
// // //     } else {
// // //       alert("✅ Form is valid (no persistence handler provided)");
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="space-y-4">
// // //       {assessment.sections.map((sec) => (
// // //         <div key={sec.id} className="p-3 border rounded">
// // //           <div className="font-semibold">{sec.title}</div>
// // //           {sec.description && (
// // //             <div className="text-sm text-slate-500 mb-2">{sec.description}</div>
// // //           )}
// // //           <div className="space-y-3">
// // //             {sec.questions.map((q) => {
// // //               // skip conditional
// // //               if (q.conditional && values[q.conditional.questionId] !== q.conditional.value) {
// // //                 return null;
// // //               }
// // //               return (
// // //                 <div key={q.id}>
// // //                   <label className="block text-sm font-medium">
// // //                     {q.label}
// // //                     {q.required && <span className="text-red-500"> *</span>}
// // //                   </label>
// // //                   <QuestionRenderer
// // //                     question={q}
// // //                     value={values[q.id]}
// // //                     onChange={(v) => handleChange(q.id, v)}
// // //                   />
// // //                   {errors[q.id] && (
// // //                     <div className="text-xs text-red-500">{errors[q.id]}</div>
// // //                   )}
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       ))}

// // //       <button
// // //         type="submit"
// // //         className="px-3 py-2 rounded bg-indigo-600 text-white"
// // //       >
// // //         Submit
// // //       </button>
// // //     </form>
// // //   );
// // // }




// // import React, { useState } from "react";
// // import QuestionRenderer from "./QuestionRenderer";

// // export default function PreviewForm({ assessment, onSubmit }) {
// //   const [values, setValues] = useState({});
// //   const [errors, setErrors] = useState({});
// //   const [submitting, setSubmitting] = useState(false);

// //   const handleChange = (qid, val) => {
// //     setValues((prev) => ({ ...prev, [qid]: val }));
// //   };

// //   const validate = () => {
// //     const errs = {};
// //     for (const sec of assessment.sections) {
// //       for (const q of sec.questions) {
// //         if (q.conditional && values[q.conditional.questionId] !== q.conditional.value) {
// //           continue;
// //         }
// //         const val = values[q.id];
// //         if (q.required) {
// //           if (q.type === "multi-choice" && (!val || val.length === 0)) errs[q.id] = "Required";
// //           if (q.type === "file-upload" && !val) errs[q.id] = "Required";
// //           if (!val || String(val).trim() === "") errs[q.id] = "Required";
// //         }
// //         if (q.type === "numeric-range" && val) {
// //           const n = Number(val);
// //           if (q.min !== undefined && n < q.min) errs[q.id] = `Min ${q.min}`;
// //           if (q.max !== undefined && n > q.max) errs[q.id] = `Max ${q.max}`;
// //         }
// //         if ((q.type === "short-text" || q.type === "long-text") && q.maxLength) {
// //           if (val && val.length > q.maxLength) errs[q.id] = `Max ${q.maxLength} chars`;
// //         }
// //       }
// //     }
// //     setErrors(errs);
// //     return Object.keys(errs).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validate()) {
// //       alert("❌ Please fix validation errors");
// //       return;
// //     }

// //     try {
// //       setSubmitting(true);

// //       // 👉 Send submission to MSW API
// //       const res = await fetch(`/assessments/${assessment.jobId}/submit`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           candidateId: "cand-123", // later: get from logged-in candidate
// //           response: values,
// //         }),
// //       });

// //       if (!res.ok) throw new Error("Failed to save submission");

// //       if (onSubmit) onSubmit(values);

// //       alert("✅ Submission saved locally!");
// //       setValues({}); // reset form
// //     } catch (err) {
// //       console.error("Error submitting assessment:", err);
// //       alert("❌ Failed to submit assessment");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-4">
// //       {assessment && assessment.sections && assessment.sections.map((sec) => (
// //         <div key={sec.id} className="p-3 border rounded">
// //           <div className="font-semibold">{sec.title}</div>
// //           {sec.description && (
// //             <div className="text-sm text-slate-500 mb-2">{sec.description}</div>
// //           )}
// //           <div className="space-y-3">
// //             {sec.questions.map((q) => {
// //               if (q.conditional && values[q.conditional.questionId] !== q.conditional.value) {
// //                 return null;
// //               }
// //               return (
// //                 <div key={q.id}>
// //                   <label className="block text-sm font-medium">
// //                     {q.label}
// //                     {q.required && <span className="text-red-500"> *</span>}
// //                   </label>
// //                   <QuestionRenderer
// //                     question={q}
// //                     value={values[q.id]}
// //                     onChange={(v) => handleChange(q.id, v)}
// //                   />
// //                   {errors[q.id] && (
// //                     <div className="text-xs text-red-500">{errors[q.id]}</div>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       ))}

// //       <button
// //         type="submit"
// //         disabled={submitting}
// //         className="px-3 py-2 rounded bg-indigo-600 text-white"
// //       >
// //         {submitting ? "Submitting..." : "Submit"}
// //       </button>
// //     </form>
// //   );
// // }






// import React, { useState } from "react";
// import QuestionRenderer from "./QuestionRenderer";

// export default function PreviewForm({ assessment, onSubmit }) {
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});

//   if (!assessment) {
//     return <div>No assessment loaded</div>;
//   }

//   const handleChange = (questionId, value) => {
//     setValues((prev) => ({ ...prev, [questionId]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let newErrors = {};

//     assessment.sections.forEach((sec) => {
//       sec.questions.forEach((q) => {
//         if (q.required && !values[q.id]) {
//           newErrors[q.id] = "This field is required";
//         }
//       });
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     onSubmit(values);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {assessment.sections.map((sec) => (
//         <div key={sec.id} className="border p-4 rounded">
//           <h3 className="font-semibold mb-2">{sec.title}</h3>
//           <div className="space-y-3">
//             {sec.questions.map((q) => {
//               if (
//                 q.conditional &&
//                 values[q.conditional.questionId] !== q.conditional.value
//               ) {
//                 return null;
//               }
//               return (
//                 <div key={q.id}>
//                   <label className="block text-sm font-medium">
//                     {q.label}
//                     {q.required && <span className="text-red-500"> *</span>}
//                   </label>
//                   <QuestionRenderer
//                     key={q.id} // ✅ unique key for each renderer
//                     question={q}
//                     value={values[q.id]}
//                     onChange={(v) => handleChange(q.id, v)}
//                   />
//                   {errors[q.id] && (
//                     <div className="text-xs text-red-500">{errors[q.id]}</div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//       <button
//         type="submit"
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }


