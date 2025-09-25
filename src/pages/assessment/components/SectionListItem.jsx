export default function SectionListItem({ section, index, selected, onSelect, onDelete }) {
  return (
    <div
      onClick={onSelect}
      className={`group relative p-4 rounded-2xl cursor-pointer border ${
        selected
          ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 ..."
          : "bg-slate-50 hover:bg-slate-100 border-slate-200 ..."
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium">Section {index + 1}</span>
            {section.questions.length > 0 && (
              <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full">
                {section.questions.length} questions
              </span>
            )}
          </div>
          <h3 className="font-semibold truncate mb-1">{section.title}</h3>
          <p className="text-sm text-slate-500 line-clamp-2">
            {section.description || "No description"}
          </p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-red-500 hover:bg-red-50"
        >
          🗑
        </button>
      </div>
    </div>
  );
}
