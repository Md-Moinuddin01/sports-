import React from 'react'
import { Menu, X, Bell, Search, Moon, Sun } from 'lucide-react'
import { useAppStore } from '@/store'
import { Link } from '@/components/ui/Link'

export const Navbar: React.FC = () => {
  const { isAuthenticated, currentUser, darkMode, toggleDarkMode, toggleSidebar, sidebarOpen } = useAppStore()
  const [searchOpen, setSearchOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-bg/80 backdrop-blur-md border-b border-dark-input z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <div className="text-2xl font-bold text-gradient">⚡</div>
            <span className="text-xl font-bold hidden sm:inline">SportsPulse</span>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" label="Tournaments" />
            <Link href="#" label="Matches" />
            <Link href="#" label="Community" />
            <Link href="#" label="Teams" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className={`hidden sm:flex items-center transition-all ${searchOpen ? 'w-64' : 'w-10'}`}>
              {searchOpen ? (
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full input text-sm"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 hover:bg-dark-card rounded-lg transition text-neon-blue"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-dark-card rounded-lg transition">
              <Bell size={20} className="text-neon-blue" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-neon-red rounded-full animate-pulse"></span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-dark-card rounded-lg transition text-neon-blue"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* User Profile or Login */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3 pl-3 border-l border-dark-input">
                <img
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="w-8 h-8 rounded-full border border-neon-blue cursor-pointer hover:border-neon-red transition"
                />
                <span className="hidden sm:inline text-sm font-medium">{currentUser?.name?.split(' ')[0]}</span>
              </div>
            ) : (
              <button className="btn btn-primary text-sm">Join Now</button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 hover:bg-dark-card rounded-lg transition"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
