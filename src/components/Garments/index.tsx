import React from 'react'
import { Link } from 'react-router-dom'

export default function Garments() {
  const categories = [
    {
      title: "Dog Ear Button Up",
      path: "/garments/dog-ear-button-up",
      imageUrl: import.meta.env.BASE_URL + 'assets/garments/dog-ear-button-up/dog-ear-button-up-1.png',
      date: "Spring 2024"
    },
    {
      title: "Bum-Bag Capri",
      path: "/garments/bum-bag-capri",
      imageUrl: import.meta.env.BASE_URL + 'assets/garments/bum-bag-capri/bum-bag-capri-1.jpg',
      date: "Spring 2024"
    },
    {
      title: "Peacekeeper Button Up",
      path: "/garments/peacekeeper-button-up",
      imageUrl: import.meta.env.BASE_URL + 'assets/garments/peacekeeper-button-up/peacekeeper-button-up-1.jpg',
      date: "Fall 2023",
      comingSoon: true
    }
  ]

  return (
    <main>
      <section className="grid-container">
        {categories.map((category) => (
          <Link 
            to={category.path} 
            key={category.path} 
            className={`category-card ${category.comingSoon ? 'coming-soon' : ''}`}
          >
            <div className="image-container">
              <img src={category.imageUrl} alt={category.title} />
              {category.comingSoon && <div className="coming-soon-overlay">Coming Soon</div>}
            </div>
            <div className="card-title">
              <h2>{category.title}</h2>
              <span className="date">{category.date}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
} 