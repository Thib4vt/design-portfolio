import React from 'react'

const images = [
  {
    src: '/assets/garments/bum-bag-capri/converted_aBumBagfrt.png',
    alt: 'Bum Bag Capri Front View'
  },
  {
    src: '/assets/garments/bum-bag-capri/converted_abumbagfrt1.png',
    alt: 'Bum Bag Capri Front Detail'
  },
  {
    src: '/assets/garments/bum-bag-capri/converted_abumbagfrt2.png',
    alt: 'Bum Bag Capri Front Alternative'
  },
  {
    src: '/assets/garments/bum-bag-capri/converted_bumbagBK3.png',
    alt: 'Bum Bag Capri Back View'
  },
  {
    src: '/assets/garments/bum-bag-capri/converted_bumbagbk33.png',
    alt: 'Bum Bag Capri Back Detail (Transparent)'
  },
  {
    src: '/assets/garments/bum-bag-capri/converted_Bzumbagbag11.png',
    alt: 'Bum Bag Capri Bag Detail'
  }
]

export default function BumBag() {
  return (
    <main>
      <h1>Bum-Bag Capri</h1>
      <section>
        <div className="content-box">
          <div className="garment-grid">
            {images.map((image, index) => (
              <div key={index} className="garment-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 