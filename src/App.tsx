import { useEffect } from 'react'
import { useAppStore } from '@/store'
import {
  Navbar,
  Footer,
  HeroSection,
  SportsCategories,
  LiveDashboard,
  TournamentsSection,
  PlayersSection,
  CommunitySection,
  AchievementsSection,
} from '@/components'
import { sampleUsers } from '@/data/mockData'

function App() {
  const { login, darkMode } = useAppStore()

  // Auto-login demo user
  useEffect(() => {
    login(sampleUsers[0])
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-dark-bg text-white`}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Sports Categories */}
        <SportsCategories />

        {/* Live Dashboard */}
        <LiveDashboard />

        {/* Tournaments */}
        <TournamentsSection />

        {/* Players */}
        <PlayersSection />

        {/* Community */}
        <CommunitySection />

        {/* Achievements */}
        <AchievementsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
