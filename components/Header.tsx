'use client';

import { useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white/95 px-6 sm:px-10 md:px-20 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-gray-900">
        <div className="size-6 text-[#34d399]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path 
              clipRule="evenodd" 
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" 
              fill="currentColor" 
              fillRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-[-0.015em]">Ismail Baoud</h2>
      </div>
      <nav className="hidden md:flex items-center gap-9">
        <a className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal transition-colors" href="#about">About</a>
        <a className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal transition-colors" href="#journey">Journey</a>
        <a className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal transition-colors" href="#tech">Tech Stack</a>
        <a className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal transition-colors" href="#projects">Projects</a>
        <a className="text-gray-600 hover:text-gray-900 text-base font-medium leading-normal transition-colors" href="#contact">Contact</a>
      </nav>

    </header>
  );
}
