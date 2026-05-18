export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: 'player' | 'coach' | 'admin' | 'fan'
  bio?: string
  location?: string
  socialLinks?: {
    twitter?: string
    instagram?: string
    facebook?: string
  }
}

export interface Player extends User {
  jerseyNumber: number
  position: string
  team?: string
  stats: PlayerStats
  achievements: Achievement[]
  ranking: number
  xpPoints: number
}

export interface PlayerStats {
  matches: number
  wins: number
  goals?: number
  assists?: number
  rating: number
  performances: number[]
}

export interface Team {
  id: string
  name: string
  logo: string
  sport: Sport
  players: Player[]
  coach: User
  founded: string
  city: string
  wins: number
  losses: number
  draws: number
  ranking: number
}

export type Sport = 'football' | 'cricket' | 'basketball' | 'volleyball' | 'badminton' | 'esports' | 'athletics'

export interface Match {
  id: string
  sport: Sport
  team1: Team
  team2: Team
  date: Date
  venue: string
  status: 'upcoming' | 'live' | 'completed'
  score?: {
    team1: number
    team2: number
  }
  timer?: number
  stats?: MatchStats[]
}

export interface MatchStats {
  team: Team
  possession: number
  shots: number
  accuracy: number
  fouls: number
}

export interface Tournament {
  id: string
  name: string
  sport: Sport
  description: string
  startDate: Date
  endDate: Date
  prizePool: number
  participants: Team[]
  status: 'upcoming' | 'ongoing' | 'completed'
  brackets?: Bracket[]
  registrationDeadline: Date
  maxTeams: number
  format: 'knockout' | 'group' | 'round-robin'
}

export interface Bracket {
  id: string
  round: number
  match: Match
  winner?: Team
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlockedDate?: Date
  category: 'medal' | 'trophy' | 'badge' | 'certificate'
  xpReward: number
}

export interface CommunityPost {
  id: string
  author: User
  content: string
  image?: string
  timestamp: Date
  likes: number
  comments: Comment[]
  reactions: Reaction[]
  sport?: Sport
}

export interface Comment {
  id: string
  author: User
  content: string
  timestamp: Date
  likes: number
}

export interface Reaction {
  emoji: string
  count: number
  userReacted: boolean
}

export interface Notification {
  id: string
  userId: string
  type: 'match' | 'tournament' | 'community' | 'achievement' | 'team'
  title: string
  message: string
  timestamp: Date
  read: boolean
  actionUrl?: string
}

export interface LeaderboardEntry {
  rank: number
  player: Player
  xpPoints: number
  matches: number
  winRate: number
  achievements: number
}

export interface Challenge {
  id: string
  name: string
  description: string
  objective: string
  reward: number
  difficulty: 'easy' | 'medium' | 'hard'
  expiryDate: Date
  category: string
}

export interface LiveScore {
  matchId: string
  team1Score: number
  team2Score: number
  timer: number
  period: number
  status: 'live' | 'paused' | 'completed'
  possession?: string
}

export interface Article {
  id: string
  title: string
  content: string
  author: User
  publishDate: Date
  category: Sport | 'news' | 'analysis'
  thumbnail: string
  views: number
  likes: number
}

export interface AdminDashboardStats {
  totalUsers: number
  activeTournaments: number
  liveMatches: number
  totalRegistrations: number
  systemHealth: number
  revenueGenerated: number
}
