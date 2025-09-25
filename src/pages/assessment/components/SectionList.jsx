// import SectionListItem from "./SectionListItem";

// export default function SectionList({ sections, selectedSectionId, onSelect, onAdd, onDelete }) {
//   return (
//     <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl ...">
//       <div className="p-6 border-b ...">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold">Sections</h2>
//           <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">{sections?.length}</span>
//         </div>
//         <button onClick={onAdd} className="w-full py-3 px-4 bg-gradient-to-r ...">
//           + Add Section
//         </button>
//       </div>

//       <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
//         {sections && sections.map((section, idx) => (
//           <SectionListItem
//             key={section.id}
//             section={section}
//             index={idx}
//             selected={selectedSectionId === section.id}
//             onSelect={() => onSelect(section.id)}
//             onDelete={() => onDelete(section.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




import React from "react";
import SectionListItem from "./SectionListItem";

export default function SectionList({ sections, selectedSectionId, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Sections</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <SectionListItem
            key={section.id || section.title} // ✅ unique key
            section={section}
            isSelected={selectedSectionId === section.id}
            onSelect={() => onSelect(section.id)}
          />
        ))}
      </ul>
    </div>
  );
}

