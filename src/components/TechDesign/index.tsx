import React from 'react'
import { Link } from 'react-router-dom'

export default function TechDesign() {
  const categories = [
    {
      title: "Browzwear VStitcher",
      path: "/tech-design/browzwear",
      imageUrl: import.meta.env.BASE_URL + 'assets/browzwear/Thesis.svg'
    },
    {
      title: "Gerber Accumark",
      path: "/tech-design/gerber",
      imageUrl: import.meta.env.BASE_URL + 'assets/gerber-accumark/BOMBER_GERBER.png'
    },
    {
      title: "CADs",
      path: "/tech-design/cads",
      imageUrl: import.meta.env.BASE_URL + 'assets/cads/Peacekeeper-ButtonupCAD.png'
    },
    {
      title: "Tech Packs",
      path: "/tech-design/tech-packs",
      imageUrl: import.meta.env.BASE_URL + 'assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_02.jpg'
    }
  ]

  return (
    <main>
      <h1 className="page-title">Technical Design</h1>
      <section className="grid-container main-projects centered-section">
        {categories.map((category) => (
          <Link to={category.path} key={category.path} className="category-card">
            <div className="image-container">
              <img src={category.imageUrl} alt={category.title} />
            </div>
            <h2>{category.title}</h2>
          </Link>
        ))}
      </section>
    </main>
  )
} 