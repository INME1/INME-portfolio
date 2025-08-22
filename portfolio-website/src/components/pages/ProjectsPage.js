import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = ({ 
  currentSection, 
  projects, 
  currentProjectIndex, 
  nextProject, 
  prevProject 
}) => {
  const navigate = useNavigate();

  // 샘플 프로젝트 데이터
  const featuredProjects = [
    {
      id: 1,
      title: "Project Management Application",
      subtitle: "Collaborative project management tool with real-time project updates",
      image: "/images/projects/project-management.jpg",
      technologies: ["Django", "MySQL", "Docker"],
      githubLink: "https://github.com/your-username/project-management"
    },
    {
      id: 2,
      title: "E-Commerce Application",
      subtitle: "Full-featured e-commerce store with multi role user authentication functionality",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["Django REST", "Python", "PostgreSQL"],
      githubLink: "https://github.com/your-username/ecommerce"
    },
    {
      id: 3,
      title: "Expense Tracker Application",
      subtitle: "Real time personal finance management tool with responsive reporting features",
      image: "/images/projects/expense-tracker.jpg",
      technologies: ["Django", "Chart.js", "MySQL"],
      githubLink: "https://github.com/your-username/expense-tracker"
    }
  ];

  // READ MORE 버튼 클릭 시 별도 페이지로 이동
  const handleReadMore = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0, 
            y: currentSection === 4 ? 0 : 50 
          }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h3>
        
        {/* 프로젝트 카드 그리드 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0, 
            y: currentSection === 4 ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: currentSection === 4 ? 1 : 0,
                y: currentSection === 4 ? 0 : 30
              }}
              transition={{ 
                duration: 0.6, 
                delay: currentSection === 4 ? 0.4 + index * 0.1 : 0 
              }}
              whileHover={{ y: -8 }}
            >
              {/* 프로젝트 이미지 */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div class="text-blue-600 text-4xl font-bold">${project.title.split(' ').map(w => w[0]).join('')}</div>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* 기술 스택 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 버튼들 */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleReadMore(project.id)}
                    className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    READ MORE
                  </button>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 추가 프로젝트 보기 버튼 */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSection === 4 ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">더 많은 프로젝트를 보고 싶으신가요?</p>
          <a 
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub에서 모든 프로젝트 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;