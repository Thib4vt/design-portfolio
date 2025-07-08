import React from 'react'

export default function BumBagCapri() {
  const images = [
    {
      src: "/assets/garments/bum-bag-capri/converted_aBumBagfrt.png",
      alt: "Bum Bag Capri Front View"
    },
    {
      src: "/assets/garments/bum-bag-capri/converted_abumbagfrt1.png",
      alt: "Bum Bag Capri Front Detail"
    },
    {
      src: "/assets/garments/bum-bag-capri/converted_abumbagfrt2.png",
      alt: "Bum Bag Capri Front Alternative"
    },
    {
      src: "/assets/garments/bum-bag-capri/converted_bumbagBK3.png",
      alt: "Bum Bag Capri Back View"
    },
    {
      src: "/assets/garments/bum-bag-capri/converted_bumbagbk33.png",
      alt: "Bum Bag Capri Back Detail (Transparent)"
    },
    {
      src: "/assets/garments/bum-bag-capri/converted_Bzumbagbag11.png",
      alt: "Bum Bag Capri Bag Detail"
    }
  ]

  return (
    <main className="garment-page">
      <h1>Bum-Bag Capri</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '1.5rem',
        background: 'transparent',
        justifyItems: 'center',
        alignItems: 'center',
        margin: '2rem 0'
      }}>
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