import Image from 'next/image';
import logo from '../../../public/images/logo.png';

export default function Header() {
  return (
    <header className="relative flex items-center sm:items-start mt-10 sm:mt-0 justify-center px-6 sm:px-8 lg:px-24 py-4 md:justify-between">

      <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
        <Image
          src={logo}
          alt="logo"
          width={180}
          height={80}
          className="rounded-xl shadow-xl"
        />
      </div>

      <nav className="hidden md:flex space-x-6 text-sm ml-auto">
        <a href="#about" className="hover:text-pink-400">About us</a>
        <a href="#contact" className="hover:text-pink-400">Contact</a>
      </nav>

      <div className="absolute right-6 md:hidden">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </header>
  );
}
