// // import QuestionPreview from "./QuestionPreview";

// // export default function ConditionalPreview({ question, answers, errors, onChange }) {
// //   return (
// //     <div className="ml-6 mt-2 border-l pl-4 space-y-2">
// //       <QuestionPreview
// //         question={question}
// //         answers={answers}
// //         errors={errors}
// //         onChange={onChange}
// //       />
// //     </div>
// //   );
// // }



// import QuestionPreview from "./QuestionPreview";

// export default function ConditionalPreview({ question, answers, errors, onChange }) {
//   return (
//     <div className="ml-6 mt-3 border-l-2 border-gray-300 pl-5 space-y-3 bg-gray-50 rounded-md">
//       <QuestionPreview
//         question={question}
//         answers={answers}
//         errors={errors}
//         onChange={onChange}
//       />
//     </div>
//   );
// }



import QuestionPreview from "./QuestionPreview";

export default function ConditionalPreview({ question, answers, errors, onChange }) {
  return (
    <div className="ml-8 mt-3 border-l-2 border-gray-300 pl-5 space-y-3 bg-gray-50 rounded-md p-4 shadow-inner">
      <QuestionPreview
        question={question}
        answers={answers}
        errors={errors}
        onChange={onChange}
      />
    </div>
  );
}
