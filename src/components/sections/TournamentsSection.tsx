import React from 'react'
import { motion } from 'framer-motion'
import { sampleTournaments } from '@/data/mockData'
import { Users, Calendar, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

export const TournamentsSection: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-neon-blue/20 text-neon-blue'
      case 'ongoing':
        return 'bg-neon-red/20 text-neon-red'
      case 'completed':
        return 'bg-neon-green/20 text-neon-green'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return '📅'
      case 'ongoing':
        return '🔴'
      case 'completed':
        return '✓'
      default:
        return '•'
    }
  }

  return (
    <section id="tournaments" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tournaments & <span className="text-gradient">Events</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover and register for upcoming tournaments. Compete with the best, win prizes, and become a champion.
        </p>
      </motion.div>

      {/* Tournaments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleTournaments.map((tournament, idx) => (
          <motion.div
            key={tournament.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer h-full"
          >
            <div className="glass-hover rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-glow">
              {/* Header with Status */}
              <div className="relative h-40 bg-gradient-dark flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, #00D9FF 0%, transparent 50%), radial-gradient(circle at 80% 80%, #FF0055 0%, transparent 50%)`,
                      backgroundSize: '200% 200%',
                    }}
                  />
                </div>
                <div className="text-6xl relative z-10 group-hover:scale-110 transition-transform">{tournament.sport === 'football' ? '⚽' : tournament.sport === 'cricket' ? '🏏' : '🏀'}</div>

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getStatusColor(tournament.status)}`}>
                  <span>{getStatusIcon(tournament.status)}</span>
                  <span className="capitalize">{tournament.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{tournament.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tournament.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-neon-blue">{tournament.participants.length}</div>
                    <div className="text-xs text-gray-400">Teams Registered</div>
                  </div>
                  <div className="glass rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-neon-orange">₹{(tournament.prizePool / 100000).toFixed(1)}L</div>
                    <div className="text-xs text-gray-400">Prize Pool</div>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} className="text-neon-blue" />
                    <span>{tournament.startDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users size={16} className="text-neon-green" />
                    <span>Max {tournament.maxTeams} Teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock size={16} className="text-neon-red" />
                    <span>Register in {formatDistanceToNow(tournament.registrationDeadline)}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary w-full mt-auto"
                >
                  {tournament.status === 'completed' ? 'View Results' : 'Register Now'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button className="btn btn-secondary text-lg">Explore All Tournaments</button>
      </motion.div>
    </section>
  )
}
