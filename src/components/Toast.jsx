import { useEffect, useRef } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const toastStyles = {
  success: {
    bgColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-800 dark:text-green-200",
    iconColor: "text-green-500",
    icon: <CheckCircleIcon className="w-6 h-6" />,
  },
  error: {
    bgColor: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-800 dark:text-red-200",
    iconColor: "text-red-500",
    icon: <XCircleIcon className="w-6 h-6" />,
  },
  info: {
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-800 dark:text-blue-200",
    iconColor: "text-blue-500",
    icon: <InformationCircleIcon className="w-6 h-6" />,
  },
};

export default function Toast({ id, title, message, type = "info", onClose }) {
  const timerRef = useRef(null);
  const { bgColor, textColor, iconColor, icon } = toastStyles[type] || toastStyles.info;

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onClose();
    }, 5000); // 5 seconds

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [onClose]);

  return (
    <div
      className={`relative p-4 rounded-xl shadow-lg transition-all duration-300 ease-out transform translate-x-0 opacity-100 min-w-80 border border-slate-200 dark:border-slate-700 ${bgColor}`}
    >
      <div className="flex items-center space-x-3">
        <div className={`flex-shrink-0 ${iconColor}`}>{icon}</div>
        <div className="flex-1">
          <h4 className={`text-sm font-semibold ${textColor}`}>{title}</h4>
          <p className={`mt-1 text-sm ${textColor}`}>{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`-m-1.5 p-1.5 rounded-md inline-flex ${textColor} hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200`}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}