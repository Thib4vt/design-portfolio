import React from 'react'

export default function KnitCapriSample() {
  const images = [
    {
      src: "/assets/garments/knit-capri/IMG_2337.jpg",
      alt: "Inverted Box Pleat Capri View 1"
    },
    {
      src: "/assets/garments/knit-capri/IMG_2323.jpg",
      alt: "Inverted Box Pleat Capri View 2"
    },
    {
      src: "/assets/garments/knit-capri/IMG_2321.jpg",
      alt: "Inverted Box Pleat Capri View 3"
    }
  ]

  return (
    <main className="garment-page">
      <h1>Inverted Box Pleat Capri</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '2rem 0'
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              maxWidth: '400px',
              width: '100%'
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '4px'
              }}
            />
          </div>
        ))}
      </div>
    </main>
  )
} 