'use client';
import { useState } from "react"

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
  '/img/mywork/00002.webp',
  '/img/mywork/00003.webp',
  '/img/mywork/00004.webp',
  '/img/mywork/00005.webp',
  '/img/mywork/00007.webp',
]

  return (
    <div>
      <button onClick={() => setCurrentIndex(currentIndex - 1)}>Anterior</button>
      <button onClick={() => setCurrentIndex(currentIndex + 1)}>Siguiente</button>
    </div>
  )
}