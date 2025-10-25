'use client';

import experiencesData from '@/data/experiences.json';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  icon: string;
}

const timelineData: TimelineItem[] = experiencesData.experiences;

export default function CareerJourney() {
  return (
    <section className="flex justify-center py-20 sm:py-24 px-6 sm:px-10 md:px-20 bg-[#f5f7f8]" id="journey">
      <div className="w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-3 p-4">
          <h1 className="text-gray-900 text-5xl font-black leading-tight tracking-[-0.033em] min-w-72 text-center">
            My Journey
          </h1>
        </div>
        <div className="relative w-full p-4 md:p-10">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-center timeline-item">
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#2094f3] flex items-center justify-center ring-8 ring-[#f5f7f8]">
                  <span className="material-symbols-outlined text-white">{item.icon}</span>
                </div>
                <div className="relative w-11/12 md:w-5/12 p-6 bg-white rounded-lg shadow-md timeline-content transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <p className="text-sm font-semibold text-[#2094f3]">{item.year}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{item.title}</h3>
                  <p className="text-gray-600 mt-1 text-lg">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
