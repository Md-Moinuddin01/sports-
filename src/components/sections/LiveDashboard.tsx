import React from 'react'
import { motion } from 'framer-motion'
import { sampleMatches } from '@/data/mockData'
import { Clock, MapPin, Activity } from 'lucide-react'

export const LiveDashboard: React.FC = () => {
  // Simulate live match timer
  const [timer, setTimer] = React.useState(1245)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 5400))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const getUpcomingMatches = () => sampleMatches.filter((m) => m.status === 'upcoming')
  const getRecentMatches = () => sampleMatches.filter((m) => m.status === 'completed')

  const upcomingMatches = getUpcomingMatches()
  const recentMatches = getRecentMatches()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Activity className="w-6 h-6 text-neon-red animate-pulse" />
          <span className="text-neon-red font-semibold">LIVE NOW</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Live Scores & <span className="text-gradient">Match Updates</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Match Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            {/* Live Indicator */}
            <motion.div
              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-neon-red/20 border border-neon-red"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-neon-red rounded-full animate-pulse" />
              <span className="text-neon-red text-sm font-semibold">Live</span>
            </motion.div>

            {/* Live Match Content */}
            <div className="text-center">
              {/* Team 1 */}
              <div className="mb-8">
                <div className="text-5xl mb-2">⚽</div>
                <h3 className="text-2xl font-bold">Champions FC</h3>
                <p className="text-gray-400 text-sm">Football</p>
              </div>

              {/* Score */}
              <motion.div
                className="flex justify-center items-center gap-8 mb-8"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-right">
                  <div className="text-6xl font-bold text-neon-blue">2</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-500">-</div>
                  <div className="text-sm text-gray-400 mt-2">45:32</div>
                </div>
                <div className="text-left">
                  <div className="text-6xl font-bold text-neon-red">1</div>
                </div>
              </motion.div>

              {/* Timer */}
              <div className="mb-8">
                <div className="inline-block px-6 py-2 bg-dark-input rounded-lg border border-neon-blue">
                  <div className="text-sm text-gray-400 mb-1">Time</div>
                  <div className="text-2xl font-mono font-bold text-neon-blue">{formatTime(timer)}</div>
                </div>
              </div>

              {/* Team 2 */}
              <div className="mb-6">
                <div className="text-5xl mb-2">🏟️</div>
                <h3 className="text-2xl font-bold">Cricket Warriors</h3>
                <p className="text-gray-400 text-sm">Cricket</p>
              </div>

              {/* Match Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="glass rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Possession</div>
                  <div className="text-lg font-bold">62%</div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Shots</div>
                  <div className="text-lg font-bold">8/12</div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Accuracy</div>
                  <div className="text-lg font-bold">75%</div>
                </div>
              </div>

              {/* Venue and info */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  Wankhede Stadium
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  First Half
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming & Recent Matches */}
        <div className="space-y-6">
          {/* Upcoming Matches */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Upcoming</h3>
            <div className="space-y-3">
              {upcomingMatches.slice(0, 2).map((match) => (
                <motion.div
                  key={match.id}
                  className="glass-hover rounded-lg p-3 cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-xs text-neon-blue mb-1 font-semibold uppercase">{match.sport}</div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">{match.team1.name}</div>
                    <span className="text-xs text-gray-500">vs</span>
                    <div className="text-sm">{match.team2.name}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    {match.date.toLocaleDateString()} {match.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">Recent Results</h3>
            <div className="space-y-3">
              {recentMatches.map((match) => (
                <motion.div
                  key={match.id}
                  className="glass-hover rounded-lg p-3 cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="text-xs text-neon-blue mb-1 font-semibold uppercase">{match.sport}</div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm">{match.team1.name}</div>
                    <div className="flex gap-2 items-center">
                      <span className="font-bold text-neon-green">{match.score?.team1}</span>
                      <span className="text-gray-500">-</span>
                      <span className="font-bold text-neon-red">{match.score?.team2}</span>
                    </div>
                    <div className="text-sm">{match.team2.name}</div>
                  </div>
                  <div className="text-xs text-neon-green">✓ Completed</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
