import React from 'react'

interface LinkProps {
  href: string
  label: string
  onClick?: () => void
}

export const Link: React.FC<LinkProps> = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-gray-300 hover:text-neon-blue transition-colors pb-1 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300"></span>
    </a>
  )
}
