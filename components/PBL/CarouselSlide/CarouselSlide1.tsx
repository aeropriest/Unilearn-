'use client';
import Image from 'next/image';
import { useTranslation } from "react-i18next";

const CarouselSlide1 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
      {/* Left Side */}

      <div className="flex flex-col gap-4 w-full max-w-[360px] mx-auto max-h-[1134px]">
        {/* Avatar Card */}
        <div style={{ background: "linear-gradient(213deg, rgba(128,185,255,0.60) 16.25%, rgba(61,176,203,0.60) 94.68%)" }} className="w-full h-[50%] flex-1 rounded-xl flex flex-col items-center justify-center p-4 text-white text-[36px] font-black relative overflow-hidden">

          <p
            className="absolute left-[11px] top-[-7.133px] rotate-[-5deg] text-[120px] font-cherryBomb text-[#3DB0CB] hidden lg:block"
            style={{
              WebkitTextStrokeWidth: '5px',
              WebkitTextStrokeColor: '#FFF',
            }}
          >
            {t('carouselSlide1.carouselSlide1_Card1_Title1')}
          </p>
          <p
            className="absolute left-[136px] top-[3px] text-[100px] font-cherryBomb text-[#3DB0CB] hidden lg:block"
            style={{
              WebkitTextStrokeWidth: '5px',
              WebkitTextStrokeColor: '#FFF',
            }}
          >
            {t('carouselSlide1.carouselSlide1_Card1_Title2')}
          </p>

          <p
            className="absolute left-[24px] bottom-[-1.943px] text-[120px] font-cherryBomb text-[#3DB0CB] hidden lg:block"
            style={{
              transform: 'rotate(10deg)',
              WebkitTextStrokeWidth: '5px',
              WebkitTextStrokeColor: '#FFF',
            }}
          >
            {t('carouselSlide1.carouselSlide1_Card1_Title3')}
          </p>

          <p
            className="absolute left-[119px] bottom-[11.064px] text-[100px] font-cherryBomb text-[#3DB0CB] hidden lg:block"
            style={{
              transform: 'rotate(-20deg)',
              WebkitTextStrokeWidth: '5px',
              WebkitTextStrokeColor: '#FFF',
            }}
          >
            {t('carouselSlide1.carouselSlide1_Card1_Title4')}
          </p>

          <div className="relative w-full h-full hidden lg:block">
            <div
              className="absolute top-2 -left-8 z-20 w-[375px] h-[295px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/elegant-bright-woman-wearing-scarf-on-head.png')`,
              }}
            />
          </div>

          <p
            style={{
              WebkitTextStrokeWidth: '5px',
              WebkitTextStrokeColor: '#FFF',
            }}
            className="text-[100px] font-cherryBomb text-[#3DB0CB] block lg:hidden"
          >
            {t('carouselSlide1.carouselSlide1_Card1_Title5')}
          </p>


        </div>

        {/* Description Card */}
        <div
          style={{
            background:
              'linear-gradient(122deg, rgba(255,255,255,0.00) 0.01%, rgba(61,176,203,0.20) 99.99%)',
          }}
          className="relative w-full h-[50%] flex-1 rounded-xl flex flex-col items-start justify-end p-4"
        >
          {/* Crystal Image - Positioned Absolutely Within Container */}
          <div
            className="absolute lg:block hidden"
            style={{
              width: '131.209px',
              height: '217px',
              right: '29.791px',
              top: '-2px',
            }}
          >
            <Image
              src="/images/Unita.png"
              alt="Unita Crystal"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: '-1.391px -3.028px',
              }}
            />
          </div>

          {/* Speech Bubble / Content */}
          <div className="flex flex-col items-start self-stretch rounded-[12px] bg-white/80 p-[15px] sm:p-[30px]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-2"
            >
              <path
                d="M12 10.2188C6.25 10.2188 1.5625 14.9531 1.5625 20.7656C1.5625 24.7188 3.70312 28.2656 7.09375 30.0781C6.92188 31.9219 6.15625 35.8438 3.01562 36.7031C2.26562 36.9063 1.78125 37.625 1.875 38.3906C1.96875 39.1562 2.59375 39.75 3.375 39.7656H3.60938C5.14062 39.7656 13.5469 39.4219 18.9844 32.125C22.5156 27.3906 23.5625 22.25 21.9531 17.7188C20.6094 13.2344 16.6094 10.2188 12 10.2188Z"
                fill="url(#paint0_linear_31_232)"
              />
              <path
                d="M47.7188 17.7344C46.375 13.25 42.375 10.2344 37.7656 10.2344C32.0156 10.2344 27.3281 14.9688 27.3281 20.7812C27.3281 24.7344 29.4688 28.2812 32.8594 30.0938C32.6875 31.9375 31.9219 35.8594 28.7813 36.7188C28.0313 36.9219 27.5469 37.6406 27.6406 38.4062C27.7344 39.1719 28.3594 39.7656 29.1406 39.7812H29.375C30.9062 39.7812 39.3125 39.4375 44.75 32.1406C48.2812 27.4062 49.3281 22.2656 47.7188 17.7344Z"
                fill="url(#paint1_linear_31_232)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_31_232"
                  x1="12.1259"
                  y1="10.2188"
                  x2="12.1259"
                  y2="39.7656"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3DB0CB" />
                  <stop offset="1" stopColor="#80B9FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_31_232"
                  x1="37.8915"
                  y1="10.2344"
                  x2="37.8915"
                  y2="39.7812"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3DB0CB" />
                  <stop offset="1" stopColor="#80B9FF" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[#3DB0CB] font-comfortaa text-[14px] font-bold leading-snug tracking-[-0.7px]">
              {t('carouselSlide1.carouselSlide1_Card2_Title1')} <br />
              {t('carouselSlide1.carouselSlide1_Card2_Title2')} <br />
              {t('carouselSlide1.carouselSlide1_Card2_Title3')}
            </p>
          </div>
        </div>

      </div>



      <div className="flex-1 h-[600px] sm:h-[600px] md:h-[650px] flex flex-col gap-4">
        {/* Top section: 30% height */}
        <div className="flex flex-col sm:flex-row gap-[15px] h-[30%]">
          {/* Top Left Avatar - 50% width on sm+ */}
          <div style={{ background: "linear-gradient(124deg, rgba(255, 255, 255, 0.20) 0.12%, rgba(249, 213, 61, 0.20) 99.88%)" }}
            className="w-full sm:w-1/2 rounded-xl flex flex-col items-center justify-center text-white text-[40px] font-black relative overflow-hidden">
            <p
              className="self-stretch text-white text-[18px] w-[172.5px] font-rocksalt font-normal line-through"
              style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#C7C7C7',
              }}
            >
              {t('carouselSlide1.carouselSlide1_Card3_Title1')}
            </p>
            <p
              className="self-stretch text-[32px] w-[172.5px] font-questrial font-normal leading-none mt-5"
              style={{
                color: 'rgba(249, 213, 61, 0.80)',
                WebkitTextStrokeWidth: '0.8px',
                WebkitTextStrokeColor: 'rgba(249, 213, 61, 0.80)',
              }}
            >
              {t('carouselSlide1.carouselSlide1_Card3_Title2')} <br />
              {t('carouselSlide1.carouselSlide1_Card3_Title3')} <br />
              {t('carouselSlide1.carouselSlide1_Card3_Title4')}
            </p>



          </div>

          {/* Top Right Card */}
          <div style={{ background: "linear-gradient(124deg, rgba(255, 255, 255, 0.20) 0.12%, rgba(242, 93, 144, 0.20) 99.88%)" }}
            className="w-full sm:w-1/2 rounded-xl flex flex-col items-start justify-center p-4">
            <p
              className="text-[24px] font-questrial font-normal leading-none self-stretch text-center lg:text-left"

              style={{
                color: 'rgba(242, 93, 144, 0.80)',
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: 'rgba(242, 93, 144, 0.80)',
              }}
            >
              {t('carouselSlide1.carouselSlide1_Card4_Title1')}
            </p>
            <div className="flex items-center justify-center w-full h-full">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 8.21628C2.25101 7.61189 2.49154 7.03255 2.91891 6.60519C3.34627 6.17782 3.92562 5.93729 4.53 5.93628H20.97C23.9891 6.04559 23.9846 10.3878 20.97 10.4925H4.53C3.926 10.4924 3.34673 10.2526 2.91929 9.82589C2.49185 9.39915 2.25115 8.82028 2.25 8.21628ZM20.97 13.5075H4.53C1.51538 13.6123 1.51085 17.9545 4.53004 18.0638H20.97C21.5742 18.0638 22.1536 17.8238 22.5809 17.3965C23.0081 16.9693 23.2481 16.3899 23.2481 15.7857C23.2481 15.1815 23.0081 14.602 22.5809 14.1748C22.1536 13.7475 21.5742 13.5075 20.97 13.5075Z" fill="url(#paint0_linear_31_268)" />
                <defs>
                  <linearGradient id="paint0_linear_31_268" x1="2.25" y1="12" x2="23.25" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F25D90" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#F25D90" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p
              className="text-[30px] font-questrial font-normal leading-none w-[162.5px] text-center lg:text-right"
              style={{
                color: 'rgba(242, 93, 144, 0.80)',
                WebkitTextStrokeWidth: '0.8px',
                WebkitTextStrokeColor: 'rgba(242, 93, 144, 0.80)',
              }}
            >
              {t('carouselSlide1.carouselSlide1_Card4_Title2')}
            </p>

          </div>
        </div>

        

        <div style={{ background: "linear-gradient(324deg, rgba(242, 93, 144, 0.60) 0%, rgba(249, 213, 61, 0.60) 100%)" }} 
        className="h-[70%] rounded-xl pt-4 pb-4 flex flex-col justify-between">
          <div className="flex gap-0 mb-2 ml-auto">
            <span
              className="flex h-[50px] px-9 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 shadow-[4px_4px_0px_0px_#F25D90] text-[#F25D90] text-[20px] font-comfortaa font-bold leading-none"
            >
              {t('carouselSlide1.carouselSlide1_Card5_Tag1')}
            </span>

            <span
              className="flex h-[40px] px-[10px] mt-2 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 text-[#F25D90] text-[14px] font-comfortaa font-semibold leading-none"
            >
              {t('carouselSlide1.carouselSlide1_Card5_Tag2')}
            </span>

            <span
              className="flex h-[40px] px-[10px] mt-2 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 text-[#F25D90] text-[14px] font-comfortaa font-semibold leading-none"
            >
              {t('carouselSlide1.carouselSlide1_Card5_Tag3')}
            </span>
          </div>

          <div className="relative">
            <button
              className="absolute right-0 top-[10px] px-5 py-[15px] max-w-[308px] rounded-full bg-[#3DB0CB]/80 shadow-[0px_4px_4px_0px_rgba(199,199,199,0.60)] text-white font-comfortaa text-[16px] font-bold leading-none"
            >
              {t('carouselSlide1.carouselSlide1_Card5_Tag4')}
            </button>
          </div>




          <div
            className="flex flex-col justify-center items-center gap-[0px] w-[261px] h-[280px] px-[30px] pt-[30px] pb-[30px] pr-[30px] pl-[0px] rounded-r-[12px] bg-white/80"
          >
            <p className="ml-[5px] text-[#004699] font-comfortaa text-[14px] font-bold leading-none self-stretch text-left">
              {t('carouselSlide1.carouselSlide1_Card5_Title')}
            </p>
            <p className="ml-[5px] text-[#282828] font-didact text-[14px] font-normal leading-none self-stretch mt-5 text-left">
              {t('carouselSlide1.carouselSlide1_Card5_Dis')}
            </p>

          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-end ml-[10px]">
        <h3
          className="self-stretch text-[16px] sm:text-[40px] font-questrial font-normal leading-none text-[#004699]"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('carouselSlide1.carouselSlide1_Card6_Title')}
        </h3>

        <p
          className="self-stretch text-[16px] sm:text-[20px] font-didact font-normal leading-none text-[#282828] mt-[10px] mb-[15px]"
        >
          {t('carouselSlide1.carouselSlide1_Card6_Dis')}
        </p>

      </div>
    </div>
  );
};

export default CarouselSlide1;
