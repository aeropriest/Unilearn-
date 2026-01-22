'use client';
import { useTranslation } from "react-i18next";

export default function MarqueeWords() {
  
  const { t } = useTranslation();

  const words = [
    t('marqueeWords.marqueeWords_1'),
    t('marqueeWords.marqueeWords_2'),
    t('marqueeWords.marqueeWords_3'),
    t('marqueeWords.marqueeWords_4'),
    t('marqueeWords.marqueeWords_5'),
    t('marqueeWords.marqueeWords_6'),
  ];


  const repeatedWords = [...words, ...words]; // loop effect by duplicating

  return (
    <div className="w-full py-10 overflow-hidden bg-white">
      {/* Marquee Line 1 */}
      <div className="relative w-full overflow-hidden">
        <div
          className="animate-marquee inline-flex text-[20px] sm:text-[28px] md:text-[36px] font-rocksalt font-normal"
          style={{
            lineHeight: '1.6',
            background: 'linear-gradient(90deg, #F25D90 0%, rgba(242, 93, 144, 0.4) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {repeatedWords.map((word, i) => (
            <span key={i} className="mx-6 whitespace-nowrap">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Line 2 */}
      <div className="relative w-full overflow-hidden mt-4">
        <div
          className="animate-marquee-reverse inline-flex text-[20px] sm:text-[28px] md:text-[36px] font-rocksalt font-normal"
          style={{
            lineHeight: '1.6',
            background: 'linear-gradient(90deg, rgba(61, 176, 203, 0.6) 0%, #3DB0CB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {repeatedWords.map((word, i) => (
            <span key={i} className="mx-6 whitespace-nowrap">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>

  );
}
