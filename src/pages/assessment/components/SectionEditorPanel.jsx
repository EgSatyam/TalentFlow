// import SectionEditor from "./SectionEditor";

// export default function SectionEditorPanel({
//   section,
//   selectedQuestionId,
//   onUpdateSection,
//   onSelectQuestion,
//   onUpdateQuestion,
//   onAddQuestion
// }) {
//     console.log("inside section: ", section)
//   return (
//     <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl ... h-fit">
//       <div className="p-6 border-b ...">
//         <h2 className="text-xl font-bold">Section Editor</h2>
//         <p className="text-slate-500 text-sm mt-1">
//           Configure your assessment sections and questions
//         </p>
//       </div>
//       <div className="p-6">
//         {section ? (
//           <SectionEditor
//             section={section}
//             selectedQuestionId={selectedQuestionId}
//             onUpdateSection={onUpdateSection}
//             onSelectQuestion={onSelectQuestion}
//             onUpdateQuestion={onUpdateQuestion}
//             onAddQuestion={onAddQuestion}
//           />
//         ) : (
//           <div className="text-center py-12">No Section Selected</div>
//         )}
//       </div>
//     </div>
//   );
// }

import QuestionEditor from "./QuestionEditor"

export default function SectionEditor({
  section,
  selectedQuestionId,
  onUpdateSection,
  onSelectQuestion,
  onUpdateQuestion,
  onAddQuestion,   // ✅ new
}) {
  if (!section) return null;

  return (
    <div>
      {/* Title + Description editors */}
      ...

      <div className="mb-3">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => onAddQuestion("short-text")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Short</button>
          <button onClick={() => onAddQuestion("long-text")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Long</button>
          <button onClick={() => onAddQuestion("single-choice")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Single</button>
          <button onClick={() => onAddQuestion("multi-choice")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Multi</button>
          <button onClick={() => onAddQuestion("numeric-range")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ Range</button>
          <button onClick={() => onAddQuestion("file-upload")} className="px-2 py-1 bg-slate-100 rounded text-xs">+ File</button>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-3">
        {section.questions.map((q) => (
          <QuestionEditor
            key={q.id}
            question={q}
            isSelected={selectedQuestionId === q.id}
            onSelect={() => onSelectQuestion?.(q.id)}
            onUpdate={(patch) => onUpdateQuestion(q.id, { ...q, ...patch })}
          />
        ))}
      </div>
    </div>
  );
}
