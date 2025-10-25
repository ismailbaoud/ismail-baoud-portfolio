'use client';

import { useState } from 'react';
import projectsData from '@/data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  tech: string;
  image: string;
  problem?: string;
  solution?: string;
  techUsed?: Array<{ name: string; icon: string }>;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  showGithub?: boolean;
  showLiveDemo?: boolean;
}

export default function FeaturedProjects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(projectsData.projects[0]?.id || null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const projects: Project[] = projectsData.projects;

  const selectedProject = projects.find(p => p.id === expandedProject) || projects[0];

  return (
    <section className="flex justify-center py-20 sm:py-24 bg-[#f7fafc] px-6 sm:px-10 md:px-20" id="projects">
      {/* Image Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <img 
            src={lightboxImage} 
            alt="Project preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="w-full max-w-7xl">
        <h2 className="text-[#2d3748] text-3xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
          Featured Case Studies
        </h2>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setExpandedProject(project.id)}
              className={`flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 cursor-pointer ${
                expandedProject === project.id ? 'border-[#4299e1] ring-2 ring-[#4299e1]/20' : 'border-[#e2e8f0]'
              }`}
            >
              <div 
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url("${project.image}")` }}
              />
              <div>
                <p className="text-[#2d3748] text-xl font-bold leading-normal">{project.title}</p>
                <p className="text-[#4a5568] text-base font-normal leading-relaxed mt-2">
                  {project.shortDescription}
                </p>
                <p className="text-[#4299e1]/80 text-sm font-medium leading-normal mt-3">{project.tech}</p>
              </div>
              {expandedProject === project.id && (
                <div className="flex items-center gap-2 text-[#4299e1] text-sm font-semibold">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                  <span>Currently Viewing</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Case Study */}
        {selectedProject && (
          <div className="flex flex-col p-4 mt-8">
            <div className="flex flex-col rounded-xl border-2 border-[#4299e1] bg-white shadow-xl">
              <div className="flex items-center justify-between gap-6 p-6 bg-gradient-to-r from-[#4299e1]/10 to-transparent">
                <div className="flex flex-col">
                  <p className="text-[#2d3748] text-2xl font-bold">{selectedProject.title}</p>
                  <p className="text-[#4a5568] text-base font-medium mt-1">Detailed Case Study</p>
                </div>
              </div>
              <div className="px-6 pb-6 space-y-8 pt-6">
                {/* Full Description */}
                <div>
                  <h3 className="text-[#4299e1] text-lg font-bold mb-2">About This Project</h3>
                  <p className="text-[#4a5568] text-base font-normal leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.problem && (
                  <div>
                    <h3 className="text-[#4299e1] text-lg font-bold mb-2">The Problem</h3>
                    <p className="text-[#4a5568] text-base font-normal leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                )}
                {selectedProject.solution && (
                  <div>
                    <h3 className="text-[#4299e1] text-lg font-bold mb-2">The Solution</h3>
                    <p className="text-[#4a5568] text-base font-normal leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                )}
                {selectedProject.techUsed && selectedProject.techUsed.length > 0 && (
                  <div>
                    <h3 className="text-[#4299e1] text-lg font-bold mb-2">Tech Used</h3>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.techUsed.map((tech, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 bg-[#f7fafc] rounded-lg px-3 py-1.5 border border-[#e2e8f0]"
                        >
                          <span className="text-[#4299e1] material-symbols-outlined">{tech.icon}</span>
                          <span className="text-[#2d3748] text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div>
                    <h3 className="text-[#4299e1] text-lg font-bold mb-4">Visuals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.images.map((img, idx) => (
                        <img 
                          key={idx}
                          className="rounded-lg object-cover w-full h-full border border-[#e2e8f0] cursor-pointer hover:opacity-80 transition-opacity"
                          alt={`Screenshot ${idx + 1}`}
                          src={img}
                          onClick={() => setLightboxImage(img)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {selectedProject.githubUrl && selectedProject.showGithub !== false && (
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-[#f7fafc] text-[#2d3748] text-base font-bold leading-normal tracking-wide hover:bg-[#e2e8f0] transition-colors duration-300 border border-[#e2e8f0]"
                    >
                      <span className="material-symbols-outlined">code</span>
                      <span className="truncate">View Code on GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && selectedProject.showLiveDemo === true && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-[#4299e1] text-white text-base font-bold leading-normal tracking-wide hover:bg-[#4299e1]/90 transition-colors duration-300"
                    >
                      <span className="material-symbols-outlined">open_in_new</span>
                      <span className="truncate">View Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Explore More Projects Button */}
        <div className="flex justify-center mt-12 px-4">
          <a
            href="https://github.com/ismailbaoud?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2d3748] to-[#1a202c] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#4299e1]"
          >
            <span className="material-symbols-outlined text-2xl">explore</span>
            <span>Explore More Projects on GitHub</span>
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
