'use client'

import Image from 'next/image'

interface CircularTextImageProps {
  imageSrc: string
  text: string
  size?: string // optional Tailwind classes for width and height
}

export default function CircularTextImage({
  imageSrc,
  text,
  size = 'w-48 h-48 sm:w-64 sm:h-64 lg:w-[12rem] lg:h-[12rem]',
}: CircularTextImageProps) {
  const letters = text.split('')
  const radius = 95 // reduced further from 110

  return (
    <div className="flex items-center justify-center p-1"> {/* reduced padding */}
      <div className="relative flex flex-col items-center justify-center">
        <div className={`relative ${size}`}>
          {/* Central image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-[rgba(128,185,255,0.25)] w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-[6px_6px_20px_8px_rgba(128,185,255,0.2)]">
              <Image
                src={imageSrc}
                alt="Circular image"
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Circular letters */}
          {letters.map((letter, index) => {
            const angle = (index * 360) / letters.length - 90
            return (
              <div
                key={index}
                className="absolute text-brand-blue text-[26px] sm:text-base font-bold font-questrial w-[53px]"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `
                  translate(-50%, -50%)
                  rotate(${angle}deg)
                  translateY(-${radius}px)
                  rotate(0deg)
                `,
                  WebkitTextStrokeWidth: '1px',
                  transformOrigin: 'center center',
                }}
              >
                {letter}
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}
