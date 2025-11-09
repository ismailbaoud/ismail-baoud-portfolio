'use client';

export default function HeroSection() {
  return (
    <section className="flex flex-1 justify-center py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-20">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-4">
              <p className="text-[#34d399] text-lg font-medium">Hello, I&apos;m Ismail Baoud.</p>
              <h1 className="text-gray-900 text-5xl sm:text-6xl font-black leading-tight tracking-[-0.033em]">
                I build amazing things for the web.
              </h1>
              <div className="text-gray-600 text-xl sm:text-2xl font-normal leading-normal h-8">
                <div className="text-rotator relative">
                  <span>Full Stack Developer</span>
                  <span>Java Specialist</span>
                  <span>Spring Boot Specialist</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#34d399] text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity" 
                href="#projects"
              >
                <span className="truncate">View My Work</span>
              </a>
              <a 
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border-2 border-[#e2e8f0] text-gray-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e2e8f0] transition-colors" 
                href="/cv/cv-ismail-baoud-1.pdf"
                download="ismail-baoud-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined mr-2">download</span>
                <span className="truncate">Download Resume</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full">
              <div className="absolute inset-0 rounded-full bg-[#34d399]/50 blur-2xl animate-pulse"></div>
              <img 
                className="relative w-full h-full object-cover rounded-full border-4 border-[#e2e8f0]" 
                alt="A professional headshot of a smiling man with short brown hair and a beard, wearing a dark shirt." 
                src="/images/profile.jpg"              
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
