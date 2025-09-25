// // // import React, { useState, useEffect } from "react";
// // // import SectionEditor from "./SectionEditor";
// // // import QuestionEditor from "./QuestionEditor";
// // // import PreviewForm from "./PreviewForm";

// // // const emptyAssessment = (jobId) => ({
// // //   jobId,
// // //   sections: [
// // //     {
// // //       id: crypto.randomUUID(),
// // //       title: "Section 1",
// // //       description: "",
// // //       questions: [],
// // //     },
// // //   ],
// // // });

// // // export default function AssessmentBuilder({ jobId }) {
// // //   const [assessment, setAssessment] = useState(() => emptyAssessment(jobId));
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedSectionId, setSelectedSectionId] = useState(null);
// // //   const [selectedQuestionId, setSelectedQuestionId] = useState(null);

// // //   // --- Load from API ---
// // //   useEffect(() => {
// // //     let mounted = true;
// // //     (async () => {
// // //       try {
// // //         setLoading(true);
// // //         const res = await fetch(`/assessments/${jobId}`);
// // //         if (!res.ok) throw new Error("Failed to fetch assessment");
// // //         const data = await res.json();
// // //         if (mounted) {
// // //           setAssessment(data);
// // //           setSelectedSectionId(data.sections?.[0]?.id || null);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error loading assessment:", err);
// // //       } finally {
// // //         if (mounted) setLoading(false);
// // //       }
// // //     })();
// // //     return () => (mounted = false);
// // //   }, [jobId]);

// // //   // --- Auto-save ---
// // //   useEffect(() => {
// // //     if (loading) return;
// // //     const timeout = setTimeout(async () => {
// // //       try {
// // //         await fetch(`/assessments/${jobId}`, {
// // //           method: "PUT",
// // //           headers: { "Content-Type": "application/json" },
// // //           body: JSON.stringify(assessment),
// // //         });
// // //       } catch (err) {
// // //         console.error("Error saving assessment:", err);
// // //       }
// // //     }, 500);
// // //     return () => clearTimeout(timeout);
// // //   }, [assessment, jobId, loading]);

// // //   if (loading) {
// // //     return <div className="p-4">Loading assessment...</div>;
// // //   }

// // //   // find selected section
// // //   const selectedSection = assessment.sections.find(
// // //     (s) => s.id === selectedSectionId
// // //   );

// // //   return (
// // //     <div className="min-h-screen p-4 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
// // //       <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
// // //         {/* Left: Sections list */}
// // //         <div className="col-span-1 bg-white dark:bg-slate-800 rounded-lg p-3 shadow">
// // //           <h2 className="font-semibold mb-2">Sections</h2>
// // //           <button
// // //             onClick={() => {
// // //               const sec = {
// // //                 id: crypto.randomUUID(),
// // //                 title: `Section ${assessment.sections.length + 1}`,
// // //                 description: "",
// // //                 questions: [],
// // //               };
// // //               setAssessment((s) => ({
// // //                 ...s,
// // //                 sections: [...s.sections, sec],
// // //               }));
// // //               setSelectedSectionId(sec.id);
// // //               setSelectedQuestionId(null);
// // //             }}
// // //             className="w-full py-1 mb-3 rounded bg-green-500 text-white"
// // //           >
// // //             + Add Section
// // //           </button>

// // //           <div className="space-y-2">
// // //             {assessment.sections.map((sec) => (
// // //               <div
// // //                 key={sec.id}
// // //                 onClick={() => setSelectedSectionId(sec.id)}
// // //                 className={`p-2 rounded cursor-pointer ${
// // //                   selectedSectionId === sec.id
// // //                     ? "bg-indigo-100 border border-indigo-400"
// // //                     : "bg-slate-100"
// // //                 }`}
// // //               >
// // //                 <div className="text-sm font-medium">{sec.title}</div>
// // //                 <div className="text-xs text-slate-500 line-clamp-1">
// // //                   {sec.description || "No description"}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Middle: Editors */}
// // //         <div className="col-span-1 bg-white dark:bg-slate-800 rounded-lg p-3 shadow">
// // //           <h2 className="font-semibold mb-2">Editor</h2>
// // //           {selectedSection ? (
// // //             <SectionEditor
// // //               section={selectedSection}
// // //               selectedQuestionId={selectedQuestionId}
// // //               onUpdateSection={(patch) =>
// // //                 setAssessment((s) => ({
// // //                   ...s,
// // //                   sections: s.sections.map((x) =>
// // //                     x.id === selectedSection.id ? { ...x, ...patch } : x
// // //                   ),
// // //                 }))
// // //               }
// // //               onSelectQuestion={setSelectedQuestionId}
// // //               onUpdateQuestion={(qid, patch) =>
// // //                 setAssessment((s) => ({
// // //                   ...s,
// // //                   sections: s.sections.map((sec) =>
// // //                     sec.id === selectedSection.id
// // //                       ? {
// // //                           ...sec,
// // //                           questions: sec.questions.map((q) =>
// // //                             q.id === qid ? { ...q, ...patch } : q
// // //                           ),
// // //                         }
// // //                       : sec
// // //                   ),
// // //                 }))
// // //               }
// // //             />
// // //           ) : (
// // //             <p className="text-sm text-slate-500">Select a section to edit</p>
// // //           )}
// // //         </div>

// // //         {/* Right: Preview */}
// // //         <div className="col-span-1 bg-white dark:bg-slate-800 rounded-lg p-3 shadow">
// // //           <h2 className="font-semibold mb-2">Live Preview</h2>
// // //           <PreviewForm assessment={assessment} />
// // //         </div>
// // //       </div>
// // //     </div>
    
// // //   );
// // // }


// // // // import React from "react";

// // // // 🔴 Commenting out everything else for testing
// // // // import SectionEditor from "./SectionEditor";
// // // // import QuestionEditor from "./QuestionEditor";
// // // // import PreviewForm from "./PreviewForm";

