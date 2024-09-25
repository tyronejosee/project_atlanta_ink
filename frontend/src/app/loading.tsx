export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-dark">
      <div className="w-16 h-16 border-8 border-t-transparent border-primary rounded-full animate-spin"></div>
    </div>
  );
}
