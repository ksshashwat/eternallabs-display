import ProfileCard from '@/components/ProfileCard'
import Navigation from '@/components/Navigation'
import ProductGrid from '@/components/ProductGrid'
import YouTubeSection from '@/components/YouTubeSection'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0E7E0' }}>
      {/* Navigation */}
      <Navigation />
      
      <div className="flex">
        {/* Left Sidebar */}
        <aside 
          className="w-64 min-h-screen shadow-sm p-6 sticky top-0"
          style={{ backgroundColor: '#F0E7E0' }}
        >
          <ProfileCard />
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-8 max-w-6xl">
          {/* Product Grid Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Products</h2>
            <ProductGrid />
          </section>
          
          {/* YouTube Learning Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Currently Learning</h2>
            <YouTubeSection />
          </section>
        </main>
      </div>
    </div>
  )
}
