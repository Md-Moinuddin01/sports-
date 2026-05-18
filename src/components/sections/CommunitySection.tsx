import React from 'react'
import { motion } from 'framer-motion'
import { sampleCommunityPosts } from '@/data/mockData'
import { Heart, MessageCircle, Share2 } from 'lucide-react'

export const CommunitySection: React.FC = () => {
  const [likedPosts, setLikedPosts] = React.useState<Set<string>>(new Set())

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Sports <span className="text-gradient">Community</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Share moments, celebrate victories, connect with athletes, and engage in passionate sports discussions.
        </p>
      </motion.div>

      {/* Create Post Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 mb-8"
      >
        <div className="flex gap-4 mb-4">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="Your avatar"
            className="w-12 h-12 rounded-full border border-neon-blue"
          />
          <div className="flex-1">
            <textarea
              placeholder="Share your sports moment..."
              className="input w-full resize-none placeholder-gray-500"
              rows={3}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="text-2xl hover:scale-110 transition-transform">📸</button>
            <button className="text-2xl hover:scale-110 transition-transform">🎥</button>
            <button className="text-2xl hover:scale-110 transition-transform">😀</button>
          </div>
          <button className="btn btn-primary">Post</button>
        </div>
      </motion.div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {sampleCommunityPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all"
          >
            {/* Post Header */}
            <div className="p-6 border-b border-dark-input">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3 flex-1">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full border border-neon-blue"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-lg">{post.author.name}</h4>
                      <span className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full font-semibold">
                        {post.author.role}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {post.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}{' '}
                      {post.timestamp.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-neon-blue transition">⋮</button>
              </div>

              {/* Post Content */}
              <p className="text-gray-200 mb-4 leading-relaxed">{post.content}</p>

              {/* Sport Tag */}
              {post.sport && (
                <div className="inline-block px-3 py-1 bg-dark-input rounded-full text-sm text-neon-blue mb-4">
                  #{post.sport}
                </div>
              )}
            </div>

            {/* Post Image (if available) */}
            {post.image && (
              <div className="h-64 bg-dark-input overflow-hidden">
                <img src={post.image} alt="Post" className="w-full h-full object-cover" />
              </div>
            )}

            {/* Stats */}
            <div className="px-6 py-3 border-b border-dark-input flex gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Heart size={16} className="text-neon-red" />
                <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={16} className="text-neon-blue" />
                <span>{post.comments.length}</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 size={16} className="text-neon-green" />
                <span>{Math.floor(post.likes * 0.3)}</span>
              </div>
            </div>

            {/* Reactions */}
            <div className="px-6 py-4 border-b border-dark-input">
              <div className="flex gap-2 flex-wrap">
                {post.reactions.map((reaction) => (
                  <motion.button
                    key={reaction.emoji}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
                      reaction.userReacted
                        ? 'bg-neon-blue/20 border border-neon-blue text-neon-blue'
                        : 'bg-dark-input border border-dark-input text-gray-400 hover:border-gray-300'
                    }`}
                  >
                    <span>{reaction.emoji}</span>
                    <span className="text-sm">{reaction.count}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 py-4 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleLike(post.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
                  likedPosts.has(post.id)
                    ? 'bg-neon-red/20 text-neon-red'
                    : 'hover:bg-dark-input text-gray-400 hover:text-neon-red'
                }`}
              >
                <Heart size={20} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                <span className="font-semibold">Like</span>
              </motion.button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-dark-input text-gray-400 hover:text-neon-blue transition-all">
                <MessageCircle size={20} />
                <span className="font-semibold">Comment</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-dark-input text-gray-400 hover:text-neon-green transition-all">
                <Share2 size={20} />
                <span className="font-semibold">Share</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button className="btn btn-secondary text-lg">Load More Posts</button>
      </motion.div>
    </section>
  )
}
