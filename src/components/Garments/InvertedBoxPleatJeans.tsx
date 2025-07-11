import React from 'react'

export default function InvertedBoxPleatJeans() {
  const images = [
    {
      src: import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Fit1.JPG',
      alt: "Box Pleat Jeans Fit 1"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Fit2.jpg',
      alt: "Box Pleat Jeans Fit 2"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Fit3.jpg',
      alt: "Box Pleat Jeans Fit 3"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Sample%202.JPG',
      alt: "Box Pleat Jeans Sample 2"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat_Sample_2.JPG',
      alt: "Box Pleat Sample 2"
    }
  ]

  return (
    <main className="garment-page">
      <h1>Inverted Box Pleat Jeans</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '2rem 0'
      }}>
        <div style={{ flex: '0 0 auto', maxWidth: '400px', width: '100%' }}>
          <img
            src={import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/boxpleatjeansfrt.png'}
            alt="Box Pleat Jeans Front"
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px', transform: 'scale(1.1)' }}
          />
        </div>
        <div style={{ flex: '0 0 auto', maxWidth: '400px', width: '100%' }}>
          <img
            src={import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/boxpleatjeansback.png'}
            alt="Box Pleat Jeans Back"
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px', transform: 'scale(1.1)' }}
          />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '2rem 0'
      }}>
        {/* Only render the three remaining images */}
        <div className="garment-item" style={{ flex: '0 0 auto', maxWidth: '400px', width: '100%' }}>
          <img src={import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat Jeans Fit1.JPG'} alt="Box Pleat Jeans Fit 1" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
        </div>
        <div className="garment-item" style={{ flex: '0 0 auto', maxWidth: '400px', width: '100%' }}>
          <img src={import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat Jeans Fit2.jpg'} alt="Box Pleat Jeans Fit 2" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
        </div>
        <div className="garment-item" style={{ flex: '0 0 auto', maxWidth: '400px', width: '100%' }}>
          <img src={import.meta.env.BASE_URL + 'assets/garments/inverted-box-pleat/Boxpleat Jeans Fit3.jpg'} alt="Box Pleat Jeans Fit 3" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
        </div>
      </div>
    </main>
  )
} 