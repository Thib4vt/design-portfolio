import React from 'react'

export default function ZipHoodie() {
  const images = [
    {
      src: import.meta.env.BASE_URL + 'assets/garments/zip-hoodie/Newknithoodie2.png',
      alt: "Zip Hoodie Front View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/zip-hoodie/Newknithoodie3.png',
      alt: "Zip Hoodie Back View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/zip-hoodie/converted_Photoroom_20250611_142752.png',
      alt: "Zip Hoodie Side View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/zip-hoodie/converted_Photoroom_20250611_142852.png',
      alt: "Zip Hoodie Detail View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/zip-hoodie/ziphoodie1.jpg',
      alt: "Zip Hoodie Sample View 1"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/zip-hoodie/ziphoodieback.jpg',
      alt: "Zip Hoodie Sample View 2"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/zip-hoodie/ziphoodieside.jpg',
      alt: "Zip Hoodie Sample View 3"
    }
  ]

  return (
    <main className="garment-page">
      <h1>Zip-Up Hoodie</h1>
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
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            style={{
              background: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              style={{ display: 'block', width: '100%', maxWidth: '900px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
      <div
        className="garment-mobile-column"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          background: 'transparent',
          justifyItems: 'center',
          alignItems: 'center',
          marginTop: '-1.5rem'
        }}
      >
        {images.slice(4).map((image, index) => (
          <div
            key={index + 4}
            style={{
              background: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              style={{ display: 'block', width: '100%', maxWidth: '900px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </main>
  )
} 