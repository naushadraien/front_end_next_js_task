"use client";

import Button from "@/components/ui/button";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-[16] bg-[rgba(200,100,100,0.2)]">
      <p className="text-[26px] font-semibold text-rose-600">{error?.name}</p>
      <p className="text-[20px] font-medium text-rose-900">{error?.message}</p>
      <p>{JSON.stringify(error?.cause)}</p>
      <p className="mt-6">{JSON.stringify(error?.stack)}</p>
      <Button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the corresponding error occured component
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
};

export default Error;
