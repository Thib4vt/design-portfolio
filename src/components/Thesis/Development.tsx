import React from 'react'

export default function Development() {
  const images = [
    // Bag Development
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev.jpg',
      alt: "Bag Development 1",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev2.jpg',
      alt: "Bag Development 2",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev3.JPG',
      alt: "Bag Development 3",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev4.JPG',
      alt: "Bag Development 4",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev5.JPG',
      alt: "Bag Development 5",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev6.jpg',
      alt: "Bag Development 6",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev7.JPG',
      alt: "Bag Development 7",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev8.jpg',
      alt: "Bag Development 8",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev9.JPG',
      alt: "Bag Development 9",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev10.JPG',
      alt: "Bag Development 10",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev11.JPG',
      alt: "Bag Development 11",
      className: "bag"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/bagdev12.jpg',
      alt: "Bag Development 12",
      className: "bag"
    },
    
    // Jacket Development
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/jacketdev.jpg',
      alt: "Jacket Development 1",
      className: "jacket"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/jacketdev2.JPG',
      alt: "Jacket Development 2",
      className: "jacket"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/jacketdev3.jpg',
      alt: "Jacket Development 3",
      className: "jacket"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/jacketdev4.jpg',
      alt: "Jacket Development 4",
      className: "jacket"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/jakcetdev5.JPG',
      alt: "Jacket Development 5",
      className: "jacket"
    },

    // Pants Development
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/pantsdev.JPG',
      alt: "Pants Development 1",
      className: "pants"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/pantsdev2.JPG',
      alt: "Pants Development 2",
      className: "pants"
    },
    {
      src: import.meta.env.BASE_URL + 'assets/thesis/development/pants dev3.JPG',
      alt: "Pants Development 3",
      className: "pants"
    }
  ]

  return (
    <main className="development-page">
      <h1>Development</h1>
      <div className="moodboard-container">
        {images.map((image, index) => (
          <div key={index} className={`moodboard-item ${image.className}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </main>
  )
} 