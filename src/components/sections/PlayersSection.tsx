import React from 'react'
import { motion } from 'framer-motion'
import { samplePlayers, sampleAchievements } from '@/data/mockData'
import { Zap } from 'lucide-react'

export const PlayersSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Top <span className="text-gradient">Athletes</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Meet the champions and rising stars. Explore player profiles, stats, achievements, and rankings.
        </p>
      </motion.div>

      {/* Players Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {samplePlayers.map((player) => (
          <motion.div
            key={player.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="glass-hover rounded-2xl overflow-hidden h-full flex flex-col">
              {/* Player Header */}
              <div className="relative h-48 bg-gradient-neon overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 opacity-20"
                />
                <div className="relative h-full flex flex-col items-center justify-center">
                  {/* Ranking Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-dark-bg/80 backdrop-blur flex items-center justify-center text-lg font-bold text-neon-blue"
                  >
                    #{player.ranking}
                  </motion.div>

                  {/* Player Avatar */}
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="w-24 h-24 rounded-full border-4 border-dark-bg mb-2 object-cover"
                  />

                  {/* Jersey Number */}
                  <div className="text-3xl font-bold opacity-30">{player.jerseyNumber}</div>
                </div>
              </div>

              {/* Player Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-1">{player.name}</h3>
                <p className="text-neon-blue text-sm mb-3 uppercase font-semibold">
                  {player.position} • {player.team}
                </p>

                {/* Bio */}
                {player.bio && <p className="text-gray-400 text-sm mb-4 line-clamp-2">{player.bio}</p>}

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-neon-blue">{player.stats.matches}</div>
                    <div className="text-xs text-gray-400">Matches</div>
                  </div>
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-neon-green">{player.stats.wins}</div>
                    <div className="text-xs text-gray-400">Wins</div>
                  </div>
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-neon-orange">{player.stats.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>

                {/* XP and Performance */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-sm font-semibold text-neon-blue">
                      <Zap size={16} /> XP Points
                    </div>
                    <span className="text-lg font-bold">{player.xpPoints}</span>
                  </div>
                  <div className="w-full bg-dark-input rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-neon"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(player.xpPoints / 10000) * 100}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Recent Performance */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2 font-semibold">Recent Performance</div>
                  <div className="flex gap-2">
                    {player.stats.performances.map((perf, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 h-8 rounded-lg bg-dark-input flex items-center justify-center text-xs font-bold"
                        animate={{
                          backgroundColor: `hsl(${perf * 60}, 100%, 40%)`,
                        }}
                        transition={{ duration: 0.5 }}
                        title={`Rating: ${perf}/5`}
                      >
                        {perf}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements Preview */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2 font-semibold">Achievements</div>
                  <div className="flex gap-2">
                    {[sampleAchievements[0], sampleAchievements[1]].map((ach) => (
                      <motion.div
                        key={ach.id}
                        className="text-lg cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        title={ach.name}
                      >
                        {ach.icon}
                      </motion.div>
                    ))}
                    <div className="text-lg text-gray-500">+3 more</div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary w-full"
                >
                  View Profile
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Leaderboard Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button className="btn btn-primary text-lg">View Full Leaderboard</button>
      </motion.div>
    </section>
  )
}
