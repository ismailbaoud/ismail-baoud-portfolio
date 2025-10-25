'use client';

export default function Footer() {
  return (
    <footer className="flex justify-center py-8 px-6 sm:px-10 md:px-20 border-t border-solid border-[#e2e8f0]/50">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">© 2024 Ismail Baoud. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="text-gray-600 hover:text-gray-900 transition-colors" href="https://github.com/ismailbaoud" target="_blank" rel="noopener noreferrer">
            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a className="text-gray-600 hover:text-gray-900 transition-colors" href="https://www.linkedin.com/in/ismail-baoud-b39aa1335/" target="_blank" rel="noopener noreferrer">
            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect height="12" width="4" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
