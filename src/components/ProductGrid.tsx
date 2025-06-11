'use client'

interface Product {
  title: string
  description: string
  productUrl?: string
}

// Mock data - will be replaced with API data later
const mockProducts: Product[] = [
  {
    title: 'AI Creator Tool',
    description: 'AI-powered productivity tool for creators',
    productUrl: 'https://eternallabs.com/product1'
  },
  {
    title: 'Team Workspace',
    description: 'Collaborative workspace for remote teams',
    productUrl: 'https://eternallabs.com/product2'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Analytics dashboard for content creators',
    productUrl: ''
  },
  {
    title: 'Social Automation',
    description: 'Social media automation platform',
    productUrl: 'https://eternallabs.com/product4'
  },
]

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const handleClick = () => {
    if (product.productUrl && product.productUrl.length > 0) {
      window.open(product.productUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      className={`card shadow-sm w-full max-w-sm cursor-pointer transform hover:scale-105 transition-transform duration-200`}
      style={{ 
        backgroundColor: '#2D94D8',
        fontFamily: 'SF Pro Display, -apple-system, system-ui, sans-serif'
      }}
      onClick={handleClick}
    >
      <figure className="h-48 bg-gray-200 flex items-center justify-center">
        <div className="w-20 h-20 bg-gray-400 rounded-lg flex items-center justify-center">
          <span className="text-gray-600 text-sm font-bold">IMAGE</span>
        </div>
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title font-bold text-white">
          {product.title}
          <div 
            className="badge font-bold"
            style={{ backgroundColor: '#5F52B8', color: 'white', borderColor: '#5F52B8' }}
          >
            Audience
          </div>
        </h2>
        <p className="text-white/90">{product.description}</p>
        <div className="card-actions justify-end">
          <div 
            className="badge badge-outline font-bold"
            style={{ color: '#F0E7E0', borderColor: '#F0E7E0' }}
          >
            cursor
          </div>
          <div 
            className="badge badge-outline font-bold"
            style={{ color: '#F0E7E0', borderColor: '#F0E7E0' }}
          >
            chatGPT
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
} 