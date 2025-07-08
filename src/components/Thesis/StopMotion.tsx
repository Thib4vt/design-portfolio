import React from 'react'

export default function StopMotion() {
  const handleVideoEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.currentTime = 0;
    e.currentTarget.play();
  };

  return (
    <main>
      <h1 className="page-title">Stop-Motion Transformation</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        padding: '1rem',
        position: 'relative'
      }}>
        <video
          autoPlay
          muted
          onEnded={handleVideoEnded}
          style={{
            maxWidth: '95vw',
            maxHeight: '80vh',
            width: 'auto',
            height: 'auto',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            borderRadius: '8px',
            border: 'none',
            outline: 'none'
          }}
        >
          <source src="/assets/thesis/stop-motion/new jawn video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  )
} 