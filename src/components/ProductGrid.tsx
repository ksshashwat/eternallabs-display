'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Product {
  logoUrl: string
  description: string
  productUrl?: string
}

// Mock data - will be replaced with API data later
const mockProducts: Product[] = [
  {
    logoUrl: '',
    description: 'AI-powered productivity tool for creators',
    productUrl: 'https://eternallabs.com/product1'
  },
  {
    logoUrl: '',
    description: 'Collaborative workspace for remote teams',
    productUrl: 'https://eternallabs.com/product2'
  },
  {
    logoUrl: '',
    description: 'Analytics dashboard for content creators',
    // No productUrl - this will be disabled
  },
  {
    logoUrl: '',
    description: 'Social media automation platform',
    productUrl: 'https://eternallabs.com/product4'
  },
]

interface ProductBadgeProps {
  product: Product
}

function ProductBadge({ product }: ProductBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    if (product.productUrl) {
      window.open(product.productUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      className={`relative group ${
        product.productUrl 
          ? 'cursor-pointer transform hover:scale-105 transition-transform duration-200' 
          : 'cursor-default opacity-75'
      }`}
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Product Badge */}
      <div className={`
        w-24 h-24 bg-white rounded-lg shadow-sm border border-gray-200 
        flex items-center justify-center p-4
        ${product.productUrl ? 'hover:shadow-md' : ''}
        transition-shadow duration-200
      `}>
        {product.logoUrl ? (
          <Image
            src={product.logoUrl}
            alt={`${product.description} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center">
            <span className="text-xs text-white font-bold">
              {product.description.split(' ')[0].substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
          <div className="bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap max-w-48">
            {product.description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {mockProducts.map((product, index) => (
        <ProductBadge key={index} product={product} />
      ))}
    </div>
  )
} 