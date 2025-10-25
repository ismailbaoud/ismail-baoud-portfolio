'use client';

import techData from '@/data/techStack.json';

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  category: string;
  items: TechItem[];
}

export default function TechStack() {
  const techStack: TechCategory[] = techData.techStack;

  return (
    <section className="flex justify-center py-20 sm:py-24 px-6 sm:px-10 md:px-20" id="tech">
      <div className="w-full max-w-6xl">
        <h2 className="text-gray-900 text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          My Tech Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-5">
          {techStack.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-[#1d4ed8] text-xl font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
                {category.category}
              </h3>
              <div className="flex flex-col gap-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-center gap-4 bg-white hover:bg-slate-50 transition-colors duration-200 px-4 py-4 rounded-lg border border-slate-200"
                  >
                    <div className="text-[#1d4ed8] flex items-center justify-center rounded-lg bg-blue-100 shrink-0 size-12">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <p className="text-gray-900 text-lg font-normal leading-normal flex-1 truncate">
                      {item.name}
                    </p>
                    <div className="shrink-0">
                      <div className="text-slate-400 flex size-7 items-center justify-center">
                        <span className="material-symbols-outlined text-base">arrow_forward_ios</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
