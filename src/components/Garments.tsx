import React from 'react'
import { Link } from 'react-router-dom'

export default function Garments() {
  const allGarments = [
    {
      title: "Beetle Bag Bomber",
      date: "Spring 2025",
      path: "/garments/beetle-bomber",
      imageUrl: "/assets/garments/beetle-bomber/1jacketopenview.png"
    },
    {
      title: "Bum-Bag Capri",
      date: "Spring 2025",
      path: "/garments/bum-bag-capri",
      imageUrl: "/assets/garments/bum-bag-capri/converted_bumbagBK3.png"
    },
    {
      title: "Inverted Box Pleat Capri",
      date: "Fall 2024",
      path: "/garments/knit-capri-sample",
      imageUrl: "/assets/garments/knit-capri/IMG_2337.jpg",
      comingSoon: false
    },
    {
      title: "Zip Up Hoodie",
      date: "Fall 2024",
      path: "/garments/zip-up-hoodie",
      imageUrl: "/assets/garments/zip-hoodie/Newknithoodie2.png"
    },
    {
      title: "Dog Ear Button Up",
      date: "Spring 2024",
      path: "/garments/dog-ear-button-up",
      imageUrl: "/assets/garments/dog-ear-button/IMG_3562.png"
    },
    {
      title: "Inverted Box Pleat Jeans",
      date: "Spring 2024",
      path: "/garments/inverted-box-pleat",
      imageUrl: "/assets/garments/inverted-box-pleat/Boxpleat%20Jeans%20Fit1.JPG"
    }
  ].sort((a, b) => {
    // Convert seasons to numbers for comparison (Spring = 0, Fall = 1)
    const seasonToNum = (season: string) => season.includes('Spring') ? 0 : 1;
    // Extract year and season from date string
    const [aSeason, aYear] = a.date.split(' ');
    const [bSeason, bYear] = b.date.split(' ');
    
    // Compare years first
    if (aYear !== bYear) {
      return parseInt(bYear) - parseInt(aYear); // Most recent year first
    }
    
    // If same year, compare seasons
    return seasonToNum(bSeason) - seasonToNum(aSeason); // Spring before Fall within same year
  });

  const renderGarmentCard = (garment: any) => (
    <Link 
      to={garment.comingSoon ? '#' : garment.path} 
      key={garment.path} 
      className={`category-card ${garment.comingSoon ? 'coming-soon' : ''}`}
      onClick={e => garment.comingSoon && e.preventDefault()}
    >
      <div className="image-container">
        <img src={garment.imageUrl} alt={garment.title} />
        {garment.comingSoon && (
          <div className="coming-soon-overlay">Coming Soon</div>
        )}
      </div>
      <div className="card-title">
        <h2>{garment.title}</h2>
        <span className="date">{garment.date}</span>
      </div>
    </Link>
  )

  return (
    <main>
      <h1 className="page-title">Garments</h1>
      <div className="disclaimer">
        <p>All garments are designed, patterned, and sewn by me.</p>
      </div>
      <section className="grid-container garments-grid">
        {allGarments.map(renderGarmentCard)}
      </section>
    </main>
  )
} 