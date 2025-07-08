import React from 'react'
import { Link } from 'react-router-dom'

export default function TechPacks() {
  const techPacks = [
    {
      title: "Beetle Bag Bomber TP",
      path: "/tech-design/tech-packs/beetle-bomber",
      imageUrl: "/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_02.jpg"
    },
    {
      title: "Bum-Bag Capri TP",
      path: "/tech-design/tech-packs/bum-bag-capri",
      imageUrl: "/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_02.jpg"
    }
  ]

  return (
    <main className="tech-pack-page">
      <h1>Tech Packs</h1>
      <section className="grid-container main-projects">
        {techPacks.map((techPack) => (
          <Link to={techPack.path} key={techPack.path} className="category-card">
            <div className="image-container">
              <img src={techPack.imageUrl} alt={techPack.title} />
            </div>
            <h2>{techPack.title}</h2>
          </Link>
        ))}
      </section>
    </main>
  )
} 