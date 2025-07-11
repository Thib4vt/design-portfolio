import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CuratedPiecesList } from './CuratedPieces'

export default function CurationPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Log all image URLs when component mounts
    CuratedPiecesList.forEach(piece => {
      console.log('Attempting to load image:', piece.imageUrl)
    })
  }, [])

  const handleImageError = (imageUrl: string) => {
    console.error(`Failed to load image: ${imageUrl}`)
    setImageErrors(prev => ({ ...prev, [imageUrl]: true }))
  }

  const handleImageLoad = (imageUrl: string) => {
    console.log(`Successfully loaded image: ${imageUrl}`)
  }

  return (
    <main>
      <h1 className="page-title">Curation</h1>
      <div className="disclaimer">
        <p>For up-to-date curation, interpretive and analytical write-ups, research projects, and select items for sale, please visit my archive <a href="https://www.instagram.com/xforrecon/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', textDecoration: 'underline', fontWeight: 'bold' }}>@xforrecon</a> – website coming soon.</p>
      </div>
      <section style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem'
      }}>
        {CuratedPiecesList.map((piece) => {
          // Try to load the image directly from the public folder
          const imagePath = piece.imageUrl.startsWith('/') 
            ? import.meta.env.BASE_URL + piece.imageUrl.substring(1)
            : import.meta.env.BASE_URL + piece.imageUrl
          console.log('Loading image from path:', imagePath)
          
          return (
            <Link 
              to={piece.path} 
              key={piece.path} 
              style={{ 
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                background: 'transparent'
              }}
            >
              <div style={{ 
                width: '100%',
                aspectRatio: '1',
                overflow: 'hidden',
                marginBottom: 0,
                background: imageErrors[piece.imageUrl] ? '#f0f0f0' : 'transparent'
              }}>
                <img 
                  src={imagePath}
                  alt={piece.title} 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                  onError={() => handleImageError(piece.imageUrl)}
                  onLoad={() => handleImageLoad(piece.imageUrl)}
                />
              </div>
              <div style={{
                background: 'black',
                padding: '0.75rem',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <h2 style={{ 
                  margin: 0,
                  color: 'white',
                  fontSize: '1.2rem'
                }}>
                  {piece.title}
                </h2>
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
} 