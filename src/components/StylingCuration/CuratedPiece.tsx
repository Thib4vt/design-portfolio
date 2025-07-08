import React, { useEffect } from 'react'

interface CuratedPieceProps {
  title: string
  images: {
    src: string
    alt: string
  }[]
}

export default function CuratedPiece({ title, images }: CuratedPieceProps) {
  useEffect(() => {
    console.log('CuratedPiece mounted with title:', title);
    console.log('Images array:', images);
    images.forEach((img, index) => {
      console.log(`Image ${index}:`, {
        src: img.src,
        alt: img.alt,
        fullPath: window.location.origin + img.src
      });
    });
  }, [images, title]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, src: string) => {
    console.error('Image load error:', {
      attemptedSrc: src,
      fullPath: window.location.origin + src,
      element: e.currentTarget,
      error: e
    });
    e.currentTarget.style.border = '2px solid red';
    // Try to fetch the image directly to see if it's accessible
    fetch(src)
      .then(response => {
        console.log('Fetch response:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries())
        });
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Image loaded successfully:', {
      src: e.currentTarget.src,
      naturalWidth: e.currentTarget.naturalWidth,
      naturalHeight: e.currentTarget.naturalHeight
    });
  };

  const getGridTemplateColumns = () => {
    if (images.length === 4) {
      return 'repeat(2, 1fr)';
    }
    return `repeat(${images.length}, 1fr)`;
  };

  return (
    <main className="garment-page">
      <h1>{title}</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: getGridTemplateColumns(),
        gridTemplateRows: images.length === 4 ? 'repeat(2, 1fr)' : 'auto',
        gap: '1.5rem',
        background: 'transparent',
        justifyItems: 'center',
        alignItems: 'center',
        margin: '2rem 0'
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              background: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onError={(e) => handleImageError(e, image.src)}
              onLoad={handleImageLoad}
              style={{ display: 'block', width: '100%', maxWidth: '900px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </main>
  )
} 