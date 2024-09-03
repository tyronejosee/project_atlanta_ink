import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-neutral-darkgrey py-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <p>&copy; 2024 Designer Ink Tattoo. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="#" className="hover:text-primary">Facebook</Link>
          <Link href="#" className="hover:text-primary">Instagram</Link>
          <Link href="#" className="hover:text-primary">Twitter</Link>
        </div>
      </div>
    </footer>
  )
}
