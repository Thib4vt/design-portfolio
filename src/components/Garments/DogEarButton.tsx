import React from 'react'

export default function DogEarButton() {
  const images = [
    {
      src: import.meta.env.BASE_URL + 'assets/garments/dog-ear-button/IMG_3562.png',
      alt: "Dog Ear Button Up Detail View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/dog-ear-button/IMG_3566.png',
      alt: "Dog Ear Button Up Close Up"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/dog-ear-button/IMG_3568.png',
      alt: "Dog Ear Button Up Construction Detail"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/dog-ear-button/Peacekeeper%20Button%20Up%20Fit1.jpg',
      alt: "Dog Ear Button Up Full Front View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/dog-ear-button/Peacekeeper%20Button%20Up%20Fit2.jpg',
      alt: "Dog Ear Button Up Side View"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/dog-ear-button/Peacekeeper%20Button%20Up%20Fit3.jpg',
      alt: "Dog Ear Button Up Back View"
    }
  ]

  return (
    <main className="garment-page" data-garment="dog-ear-button">
      <h1>Dog Ear Quarter Button-Up</h1>
      <div
        className="garment-mobile-column"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
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