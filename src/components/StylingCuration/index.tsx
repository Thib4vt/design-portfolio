import React from 'react'
import { Link } from 'react-router-dom'

export default function StylingCuration() {
  const sections = [
    {
      title: "Styling",
      path: "/styling-curation/styling",
      imageUrl: import.meta.env.BASE_URL + 'assets/styling-curation/styling/IMG_4705 2.JPG'
    },
    {
      title: "Curation",
      path: "/styling-curation/curation",
      imageUrl: import.meta.env.BASE_URL + 'assets/curation/SS2002 Naoki Takizawa for Issey Miyake/IMG_2430.JPG'
    }
  ]

  return (
    <main>
      <h1 className="page-title">Styling/Curation</h1>
      <section className="grid-container main-projects centered-section">
        {sections.map((section) => (
          <Link to={section.path} key={section.path} className="category-card">
            <div className="image-container">
              <img src={section.imageUrl} alt={section.title} />
            </div>
            <h2>{section.title}</h2>
          </Link>
        ))}
      </section>
    </main>
  )
} 