// // // // const emptyAssessment = (jobId) => ({
// // // //   jobId,
// // // //   sections: [
// // // //     {
// // // //       id: crypto.randomUUID(),
// // // //       title: "Section 1",
// // // //       description: "",
// // // //       questions: [],
// // // //     },
// // // //   ],
// // // // });

// // // // export default function AssessmentBuilder({ jobId }) {
// // // //   const [assessment, setAssessment] = useState(() => emptyAssessment(jobId));
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [selectedSectionId, setSelectedSectionId] = useState(null);
// // // //   const [selectedQuestionId, setSelectedQuestionId] = useState(null);

// // // //   // ...useEffects + logic...

// // // //   return (
// // // //     <div className="min-h-screen p-4 bg-gray-50">
// // // //       {/* full UI */}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function AssessmentBuilder({ jobId }) {
// // // //   return (
// // // //     <div className="p-6 text-red-500">
// // // //       ✅ AssessmentBuilder is loading correctly for jobId: {jobId}
// // // //     </div>
// // // //   );
// // // // }




// // // import { useState, useEffect, useOptimistic, startTransition, useCallback } from "react";
// // // import SectionEditor from "./SectionEditor";
// // // import QuestionEditor from "./QuestionEditor";
// // // import PreviewForm from "./PreviewForm";

// // // const emptyAssessment = (jobId) => ({
// // //   jobId,
// // //   sections: [
// // //     {
// // //       id: crypto.randomUUID(),
// // //       title: "Section 1",
// // //       description: "",
// // //       questions: [],
// // //     },
// // //   ],
// // // });

// // // export default function AssessmentBuilder({ jobId }) {
// // //   const [assessment, setAssessment] = useState(() => emptyAssessment(jobId));
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedSectionId, setSelectedSectionId] = useState(null);
// // //   const [selectedQuestionId, setSelectedQuestionId] = useState(null);
// // //   const [loadingStates, setLoadingStates] = useState({});
// // //   const [saveStatus, setSaveStatus] = useState('saved'); // 'saving', 'saved', 'error'
// // //   console.log("Assesment: ",assessment)
// // //   // Optimistic updates for assessment changes
// // //   const [optimisticAssessment, addOptimisticUpdate] = useOptimistic(
// // //     assessment,
// // //     (state, action) => {
// // //       switch (action.type) {
// // //         case 'add_section':
// // //           return {
// // //             ...state,
// // //             sections: [...state.sections, action.section]
// // //           };
// // //         case 'update_section':
// // //           return {
// // //             ...state,
// // //             sections: state.sections.map(section =>
// // //               section.id === action.sectionId 
// // //                 ? { ...section, ...action.patch }
// // //                 : section
// // //             )
// // //           };
// // //         case 'delete_section':
// // //           return {
// // //             ...state,
// // //             sections: state.sections.filter(section => section.id !== action.sectionId)
// // //           };
// // //         case 'add_question':
// // //           return {
// // //             ...state,
// // //             sections: state.sections.map(section =>
// // //               section.id === action.sectionId
// // //                 ? { ...section, questions: [...section.questions, action.question] }
// // //                 : section
// // //             )
// // //           };
// // //         case 'update_question':
// // //           return {
// // //             ...state,
// // //             sections: state.sections.map(section =>
// // //               section.id === action.sectionId
// // //                 ? {
// // //                     ...section,
// // //                     questions: section.questions.map(question =>
// // //                       question.id === action.questionId
// // //                         ? { ...question, ...action.patch }
// // //                         : question
// // //                     )
// // //                   }
// // //                 : section
// // //             )
// // //           };
// // //         case 'delete_question':
// // //           return {
// // //             ...state,
// // //             sections: state.sections.map(section =>
// // //               section.id === action.sectionId
// // //                 ? { 
// // //                     ...section, 
// // //                     questions: section.questions.filter(q => q.id !== action.questionId) 
// // //                   }
// // //                 : section
// // //             )
// // //           };
// // //         default:
// // //           return state;
// // //       }
// // //     }
// // //   );

// // //   // Auto-save with optimistic updates
// // //   const saveAssessment = useCallback(async (assessmentData) => {
// // //     setSaveStatus('saving');
// // //     try {
// // //       await fetch(`/assessments/${jobId}`, {
// // //         method: "PUT",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(assessmentData),
// // //       });
// // //       setSaveStatus('saved');
// // //       setAssessment(assessmentData);
// // //     } catch (err) {
// // //       console.error("Error saving assessment:", err);
// // //       setSaveStatus('error');
// // //       // Revert optimistic update on error
// // //       setAssessment(assessment);
// // //     }
// // //   }, [jobId, assessment]);

// // //   // Load from API
// // //   useEffect(() => {
// // //     let mounted = true;
// // //     (async () => {
// // //       try {
// // //         setLoading(true);
// // //         const res = await fetch(`/assessments/${jobId}`);
// // //         if (!res.ok) throw new Error("Failed to fetch assessment");
// // //         const data = await res.json();
// // //         if (mounted) {
// // //           setAssessment(data);
// // //           setSelectedSectionId(data.sections?.[0]?.id || null);
// // //         }
// // //       } catch (err) {
// // //         console.error("Error loading assessment:", err);
// // //       } finally {
// // //         if (mounted) setLoading(false);
// // //       }
// // //     })();
// // //     return () => (mounted = false);
// // //   }, [jobId]);

// // //   // Auto-save with debounce
// // //   useEffect(() => {
// // //     if (loading) return;
// // //     const timeout = setTimeout(() => {
// // //       saveAssessment(optimisticAssessment);
// // //     }, 1000);
// // //     return () => clearTimeout(timeout);
// // //   }, [optimisticAssessment, loading, saveAssessment]);

// // //   // Optimistic section operations
// // //   const handleAddSection = () => {
// // //     const newSection = {
// // //       id: crypto.randomUUID(),
// // //       title: `Section ${optimisticAssessment.sections.length + 1}`,
// // //       description: "",
// // //       questions: [],
// // //     };

// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'add_section', section: newSection });
// // //     });

// // //     setSelectedSectionId(newSection.id);
// // //     setSelectedQuestionId(null);
// // //   };

// // //   const handleUpdateSection = (sectionId, patch) => {
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'update_section', sectionId, patch });
// // //     });
// // //   };

// // //   const handleDeleteSection = (sectionId) => {
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'delete_section', sectionId });
// // //     });

// // //     // Update selection if deleted section was selected
// // //     if (selectedSectionId === sectionId) {
// // //       const remainingSections = optimisticAssessment.sections.filter(s => s.id !== sectionId);
// // //       setSelectedSectionId(remainingSections[0]?.id || null);
// // //       setSelectedQuestionId(null);
// // //     }
// // //   };

// // //   // Optimistic question operations
// // //   const handleAddQuestion = (sectionId, questionType) => {
// // //     const newQuestion = {
// // //       id: crypto.randomUUID(),
// // //       type: questionType,
// // //       label: "New question",
// // //       required: false,
// // //       options: questionType === "single-choice" || questionType === "multi-choice" ? ["Option 1"] : [],
// // //       min: questionType === "numeric-range" ? 0 : undefined,
// // //       max: questionType === "numeric-range" ? 100 : undefined,
// // //       maxLength: questionType === "short-text" ? 100 : questionType === "long-text" ? 1000 : undefined,
// // //       conditional: null,
// // //     };

// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'add_question', sectionId, question: newQuestion });
// // //     });

// // //     setSelectedQuestionId(newQuestion.id);
// // //   };

// // //   const handleUpdateQuestion = (sectionId, questionId, patch) => {
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'update_question', sectionId, questionId, patch });
// // //     });
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
// // //         <div className="text-center space-y-4">
// // //           <div className="w-16 h-16 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-600/25 mx-auto">
// // //             <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
// // //           </div>
// // //           <div>
// // //             <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Loading Assessment Builder</h3>
// // //             <p className="text-slate-500 dark:text-slate-400 text-lg">Setting up your assessment workspace...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const selectedSection = optimisticAssessment.sections.find(s => s.id === selectedSectionId);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
// // //       {/* Header */}
// // //       <div className="border-b border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg">
// // //         <div className="max-w-7xl mx-auto px-8 py-6">
// // //           <div className="flex items-center justify-between">
// // //             <div className="relative">
// // //               <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-2">
// // //                 Assessment Builder
// // //               </h1>
// // //               <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
// // //                 Design and manage your assessment workflow
// // //               </p>
// // //               <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
// // //             </div>

// // //             {/* Save Status Indicator */}
// // //             <div className="flex items-center gap-4">
// // //               <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
// // //                 saveStatus === 'saving' 
// // //                   ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-300'
// // //                   : saveStatus === 'saved'
// // //                   ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300'
// // //                   : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-950/30 dark:border-red-800 dark:text-red-300'
// // //               }`}>
// // //                 {saveStatus === 'saving' && (
// // //                   <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
// // //                 )}
// // //                 {saveStatus === 'saved' && (
// // //                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                   </svg>
// // //                 )}
// // //                 {saveStatus === 'error' && (
// // //                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
// // //                   </svg>
// // //                 )}
// // //                 <span className="font-medium text-sm">
// // //                   {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'All changes saved' : 'Save failed'}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="max-w-7xl mx-auto p-8">
// // //         <div className="grid grid-cols-12 gap-8">
// // //           {/* Left: Sections List */}
// // //           <div className="col-span-3">
// // //             <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
// // //               {/* Header */}
// // //               <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60">
// // //                 <div className="flex items-center justify-between mb-4">
// // //                   <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sections</h2>
// // //                   <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
// // //                     {optimisticAssessment.sections.length}
// // //                   </span>
// // //                 </div>
                
// // //                 <button
// // //                   onClick={handleAddSection}
// // //                   className="w-full py-3 px-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white rounded-xl hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg shadow-slate-600/25 hover:shadow-xl hover:shadow-slate-600/35 hover:-translate-y-0.5 font-semibold flex items-center justify-center gap-2 border border-slate-500/20"
// // //                 >
// // //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
// // //                   </svg>
// // //                   Add Section
// // //                 </button>
// // //               </div>

// // //               {/* Sections List */}
// // //               <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
// // //                 {optimisticAssessment.sections.map((section, index) => (
// // //                   <div
// // //                     key={section.id}
// // //                     onClick={() => {
// // //                       setSelectedSectionId(section.id);
// // //                       setSelectedQuestionId(null);
// // //                     }}
// // //                     className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
// // //                       selectedSectionId === section.id
// // //                         ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-300 dark:border-blue-700 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/20"
// // //                         : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500"
// // //                     }`}
// // //                   >
// // //                     <div className="flex items-start justify-between gap-3">
// // //                       <div className="flex-1 min-w-0">
// // //                         <div className="flex items-center gap-2 mb-1">
// // //                           <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
// // //                             Section {index + 1}
// // //                           </span>
// // //                           {section.questions.length > 0 && (
// // //                             <span className="text-xs bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full">
// // //                               {section.questions.length} questions
// // //                             </span>
// // //                           )}
// // //                         </div>
// // //                         <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate mb-1">
// // //                           {section.title}
// // //                         </h3>
// // //                         <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
// // //                           {section.description || "No description"}
// // //                         </p>
// // //                       </div>
                      
// // //                       <button
// // //                         onClick={(e) => {
// // //                           e.stopPropagation();
// // //                           handleDeleteSection(section.id);
// // //                         }}
// // //                         className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200"
// // //                       >
// // //                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // //                         </svg>
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Middle: Section Editor */}
// // //           <div className="col-span-5">
// // //             <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 h-fit">
// // //               <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60">
// // //                 <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Section Editor</h2>
// // //                 <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
// // //                   Configure your assessment sections and questions
// // //                 </p>
// // //               </div>
              
