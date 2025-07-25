'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 'kwik-kik',
    title: 'Kwik Kik',
    description: 'A wellness mobile application designed to support individuals on their journey to overcome addiction and build healthier habits. The app provides a structured, motivational environment where users can set personal goals—such as quitting smoking, improving mental health, or managing time more effectively.',
    technologies: ['Flutter', 'Spring Boot(Spring Security)', 'REST APIs', 'MongoDB', 'Swagger', 'Xcode', 'Stripe', 'Android Studio', 'MVC', 'Bloc', 'Git', 'GitLab'],
    images: [
      '/kwik-kik-screenshots/1.jpeg',
      '/kwik-kik-screenshots/2.jpeg',
      '/kwik-kik-screenshots/3.jpeg',
      '/kwik-kik-screenshots/4.jpeg',
      '/kwik-kik-screenshots/5.jpeg',
      '/kwik-kik-screenshots/6.jpeg',
      '/kwik-kik-screenshots/7.jpeg',
      '/kwik-kik-screenshots/8.jpeg',
      '/kwik-kik-screenshots/9.jpeg',
      '/kwik-kik-screenshots/10.jpeg',
      '/kwik-kik-screenshots/11.jpeg',
      '/kwik-kik-screenshots/12.jpeg',
      '/kwik-kik-screenshots/13.jpeg',
      '/kwik-kik-screenshots/14.jpeg',
      '/kwik-kik-screenshots/15.jpeg',
      '/kwik-kik-screenshots/16.jpeg',
      '/kwik-kik-screenshots/17.jpeg',
      '/kwik-kik-screenshots/18.jpeg',
      '/kwik-kik-screenshots/19.jpeg',
      '/kwik-kik-screenshots/20.jpeg',
      '/kwik-kik-screenshots/21.jpeg',
    ],
    category: 'Mobile App',
    githubUrl: 'https://github.com/yassine222/Kwik-kik-',
    liveUrl: '#'
  },
  {
    id: 'adopte-me',
    title: 'Adopte Me',
    description: 'A pet adoption platform that connects loving families with animals in need of homes. The app features a comprehensive pet database, user profiles, adoption applications, and community features to help facilitate successful pet adoptions.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Storage', 'Firebase Authentication', 'Provider', 'Google Maps Api', 'Figma', 'UML', 'IOS', 'Android'],
    images: [
      '/adopte-me-screenshots/1-portrait.jpeg',
      '/adopte-me-screenshots/2-portrait.jpeg',
      '/adopte-me-screenshots/3-portrait.jpeg',
      '/adopte-me-screenshots/4-portrait.jpeg',
      '/adopte-me-screenshots/5-portrait.jpeg',
      '/adopte-me-screenshots/6-portrait.jpeg',
      '/adopte-me-screenshots/7-portrait.jpeg',
      '/adopte-me-screenshots/8-portrait.jpeg',
      '/adopte-me-screenshots/9-portrait.jpeg',
      '/adopte-me-screenshots/10-portrait.jpeg',
      '/adopte-me-screenshots/11-portrait.jpeg',
      '/adopte-me-screenshots/12-portrait.jpeg',
      '/adopte-me-screenshots/13-portrait.jpeg',
      '/adopte-me-screenshots/15-portrait.jpeg',
      '/adopte-me-screenshots/16-portrait.jpeg',
      '/adopte-me-screenshots/17-portrait.jpeg',
      '/adopte-me-screenshots/18-portrait.jpeg',
      '/adopte-me-screenshots/19-portrait.jpeg',
      '/adopte-me-screenshots/AD1-front.jpeg',
      '/adopte-me-screenshots/AD2-front.jpeg',
      '/adopte-me-screenshots/AD3-front.jpeg',
      '/adopte-me-screenshots/AD4-front.jpeg',
      '/adopte-me-screenshots/AD5-front.jpeg',
      '/adopte-me-screenshots/AD6-front.jpeg',
      '/adopte-me-screenshots/AD7-front.jpeg',
      '/adopte-me-screenshots/AD8-front.jpeg',
    ],
    category: 'Mobile App',
    githubUrl: 'https://github.com/yassine222/adoptme',
    liveUrl: '#'
  },
  {
    id: 'jobscout',
    title: 'JobScout',
    description: 'A comprehensive job search and career development platform that helps users find their dream jobs. Features include job listings, resume builder, application tracking, interview preparation tools, and career guidance resources.',
    technologies: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'Git', 'GitHub', 'Firebase Storage', 'IOS'],
    images: [
      '/jobScout-screenshots/1.jpeg',
      '/jobScout-screenshots/2.jpeg',
      '/jobScout-screenshots/3.jpeg',
      '/jobScout-screenshots/4.jpeg',
      '/jobScout-screenshots/5.jpeg',
      '/jobScout-screenshots/6.jpeg',
      '/jobScout-screenshots/7.jpeg',
      '/jobScout-screenshots/8.jpeg',
      '/jobScout-screenshots/9.jpeg',
      '/jobScout-screenshots/10.jpeg',
      '/jobScout-screenshots/11.jpeg',
      '/jobScout-screenshots/12.jpeg',
      '/jobScout-screenshots/13.jpeg',
      '/jobScout-screenshots/14.jpeg',
    
    ],
    category: 'Mobile App',
    githubUrl: 'https://github.com/yassine222/jobscout',
    liveUrl: '#'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-muted">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden card-hover cursor-pointer border border-gray-200 dark:border-border"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                {project.images.length > 0 && (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                )}
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-foreground">{project.title}</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded border border-green-200 dark:border-green-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-muted-foreground text-xs px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-border">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold dark:text-foreground">{selectedProject.title}</h3>
                  <button 
                    onClick={closeProjectModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-muted-foreground dark:hover:text-foreground"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Image Gallery */}
                <div className="mb-6">
                  <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-4">
                    {selectedProject.images[selectedImageIndex] && (
                      <Image
                        src={selectedProject.images[selectedImageIndex]}
                        alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded border-2 ${
                            index === selectedImageIndex ? 'border-green-600 dark:border-green-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            className="object-contain w-full h-full rounded"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 dark:text-foreground">Description</h4>
                  <p className="text-gray-600 dark:text-muted-foreground mb-4">{selectedProject.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-2 dark:text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm border border-green-200 dark:border-green-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 