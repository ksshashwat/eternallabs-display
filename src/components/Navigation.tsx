'use client'

import Image from 'next/image'

interface NavigationData {
  thoughtsUrl: string
  newsletterUrl: string
  productPromptsUrl: string
}

// Mock data - will be replaced with API data later
const mockNavigationData: NavigationData = {
  thoughtsUrl: 'https://medium.com/@eternallabs',
  newsletterUrl: 'https://eternallabs.substack.com',
  productPromptsUrl: 'https://notion.so/eternallabs/prompts'
}

export default function Navigation() {
  const navLinks = [
    { label: 'Thoughts', url: mockNavigationData.thoughtsUrl },
    { label: 'Prompt Docs', url: mockNavigationData.productPromptsUrl },
  ]

  return (
    <>
      <style jsx>{`
        .menu-item-hover:hover {
          background-color: #3447AA !important;
          border-radius: 8px;
        }
      `}</style>
      <div 
        className="navbar shadow-lg hover:shadow-xl transition-shadow duration-300" 
        style={{ backgroundColor: '#9177EA' }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden"
              style={{ color: '#F0E7E0' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
              style={{ backgroundColor: '#F0E7E0' }}
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold"
                    style={{ color: '#3447AA' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full flex items-center py-1">
            <Image
              src="/eternal labs banner.svg"
              alt="Eternal Labs Logo"
              width={0}
              height={0}
              className="object-contain w-auto h-12"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold transition-all duration-200 menu-item-hover px-4 py-2"
                  style={{ color: '#F0E7E0' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href={mockNavigationData.newsletterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hover:shadow-md transition-all duration-200"
            style={{ backgroundColor: '#3447AA', color: 'white', borderColor: '#3447AA' }}
          >
            Subscribe
          </a>
        </div>
      </div>
    </>
  )
} 