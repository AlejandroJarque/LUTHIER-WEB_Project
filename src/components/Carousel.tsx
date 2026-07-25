'use client';
import { useState } from "react"
import Image from 'next/image'
import { ArrowForward, ArrowBack } from "./svg/SVGIcons";

function Carousel({ source }: { source: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagePreview, setImagePreview] = useState('');

  const images = source ?? [
    '/img/mywork/00001.webp',
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
      <div className="flex items-center justify-center gap-2 md:gap-8 w-full">
        <button className="hover:text-orange-400 cursor-pointer " onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}><ArrowBack /></button>
          <Image className="hidden md:block hover:border-orange-400 hover:border-2 cursor-pointer border border-0 rounded shadow-md shadow-orange-400/40 rotate-x-15 rotate-y-10 transition duration-300" src={images[prevIndex]} alt={`Imagen ${currentIndex - 1}`} width={400} height={200} onClick={() => {
            setImagePreview(images[prevIndex])
          }} />
          <Image className="hover:border-orange-400 hover:border-2 cursor-pointer border border-0 rounded shadow-md shadow-orange-400/40 transition duration-300 w-48 sm:w-64 md:w-[450px] h-auto" src={images[currentIndex]} alt={`Imagen ${currentIndex}`} width={450} height={250} onClick={() => {
            setImagePreview(images[currentIndex])
          }} />
          <Image className="hidden md:block hover:border-orange-400 hover:border-2 cursor-pointer border border-0 rounded shadow-md shadow-orange-400/40 rotate-x-15 -rotate-y-10 transition duration-300" src={images[nextIndex]} alt={`Imagen ${currentIndex + 1}`} width={400} height={200} onClick={() => {
            setImagePreview(images[nextIndex])
          }} />
        <button className="hover:text-orange-400 cursor-pointer" onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}><ArrowForward /></button>
      </div>
    </>
  )
}

export default Carousel