// // //               <div className="p-6">
// // //                 {selectedSection ? (
// // //                   <SectionEditor
// // //                     section={selectedSection}
// // //                     selectedQuestionId={selectedQuestionId}
// // //                     onUpdateSection={(patch) => handleUpdateSection(selectedSection.id, patch)}
// // //                     onSelectQuestion={setSelectedQuestionId}
// // //                     onUpdateQuestion={(qid, patch) => handleUpdateQuestion(selectedSection.id, qid, patch)}
// // //                     onAddQuestion={(questionType) => handleAddQuestion(selectedSection.id, questionType)}
// // //                   />
// // //                 ) : (
// // //                   <div className="text-center py-12">
// // //                     <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
// // //                       <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //                       </svg>
// // //                     </div>
// // //                     <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">No Section Selected</h3>
// // //                     <p className="text-slate-500 dark:text-slate-400">Choose a section from the left panel to start editing</p>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right: Live Preview */}
// // //           <div className="col-span-4">
// // //             <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 sticky top-8">
// // //               <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60">
// // //                 <div className="flex items-center gap-2">
// // //                   <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
// // //                   <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Live Preview</h2>
// // //                 </div>
// // //                 <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
// // //                   See how your assessment will look to candidates
// // //                 </p>
// // //               </div>
              
// // //               <div className="p-6 max-h-96 overflow-y-auto">
// // //                 <PreviewForm assessment={optimisticAssessment} />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // // import AssessmentHeader from "./AssessmentHeader";
// // // import SectionList from "./SectionList";
// // // import SectionEditorPanel from "./SectionEditorPanel";
// // // import PreviewPanel from "./PreviewPanel";
// // // import { useOptimistic, useState, useCallback, useEffect, startTransition } from "react";
// // // import { useLocalStorage } from "../../../hooks/useLocalStorage"

// // // export default function AssessmentBuilder({ jobId }) {
// // //   const [assessment, setAssessment] = useLocalStorage(`assessment-${jobId}`, {});
// // //   const [loading, setLoading] = useState(false);
// // //   const [selectedSectionId, setSelectedSectionId] = useState(null);
// // //   const [selectedQuestionId, setSelectedQuestionId] = useState(null);
// // //   const [loadingStates, setLoadingStates] = useState({});
// // //   const [saveStatus, setSaveStatus] = useState('saved'); // 'saving', 'saved', 'error'
// // //   console.log("Assesment: ",assessment)

// // //   // Auto-save with optimistic updates
// // //   const saveAssessment = useCallback(async (assessmentData) => {
// // //     setSaveStatus('saving');
// // //     try {
// // //       await fetch(`/assessments/${jobId}`, {
// // //         method: "PUT",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(assessmentData),
// // //       });
// // //       setSaveStatus('saved');
// // //       setAssessment(assessmentData);
// // //     } catch (err) {
// // //       console.error("Error saving assessment:", err);
// // //       setSaveStatus('error');
// // //       // Revert optimistic update on error
// // //       setAssessment(assessment);
// // //     }
// // //   }, [jobId, assessment]);

// // //   // Load from API
// // //   // useEffect(() => {
// // //   //   let mounted = true;
// // //   //   (async () => {
// // //   //     try {
// // //   //       setLoading(true);
// // //   //       const res = await fetch(`/assessments/${jobId}`);
// // //   //       if (!res.ok) throw new Error("Failed to fetch assessment");
// // //   //       const data = await res.json();
// // //   //       if (mounted) {
// // //   //         setAssessment(data);
// // //   //         setSelectedSectionId(data.sections?.[0]?.id || null);
// // //   //       }
// // //   //     } catch (err) {
// // //   //       console.error("Error loading assessment:", err);
// // //   //     } finally {
// // //   //       if (mounted) setLoading(false);
// // //   //     }
// // //   //   })();
// // //   //   return () => (mounted = false);
// // //   // }, [jobId]);

// // //   // Auto-save with debounce
// // //   // useEffect(() => {
// // //   //   if (loading) return;
// // //   //   const timeout = setTimeout(() => {
// // //   //     saveAssessment(optimisticAssessment);
// // //   //   }, 1000);
// // //   //   return () => clearTimeout(timeout);
// // //   // }, [optimisticAssessment, loading, saveAssessment]);

// // //   // Optimistic section operations
// // //   const handleAddSection = () => {
// // //     const newSection = {
// // //       id: crypto.randomUUID(),
// // //       title: `Section ${optimisticAssessment.sections.length + 1}`,
// // //       description: "",
// // //       questions: [],
// // //     };

// // //     setAssessment(prev=> prev.sections.push(newSection))
// // //   };

// // //   const handleUpdateSection = (sectionId, patch) => {
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'update_section', sectionId, patch });
// // //     });
// // //   };

// // //   const handleDeleteSection = (sectionId) => {
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'delete_section', sectionId });
// // //     });

// // //     // Update selection if deleted section was selected
// // //     if (selectedSectionId === sectionId) {
// // //       const remainingSections = optimisticAssessment.sections.filter(s => s.id !== sectionId);
// // //       setSelectedSectionId(remainingSections[0]?.id || null);
// // //       setSelectedQuestionId(null);
// // //     }
// // //   };

// // //   // Optimistic question operations
// // //   const handleAddQuestion = (sectionId, questionType) => {
// // //     const newQuestion = {
// // //       id: crypto.randomUUID(),
// // //       type: questionType,
// // //       label: "New question",
// // //       required: false,
// // //       options: questionType === "single-choice" || questionType === "multi-choice" ? ["Option 1"] : [],
// // //       min: questionType === "numeric-range" ? 0 : undefined,
// // //       max: questionType === "numeric-range" ? 100 : undefined,
// // //       maxLength: questionType === "short-text" ? 100 : questionType === "long-text" ? 1000 : undefined,
// // //       conditional: null,
// // //     };

// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'add_question', sectionId, question: newQuestion });
// // //     });

// // //     setSelectedQuestionId(newQuestion.id);
// // //   };

// // //   const handleUpdateQuestion = (sectionId, questionId, patch) => {
// // //     startTransition(() => {
// // //       addOptimisticUpdate({ type: 'update_question', sectionId, questionId, patch });
// // //     });
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
// // //         <div className="text-center space-y-4">
// // //           <div className="w-16 h-16 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-600/25 mx-auto">
// // //             <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
// // //           </div>
// // //           <div>
// // //             <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Loading Assessment Builder</h3>
// // //             <p className="text-slate-500 dark:text-slate-400 text-lg">Setting up your assessment workspace...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // return (
// // //   <div className="min-h-screen bg-gradient-to-br ...">
// // //     <AssessmentHeader saveStatus={saveStatus} />
// // //     <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">
// // //       <div className="col-span-3">
// // //         <SectionList
// // //           sections={optimisticAssessment.sections}
// // //           selectedSectionId={selectedSectionId}
// // //           onSelect={setSelectedSectionId}
// // //           onAdd={handleAddSection}
// // //           onDelete={handleDeleteSection}
// // //         />
// // //       </div>
// // //       <div className="col-span-5">
// // //         {assessment && assessment.sections?.map((section,index)=>{

// // //           return <SectionEditorPanel
// // //           section={section}
// // //           selectedQuestionId={selectedQuestionId}
// // //           onUpdateSection={(patch) => handleUpdateSection(selectedSection.id, patch)}
// // //           onSelectQuestion={setSelectedQuestionId}
// // //           onUpdateQuestion={(qid, patch) => handleUpdateQuestion(selectedSection.id, qid, patch)}
// // //           onAddQuestion={(qt) => handleAddQuestion(selectedSection.id, qt)}
// // //           />
// // //         })}
// // //       </div>
// // //       <div className="col-span-4">
// // //         <PreviewPanel assessment={optimisticAssessment} />
// // //       </div>
// // //     </div>
// // //   </div>
// // // );
// // // }







// // // import AssessmentHeader from "./AssessmentHeader";
// // // import SectionList from "./SectionList";
// // // import SectionEditorPanel from "./SectionEditorPanel";
// // // import PreviewPanel from "./PreviewPanel";
// // // import { useState, useCallback, useEffect } from "react";
// // // import { useLocalStorage } from "../../../hooks/useLocalStorage";

// // // export default function AssessmentBuilder({ jobId }) {
// // //   const [assessment, setAssessment] = useLocalStorage(`assessment-${jobId}`, {
// // //     jobId,
// // //     sections: [],
// // //   });
// // //   const [loading, setLoading] = useState(false);
// // //   const [saveStatus, setSaveStatus] = useState("saved");

// // //   // --- API Save ---
// // //   const saveAssessment = useCallback(
// // //     async (data) => {
// // //       setSaveStatus("saving");
// // //       try {
// // //         await fetch(`/assessments/${jobId}`, {
// // //           method: "PUT",
// // //           headers: { "Content-Type": "application/json" },
// // //           body: JSON.stringify(data),
// // //         });
// // //         setSaveStatus("saved");
// // //         setAssessment(data);
// // //       } catch (err) {
// // //         console.error("Error saving assessment:", err);
// // //         setSaveStatus("error");
// // //       }
// // //     },
// // //     [jobId, setAssessment]
// // //   );

// // //   // --- Auto-save with debounce ---
// // //   useEffect(() => {
// // //     if (loading) return;
// // //     const timeout = setTimeout(() => saveAssessment(assessment), 800);
// // //     return () => clearTimeout(timeout);
// // //   }, [assessment, loading, saveAssessment]);

// // //   // --- Section handlers ---
// // //   const handleAddSection = () => {
// // //     const newSection = {
// // //       id: crypto.randomUUID(),
// // //       title: `Section ${assessment.sections.length + 1}`,
// // //       description: "",
// // //       questions: [],
// // //     };
// // //     setAssessment((prev) => ({
// // //       ...prev,
// // //       sections: [...(prev.sections || []), newSection],
// // //     }));
// // //     return newSection.id; // ✅ let child know which section was created
// // //   };

// // //   const handleUpdateSection = (sectionId, patch) => {
// // //     setAssessment((prev) => ({
// // //       ...prev,
// // //       sections: prev.sections.map((s) =>
// // //         s.id === sectionId ? { ...s, ...patch } : s
// // //       ),
// // //     }));
// // //   };

// // //   const handleDeleteSection = (sectionId) => {
// // //     setAssessment((prev) => ({
// // //       ...prev,
// // //       sections: prev.sections.filter((s) => s.id !== sectionId),
// // //     }));
// // //   };

// // //   // --- Question handlers ---
// // //   const handleUpdateQuestion = (sectionId, updatedQuestion) => {
// // //     setAssessment((prev) => ({
// // //       ...prev,
// // //       sections: prev.sections.map((s) =>
// // //         s.id === sectionId
// // //           ? {
// // //               ...s,
// // //               questions: s.questions.map((q) =>
// // //                 q.id === updatedQuestion.id ? updatedQuestion : q
// // //               ),
// // //             }
// // //           : s
// // //       ),
// // //     }));
// // //   };

// // //   if (loading) {
// // //     return <div className="p-6">Loading...</div>;
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br ...">
// // //       <AssessmentHeader saveStatus={saveStatus} />

// // //       <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">
// // //         {/* --- Sections List --- */}
// // //         <div className="col-span-3">
// // //           <SectionList
// // //             sections={assessment.sections}
// // //             onAdd={handleAddSection}
// // //             onDelete={handleDeleteSection}
// // //           />
// // //         </div>

