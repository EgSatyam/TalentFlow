// // import React from "react";

// // export default function QuestionRenderer({ question, value, onChange }) {
// //   switch (question.type) {
// //     case "short-text":
// //       return (
// //         <input
// //           type="text"
// //           value={value || ""}
// //           onChange={(e) => onChange(e.target.value)}
// //           maxLength={question.maxLength}
// //           className="w-full p-2 rounded border"
// //         />
// //       );
// //     case "long-text":
// //       return (
// //         <textarea
// //           value={value || ""}
// //           onChange={(e) => onChange(e.target.value)}
// //           maxLength={question.maxLength}
// //           className="w-full p-2 rounded border"
// //         />
// //       );
// //     case "single-choice":
// //       return (
// //         <div className="flex flex-col">
// //           {question.options.map((opt, i) => (
// //             <label key={i} className="inline-flex items-center gap-2">
// //               <input
// //                 type="radio"
// //                 name={question.id}
// //                 checked={value === opt}
// //                 onChange={() => onChange(opt)}
// //               />
// //               {opt}
// //             </label>
// //           ))}
// //         </div>
// //       );
// //     case "multi-choice":
// //       return (
// //         <div className="flex flex-col">
// //           {question.options.map((opt, i) => {
// //             const checked = Array.isArray(value) && value.includes(opt);
// //             return (
// //               <label key={i} className="inline-flex items-center gap-2">
// //                 <input
// //                   type="checkbox"
// //                   checked={checked}
// //                   onChange={(e) => {
// //                     if (e.target.checked) {
// //                       onChange([...(value || []), opt]);
// //                     } else {
// //                       onChange((value || []).filter((v) => v !== opt));
// //                     }
// //                   }}
// //                 />
// //                 {opt}
// //               </label>
// //             );
// //           })}
// //         </div>
// //       );
// //     case "numeric-range":
// //       return (
// //         <input
// //           type="number"
// //           value={value || ""}
// //           min={question.min}
// //           max={question.max}
// //           onChange={(e) => onChange(e.target.value)}
// //           className="w-full p-2 rounded border"
// //         />
// //       );
// //     case "file-upload":
// //       return (
// //         <div>
// //           <input
// //             type="file"
// //             onChange={(e) => onChange(e.target.files?.[0] || null)}
// //           />
// //           {value && (
// //             <div className="text-xs mt-1 text-slate-600">
// //               Selected: {value.name ?? "file"}
// //             </div>
// //           )}
// //         </div>
// //       );
// //     default:
// //       return <div className="text-xs text-slate-400">Unsupported type</div>;
// //   }
// // }




// // import React from "react";

// // export default function QuestionRenderer({ question, value, onChange }) {
// //   switch (question.type) {
// //     case "short-text":
// //       return (
// //         <input
// //           type="text"
// //           value={value || ""}
// //           onChange={(e) => onChange(e.target.value)}
// //           className="w-full p-2 rounded border"
// //         />
// //       );

// //     case "long-text":
// //       return (
// //         <textarea
// //           value={value || ""}
// //           onChange={(e) => onChange(e.target.value)}
// //           className="w-full p-2 rounded border"
// //         />
// //       );

// //     case "single-choice":
// //       return (
// //         <div className="space-y-1">
// //           {question.options?.map((opt) => (
// //             <label key={opt.id} className="flex items-center gap-2">
// //               <input
// //                 type="radio"
// //                 name={question.id}
// //                 checked={value === opt.value}
// //                 onChange={() => onChange(opt.value)}
// //               />
// //               {opt.label}
// //             </label>
// //           ))}
// //         </div>
// //       );

// //     case "multi-choice":
// //       return (
// //         <div className="space-y-1">
// //           {question.options?.map((opt) => (
// //             <label key={opt.id} className="flex items-center gap-2">
// //               <input
// //                 type="checkbox"
// //                 checked={value?.includes(opt.value) || false}
// //                 onChange={(e) => {
// //                   if (e.target.checked) {
// //                     onChange([...(value || []), opt.value]);
// //                   } else {
// //                     onChange((value || []).filter((v) => v !== opt.value));
// //                   }
// //                 }}
// //               />
// //               {opt.label}
// //             </label>
// //           ))}
// //         </div>
// //       );

// //     case "numeric-range":
// //       return (
// //         <input
// //           type="number"
// //           value={value ?? ""}
// //           onChange={(e) =>
// //             onChange(e.target.value ? Number(e.target.value) : "")
// //           }
// //           className="w-full p-2 rounded border"
// //         />
// //       );

