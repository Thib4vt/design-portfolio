import React from 'react'
import PDFViewer from './PDFViewer'

const pages = [
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_02.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_03.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_04.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_05.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_06.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_07.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_08.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_09.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_12.jpg',
  '/assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_13.jpg',
];

export default function BumBagCapriTP() {
  return (
    <div className="tech-pack-page">
      <PDFViewer 
        title="Bum-Bag Capri Tech Pack"
        pages={pages}
      />
    </div>
  )
} 