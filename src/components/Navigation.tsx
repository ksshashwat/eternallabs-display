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
    { label: 'Newsletter', url: mockNavigationData.newsletterUrl },
    { label: 'Product Prompts', url: mockNavigationData.productPromptsUrl },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-end">
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#3447AA] hover:text-blue-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 