'use client';

export default function AboutSection() {
  return (
    <section className="flex justify-center py-20 sm:py-24 px-6 sm:px-10 md:px-20" id="about">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
              My Philosophy
            </h2>
            <p className="text-gray-600 text-lg font-normal leading-relaxed pb-3 pt-1 px-4">
              I&apos;m a passionate Full Stack Developer with expertise in building robust, scalable applications from server to screen. My journey in software development has equipped me with a diverse skill set spanning modern backend technologies like Java with Spring Boot, Spring Security, and microservices architecture, as well as dynamic frontend frameworks including React, Angular, and Next.js.
            </p>
            <p className="text-gray-600 text-lg font-normal leading-relaxed pb-3 pt-1 px-4">
              I believe in writing clean, maintainable code that not only solves complex problems but also provides an exceptional user experience. Whether it&apos;s developing enterprise-level Java applications, building responsive web interfaces, or architecting full-stack solutions with the MERN stack, I approach each project with dedication to quality, scalability, and innovation. My experience with DevOps practices and testing frameworks ensures that every solution I deliver is production-ready and built to last.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-6 p-4">
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-[#2094f3]/10 text-[#2094f3] transition-all duration-300 group-hover:bg-[#2094f3] group-hover:text-white">
                <span className="material-symbols-outlined text-4xl">architecture</span>
              </div>
              <h3 className="text-gray-900 text-lg font-bold leading-tight">Microservices Architecture</h3>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-[#2094f3]/10 text-[#2094f3] transition-all duration-300 group-hover:bg-[#2094f3] group-hover:text-white">
                <span className="material-symbols-outlined text-4xl">security</span>
              </div>
              <h3 className="text-gray-900 text-lg font-bold leading-tight">Security First</h3>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-[#2094f3]/10 text-[#2094f3] transition-all duration-300 group-hover:bg-[#2094f3] group-hover:text-white">
                <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              </div>
              <h3 className="text-gray-900 text-lg font-bold leading-tight">Continuous Learning</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
