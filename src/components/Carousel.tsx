'use client';
import { useState } from "react"
import Image from 'next/image'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const images = [
  '/img/mywork/00002.webp',
  '/img/mywork/00003.webp',
  '/img/mywork/00004.webp',
  '/img/mywork/00005.webp',
  '/img/mywork/00007.webp',
]
  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
  
  return (
    <>
      <div className="flex items-center justify-center gap-8">
        <button className="hover:text-orange-400" onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}>Anterior</button>
        <Image className="border-transparent border rounded" src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} width={400} height={200} onClick={() => {
          setSelectedImage(images[currentIndex]);
          setIsOpen(true);
        }} />
        <Image className="border-transparent border rounded" src={images[prevIndex]} alt={`Imagen ${prevIndex + 1}`} width={500} height={300} onClick={() => {
          setSelectedImage(images[prevIndex]);
          setIsOpen(true);
        }} />
        <Image className="border-transparent border rounded" src={images[nextIndex]} alt={`Imagen ${nextIndex + 1}`} width={400} height={200} onClick={() => {
          setSelectedImage(images[nextIndex]);
          setIsOpen(true);
        }} />
        <button className="hover:text-orange-400" onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}>Siguiente</button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50" onClick={() => setIsOpen(false)}>
          <Image src={selectedImage} alt="Imagen ampliada" width={700} height={400} onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  )
}

export default Carousel