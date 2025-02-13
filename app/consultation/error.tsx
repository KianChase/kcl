"use client";

export default function ConsultationError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 