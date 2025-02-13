"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SupportError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Support Error</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Try again
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
} 