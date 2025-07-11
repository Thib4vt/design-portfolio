import React from 'react'

export default function Browzwear() {
  const projects = [
    {
      title: "Thesis",
      items: [
        {
          src: import.meta.env.BASE_URL + 'assets/browzwear/Thesis.svg',
          alt: "Thesis",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Club Set",
      items: [
        {
          src: import.meta.env.BASE_URL + 'assets/browzwear/Club Set.svg',
          alt: "Club Set",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Knit Hoodie",
      items: [
        {
          src: import.meta.env.BASE_URL + 'assets/browzwear/Knit Hoodie.svg',
          alt: "Knit Hoodie",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Gym Set",
      items: [
        {
          src: import.meta.env.BASE_URL + 'assets/browzwear/Gym Set.png',
          alt: "Gym Set",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Faded Jeans",
      items: [
        {
          src: import.meta.env.BASE_URL + 'assets/browzwear/Faded Jeans.svg',
          alt: "Faded Jeans",
          className: "project-cad"
        }
      ]
    }
  ]

  return (
    <main className="cads-page">
      <h1>Browzwear VStitcher</h1>
      
      <div className="disclaimer">
        <p>To protect creative property, I do not display all piece/model components. Please feel free to inquire directly for more information.</p>
      </div>

      <div className="projects-container">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="project-section single-project">
            <h2>{project.title}</h2>
            <div className="project-grid single-view">
              {project.items.map((item, itemIndex) => (
                <div key={itemIndex} className={`cad-item ${item.className}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
} 