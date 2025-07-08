import React from 'react'

interface PDFViewerProps {
  title: string;
  pages: string[];
}

export default function PDFViewer({ title, pages }: PDFViewerProps) {
  return (
    <div className="pdf-container">
      <h1>{title}</h1>
      <div className="disclaimer">
        <p>To protect creative property, I do not display all piece/model components. Please feel free to inquire directly for more information.</p>
      </div>
      <div className="pages-container">
        {pages.map((page, index) => (
          <div key={index} className="page-wrapper">
            <img 
              src={page} 
              alt={`${title} - Page ${index + 1}`}
              className="page-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 