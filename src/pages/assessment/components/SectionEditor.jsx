// import React from "react";
// import QuestionEditor from "./QuestionEditor";

// const defaultQuestion = (type = "short-text") => ({
//   id: crypto.randomUUID(),
//   type, // 'single-choice' | 'multi-choice' | 'short-text' | 'long-text' | 'numeric-range' | 'file-upload'
//   label: "New question",
//   required: false,
//   options: type === "single-choice" || type === "multi-choice" ? ["Option 1"] : [],
//   min: type === "numeric-range" ? 0 : undefined,
//   max: type === "numeric-range" ? 100 : undefined,
//   maxLength: type === "short-text" ? 100 : type === "long-text" ? 1000 : undefined,
//   conditional: null,
// });

// export default function SectionEditor({
//   section,
//   selectedQuestionId,
//   onUpdateSection,
//   onSelectQuestion,
//   onUpdateQuestion,
// }) {
//   if (!section) return null;
//   console.log("Section inside Sectoion editor:", section)
//   const addQuestion = (type) => {
//     const q = defaultQuestion(type);
//     onUpdateSection({
//       questions: [...section.questions, q],
//     });
//     onSelectQuestion(q.id);
//   };

//   return (
//     <div>
//       <div className="mb-3">
//         <label className="block text-xs text-slate-500">Section Title</label>
//         <input
//           value={section.title}
//           onChange={(e) => onUpdateSection({ title: e.target.value })}
//           className="w-full p-2 rounded border"
//         />
//       </div>

//       <div className="mb-3">
//         <label className="block text-xs text-slate-500">Description</label>
//         <textarea
//           value={section.description}
//           onChange={(e) => onUpdateSection({ description: e.target.value })}
//           className="w-full p-2 rounded border"
//         />
//       </div>

//       <div className="mb-3">
//         <div className="flex flex-wrap gap-2">
//           <button onClick={() => addQuestion("short-text",section)} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Short</button>
//           <button onClick={() => addQuestion("long-text")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Long</button>
//           <button onClick={() => addQuestion("single-choice")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Single</button>
//           <button onClick={() => addQuestion("multi-choice")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Multi</button>
//           <button onClick={() => addQuestion("numeric-range")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Range</button>
//           <button onClick={() => addQuestion("file-upload")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ File</button>
//         </div>
//       </div>

//       <div className="space-y-3">
//         {section.questions.map((q) => (
//           <QuestionEditor
//             key={q.id}
//             question={q}
//             isSelected={selectedQuestionId === q.id}
//             onSelect={() => onSelectQuestion(q.id)}
//             onUpdate={(patch) =>
//               onUpdateQuestion(q.id, { ...q, ...patch })
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import QuestionEditor from "./QuestionEditor";

export default function SectionEditor({
  section,
  selectedQuestionId,
  onSelectQuestion,
  onUpdateQuestion,
}) {
  return (
    <div className="space-y-4">
      {section.questions.map((q) => (
        <QuestionEditor
          key={q.id || q.label} // ✅ unique key (fallback to label if id missing)
          question={q}
          isSelected={selectedQuestionId === q.id}
          onSelect={() => onSelectQuestion(q.id)}
          onUpdate={(patch) =>
            onUpdateQuestion(q.id, { ...q, ...patch })
          }
        />
      ))}
    </div>
  );
}