// // //         {/* --- Section Editor --- */}
// // //         <div className="col-span-5">
// // //           {assessment && assessment.sections && assessment.sections.length > 0 ? (
// // //             <SectionEditorPanel
// // //               sections={assessment.sections}
// // //               onUpdateSection={handleUpdateSection}
// // //               onUpdateQuestion={handleUpdateQuestion}
// // //             />
// // //           ) : (
// // //             <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow">
// // //               <p className="text-lg text-slate-500 mb-4">
// // //                 No sections yet. Start by adding your first one!
// // //               </p>
// // //               <button
// // //                 onClick={handleAddSection}
// // //                 className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
// // //               >
// // //                 + Add Section
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* --- Preview --- */}
// // //         <div className="col-span-4">
// // //           <PreviewPanel assessment={assessment} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

















// // import AssessmentHeader from "./AssessmentHeader";
// // import SectionList from "./SectionList";
// // import SectionEditorPanel from "./SectionEditorPanel";
// // import PreviewPanel from "./PreviewPanel";
// // import { useState, useCallback, useEffect } from "react";
// // import { useLocalStorage } from "../../../hooks/useLocalStorage";

// // export default function AssessmentBuilder({ jobId }) {
// //   const [assessment, setAssessment] = useLocalStorage(`assessment-${jobId}`, {sections:[]})

// //   const [loading, setLoading] = useState(false);
// //   const [saveStatus, setSaveStatus] = useState("saved");

// //   console.log("🔄 Render AssessmentBuilder:", { jobId, assessment });

// //   // --- API Save ---
// //   async function saveAssessment(data){
// //       console.log("💾 Saving assessment:", data);
// //       setSaveStatus("saving");
// //       try {
// //         await fetch(`/assessments/${jobId}`, {
// //           method: "PUT",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(data),
// //         });
// //         console.log("✅ Save success");
// //         setSaveStatus("saved");
// //         setAssessment(data);
// //       } catch (err) {
// //         console.error("❌ Error saving assessment:", err);
// //         setSaveStatus("error");
// //       }
// //     }


// //   // --- Section handlers ---
// //   const handleAddSection = () => {
// //     console.log("➕ Adding newsection assessment:", assessment);
// //     const newSection = {
// //       id: crypto.randomUUID(),
// //       title: `Section ${assessment.sections.length + 1}`,
// //       description: "",
// //       questions: [],
// //     };
    
// //     setAssessment((prev) => ({
// //       ...prev,
// //       sections: [...(prev.sections || []), newSection],
// //     }));
// //     return newSection.id; // let children know which was created
// //   };

// //   const handleUpdateSection = (sectionId, patch) => {
// //     console.log("✏️ Updating section:", sectionId, "with patch:", patch);
// //     setAssessment((prev) => ({
// //       ...prev,
// //       sections: prev.sections.map((s) =>
// //         s.id === sectionId ? { ...s, ...patch } : s
// //       ),
// //     }));
// //   };

// //   const handleDeleteSection = (sectionId) => {
// //     console.log("🗑 Deleting section:", sectionId);
// //     setAssessment((prev) => ({
// //       ...prev,
// //       sections: prev.sections.filter((s) => s.id !== sectionId),
// //     }));
// //   };

// // const handleAddQuestion = (sectionId, type) => {
// //   const newQuestion = {
// //     id: crypto.randomUUID(),
// //     type,
// //     label: "New question",
// //     required: false,
// //     options: ["single-choice", "multi-choice"].includes(type) ? ["Option 1"] : [],
// //     min: type === "numeric-range" ? 0 : undefined,
// //     max: type === "numeric-range" ? 100 : undefined,
// //     maxLength: type === "short-text" ? 100 : type === "long-text" ? 1000 : undefined,
// //     conditional: null,
// //   };

// //   console.log("➕ Adding question:", { sectionId, newQuestion });

// //   setAssessment((prev) => ({
// //     ...prev,
// //     sections: prev.sections.map((s) =>
// //       s.id === sectionId ? { ...s, questions: [...s.questions, newQuestion] } : s
// //     ),
// //   }));
// // };

// // const handleUpdateQuestion = (sectionId, updatedQuestion) => {
// //   console.log("✏️ Updating question in section:", sectionId, updatedQuestion);
// //   setAssessment((prev) => ({
// //     ...prev,
// //     sections: prev.sections.map((s) =>
// //       s.id === sectionId
// //         ? {
// //             ...s,
// //             questions: s.questions.map((q) =>
// //               q.id === updatedQuestion.id ? updatedQuestion : q
// //             ),
// //           }
// //         : s
// //     ),
// //   }));
// // };

// //   if (loading) {
// //     console.log("⏳ Loading assessment...");
// //     return <div className="p-6">Loading...</div>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br ...">
// //       <AssessmentHeader saveStatus={saveStatus} />

// //       <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">
// //         {/* --- Sections List --- */}
// //         <div className="col-span-3">
// //           <SectionList
// //             sections={assessment.sections}
// //             onAdd={handleAddSection}
// //             onDelete={handleDeleteSection}
// //           />
// //         </div>

// //         {/* --- Section Editor --- */}
// //        <div className="col-span-5">
// //         {assessment?.sections?.length > 0 ? (
// //           assessment.sections.map((section, idx) => (
// //             <SectionEditorPanel
// //               key={section.id}
// //               section={section}
// //               onUpdateSection={(patch) => handleUpdateSection(section.id, patch)}
// //               onAddQuestion={(type) => handleAddQuestion(section.id, type)}
// //               onUpdateQuestion={(qid, patch) =>
// //                 handleUpdateQuestion(section.id, { id: qid, ...patch })
// //               }
// //             />
// //           ))
// //         ) : (
// //           <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow">
// //             <p className="text-lg text-slate-500 mb-4">
// //               No sections yet. Start by adding your first one!
// //             </p>
// //             <button
// //               onClick={handleAddSection}
// //               className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
// //             >
// //               + Add Section
// //             </button>
// //           </div>
// //         )}
// //       </div>

// //         {/* --- Preview --- */}
// //         <div className="col-span-4">
// //           <PreviewPanel assessment={assessment} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import AssessmentHeader from "./AssessmentHeader";
// import SectionList from "./SectionList";
// import SectionEditorPanel from "./SectionEditorPanel";
// import PreviewPanel from "./PreviewPanel";
// import { useState, useCallback, useEffect } from "react";
// import { useLocalStorage } from "../../../hooks/useLocalStorage";

// export default function AssessmentBuilder({ jobId }) {
//   const [assessment, setAssessment] = useLocalStorage(`assessment-${jobId}`, {sections:[]})
//   const [loading, setLoading] = useState(false);
//   const [saveStatus, setSaveStatus] = useState("saved");

//   console.log("🔄 Render AssessmentBuilder:", { jobId, assessment });

//   // --- API Save ---
//   async function saveAssessment(data){
//       console.log("💾 Saving assessment:", data);
//       setSaveStatus("saving");
//       try {
//         await fetch(`/assessments/${jobId}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         });
//         console.log("✅ Save success");
//         setSaveStatus("saved");
//         setAssessment(data);
//       } catch (err) {
//         console.error("❌ Error saving assessment:", err);
//         setSaveStatus("error");
//       }
//     }

//   // --- Section handlers ---
//   const handleAddSection = () => {
//     console.log("➕ Adding new section assessment:", assessment);
//     const newSection = {
//       id: crypto.randomUUID(),
//       title: `Section ${assessment.sections.length + 1}`,
//       description: "",
//       questions: [],
//     };
    
//     setAssessment((prev) => ({
//       ...prev,
//       sections: [...(prev.sections || []), newSection],
//     }));
//     return newSection.id;
//   };

//   const handleUpdateSection = (sectionId, patch) => {
//     console.log("✏️ Updating section:", sectionId, "with patch:", patch);
//     setAssessment((prev) => ({
//       ...prev,
//       sections: prev.sections.map((s) =>
//         s.id === sectionId ? { ...s, ...patch } : s
//       ),
//     }));
//   };

//   const handleDeleteSection = (sectionId) => {
//     console.log("🗑 Deleting section:", sectionId);
//     setAssessment((prev) => ({
//       ...prev,
//       sections: prev.sections.filter((s) => s.id !== sectionId),
//     }));
//   };

//   const handleAddQuestion = (sectionId, type) => {
//     const newQuestion = {
//       id: crypto.randomUUID(),
//       type,
//       label: "New question",
//       required: false,
//       options: ["single-choice", "multi-choice"].includes(type) ? ["Option 1"] : [],
//       min: type === "numeric-range" ? 0 : undefined,
//       max: type === "numeric-range" ? 100 : undefined,
//       maxLength: type === "short-text" ? 100 : type === "long-text" ? 1000 : undefined,
//       conditional: null,
//     };

//     console.log("➕ Adding question:", { sectionId, newQuestion });

//     setAssessment((prev) => ({
//       ...prev,
//       sections: prev.sections.map((s) =>
//         s.id === sectionId ? { ...s, questions: [...s.questions, newQuestion] } : s
//       ),
//     }));
//   };

//   const handleUpdateQuestion = (sectionId, updatedQuestion) => {
//     console.log("✏️ Updating question in section:", sectionId, updatedQuestion);
//     setAssessment((prev) => ({
//       ...prev,
//       sections: prev.sections.map((s) =>
//         s.id === sectionId
//           ? {
//               ...s,
//               questions: s.questions.map((q) =>
//                 q.id === updatedQuestion.id ? updatedQuestion : q
//               ),
//             }
//           : s
//       ),
//     }));
//   };

//   if (loading) {
//     console.log("⏳ Loading assessment...");
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/20 to-violet-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//         <div className="text-center space-y-6">
//           <div className="relative">
//             <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/25 mx-auto">
//               <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//             </div>
//             <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl opacity-20 animate-ping mx-auto"></div>
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Loading Assessment Builder</h3>
//             <p className="text-slate-600 dark:text-slate-400 text-lg">Setting up your workspace...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-violet-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//       {/* Enhanced Header */}
//       <header className="border-b border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg">
//         <div className="max-w-7xl mx-auto px-8 py-8">
//           <div className="flex items-center justify-between">
//             <div className="relative">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/25">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-violet-600 dark:from-slate-200 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
//                     Assessment Builder
//                   </h1>
//                   <p className="text-slate-600 dark:text-slate-400 text-lg font-medium mt-1">
//                     Design and manage your assessment workflow
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute -bottom-2 left-16 w-48 h-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full"></div>
//             </div>

//             {/* Enhanced Save Status Indicator */}
//             <div className="flex items-center gap-4">
//               <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all duration-500 shadow-lg ${
//                 saveStatus === 'saving' 
//                   ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200 text-cyan-700 shadow-cyan-200/50 dark:from-cyan-950/30 dark:to-blue-950/30 dark:border-cyan-700 dark:text-cyan-300'
//                   : saveStatus === 'saved'
//                   ? 'bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 text-emerald-700 shadow-emerald-200/50 dark:from-emerald-950/30 dark:to-green-950/30 dark:border-emerald-700 dark:text-emerald-300'
//                   : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-700 shadow-red-200/50 dark:from-red-950/30 dark:to-rose-950/30 dark:border-red-700 dark:text-red-300'
//               }`}>
//                 {saveStatus === 'saving' && (
//                   <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
//                 )}
//                 {saveStatus === 'saved' && (
//                   <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
//                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                 )}
//                 {saveStatus === 'error' && (
//                   <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </div>
//                 )}
//                 <span className="font-semibold text-base">
//                   {saveStatus === 'saving' ? 'Saving changes...' : saveStatus === 'saved' ? 'All changes saved' : 'Save failed - retry'}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Enhanced Main Content */}
//       <div className="max-w-7xl mx-auto p-8">
//         <div className="grid grid-cols-12 gap-8">
//           {/* Enhanced Sections List */}
//           <div className="col-span-3">
//             <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
//               <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60 bg-gradient-to-r from-slate-50/50 to-blue-50/30 dark:from-slate-800/50 dark:to-slate-700/30">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sections</h2>
//                   <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full font-medium">
//                     {assessment.sections.length}
//                   </span>
//                 </div>
                
