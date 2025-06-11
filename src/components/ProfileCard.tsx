'use client'

import Image from 'next/image'

interface SocialLink {
  label: string
  url: string
}

interface ProfileData {
  profileImageUrl: string
  socialLinks: SocialLink[]
}

// Mock data - will be replaced with API data later
const mockProfileData: ProfileData = {
  profileImageUrl: '', // Empty string will trigger fallback
  socialLinks: [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'X (Twitter)', url: 'https://x.com' },
  ]
}

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Profile Image */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {mockProfileData.profileImageUrl ? (
          <Image
            src={mockProfileData.profileImageUrl}
            alt="Profile"
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-2xl text-white font-medium">
              L
            </span>
          </div>
        )}
      </div>
      
      {/* Social Links */}
      <div className="w-full space-y-3">
        <h3 
          className="text-sm font-bold text-center"
          style={{ 
            fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
            color: '#3447AA'
          }}
        >
          Connect
        </h3>
        <ul className="space-y-2">
          {mockProfileData.socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-bold hover:underline transition-colors duration-200"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif',
                  color: '#3447AA'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 