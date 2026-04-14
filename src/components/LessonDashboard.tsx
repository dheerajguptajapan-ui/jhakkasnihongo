import React from 'react';
import { motion } from 'framer-motion';

interface LessonDashboardProps {
  level: number;
  onSelectLesson: (lessonNumber: number) => void;
}

const LessonDashboard: React.FC<LessonDashboardProps> = ({ level, onSelectLesson }) => {
  const isN4 = level === 2;
  const isN3 = level === 3;
  const isN2 = level === 4;
  
  const count = isN2 ? 14 : (isN3 || isN4 ? 11 : 25);
  const label = level === 1 ? 'Lesson' : 'Chapter';
  const subLabel = isN2 ? 'TRY N2 Mastery' : (isN3 ? 'TRY N3 Grammar Hub' : (isN4 ? 'TRY N4 Grammar Master' : 'Minna no Nihongo Lessons 1–25'));

  const lessons = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="p-6 max-w-7xl mx-auto pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          {level === 1 ? 'N5 Curriculum' : 
           level === 2 ? 'N4 Curriculum' : 
           level === 3 ? 'N3 Curriculum' : 
           level === 4 ? 'N2 Curriculum' : 'JLPT Curriculum'}
        </h2>
        <p className="text-gray-400">{subLabel}</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {lessons.map((lesson) => (
          <motion.button
            key={lesson}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectLesson(lesson)}
            className="relative group overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm h-32 flex flex-col items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="text-4xl font-bold bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {lesson}
            </span>
            <span className="text-xs font-medium text-gray-500 mt-2 uppercase tracking-widest group-hover:text-gray-300">
              {label}
            </span>

            {/* Progress Bar Placeholder */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-500 group-hover:w-full transition-all duration-500" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LessonDashboard;
