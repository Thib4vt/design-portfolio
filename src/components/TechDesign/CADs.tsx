import React from 'react'

export default function CADs() {
  const projects = [
    {
      title: "Beetle Bomber",
      items: [
        {
          src: "/assets/cads/Beetle-Bomber.png",
          alt: "Beetle Bomber - Primary View",
          className: "project-cad"
        },
        {
          src: "/assets/cads/Beetle-Bomber2.png",
          alt: "Beetle Bomber - Secondary View",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Bum Bag Capri",
      items: [
        {
          src: "/assets/cads/BumBag-Capri.png",
          alt: "Bum Bag Capri - Primary View",
          className: "project-cad"
        },
        {
          src: "/assets/cads/BumBag-Capri2.png",
          alt: "Bum Bag Capri - Secondary View",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Box Pleat Jeans",
      items: [
        {
          src: "/assets/cads/Box Pleat Jeans.png",
          alt: "Box Pleat Jeans Technical Drawing",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Asymmetrical Fang Jacket",
      items: [
        {
          src: "/assets/cads/Asymmetrical-Fang-Jacket.png",
          alt: "Asymmetrical Fang Jacket Technical Drawing",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Henley Hoodie",
      items: [
        {
          src: "/assets/cads/Henley-Hoodie.png",
          alt: "Henley Hoodie Technical Drawing",
          className: "project-cad"
        }
      ]
    },
    {
      title: "Peacekeeper Button Up",
      items: [
        {
          src: "/assets/cads/Peacekeeper-ButtonupCAD.png",
          alt: "Peacekeeper Button Up Technical Drawing",
          className: "project-cad"
        }
      ]
    }
  ]

  return (
    <main className="cads-page">
      <h1>CADs</h1>
      
      <div className="disclaimer">
        <p>To protect creative property, I do not display all CAD files. Please feel free to inquire directly for more information.</p>
      </div>

      <div className="projects-container">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className={`project-section ${project.items.length > 1 ? 'dual-project' : 'single-project'}`}>
            <h2>{project.title}</h2>
            <div className={`project-grid ${project.items.length > 1 ? 'dual-view' : 'single-view'}`}>
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