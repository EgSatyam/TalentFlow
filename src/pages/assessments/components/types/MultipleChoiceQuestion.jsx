// // // import Textarea from "../../../../components/Textarea";

// // // export default function MultiChoiceQuestion({ question, updateQuestion }) {
// // //   return (
// // //     <Textarea
// // //       label="Options (comma separated)"
// // //       value={question.options?.join(", ") || ""}
// // //       onChange={(e) =>
// // //         updateQuestion(question.id, {
// // //           options: e.target.value.split(",").map((o) => o.trim()),
// // //         })
// // //       }
// // //       placeholder="Option1, Option2, Option3"
// // //     />
// // //   );
// // // }


// // import { GripVertical, Plus, X } from "lucide-react";
// // import Button from "../../../../components/Button";

// // export default function MultiChoiceQuestion({ question, updateQuestion }) {
// //   const options = question.options || [];
// //   console.log("Optioins: ",options)
// //   const updateOption = (index, value) => {
// //     const updated = [...options];
// //     updated[index] = value;
// //     updateQuestion(question.id, { options: updated });
// //   };
  
// //   const addOption = () => {
// //     updateQuestion(question.id, { options: [...options, ""] });
// //   };
  
// //   const removeOption = (index) => {
// //     updateQuestion(question.id, {
// //       options: options.filter((_, i) => i !== index),
// //     });
// //   };
  
// //   return (
// //     <div className="space-y-4">
// //       <div className="flex items-center justify-between">
// //         <label className="block text-sm font-medium text-gray-700">
// //           Answer Options
// //         </label>
// //         <span className="text-xs text-gray-500">
// //           {options.length} option{options.length !== 1 ? 's' : ''}
// //         </span>
// //       </div>
      
// //       <div className="space-y-3">
// //         {options.map((opt, i) => (
// //           <div key={i} className="group flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
// //             <div className="flex items-center text-gray-400">
// //               <GripVertical className="w-4 h-4" />
// //             </div>
            
// //             <div className="flex items-center gap-2 text-gray-500">
// //               <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
// //               <span className="text-sm font-medium">
// //                 {String.fromCharCode(65 + i)}
// //               </span>
// //             </div>
            
// //             <input
// //               value={opt.label}
// //               onChange={(e) => updateOption(i, e.target.value)}
// //               placeholder={`Option ${i + 1}`}
// //               className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
// //             />
            
// //             {options.length > 1 && (
// //               <button
// //                 onClick={() => removeOption(i)}
// //                 className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all duration-200"
// //               >
// //                 <X className="w-4 h-4" />
// //               </button>
// //             )}
// //           </div>
// //         ))}
// //       </div>
      
// //       <Button
// //         size="sm" 
// //         variant="ghost" 
// //         onClick={addOption}
// //         className="w-full border-2 border-dashed border-gray-300 hover:border-blue-400 hover:text-blue-600"
// //       >
// //         <Plus className="w-4 h-4 mr-2" />
// //         Add Option
// //       </Button>
// //     </div>
// //   );
// // }




// import { GripVertical, Plus, X } from "lucide-react";
// import Button from "../../../../components/Button";

// export default function MultiChoiceQuestion({ question, updateQuestion }) {
//   const options = question.options || [];

//   const updateOption = (index, value) => {
//     const updated = [...options];
//     updated[index] = value;
//     updateQuestion(question.id, { options: updated });
//   };
  
//   const addOption = () => {
//     updateQuestion(question.id, { options: [...options, ""] });
//   };
  
//   const removeOption = (index) => {
//     updateQuestion(question.id, {
//       options: options.filter((_, i) => i !== index),
//     });
//   };
  
//   return (
//     <div className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <label className="block text-base font-semibold text-gray-800">
//           Answer Options
//         </label>
//         <span className="text-xs text-gray-500">
//           {options.length} option{options.length !== 1 ? "s" : ""}
//         </span>
//       </div>
      
//       {/* Options List */}
//       <div className="space-y-3">
//         {options.map((opt, i) => (
//           <div
//             key={i}
//             className="group flex items-center gap-4 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
//           >
//             {/* Drag Handle */}
//             <div className="flex items-center text-gray-400 cursor-grab">
//               <GripVertical className="w-4 h-4" />
//             </div>
            
//             {/* Index + Option Icon */}
//             <div className="flex items-center gap-2 text-gray-500">
//               <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
//               <span className="text-sm font-medium text-gray-600">
//                 {String.fromCharCode(65 + i)}
//               </span>
//             </div>
            
//             {/* Input */}
//             <input
//               value={opt.label}
//               onChange={(e) => updateOption(i, e.target.value)}
//               placeholder={`Option ${i + 1}`}
//               className="flex-1 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
//             />
            
//             {/* Remove Button */}
//             {options.length > 1 && (
//               <button
//                 onClick={() => removeOption(i)}
//                 className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
      
//       {/* Add Option Button */}
//       <Button
//         size="sm" 
//         variant="ghost" 
//         onClick={addOption}
//         className="w-full border-2 border-dashed border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition"
//       >
//         <Plus className="w-4 h-4 mr-2" />
//         Add Option
//       </Button>
//     </div>
//   );
// }




import { GripVertical, Plus, X } from "lucide-react";
import Button from "../../../../components/Button";

export default function MultiChoiceQuestion({ question, updateQuestion }) {
  const options = question.options || [];

  const updateOption = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    updateQuestion(question.id, { options: updated });
  };

  const addOption = () => {
    updateQuestion(question.id, { options: [...options, ""] });
  };

  const removeOption = (index) => {
    updateQuestion(question.id, {
      options: options.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6 bg-amber-50 border border-amber-200 rounded-lg p-6 shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <label className="block text-base font-semibold text-amber-900">
          Answer Options
        </label>
        <span className="text-xs text-amber-700">
          {options.length} option{options.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {options.map((opt, i) => (
          <div
            key={i}
            className="group flex items-center gap-4 p-3 bg-amber-100 border border-amber-200 rounded-lg hover:bg-amber-200 transition"
          >
            {/* Drag Handle */}
            <div className="flex items-center text-amber-500 cursor-grab">
              <GripVertical className="w-4 h-4" />
            </div>

            {/* Index + Option Icon */}
            <div className="flex items-center gap-2 text-amber-600">
              <div className="w-4 h-4 border-2 border-amber-400 rounded-full"></div>
              <span className="text-sm font-medium text-amber-900">
                {String.fromCharCode(65 + i)}
              </span>
            </div>

            {/* Input */}
            <input
              value={opt.label}
              onChange={(e) => updateOption(i, e.target.value)}
              placeholder={`Option ${i + 1}`}
              className="flex-1 bg-white border border-amber-300 rounded-md px-3 py-1.5 text-sm text-amber-900 placeholder-amber-400 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />

            {/* Remove Button */}
            {options.length > 1 && (
              <button
                onClick={() => removeOption(i)}
                className="opacity-0 group-hover:opacity-100 p-1 text-amber-400 hover:text-red-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Option Button */}
      <Button
        size="sm"
        variant="ghost"
        onClick={addOption}
        className="w-full border-2 border-dashed border-amber-300 hover:border-emerald-500 hover:text-emerald-600 transition"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Option
      </Button>
    </div>
  );
}
