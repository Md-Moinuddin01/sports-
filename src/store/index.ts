import { create } from 'zustand'
import { User, Tournament, Match, Notification, LeaderboardEntry, CommunityPost } from '../types'

interface AppStore {
  // Auth
  currentUser: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  
  // UI
  darkMode: boolean
  toggleDarkMode: () => void
  sidebarOpen: boolean
  toggleSidebar: () => void
  
  // Notifications
  notifications: Notification[]
  addNotification: (notification: Notification) => void
  markNotificationAsRead: (id: string) => void
  
  // Tournaments
  tournaments: Tournament[]
  registeredTournaments: Tournament[]
  registerTournament: (tournament: Tournament) => void
  
  // Matches
  liveMatches: Match[]
  upcomingMatches: Match[]
  
  // Leaderboard
  leaderboard: LeaderboardEntry[]
  userRank: number
  
  // Community
  communityPosts: CommunityPost[]
  addPost: (post: CommunityPost) => void
}

export const useAppStore = create<AppStore>((set) => ({
  // Auth
  currentUser: null,
  isAuthenticated: false,
  login: (user) => set({ currentUser: user, isAuthenticated: true }),
  logout: () => set({ currentUser: null, isAuthenticated: false }),
  
  // UI
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  // Notifications
  notifications: [],
  addNotification: (notification) => set((state) => ({
    notifications: [notification, ...state.notifications],
  })),
  markNotificationAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    ),
  })),
  
  // Tournaments
  tournaments: [],
  registeredTournaments: [],
  registerTournament: (tournament) => set((state) => ({
    registeredTournaments: [...state.registeredTournaments, tournament],
  })),
  
  // Matches
  liveMatches: [],
  upcomingMatches: [],
  
  // Leaderboard
  leaderboard: [],
  userRank: 0,
  
  // Community
  communityPosts: [],
  addPost: (post) => set((state) => ({
    communityPosts: [post, ...state.communityPosts],
  })),
}))