//                 <button
//                   onClick={handleAddSection}
//                   className="w-full py-4 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-indigo-600/25 hover:shadow-2xl hover:shadow-indigo-600/35 hover:-translate-y-1 font-semibold flex items-center justify-center gap-3 border border-indigo-500/20"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                   </svg>
//                   Add New Section
//                 </button>
//               </div>

//               <SectionList
//                 sections={assessment.sections}
//                 onAdd={handleAddSection}
//                 onDelete={handleDeleteSection}
//               />
//             </div>
//           </div>

//           {/* Enhanced Section Editor */}
//           <div className="col-span-5">
//             <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 min-h-[600px]">
//               <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60 bg-gradient-to-r from-slate-50/50 to-emerald-50/30 dark:from-slate-800/50 dark:to-emerald-900/20">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
//                   <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Section Editor</h2>
//                 </div>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
//                   Configure your assessment sections and questions
//                 </p>
//               </div>
              
//               <div className="p-6">
//                 {assessment?.sections?.length > 0 ? (
//                   assessment.sections.map((section, idx) => (
//                     <SectionEditorPanel
//                       key={section.id}
//                       section={section}
//                       onUpdateSection={(patch) => handleUpdateSection(section.id, patch)}
//                       onAddQuestion={(type) => handleAddQuestion(section.id, type)}
//                       onUpdateQuestion={(qid, patch) =>
//                         handleUpdateQuestion(section.id, { id: qid, ...patch })
//                       }
//                     />
//                   ))
//                 ) : (
//                   <div className="flex flex-col items-center justify-center h-96 text-center">
//                     <div className="w-24 h-24 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                       <svg className="w-12 h-12 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-3">Ready to Begin</h3>
//                     <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
//                       Start building your assessment by adding your first section
//                     </p>
//                     <button
//                       onClick={handleAddSection}
//                       className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 font-semibold text-lg shadow-xl shadow-indigo-600/25 hover:shadow-2xl hover:shadow-indigo-600/35 transition-all duration-300 hover:-translate-y-1"
//                     >
//                       Create First Section
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Preview Panel */}
//           <div className="col-span-4">
//             <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 sticky top-8">
//               <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60 bg-gradient-to-r from-slate-50/50 to-amber-50/30 dark:from-slate-800/50 dark:to-amber-900/20">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center gap-1">
//                     <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
//                     <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                     <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                   </div>
//                   <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Live Preview</h2>
//                 </div>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
//                   Real-time view of how candidates will see your assessment
//                 </p>
//               </div>
              
//               <div className="p-6 max-h-96 overflow-y-auto">
//                 <PreviewPanel assessment={assessment} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

import SectionList from "./SectionList";
import SectionEditorPanel from "./SectionEditorPanel";
import PreviewPanel from "./PreviewPanel";
import AssessmentHeader from "./AssessmentHeader";

export default function AssessmentBuilder() {
  const { jobId } = useParams();

  // State
  const [assessment, setAssessment] = useLocalStorage(`assessment-${jobId}`, {
    jobId,
    title: "",
    sections: [],
  });
  const [loading, setLoading] = useState(false);

  // ✅ Fetch seeded assessment on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`/assessments/${jobId}`);
        if (!res.ok) throw new Error("Failed to fetch assessment");
        const data = await res.json();
        if (mounted) {
          setAssessment(data); // overwrite with seeded assessment
        }
      } catch (err) {
        console.error("❌ Error loading assessment:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [jobId, setAssessment]);

  // Handlers
  const handleAddSection = () => {
    setAssessment((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        { id: crypto.randomUUID(), title: "New Section", questions: [] },
      ],
    }));
  };

  const handleUpdateSection = (sectionId, updates) => {
    setAssessment((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) =>
        sec.id === sectionId ? { ...sec, ...updates } : sec
      ),
    }));
  };

  const handleDeleteSection = (sectionId) => {
    setAssessment((prev) => ({
      ...prev,
      sections: prev.sections.filter((sec) => sec.id !== sectionId),
    }));
  };

  const handleAddQuestion = (sectionId, question) => {
    setAssessment((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) =>
        sec.id === sectionId
          ? {
              ...sec,
              questions: [...sec.questions, { id: crypto.randomUUID(), ...question }],
            }
          : sec
      ),
    }));
  };

  const handleUpdateQuestion = (sectionId, questionId, updates) => {
    setAssessment((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) =>
        sec.id === sectionId
          ? {
              ...sec,
              questions: sec.questions.map((q) =>
                q.id === questionId ? { ...q, ...updates } : q
              ),
            }
          : sec
      ),
    }));
  };

  const handleDeleteQuestion = (sectionId, questionId) => {
    setAssessment((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) =>
        sec.id === sectionId
          ? {
              ...sec,
              questions: sec.questions.filter((q) => q.id !== questionId),
            }
          : sec
      ),
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <AssessmentHeader
        title={assessment.title || "Untitled Assessment"}
        loading={loading}
      />
      <div className="flex flex-1 overflow-hidden">
        <SectionList
          sections={assessment.sections}
          onAddSection={handleAddSection}
          onUpdateSection={handleUpdateSection}
          onDeleteSection={handleDeleteSection}
        />
        <SectionEditorPanel
          sections={assessment.sections}
          onAddQuestion={handleAddQuestion}
          onUpdateQuestion={handleUpdateQuestion}
          onDeleteQuestion={handleDeleteQuestion}
        />
        <PreviewPanel assessment={assessment} />
      </div>
    </div>
  );
}
