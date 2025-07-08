import React from 'react'

const images = [
  {
    src: '/assets/garments/beetle-bomber/1jacketopenview.png',
    alt: 'Jacket Open View'
  },
  {
    src: '/assets/garments/beetle-bomber/2bugjacketbk.png',
    alt: 'Bug Jacket Back'
  },
  {
    src: '/assets/garments/beetle-bomber/3bugjacketlining.png',
    alt: 'Bug Jacket Lining'
  },
  {
    src: '/assets/garments/beetle-bomber/4bugjacketfrt.png',
    alt: 'Bug Jacket Front'
  },
  {
    src: '/assets/garments/beetle-bomber/5closedbagview.png',
    alt: 'Closed Bag View'
  },
  {
    src: '/assets/garments/beetle-bomber/6bagbacksideopen.png',
    alt: 'Bag Back Side Open'
  },
  {
    src: '/assets/garments/beetle-bomber/7bagopening.png',
    alt: 'Bag Opening'
  },
  {
    src: '/assets/garments/beetle-bomber/8upclosebag.png',
    alt: 'Up Close Bag'
  }
]

export default function BeetleBomber() {
  return (
    <main className="garment-page">
      <h1>Beetle Bag Bomber</h1>
      <div className="garment-grid">
        {images.map((image, index) => (
          <div key={index} className="garment-item">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </main>
  )
} 