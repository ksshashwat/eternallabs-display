'use client'

interface YouTubeVideo {
  videoUrl: string
  notesLink: string
}

// Mock data - will be replaced with API data later
const mockYouTubeVideos: YouTubeVideo[] = [
  {
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    notesLink: 'https://notion.so/eternallabs/video1-notes'
  },
  {
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    notesLink: 'https://notion.so/eternallabs/video2-notes'
  },
  {
    videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    notesLink: 'https://notion.so/eternallabs/video3-notes'
  },
]

interface YouTubeCardProps {
  video: YouTubeVideo
}

function YouTubeCard({ video }: YouTubeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Video Embed */}
      <div className="aspect-video">
        <iframe
          src={video.videoUrl}
          title="YouTube video"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      
      {/* Notes Link */}
      <div className="p-4">
        <a
          href={video.notesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <span>📓</span>
          <span>Read my notes</span>
        </a>
      </div>
    </div>
  )
}

export default function YouTubeSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockYouTubeVideos.map((video, index) => (
        <YouTubeCard key={index} video={video} />
      ))}
    </div>
  )
} 