import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, MapPin, ExternalLink, Send, Phone, Calendar } from 'lucide-react';

const ContactPage = ({ currentSection }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: '이메일',
      value: 'suisfan111@gmail.com',
      href: 'mailto:suisfan111@gmail.com',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'github',
      icon: Github,
      title: 'GitHub',
      value: 'INME1',
      href: 'https://github.com/INME1',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700'
    },
    {
      id: 'location',
      icon: MapPin,
      title: '위치',
      value: '대전, 대한민국',
      href: '#',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <section className="h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* 배경 그래픽 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-50 to-purple-50 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        
        {/* 헤더 섹션 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: currentSection === 5 ? 1 : 0, 
            y: currentSection === 5 ? 0 : 30 
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Contact 
            <span 
              className="block bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              with
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          </p>
        </motion.div>

        {/* 연락 방법 카드들 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: currentSection === 5 ? 1 : 0, 
            y: currentSection === 5 ? 0 : 30 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.href}
                target={method.id === 'github' ? '_blank' : undefined}
                rel={method.id === 'github' ? 'noopener noreferrer' : undefined}
                className={`group relative p-8 rounded-3xl border border-gray-100 hover:border-transparent transition-all duration-300 cursor-pointer overflow-hidden ${
                  hoveredCard === method.id ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
                }`}
                style={{
                  backgroundColor: hoveredCard === method.id ? 'white' : '#fafafa'
                }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: currentSection === 5 ? 1 : 0, 
                  y: currentSection === 5 ? 0 : 30 
                }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* 배경 그라디언트 */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                {/* 아이콘 */}
                <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${method.textColor}`} />
                </div>

                {/* 콘텐츠 */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.subtitle}</p>
                  <p className={`font-semibold ${method.textColor} group-hover:text-gray-900 transition-colors`}>
                    {method.value}
                  </p>
                </div>

                {/* 호버 시 화살표 */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSection === 5 ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>Crafted with passion by</span>
              <span 
                className="font-semibold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                INME
              </span>
            </div>
            <p className="text-gray-500 text-xs">© 2025 • All rights reserved</p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactPage;