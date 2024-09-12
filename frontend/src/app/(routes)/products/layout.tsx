import { Sidebar } from "@/components";

interface Props {
  children: React.ReactNode
}

export default function ProductsLayout({ children }: Props) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
      <div className="flex">
        <Sidebar />
        <section className="pl-56 ml-4">
          {children}
        </section>
      </div>
    </div>
  );
}
