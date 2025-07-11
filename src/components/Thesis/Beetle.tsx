import React from 'react'

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
  return (
    <main>
      <h1>Beetle Bag Bomber</h1>
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