import React from 'react'

export default function InvertedBoxPleatJeans() {
  const images = [
    {
      src: "/assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Fit1.JPG",
      alt: "Box Pleat Jeans Fit 1"
    },
    {
      src: "/assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Fit2.jpg",
      alt: "Box Pleat Jeans Fit 2"
    },
    {
      src: "/assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Fit3.jpg",
      alt: "Box Pleat Jeans Fit 3"
    },
    {
      src: "/assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Sample%202.JPG",
      alt: "Box Pleat Jeans Sample 2"
    },
    {
      src: "/assets/garments/inverted-box-pleat/Boxpleat_Sample_2.JPG",
      alt: "Box Pleat Sample 2"
    }
  ]

  return (
    <main className="garment-page">
      <h1>Inverted Box Pleat Jeans</h1>
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