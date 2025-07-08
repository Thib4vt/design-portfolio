import React, { useEffect, useRef } from 'react';

const PlaidScanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createRandomDot = () => {
      const dot = document.createElement('div');
      dot.className = 'red-dot';
      
      // Calculate position relative to the scanning line
      const scanLine = container.querySelector('.scan-line');
      if (!scanLine) return;
      
      const scanLineRect = scanLine.getBoundingClientRect();
      const scanLineX = scanLineRect.left;
      
      // Position dot near the scan line with some randomness
      const xOffset = Math.random() * 60 - 30; // -30px to +30px from scan line
      const x = ((scanLineX + xOffset) / window.innerWidth) * 100;
      const y = Math.random() * 100;
      
      dot.style.left = `${x}%`;
      dot.style.top = `${y}%`;
      container.appendChild(dot);

      // Remove dot after animation
      setTimeout(() => {
        dot.remove();
      }, 2000);
    };

    // Create multiple dots at once with slight delay between them
    const createDotCluster = () => {
      const numDots = Math.floor(Math.random() * 2) + 1; // 1-2 dots instead of 1-3
      for (let i = 0; i < numDots; i++) {
        setTimeout(() => {
          createRandomDot();
        }, i * 150); // Increased delay between dots in cluster
      }
    };

    // Create dot clusters periodically while scan line is moving
    const interval = setInterval(() => {
      if (Math.random() > 0.75) { // 25% chance instead of 30%
        createDotCluster();
      }
    }, 200); // Increased interval from 150 to 200ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="plaid-scanner" ref={containerRef}>
      <div className="scan-line" />
    </div>
  );
};

export default PlaidScanner; 