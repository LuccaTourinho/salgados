'use client';

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <button 
        onClick={() => reset()} 
        className="bg-destructive px-4 py-2 text-destructive-foreground text-3xl font-extrabold">
        Try again
      </button>
    </div>
  );
}
