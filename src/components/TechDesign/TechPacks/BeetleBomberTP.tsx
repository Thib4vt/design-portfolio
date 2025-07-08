import React from 'react'
import PDFViewer from './PDFViewer'

const pages = [
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_02.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_01.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_03.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_04.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_05.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_06.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_07.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_08.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_09.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_10.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_11.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_12.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_13.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_14.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_15.jpg',
  '/assets/tech-packs/beetle-bomber/JPEG BOMBER_Page_16.jpg',
];

export default function BeetleBomberTP() {
  return (
    <div className="tech-pack-page">
      <PDFViewer 
        title="Beetle Bag Bomber Tech Pack"
        pages={pages}
      />
    </div>
  )
} 