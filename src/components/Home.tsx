import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const mainProjects = [
    {
      title: "Beetle Bag Bomber",
      path: "/thesis/beetle",
      imageUrl: "/assets/thesis/beetle/1jacketopenview.png"
    },
    {
      title: "Bum-Bag Capri",
      path: "/thesis/bum-bag",
      imageUrl: "/assets/thesis/bum-bag/converted_bumbagBK3.png"
    }
  ]

  const secondaryProjects = [
    {
      title: "Stop-Motion Transformation",
      path: "/thesis/stop-motion",
      imageUrl: "/assets/thesis/stop-motion/stop-motion-cover.JPG"
    },
    {
      title: "Film",
      path: "/thesis/film",
      imageUrl: "/assets/film-cover.jpg",
      comingSoon: true
    },
    {
      title: "Development",
      path: "/thesis/development",
      imageUrl: "/assets/thesis/development/jacketdev4.jpg"
    }
  ]

  const renderProjectCard = (project: any) => (
    <Link 
      to={project.comingSoon ? '#' : project.path} 
      key={project.path} 
      className={`category-card ${project.comingSoon ? 'coming-soon' : ''}`}
      onClick={e => project.comingSoon && e.preventDefault()}
    >
      <div className={`image-container${project.title === 'Development' || project.title === 'Stop-Motion Transformation' ? ' no-top-space' : ''}`}>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          style={project.title === 'Development' || project.title === 'Stop-Motion Transformation' ? { marginTop: 0, paddingTop: 0 } : {}} 
        />
        {project.comingSoon && (
          <div className="coming-soon-overlay">Coming Soon</div>
        )}
        <div className="card-title">
          <h2>{project.title}</h2>
        </div>
      </div>
    </Link>
  )

  return (
    <main>
      <h1 className="page-title">Thesis</h1>
      <div className="thesis-intro">
        <p>
          My thesis project is a pseudo-biomimicry of metamorphosis in beetles, built in response to the unpredictable transitions of urban commuting and lifestyle. The outfit emulates these insects' ability to functionally reoptimize by means of partial and complete physical reconstruction of the body.
        </p>
        <p>
          The lived experiences in NYC and cities alike prompt a similar adaptive mutation, shaped by the need for streamlined mobility within spatial and environmental constraints. Whether it be sudden downpour, sardines in public transit, or biking everywhere, commuters can now be prepared to adapt; <span>molting, reconfiguring, compartmentalizing</span>.
        </p>
      </div>
      <section className="grid-container main-projects">
        {mainProjects.map(renderProjectCard)}
      </section>
      <section className="grid-container secondary-projects">
        {secondaryProjects.map(renderProjectCard)}
      </section>
    </main>
  )
} 