import PreviewForm from "./PreviewForm";

export default function PreviewPanel({ assessment }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl ... sticky top-8">
      <div className="p-6 border-b ...">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-bold">Live Preview</h2>
        </div>
        <p className="text-slate-500 text-sm mt-1">See how your assessment will look</p>
      </div>
      <div className="p-6 max-h-96 overflow-y-auto">
        <PreviewForm assessment={assessment} />
      </div>
    </div>
  );
}
