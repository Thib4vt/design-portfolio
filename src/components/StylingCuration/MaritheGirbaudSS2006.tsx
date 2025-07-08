import { generateCuratedPiece } from './CuratedPieceGenerator'

const data = {
  title: "SS2006 Marithé + François Girbaud",
  images: [
    {
      src: "/assets/curation/SS2006 Marithé + François Girbaud/IMG_6092.JPG",
      alt: "Marithé + François Girbaud SS2006 View 1"
    },
    {
      src: "/assets/curation/SS2006 Marithé + François Girbaud/IMG_6094.JPG",
      alt: "Marithé + François Girbaud SS2006 View 2"
    },
    {
      src: "/assets/curation/SS2006 Marithé + François Girbaud/IMG_6099.JPG",
      alt: "Marithé + François Girbaud SS2006 View 3"
    },
    {
      src: "/assets/curation/SS2006 Marithé + François Girbaud/IMG_6102.JPG",
      alt: "Marithé + François Girbaud SS2006 View 4"
    }
  ]
}

export default generateCuratedPiece(data) 