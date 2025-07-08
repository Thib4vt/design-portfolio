import React from 'react'
import CuratedPiece from './CuratedPiece'

interface CuratedPieceData {
  title: string
  images: {
    src: string
    alt: string
  }[]
}

export function generateCuratedPiece(data: CuratedPieceData) {
  return function CuratedPieceComponent() {
    return <CuratedPiece {...data} />
  }
}

export function generateCuratedPiecePath(folderName: string): string {
  // Keep the original folder name for the actual file path
  return folderName
} 