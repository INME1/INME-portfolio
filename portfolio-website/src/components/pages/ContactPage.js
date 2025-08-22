import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ExternalLink } from 'lucide-react';

const ContactPage = ({ currentSection }) => {
  return (
    <section className="h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 5 ? 1 : 0, 
            y: currentSection === 5 ? 0 : 50 
          }}
          transition={{ duration: 0.8 }}
        >
          CONTACT
        </motion.h3>
        
        <motion.div 
          className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 5 ? 1 : 0, 
            y: currentSection === 5 ? 0 : 50 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>이메일 보내기</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>GitHub 보기</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;