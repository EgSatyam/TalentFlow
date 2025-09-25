import { CheckIcon } from "lucide-react";

export default function AssessmentHeader({ saveStatus }) {
  return (
    <div className="border-b ...">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="relative">
          <h1 className="text-4xl font-bold ...">Assessment Builder</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
            Design and manage your assessment workflow
          </p>
          <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r ... rounded-full"></div>
        </div>

        {/* Save Status */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
          saveStatus === 'saving'
            ? 'bg-blue-50 border-blue-200 text-blue-700 ...'
            : saveStatus === 'saved'
            ? 'bg-emerald-50 border-emerald-200 text-emerald-700 ...'
            : 'bg-red-50 border-red-200 text-red-700 ...'
        }`}>
          {saveStatus === 'saving' && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
          {saveStatus === 'saved' && <CheckIcon />}
          {saveStatus === 'error' && <ErrorIcon />}
          <span className="font-medium text-sm">
            {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'All changes saved' : 'Save failed'}
          </span>
        </div>
      </div>
    </div>
  );
}
