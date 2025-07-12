import React from 'react'
import { generateCuratedPiece, generateCuratedPiecePath } from './CuratedPieceGenerator'

// This will be populated with all the curated pieces
const curatedPieces = [
  // Specific dates first (chronological order)
  {
    title: "SS1999 Soleil by Jean Paul Gaultier",
    folder: "SS1999 Soleil by Jean Paul Gaultier",
    images: [
      {
        src: "assets/curation/SS1999 Soleil by Jean Paul Gaultier/IMG_7759.JPG",
        alt: "Soleil SS1999 View 1"
      },
      {
        src: "assets/curation/SS1999 Soleil by Jean Paul Gaultier/IMG_7760.JPG",
        alt: "Soleil SS1999 View 2"
      },
      {
        src: "assets/curation/SS1999 Soleil by Jean Paul Gaultier/IMG_7762.JPG",
        alt: "Soleil SS1999 View 3"
      },
      {
        src: "assets/curation/SS1999 Soleil by Jean Paul Gaultier/IMG_7765.JPG",
        alt: "Soleil SS1999 View 4"
      }
    ]
  },
  {
    title: "SS2002 Naoki Takizawa for Issey Miyake",
    folder: "SS2002 Naoki Takizawa for Issey Miyake",
    images: [
      {
        src: "assets/curation/SS2002 Naoki Takizawa for Issey Miyake/IMG_2430.JPG",
        alt: "Naoki Takizawa SS2002 View 1"
      },
      {
        src: "assets/curation/SS2002 Naoki Takizawa for Issey Miyake/IMG_2436.JPG",
        alt: "Naoki Takizawa SS2002 View 2"
      },
      {
        src: "assets/curation/SS2002 Naoki Takizawa for Issey Miyake/IMG_2440.JPG",
        alt: "Naoki Takizawa SS2002 View 3"
      },
      {
        src: "assets/curation/SS2002 Naoki Takizawa for Issey Miyake/IMG_2442.JPG",
        alt: "Naoki Takizawa SS2002 View 4"
      }
    ]
  },
  {
    title: "SS2005 Cabane de Zucca",
    folder: "SS2005 Cabane de Zucca",
    images: [
      {
        src: "assets/curation/SS2005 Cabane de Zucca/IMG_7466.jpg",
        alt: "Cabane de Zucca SS2005 View 1"
      },
      {
        src: "assets/curation/SS2005 Cabane de Zucca/IMG_7468.jpg",
        alt: "Cabane de Zucca SS2005 View 2"
      },
      {
        src: "assets/curation/SS2005 Cabane de Zucca/IMG_74679jpg.jpg",
        alt: "Cabane de Zucca SS2005 View 3"
      }
    ]
  },
  {
    title: "SS2006 Junya Watanabe for Comme des Garçons",
    folder: "SS2006_Junya_Watanabe_for_Comme_des_Garcons",
    images: [
      {
        src: "assets/curation/SS2006_Junya_Watanabe_for_Comme_des_Garcons/IMG_0836.jpg",
        alt: "Junya Watanabe SS2006 View 1"
      },
      {
        src: "assets/curation/SS2006_Junya_Watanabe_for_Comme_des_Garcons/IMG_0840.jpg",
        alt: "Junya Watanabe SS2006 View 2"
      },
      {
        src: "assets/curation/SS2006_Junya_Watanabe_for_Comme_des_Garcons/IMG_0842.jpg",
        alt: "Junya Watanabe SS2006 View 3"
      },
      {
        src: "assets/curation/SS2006_Junya_Watanabe_for_Comme_des_Garcons/IMG_8981.JPEG",
        alt: "Junya Watanabe SS2006 View 4"
      }
    ]
  },
  {
    title: "SS2006 Marithé + François Girbaud",
    folder: "SS2006_Marithe_Francois_Girbaud",
    images: [
      {
        src: "assets/curation/SS2006_Marithe_Francois_Girbaud/IMG_6092.JPG",
        alt: "Marithé + François Girbaud SS2006 View 1"
      },
      {
        src: "assets/curation/SS2006_Marithe_Francois_Girbaud/IMG_6093.JPG",
        alt: "Marithé + François Girbaud SS2006 View 2"
      },
      {
        src: "assets/curation/SS2006_Marithe_Francois_Girbaud/IMG_61033.JPG",
        alt: "Marithé + François Girbaud SS2006 View 3"
      },
      {
        src: "assets/curation/SS2006_Marithe_Francois_Girbaud/IMG_61144.JPG",
        alt: "Marithé + François Girbaud SS2006 View 4"
      }
    ]
  },
  {
    title: "AW2008 Jean-Charles de Castelbajac",
    folder: "AW2008 Jean-Charles de Castelbajac",
    images: [
      {
        src: "assets/curation/AW2008 Jean-Charles de Castelbajac/IMG_8793.JPG",
        alt: "Jean-Charles de Castelbajac AW2008 View 1"
      },
      {
        src: "assets/curation/AW2008 Jean-Charles de Castelbajac/IMG_8795.JPG",
        alt: "Jean-Charles de Castelbajac AW2008 View 2"
      },
      {
        src: "assets/curation/AW2008 Jean-Charles de Castelbajac/IMG_8796.JPG",
        alt: "Jean-Charles de Castelbajac AW2008 View 3"
      },
      {
        src: "assets/curation/AW2008 Jean-Charles de Castelbajac/IMG_8798.JPG",
        alt: "Jean-Charles de Castelbajac AW2008 View 4"
      }
    ]
  },
  // Loose dates (2000s) after, in alphabetical order
  {
    title: "2000s Griffin Studio",
    folder: "2000s Griffin Studio",
    images: [
      {
        src: "assets/curation/2000s Griffin Studio/aMG_0787.JPG",
        alt: "Griffin Studio 2000s View 1"
      },
      {
        src: "assets/curation/2000s Griffin Studio/aMG_0789.JPG",
        alt: "Griffin Studio 2000s View 2"
      },
      {
        src: "assets/curation/2000s Griffin Studio/IMG_07844.JPG",
        alt: "Griffin Studio 2000s View 3"
      },
      {
        src: "assets/curation/2000s Griffin Studio/IMG_0792.JPG",
        alt: "Griffin Studio 2000s View 4"
      }
    ]
  },
  {
    title: "2000s If Six Was Nine",
    folder: "2000s If Six Was Nine",
    images: [
      {
        src: "assets/curation/2000s If Six Was Nine/1.JPG",
        alt: "If Six Was Nine 2000s View 1"
      },
      {
        src: "assets/curation/2000s If Six Was Nine/2.JPG",
        alt: "If Six Was Nine 2000s View 2"
      },
      {
        src: "assets/curation/2000s If Six Was Nine/9.JPG",
        alt: "If Six Was Nine 2000s View 3"
      },
      {
        src: "assets/curation/2000s If Six Was Nine/10.JPG",
        alt: "If Six Was Nine 2000s View 4"
      }
    ]
  },
  {
    title: "2000s Led Rechwe",
    folder: "2000s Led Rechwe",
    images: [
      {
        src: "assets/curation/2000s Led Rechwe/IMG_7331.jpg",
        alt: "Led Rechwe 2000s View 1"
      },
      {
        src: "assets/curation/2000s Led Rechwe/IMG_7340.jpg",
        alt: "Led Rechwe 2000s View 2"
      },
      {
        src: "assets/curation/2000s Led Rechwe/IMG_7343.jpg",
        alt: "Led Rechwe 2000s View 3"
      },
      {
        src: "assets/curation/2000s Led Rechwe/IMG_7347.jpg",
        alt: "Led Rechwe 2000s View 4"
      }
    ]
  },
  {
    title: "2000s Nozomi Ishiguro",
    folder: "2000s Nozomi Ishiguro",
    images: [
      {
        src: "assets/curation/2000s Nozomi Ishiguro/IMG_2701.jpg",
        alt: "Nozomi Ishiguro 2000s View 1"
      },
      {
        src: "assets/curation/2000s Nozomi Ishiguro/IMG_2706.JPG",
        alt: "Nozomi Ishiguro 2000s View 2"
      }
    ]
  },
  {
    title: "2000s Phenomenon Beyond Description",
    folder: "2000s Phenomenon Beyond Description",
    images: [
      {
        src: "assets/curation/2000s Phenomenon Beyond Description/IMG_1706.JPG",
        alt: "Phenomenon Beyond Description 2000s View 1"
      },
      {
        src: "assets/curation/2000s Phenomenon Beyond Description/IMG_1709.JPG",
        alt: "Phenomenon Beyond Description 2000s View 2"
      },
      {
        src: "assets/curation/2000s Phenomenon Beyond Description/IMG_1710.JPG",
        alt: "Phenomenon Beyond Description 2000s View 3"
      }
    ]
  },
  {
    title: "2000s Share Spirit",
    folder: "2000s Share Spirit",
    images: [
      {
        src: "assets/curation/2000s Share Spirit/34.JPG",
        alt: "Share Spirit 2000s View 1"
      },
      {
        src: "assets/curation/2000s Share Spirit/35B50C5E-310B-42B8-9B41-F51259D8CEC0.JPG",
        alt: "Share Spirit 2000s View 2"
      },
      {
        src: "assets/curation/2000s Share Spirit/3A96AE5B-F043-4F61-8D83-76C064D61EFC.JPG",
        alt: "Share Spirit 2000s View 3"
      },
      {
        src: "assets/curation/2000s Share Spirit/377.JPG",
        alt: "Share Spirit 2000s View 4"
      }
    ]
  }
]

// Generate components for each piece
export const CuratedPieceComponents = Object.fromEntries(
  curatedPieces.map(piece => [
    generateCuratedPiecePath(piece.folder),
    generateCuratedPiece(piece)
  ])
)

// Export the list of pieces for the main page
export const CuratedPiecesList = curatedPieces.map(piece => ({
  title: piece.title,
  path: `/styling-curation/curation/${generateCuratedPiecePath(piece.folder)}`,
  imageUrl: piece.images[0].src
})) 