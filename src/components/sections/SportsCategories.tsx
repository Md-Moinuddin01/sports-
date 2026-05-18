import React from 'react'
import { motion } from 'framer-motion'
import { sportsCategories } from '@/data/mockData'
import { ArrowRight } from 'lucide-react'

export const SportsCategories: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your <span className="text-gradient">Sport</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore diverse sports categories and join the competition. From traditional sports to esports, we have it all.
        </p>
      </motion.div>

      {/* Sports Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {sportsCategories.map((sport) => (
          <motion.div
            key={sport.id}
            variants={cardVariants}
            className="group cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="relative h-full glass-hover rounded-2xl p-6 flex flex-col overflow-hidden">
              {/* Background Gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: sport.color }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{sport.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{sport.description}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div>
                    <div className="text-lg font-bold text-neon-blue">{sport.participants}</div>
                    <div className="text-xs text-gray-500">Players</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-neon-blue">{sport.tournaments}</div>
                    <div className="text-xs text-gray-500">Tournaments</div>
                  </div>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors group/btn">
                  Explore <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${sport.color}20 0%, transparent 100%)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
