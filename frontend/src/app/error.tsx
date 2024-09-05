"use client";

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">An unexpected error occurred</h1>
        <p className="text-lg text-neutral-light mb-4">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </header>
    </section>
  );
}
