import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectsPage = ({ 
  currentSection, 
  projects, 
  currentProjectIndex, 
  nextProject, 
  prevProject 
}) => {
  return (
    <section className="h-screen bg-gray-50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0, 
            y: currentSection === 4 ? 0 : 50 
          }}
          transition={{ duration: 0.8 }}
        >
          RECENT PROJECTS
        </motion.h3>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0, 
            y: currentSection === 4 ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center">
            <button 
              onClick={prevProject}
              className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {projects.slice(currentProjectIndex, currentProjectIndex + 2).map((project) => (
                <motion.div 
                  key={project.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover bg-gray-200"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={nextProject}
              className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </motion.div>

        {/* 프로젝트 인디케이터 */}
        <motion.div 
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentProjectIndex / 2) === index
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;