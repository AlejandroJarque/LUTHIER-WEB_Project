'use client';
import { useState, useRef, useEffect } from "react"
import Image from 'next/image'
import { ArrowForward, ArrowBack, CloseIcon } from "./svg/SVGIcons";
import { styleText } from "util";

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

export default Carousel;


type DotProps = {
  sources: string[],
  current: number,
  onDotClick: (index: number) => void;
}

type LightBoxProps = {
  sources: string[],
  current: number,
  onNext: () => void
  onPrev: () => void
  onClose: () => void
  onDotClick: (index: number) => void;
}

const IMAGE_SCALE = 0.32
const MIN_SCALE = 0.8
const SCALE_STEP = 0.1

export function FluidCarousel({ source }: { source: string[] }) {
  const sources = source ?? [
    '/img/mywork/00001.webp',
    '/img/mywork/00002.webp',
    '/img/mywork/00003.webp',
    '/img/mywork/00004.webp',
    '/img/mywork/00005.webp',
    '/img/mywork/00007.webp',
  ]


  const container = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [current, setCurrent] = useState(0);
  const [fullView, setFullView] = useState(false);
  const imageWidth = size.width * IMAGE_SCALE;

  useEffect(() => {
    if (!container.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height
      })
    })
    observer.observe(container.current);
    return () => observer.disconnect();
  }, [])

  function getStyle(offset: number) {

    const absOffset = Math.abs(offset);
    const scale = offset === 0 ? 1 : Math.max(MIN_SCALE, 1 - absOffset * SCALE_STEP)
    const zIndex = 100 - absOffset;
    const x = offset * imageWidth
    const opacity = absOffset <= 1 ? 1 : 0;
    return {
      width: imageWidth,
      height: 'auto',
      transform: `translateX(${x}px) scale(${scale})`,
      zIndex,
      opacity
    }
  }

  function offsetToCurrent(index: number, current: number, total: number): number {
    let offset = index - current;

    if (offset < -total / 2) offset += total
    if (offset > total / 2) offset -= total
    return offset;
  }

  function onPrev() {
    if (current <= 0) {
      setCurrent(sources.length - 1)
      return;
    }
    setCurrent(c => c - 1);
  }

  function onNext() {
    if (current >= sources.length - 1) {
      setCurrent(0);
      return;
    }
    setCurrent(c => c + 1);
  }

  return <>
    <div ref={container} id="fc-container"
      className="w-full h-full overflow-x-hidden p-8 bg-jukka-darker shadow-lg">
      {
        size.width !== 0 &&
        <div className="w-full h-full flex flex-col items-center justify-center">
          {fullView && <LightBox sources={sources} current={current} onPrev={onPrev} onNext={onNext}
            onClose={() => setFullView(false)} onDotClick={(idx) => setCurrent(idx)} />}
          <div className="w-full h-full flex items-center justify-center gap-2 md:gap-8 ">
            <button className="hover:text-orange-400 cursor-pointer" onClick={onPrev}><ArrowBack /></button>
            <div id="fc-slide" className="relative w-full h-full overflow-hidden">
              {sources.map((src, idx) => {
                const style = getStyle(offsetToCurrent(idx, current, sources.length));
                return (
                  <Image key={src + idx} onClick={() => setFullView(true)}
                    className="absolute rounded-md shadow-md left-1/2 top-1/2 transition-all duration-500 cursor-pointer"
                    style={{ ...style, transform: `translate(-50%, -50%) ${style.transform}` }}
                    src={src} alt={src} width={500} height={400}
                  />
                )
              })}
            </div>
            <button className="hover:text-orange-400 cursor-pointer" onClick={onNext}><ArrowForward /></button>
          </div>
          <Dots sources={sources} current={current} onDotClick={setCurrent} />
        </div>
      }
    </div >
  </>
}

function LightBox({ sources, current, onNext, onPrev, onClose, onDotClick }: LightBoxProps) {
  return (

    <div className="fixed top-0 left-0 w-full h-full bg-jukka-darker/90 z-101 flex flex-col items-center justify-center" onClick={onClose}>
      <div className="w-full flex items-center justify-center m-6">
        <button className="hover:text-orange-400 cursor-pointer m-6" onClick={(e) => { onPrev(); e.stopPropagation() }}><ArrowBack /></button>
        <div className="flex items-center justify-center">
          <Image src={sources[current]} alt={""} width={740} height={740} className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} />
        </div>
        <button className="hover:text-orange-400 cursor-pointer m-6" onClick={(e) => { onNext(); e.stopPropagation() }}><ArrowForward /></button>
      </div>
      <Dots sources={sources} current={current} onDotClick={onDotClick} />
    </div>
  )
}

function Dots({ sources, current, onDotClick }: DotProps) {
  return <div className="flex items-center justify-center gap-4 w-full h-6">
    {sources.map((src, idx) => {
      let cn = `block w-3 h-3 border-2 border-orange-400 rounded-full cursor-pointer ${current === idx ? 'bg-orange-400' : 'bg-jukka-dark'}`
      return <button key={src + idx} className={cn} onClick={(e) => { onDotClick(idx); e.stopPropagation() }}></button>
    })}
  </div>
}