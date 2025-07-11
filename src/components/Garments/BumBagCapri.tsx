import React, { useState } from 'react'

export default function BumBagCapri() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set())

  const images = [
    {
      src: import.meta.env.BASE_URL + 'assets/garments/bum-bag-capri/converted_aBumBagfrt.png',
      alt: "Bum Bag Capri Front View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/bum-bag-capri/converted_abumbagfrt1.png',
      alt: "Bum Bag Capri Front Detail"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/bum-bag-capri/converted_abumbagfrt2.png',
      alt: "Bum Bag Capri Front Alternative"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/bum-bag-capri/converted_bumbagBK3.png',
      alt: "Bum Bag Capri Back View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/bum-bag-capri/converted_bumbagbk33.png',
      alt: "Bum Bag Capri Back Detail (Transparent)"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/bum-bag-capri/converted_Bzumbagbag11.png',
      alt: "Bum Bag Capri Bag Detail"
    }
  ]

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }

  const handleImageError = (index: number) => {
    setErrorImages(prev => new Set([...prev, index]))
  }

  return (
    <main className="garment-page">
      <h1>Bum-Bag Capri</h1>
      <div
        className="garment-mobile-column"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          background: 'transparent',
          justifyItems: 'center',
          alignItems: 'center',
          margin: '2rem 0'
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              background: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              minHeight: '300px'
            }}
          >
            {!loadedImages.has(index) && !errorImages.has(index) && (
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#666'
              }}>
                Loading image {index + 1}... (1-2MB file)
              </div>
            )}
            {errorImages.has(index) && (
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#ffebee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#d32f2f'
              }}>
                Failed to load image {index + 1}
              </div>
            )}
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index)}
              style={{ 
                display: loadedImages.has(index) ? 'block' : 'none',
                width: '100%', 
                maxWidth: '900px', 
                height: 'auto' 
              }}
            />
          </div>
        ))}
      </div>
    </main>
  )
} 