// import React from "react";
// import OptionsEditor from "./OptionsEditor";

// export default function QuestionEditor({ question, isSelected, onSelect, onUpdate }) {
//   if (!question) return null;

//   const set = (patch) => onUpdate({ ...question, ...patch });

//   return (
//     <div
//       onClick={onSelect}
//       className={`p-3 rounded border cursor-pointer ${
//         isSelected ? "border-indigo-400 bg-indigo-50/50" : "border-slate-200"
//       }`}
//     >
//       <div className="mb-2">
//         <label className="block text-xs text-slate-500">Label</label>
//         <input
//           value={question.label}
//           onChange={(e) => set({ label: e.target.value })}
//           className="w-full p-2 rounded border"
//         />
//       </div>

//       <div className="mb-2">
//         <label className="block text-xs text-slate-500">Type</label>
//         <select
//           value={question.type}
//           onChange={(e) => set({ type: e.target.value })}
//           className="w-full p-2 rounded border"
//         >
//           <option value="short-text">Short text</option>
//           <option value="long-text">Long text</option>
//           <option value="single-choice">Single choice</option>
//           <option value="multi-choice">Multi choice</option>
//           <option value="numeric-range">Numeric (range)</option>
//           <option value="file-upload">File upload (stub)</option>
//         </select>
//       </div>

//       <div className="flex items-center gap-3 mb-2">
//         <label className="text-xs flex items-center gap-1">
//           <input
//             type="checkbox"
//             checked={question.required}
//             onChange={(e) => set({ required: e.target.checked })}
//           />
//           Required
//         </label>
//         {["short-text", "long-text"].includes(question.type) && (
//           <label className="text-xs flex items-center gap-1">
//             Max length:
//             <input
//               type="number"
//               value={question.maxLength || ""}
//               onChange={(e) =>
//                 set({ maxLength: e.target.value ? Number(e.target.value) : undefined })
//               }
//               className="w-20 p-1 rounded border ml-1"
//             />
//           </label>
//         )}
//       </div>

//       {/* Choice options */}
//       {(question.type === "single-choice" || question.type === "multi-choice") && (
//         <OptionsEditor
//           options={question.options}
//           onChange={(opts) => set({ options: opts })}
//         />
//       )}

//       {/* Numeric range */}
//       {question.type === "numeric-range" && (
//         <div className="flex gap-2 mt-2">
//           <div>
//             <label className="block text-xs">Min</label>
//             <input
//               type="number"
//               value={question.min ?? ""}
//               onChange={(e) => set({ min: e.target.value ? Number(e.target.value) : undefined })}
//               className="w-full p-2 rounded border"
//             />
//           </div>
//           <div>
//             <label className="block text-xs">Max</label>
//             <input
//               type="number"
//               value={question.max ?? ""}
//               onChange={(e) => set({ max: e.target.value ? Number(e.target.value) : undefined })}
//               className="w-full p-2 rounded border"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React from "react";
import OptionsEditor from "./OptionsEditor";

export default function QuestionEditor({ question, isSelected, onSelect, onUpdate }) {
  if (!question) return null;

  const set = (patch) => onUpdate({ ...question, ...patch });

  return (
    <div
      onClick={onSelect}
      className={`p-3 rounded border cursor-pointer ${
        isSelected ? "border-indigo-400 bg-indigo-50/50" : "border-slate-200"
      }`}
    >
      <div className="mb-2">
        <label className="block text-xs text-slate-500">Label</label>
        <input
          value={question.label}
          onChange={(e) => set({ label: e.target.value })}
          className="w-full p-2 rounded border"
        />
      </div>

      <div className="mb-2">
        <label className="block text-xs text-slate-500">Type</label>
        <select
          value={question.type}
          onChange={(e) => set({ type: e.target.value })}
          className="w-full p-2 rounded border"
        >
          <option value="short-text">Short text</option>
          <option value="long-text">Long text</option>
          <option value="single-choice">Single choice</option>
          <option value="multi-choice">Multi choice</option>
          <option value="numeric-range">Numeric (range)</option>
          <option value="file-upload">File upload (stub)</option>
        </select>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <label className="text-xs flex items-center gap-1">
          <input
            type="checkbox"
            checked={question.required}
            onChange={(e) => set({ required: e.target.checked })}
          />
          Required
        </label>
        {["short-text", "long-text"].includes(question.type) && (
          <label className="text-xs flex items-center gap-1">
            Max length:
            <input
              type="number"
              value={question.maxLength || ""}
              onChange={(e) =>
                set({ maxLength: e.target.value ? Number(e.target.value) : undefined })
              }
              className="w-20 p-1 rounded border ml-1"
            />
          </label>
        )}
      </div>

      {/* Choice options */}
      {(question.type === "single-choice" || question.type === "multi-choice") && (
        <OptionsEditor
          options={question.options}
          onChange={(opts) => set({ options: opts })}
        />
      )}

      {/* Numeric range */}
      {question.type === "numeric-range" && (
        <div className="flex gap-2 mt-2">
          <div>
            <label className="block text-xs">Min</label>
            <input
              type="number"
              value={question.min ?? ""}
              onChange={(e) => set({ min: e.target.value ? Number(e.target.value) : undefined })}
              className="w-full p-2 rounded border"
            />
          </div>
          <div>
            <label className="block text-xs">Max</label>
            <input
              type="number"
              value={question.max ?? ""}
              onChange={(e) => set({ max: e.target.value ? Number(e.target.value) : undefined })}
              className="w-full p-2 rounded border"
            />
          </div>
        </div>
      )}

      {/* Conditional logic */}
      <div className="mt-3 p-2 border rounded bg-slate-50">
        <label className="block text-xs text-slate-500 mb-1">
          Show this question only if...
        </label>
        <input
          type="text"
          placeholder="Target questionId"
          value={question.conditional?.questionId || ""}
          onChange={(e) =>
            set({
              conditional: {
                ...(question.conditional || {}),
                questionId: e.target.value,
              },
            })
          }
          className="w-full p-1 mb-1 rounded border text-xs"
        />
        <input
          type="text"
          placeholder="Target value"
          value={question.conditional?.value || ""}
          onChange={(e) =>
            set({
              conditional: {
                ...(question.conditional || {}),
                value: e.target.value,
              },
            })
          }
          className="w-full p-1 rounded border text-xs"
        />
      </div>
    </div>
  );
}


