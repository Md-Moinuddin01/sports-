import React from 'react'
import { motion } from 'framer-motion'
import { sampleAchievements, sampleLeaderboard } from '@/data/mockData'
import { Zap, Target, Star } from 'lucide-react'

export const AchievementsSection: React.FC = () => {
  const categories = [
    { id: 'all', label: 'All Achievements' },
    { id: 'medal', label: 'Medals' },
    { id: 'trophy', label: 'Trophies' },
    { id: 'badge', label: 'Badges' },
    { id: 'certificate', label: 'Certificates' },
  ]

  const [activeCategory, setActiveCategory] = React.useState('all')

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
          Achievements & <span className="text-gradient">Rewards</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Unlock medals, trophies, and badges. Climb the leaderboard and showcase your excellence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Achievements Grid */}
        <div className="lg:col-span-2">
          {/* Category Filters */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-neon text-dark-bg font-bold'
                    : 'bg-dark-input text-gray-400 hover:text-neon-blue'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            layout
          >
            {sampleAchievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="glass-hover rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    {achievement.icon}
                  </motion.div>

                  {/* Name */}
                  <h3 className="font-bold text-lg mb-2 text-center">{achievement.name}</h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 text-center mb-4 line-clamp-2">{achievement.description}</p>

                  {/* XP Reward */}
                  <div className="flex items-center gap-1 text-neon-blue font-semibold text-sm">
                    <Zap size={14} />
                    {achievement.xpReward} XP
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Leaderboard Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 h-fit"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star className="text-neon-orange" />
            Top Players
          </h3>

          <div className="space-y-4">
            {sampleLeaderboard.slice(0, 5).map((entry, idx) => (
              <motion.div
                key={entry.player.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark-input/50 cursor-pointer transition"
              >
                {/* Rank */}
                <div className="w-8 h-8 rounded-full bg-dark-input flex items-center justify-center font-bold text-neon-blue flex-shrink-0">
                  {entry.rank}
                </div>

                {/* Player Avatar */}
                <img
                  src={entry.player.avatar}
                  alt={entry.player.name}
                  className="w-10 h-10 rounded-full border border-neon-blue flex-shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{entry.player.name}</div>
                  <div className="text-xs text-neon-blue">{entry.xpPoints} XP</div>
                </div>

                {/* Trophy */}
                <div className="text-lg">
                  {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : '⭐'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All */}
          <button className="btn btn-secondary w-full mt-6">View All Rankings</button>
        </motion.div>
      </div>

      {/* Daily Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="text-neon-red" />
          Daily Challenges
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Win Streak',
              desc: 'Win 3 consecutive matches',
              reward: '100 XP',
              progress: 2,
            },
            {
              title: 'Community Star',
              desc: 'Get 50 likes on posts',
              reward: '50 XP',
              progress: 35,
            },
            {
              title: 'Perfect Score',
              desc: 'Get 5.0 rating in 2 matches',
              reward: '200 XP',
              progress: 1,
            },
          ].map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-4"
            >
              <h4 className="font-bold mb-2">{challenge.title}</h4>
              <p className="text-sm text-gray-400 mb-3">{challenge.desc}</p>
              <div className="w-full bg-dark-input rounded-full h-2 mb-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-neon"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(challenge.progress / 3) * 100}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">{challenge.progress}/3</span>
                <span className="text-neon-blue font-semibold">+{challenge.reward}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