// //     case "file-upload":
// //       return (
// //         <div>
// //           <input
// //             type="file"
// //             onChange={(e) => {
// //               const file = e.target.files?.[0] || null;
// //               if (file) {
// //                 // Save metadata only (Dexie-safe)
// //                 onChange({
// //                   name: file.name,
// //                   size: file.size,
// //                   type: file.type,
// //                 });
// //               } else {
// //                 onChange(null);
// //               }
// //             }}
// //           />
// //           {value && (
// //             <div className="text-xs mt-1 text-slate-600">
// //               Selected: {value.name} ({Math.round(value.size / 1024)} KB,{" "}
// //               {value.type || "unknown"})
// //             </div>
// //           )}
// //         </div>
// //       );

// //     default:
// //       return <div className="text-xs text-slate-400">Unsupported type</div>;
// //   }
// // }




// import React from "react";
// // import { db } from "../../mocks/handlers"; // adjust path to where you export your Dexie db
// import { db } from "../../../db/db";   // ✅ correct path (from src/pages/assessment/)

// export default function QuestionRenderer({ question, value, onChange }) {
//   switch (question.type) {
//     case "short-text":
//       return (
//         <input
//           type="text"
//           value={value || ""}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full p-2 rounded border"
//         />
//       );

//     case "long-text":
//       return (
//         <textarea
//           value={value || ""}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full p-2 rounded border"
//         />
//       );

//     case "single-choice":
//       return (
//         <div className="space-y-1">
//           {question.options?.map((opt) => (
//             <label key={opt.id} className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name={question.id}
//                 checked={value === opt.value}
//                 onChange={() => onChange(opt.value)}
//               />
//               {opt.label}
//             </label>
//           ))}
//         </div>
//       );

//     case "multi-choice":
//       return (
//         <div className="space-y-1">
//           {question.options?.map((opt) => (
//             <label key={opt.id} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={value?.includes(opt.value) || false}
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     onChange([...(value || []), opt.value]);
//                   } else {
//                     onChange((value || []).filter((v) => v !== opt.value));
//                   }
//                 }}
//               />
//               {opt.label}
//             </label>
//           ))}
//         </div>
//       );

//     case "numeric-range":
//       return (
//         <input
//           type="number"
//           value={value ?? ""}
//           onChange={(e) =>
//             onChange(e.target.value ? Number(e.target.value) : "")
//           }
//           className="w-full p-2 rounded border"
//         />
//       );

//     case "file-upload":
//       return (
//         <div>
//           <input
//             type="file"
//             onChange={async (e) => {
//               const file = e.target.files?.[0] || null;
//               if (file) {
//                 // Convert to Blob and store in Dexie
//                 const blob = new Blob([await file.arrayBuffer()], { type: file.type });

//                 const id = await db.files.add({
//                   name: file.name,
//                   size: file.size,
//                   type: file.type,
//                   blob,
//                 });

//                 // Save only reference in submission response
//                 onChange({ fileId: id, name: file.name, size: file.size, type: file.type });
//               } else {
//                 onChange(null);
//               }
//             }}
//           />
//           {value && (
//             <div className="text-xs mt-1 text-slate-600">
//               Selected: {value.name} ({Math.round(value.size / 1024)} KB,{" "}
//               {value.type || "unknown"})
//             </div>
//           )}
//         </div>
//       );

//     default:
//       return <div className="text-xs text-slate-400">Unsupported type</div>;
//   }
// }



import React from "react";

export default function QuestionRenderer({ question, value, onChange }) {
  if (question.type === "text") {
    return (
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2 w-full"
      />
    );
  }

  if (question.type === "textarea") {
    return (
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2 w-full"
      />
    );
  }

  if (question.type === "radio") {
    return (
      <div>
        {question.options.map((opt, idx) => (
          <label
            key={opt.id || `${question.id}-opt-${idx}`} // ✅ unique key
            className="block"
          >
            <input
              type="radio"
              name={question.id}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
            />
            {opt.label}
          </label>
        ))}
      </div>
    );
  }

  if (question.type === "checkbox") {
    const currentValues = Array.isArray(value) ? value : [];
    return (
      <div>
        {question.options.map((opt, idx) => (
          <label
            key={opt.id || `${question.id}-chk-${idx}`} // ✅ unique key
            className="block"
          >
            <input
              type="checkbox"
              value={opt.value}
              checked={currentValues.includes(opt.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...currentValues, opt.value]);
                } else {
                  onChange(currentValues.filter((v) => v !== opt.value));
                }
              }}
            />
            {opt.label}
          </label>
        ))}
      </div>
    );
  }

  return null;
}
