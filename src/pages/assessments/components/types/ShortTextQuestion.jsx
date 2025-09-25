// // // import Input from "../../../../components/Input";

// // // export default function ShortTextQuestion({ question, updateQuestion }) {
// // //   return (
// // //     <Input
// // //       label="Answer Placeholder"
// // //       value={question.placeholder || ""}
// // //       onChange={(e) => updateQuestion(question.id, { placeholder: e.target.value })}
// // //       placeholder="Short answer..."
// // //     />
// // //   );
// // // }


// // // ShortTextQuestion.jsx
// // import Input from "../../../../components/Input";

// // export default function ShortTextQuestion({ question, updateQuestion }) {
// //   return (
// //     <div className="space-y-4">
// //       <Input
// //         label="Answer Placeholder"
// //         value={question.placeholder || ""}
// //         onChange={(e) => updateQuestion(question.id, { placeholder: e.target.value })}
// //         placeholder="Short answer..."
// //       />
      
// //       <div className="flex gap-4">
// //         <Input
// //           label="Min Length"
// //           type="number"
// //           value={question.validation?.minLength || ""}
// //           onChange={(e) => updateQuestion(question.id, { 
// //             validation: { ...question.validation, minLength: Number(e.target.value) || undefined }
// //           })}
// //           placeholder="0"
// //           className="w-24"
// //         />
        
// //         <Input
// //           label="Max Length"
// //           type="number"
// //           value={question.validation?.maxLength || ""}
// //           onChange={(e) => updateQuestion(question.id, { 
// //             validation: { ...question.validation, maxLength: Number(e.target.value) || undefined }
// //           })}
// //           placeholder="255"
// //           className="w-24"
// //         />
// //       </div>
// //     </div>
// //   );
// // }




// import Input from "../../../../components/Input";

// export default function ShortTextQuestion({ question, updateQuestion }) {
//   return (
//     <div className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//       {/* Placeholder */}
//       <Input
//         label="Answer Placeholder"
//         value={question.placeholder || ""}
//         onChange={(e) => updateQuestion(question.id, { placeholder: e.target.value })}
//         placeholder="Short answer..."
//         className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//       />
      
//       {/* Validation */}
//       <div className="flex gap-6">
//         <Input
//           label="Min Length"
//           type="number"
//           value={question.validation?.minLength || ""}
//           onChange={(e) =>
//             updateQuestion(question.id, {
//               validation: {
//                 ...question.validation,
//                 minLength: Number(e.target.value) || undefined,
//               },
//             })
//           }
//           placeholder="0"
//           className="w-28 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//         />
        
//         <Input
//           label="Max Length"
//           type="number"
//           value={question.validation?.maxLength || ""}
//           onChange={(e) =>
//             updateQuestion(question.id, {
//               validation: {
//                 ...question.validation,
//                 maxLength: Number(e.target.value) || undefined,
//               },
//             })
//           }
//           placeholder="255"
//           className="w-28 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//         />
//       </div>
//     </div>
//   );
// }






import Input from "../../../../components/Input";

export default function ShortTextQuestion({ question, updateQuestion }) {
  return (
    <div className="space-y-6 bg-amber-50 border border-amber-200 rounded-lg p-6 shadow">
      {/* Placeholder */}
      <Input
        label="Answer Placeholder"
        value={question.placeholder || ""}
        onChange={(e) => updateQuestion(question.id, { placeholder: e.target.value })}
        placeholder="Short answer..."
        className="w-full border border-amber-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
      />

      {/* Validation */}
      <div className="flex gap-6">
        <Input
          label="Min Length"
          type="number"
          value={question.validation?.minLength || ""}
          onChange={(e) =>
            updateQuestion(question.id, {
              validation: {
                ...question.validation,
                minLength: Number(e.target.value) || undefined,
              },
            })
          }
          placeholder="0"
          className="w-28 border border-amber-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
        />

        <Input
          label="Max Length"
          type="number"
          value={question.validation?.maxLength || ""}
          onChange={(e) =>
            updateQuestion(question.id, {
              validation: {
                ...question.validation,
                maxLength: Number(e.target.value) || undefined,
              },
            })
          }
          placeholder="255"
          className="w-28 border border-amber-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
        />
      </div>
    </div>
  );
}
