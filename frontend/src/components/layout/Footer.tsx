import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Designer Ink Tattoo. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="#" className="hover:text-red-600">Facebook</Link>
          <Link href="#" className="hover:text-red-600">Instagram</Link>
          <Link href="#" className="hover:text-red-600">Twitter</Link>
        </div>
      </div>
    </footer>
  )
}
