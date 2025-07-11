import React from 'react'
import PDFViewer from './PDFViewer'

const pages = [
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_02.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_03.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_04.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_05.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_06.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_07.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_08.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_09.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_12.jpg',
  import.meta.env.BASE_URL + 'assets/tech-packs/bum-bag-capri/CAPRI JPG_Page_13.jpg',
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