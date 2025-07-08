import React from 'react'
import { Link } from 'react-router-dom'

export default function Styling() {
  const categories = [
    {
      title: "Styling",
      path: "/styling/style",
      imageUrl: "/assets/styling-cover.jpg"
    },
    {
      title: "Curation",
      path: "/styling/curation",
      imageUrl: "/assets/curation-cover.jpg"
    }
  ]

  return (
    <main>
      <section className="grid-container">
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