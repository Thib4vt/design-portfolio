/// <reference types="vite/client" />
import React, { useState } from 'react'

const images = [
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/1jacketopenview.png',
    alt: 'Jacket Open View'
  },
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/2bugjacketbk.png',
    alt: 'Bug Jacket Back'
  },
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/3bugjacketlining.png',
    alt: 'Bug Jacket Lining'
  },
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/4bugjacketfrt.png',
    alt: 'Bug Jacket Front'
  },
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/5closedbagview.png',
    alt: 'Closed Bag View'
  },
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/6bagbacksideopen.png',
    alt: 'Bag Back Side Open'
  },
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/7bagopening.png',
    alt: 'Bag Opening'
  },
  {
    src: import.meta.env.BASE_URL + 'assets/garments/beetle-bomber/8upclosebag.png',
    alt: 'Up Close Bag'
  }
]

export default function BeetleBomber() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }

  return (
    <main className="garment-page">
      <h1>Beetle Bag Bomber</h1>
      <div className="garment-grid">
        {images.map((image, index) => (
          <div key={index} className="garment-item">
            {!loadedImages.has(index) && (
              <div className="loading-placeholder" style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#666'
              }}>
                Loading image {index + 1}... (7-8MB file)
              </div>
            )}
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
              style={{ 
                display: loadedImages.has(index) ? 'block' : 'none',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
        ))}
      </div>
    </main>
  )
} 