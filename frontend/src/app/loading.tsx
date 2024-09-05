import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-dark bg-opacity-50 z-50">
      <Spinner size="lg" className="text-primary" />
    </div>
  );
}
