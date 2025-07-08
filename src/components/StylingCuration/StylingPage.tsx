import React from 'react'

export default function StylingPage() {
  const stylingImages = [
    {
      src: "/assets/styling-curation/styling/IMG_4705 2.JPG",
      alt: "Styling Image 1"
    },
    {
      src: "/assets/styling-curation/styling/IMG_4703 2.JPG",
      alt: "Styling Image 2"
    },
    {
      src: "/assets/styling-curation/styling/IMG_2334 2.jpg",
      alt: "Styling Image 3"
    },
    {
      src: "/assets/styling-curation/styling/IMG_2326 2.JPG",
      alt: "Styling Image 4"
    },
    {
      src: "/assets/styling-curation/styling/FLY HIGH 3.JPG",
      alt: "Styling Image 5"
    }
  ]

  return (
    <main>
      <h1 className="page-title">Styling</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {stylingImages.map((image, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
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