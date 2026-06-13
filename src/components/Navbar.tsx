import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-black text-white">
        <div className="max-w-6xl mx-auto flex justify-between item-center p-4">
            <Link href="/" className="font-bold text-lg">
                Nkosinathi Simelane
            </Link>
            <div className="space-x-6 text-sm">
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    </nav>
  );
}