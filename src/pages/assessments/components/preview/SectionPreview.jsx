// // import QuestionPreview from "./QuestionPreview";

// // export default function SectionPreview({ section, answers, errors, onChange }) {
// //   return (
// //     <div className="space-y-4">
// //       <div>
// //         <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
// //         {section.description && (
// //           <p className="text-gray-600 text-sm">{section.description}</p>
// //         )}
// //       </div>

// //       <div className="space-y-4">
// //         {section.questions.map((q) => (
// //           <QuestionPreview
// //             key={q.id}
// //             question={q}
// //             answers={answers}
// //             errors={errors}
// //             onChange={onChange}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// import QuestionPreview from "./QuestionPreview";

// export default function SectionPreview({ section, answers, errors, onChange }) {
//   return (
//     <div className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
//         {section.description && (
//           <p className="text-gray-500 text-sm mt-1">{section.description}</p>
//         )}
//       </div>

//       <div className="space-y-5">
//         {section.questions.map((q) => (
//           <QuestionPreview
//             key={q.id}
//             question={q}
//             answers={answers}
//             errors={errors}
//             onChange={onChange}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }





import QuestionPreview from "./QuestionPreview";

export default function SectionPreview({ section, answers, errors, onChange }) {
  return (
    <div className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 shadow-md">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
        {section.description && (
          <p className="text-gray-500 text-sm mt-1">{section.description}</p>
        )}
      </div>

      <div className="space-y-5">
        {section.questions.map((q) => (
          <QuestionPreview
            key={q.id}
            question={q}
            answers={answers}
            errors={errors}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
