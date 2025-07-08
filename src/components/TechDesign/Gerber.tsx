import React from 'react'

export default function Gerber() {
  const images = [
    {
      src: "/assets/gerber-accumark/tGERBER.png",
      alt: "Gerber Accumark Work",
      className: "pattern"
    },
    {
      src: "/assets/gerber-accumark/TGERBER2.JPG",
      alt: "Gerber Accumark Work 2",
      className: "pattern"
    },
    {
      src: "/assets/gerber-accumark/BOMBER_GERBER.png",
      alt: "Bomber Gerber Pattern",
      className: "pattern"
    },
    {
      src: "/assets/gerber-accumark/thibaut rappaport - pant corrections.png",
      alt: "Pant Pattern Corrections",
      className: "pattern"
    },
    {
      src: "/assets/gerber-accumark/Week 6 - thibaut rappaport.png",
      alt: "Week 6 Pattern Work",
      className: "pattern"
    },
    {
      src: "/assets/gerber-accumark/Week 10 - Thibaut Rappaport.png",
      alt: "Week 10 Pattern Work",
      className: "pattern"
    },
    {
      src: "/assets/gerber-accumark/zFABRIC B MARKER.jpg",
      alt: "Fabric B Marker",
      className: "marker"
    },
    {
      src: "/assets/gerber-accumark/zHOODIE FABRIC-A MARKER.jpg",
      alt: "Hoodie Fabric A Marker",
      className: "marker"
    },
    {
      src: "/assets/gerber-accumark/zTER_2404A_Legging_Marker.png",
      alt: "Legging Marker",
      className: "marker"
    },
    {
      src: "/assets/gerber-accumark/zTER_BODYSUIT MARKER (1).jpg",
      alt: "Bodysuit Marker",
      className: "marker"
    }
  ]

  return (
    <main className="gerber-page">
      <h1>Gerber Accumark</h1>
      
      <div className="disclaimer">
        <p>To protect creative property, I do not display all piece/model components. Please feel free to inquire directly for more information.</p>
      </div>

      <div className="moodboard-container">
        {images.map((image, index) => (
          <div key={index} className={`moodboard-item ${image.className}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </main>
  )
} 