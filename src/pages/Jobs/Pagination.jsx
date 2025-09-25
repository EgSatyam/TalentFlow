export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center items-center gap-2 mt-6 mb-6">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="w-8 h-8 flex items-center justify-center rounded-full border bg-white dark:bg-gray-700 disabled:opacity-50"
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm ${
            page === i + 1
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={page >= totalPages}
        onClick={() => setPage((p) => p + 1)}
        className="w-8 h-8 flex items-center justify-center rounded-full border bg-white dark:bg-gray-700 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}
