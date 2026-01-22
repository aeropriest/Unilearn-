'use client';

import { useTranslation } from "react-i18next";

const CarouselSlideResources = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
      {/* Left Side */}

      <div className="flex flex-col gap-3 w-full max-w-[360px] mx-auto max-h-[1134px]">
        {/* Avatar Card */}
        <div style={{ background: "linear-gradient(213deg, rgba(128, 185, 255, 0.60) 16.25%, rgba(61, 176, 203, 0.60) 94.68%)" }}
          className="w-full h-[50%] max-h-[273px] flex-1 rounded-xl flex flex-col items-center justify-center text-white text-[36px] font-black relative overflow-hidden">

          <p
            className="
                      absolute
                      z-20
                      text-[81px]
                      text-white/30
                      font-aclonica
                      not-italic
                      font-normal
                      leading-normal
                      rotate-[-43deg]
                      hidden lg:block
                    "
            style={{
              WebkitTextStrokeWidth: '1.5px',
              WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.30)',
            }}
          >
            {t('carouselSlideResources.carouselSlideResources_Card1_Title')}
          </p>
          <p
            className="
                      w-[266px]
                      pl-[20px]
                      py-0
                      pt-[10px]
                      z-20
                      pb-[10px]
                      absolute
                      left-[10px]
                      top-[26px]
                      rounded-[96px]
                      bg-[rgba(61,176,203,0.80)]
                      self-stretch
                      text-white
                      font-comfortaa
                      text-[20px]
                      not-italic
                      font-bold
                      leading-none
                      text-start
                      hidden lg:block
                    "
          >
            {t('carouselSlideResources.carouselSlideResources_Card1_Dis1')} <br /> {t('carouselSlideResources.carouselSlideResources_Card1_Dis2')} <br /> {t('carouselSlideResources.carouselSlideResources_Card1_Dis3')}
          </p>


          <div
            className="
                      w-[260px]
                      h-[189px]
                      absolute
                      left-[60px]
                      mt-[109px]
                      aspect-[236.11/378]
                      rounded-[12px]
                      bg-cover
                      bg-no-repeat
                      bg-center
                      hidden lg:block
                    "
            style={{
              backgroundImage: "url('/images/CVImageforwebdesign.png')",
            }}
          />

          <div className="relative mr-[30px] hidden lg:block">
            <div
              className="absolute mt-[-130px]  z-20 w-[215px] h-[272px] bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/elegant-bright-woman-wearing.png')",
                
              }}
            />
          </div>


          <p
            className="text-[51px]
                      text-white/30
                      font-aclonica
                      not-italic
                      font-normal
                      leading-normal
                      block lg:hidden"
          >
            {t('carouselSlideResources.carouselSlideResources_Card1_Title')}
          </p>


        </div>

        {/* Description Card */}
        <div
          style={{
            background:
              'linear-gradient(122deg, rgba(255, 255, 255, 0.00) 0.01%, rgba(61, 176, 203, 0.20) 99.99%)',
          }}
          className="relative w-full h-[50%] flex-1 rounded-xl flex flex-col items-start justify-center pl-[10px] pr-[10px] pb-[10px]"
        >
          {/* Crystal Image - Positioned Absolutely Within Container */}
          {/* Speech Bubble / Content */}
          <div className="flex flex-col items-start self-stretch rounded-[12px] bg-white/80 p-[1px] sm:p-[30px]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" hidden lg:block"
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
            <p className="text-[#3DB0CB] font-comfortaa text-[14px] font-bold leading-snug tracking-[-0.7px] mt-[15px] mb-[15px]">
              {t('carouselSlideResources.carouselSlideResources_Card2_Dis')}
            </p>
            <div className="flex flex-row items-center gap-[5px]">
              {/* SVG Icon */}
              <svg
                className="w-[22px] h-[25px] mb-[7px] aspect-square shrink-0  hidden lg:block"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5893 3.27693L9.45538 7.143H2.75895C2.89559 6.32216 3.22283 5.54482 3.71439 4.87339C4.20594 4.20196 4.84811 3.65517 5.5893 3.27693ZM10.7857 2.67871H8.03573C7.86609 2.67871 7.69645 2.68764 7.5268 2.69657L11.9732 7.143H15.25L10.7857 2.67871ZM16.9643 2.67871H13.3214L17.7857 7.143H22.2411C22.0319 5.89485 21.3869 4.76131 20.4208 3.94391C19.4546 3.12651 18.2299 2.67821 16.9643 2.67871ZM11.1446 17.5234L15.6089 15.068C15.749 14.9911 15.866 14.8779 15.9474 14.7403C16.0289 14.6027 16.0718 14.4458 16.0718 14.2859C16.0718 14.126 16.0289 13.969 15.9474 13.8314C15.866 13.6938 15.749 13.5806 15.6089 13.5037L11.1446 11.0484C11.0086 10.9736 10.8556 10.9355 10.7004 10.938C10.5453 10.9404 10.3935 10.9831 10.26 11.0621C10.1264 11.141 10.0157 11.2534 9.93883 11.3882C9.86194 11.5229 9.82148 11.6754 9.82145 11.8305V16.7412C9.82148 16.8964 9.86194 17.0488 9.93883 17.1835C10.0157 17.3183 10.1264 17.4307 10.26 17.5096C10.3935 17.5886 10.5453 17.6313 10.7004 17.6338C10.8556 17.6362 11.0086 17.5981 11.1446 17.5234ZM22.3214 8.92871V16.9644C22.3203 18.3849 21.7555 19.7468 20.7511 20.7512C19.7467 21.7557 18.3848 22.3204 16.9643 22.3216H8.03573C6.61528 22.3204 5.25333 21.7557 4.24891 20.7512C3.2445 19.7468 2.67972 18.3849 2.67859 16.9644V8.92871H22.3214Z"
                  fill="#80B9FF"
                />
              </svg>

              {/* Gradient Text Box */}
              <div
                className="
                          flex items-center justify-center
                          px-[20px] py-[5px]
                          rounded-[12px]
                          bg-gradient-to-r
                          from-[rgba(128,185,255,0.80)]
                          to-[rgba(61,176,203,0.80)]
                          text-white font-comfortaa text-[12px]
                          not-italic font-bold leading-normal text-center
                          w-[255px] min-w-[255px] max-w-[255px]
                          mb-[7px]
                        ">
                {t('carouselSlideResources.carouselSlideResources_Card2_Tag1')}
              </div>
            </div>

            <div className="flex flex-row items-center gap-[5px]">
              {/* SVG Icon */}
              <svg className=' hidden lg:block mb-[7px]' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_33_559)">
                  <path d="M17.4452 4.65109L13.6787 1.08773C13.2781 0.708711 12.7537 0.5 12.2022 0.5H5.03125C3.8466 0.5 2.88281 1.46379 2.88281 2.64844V18.3516C2.88281 19.5362 3.8466 20.5 5.03125 20.5H15.9688C17.1534 20.5 18.1172 19.5362 18.1172 18.3516V6.2118C18.1172 5.62395 17.8723 5.05508 17.4452 4.65109ZM16.3071 5.1875H13.3906C13.2829 5.1875 13.1953 5.09988 13.1953 4.99219V2.24359L16.3071 5.1875ZM15.9688 19.3281H5.03125C4.49277 19.3281 4.05469 18.89 4.05469 18.3516V2.64844C4.05469 2.10996 4.49277 1.67188 5.03125 1.67188H12.0234V4.99219C12.0234 5.74605 12.6368 6.35938 13.3906 6.35938H16.9453V18.3516C16.9453 18.89 16.5072 19.3281 15.9688 19.3281Z" fill="#80B9FF" />
                  <path d="M14.6797 8.3125H6.08594C5.76234 8.3125 5.5 8.57484 5.5 8.89844C5.5 9.22203 5.76234 9.48438 6.08594 9.48438H14.6797C15.0033 9.48438 15.2656 9.22203 15.2656 8.89844C15.2656 8.57484 15.0033 8.3125 14.6797 8.3125Z" fill="#80B9FF" />
                  <path d="M14.6797 11.4375H6.08594C5.76234 11.4375 5.5 11.6998 5.5 12.0234C5.5 12.347 5.76234 12.6094 6.08594 12.6094H14.6797C15.0033 12.6094 15.2656 12.347 15.2656 12.0234C15.2656 11.6998 15.0033 11.4375 14.6797 11.4375Z" fill="#80B9FF" />
                  <path d="M8.92656 14.5625H6.08594C5.76234 14.5625 5.5 14.8248 5.5 15.1484C5.5 15.472 5.76234 15.7344 6.08594 15.7344H8.92656C9.25016 15.7344 9.5125 15.472 9.5125 15.1484C9.5125 14.8248 9.25016 14.5625 8.92656 14.5625Z" fill="#80B9FF" />
                </g>
                <defs>
                  <clipPath id="clip0_33_559">
                    <rect width="20" height="20" fill="white" transform="translate(0.5 0.5)" />
                  </clipPath>
                </defs>
              </svg>

              {/* Gradient Text Box */}
              <div
                className="
                          flex items-center justify-center
                          px-[20px] py-[5px]
                          rounded-[12px]
                          bg-gradient-to-r
                          from-[rgba(128,185,255,0.80)]
                          to-[rgba(61,176,203,0.80)]
                          text-white font-comfortaa text-[12px]
                          not-italic font-bold leading-normal text-center
                          w-[255px] min-w-[255px] max-w-[255px]
                          mb-[7px]
                        ">
                {t('carouselSlideResources.carouselSlideResources_Card2_Tag2')}
              </div>

            </div>

            <div className="flex flex-row items-center gap-[5px]">
              {/* SVG Icon */}
              <svg className='mb-[7px] hidden lg:block' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7199 4.90007L9.98544 6.63456C9.66002 6.96 9.13235 6.96 8.80694 6.63456C8.48151 6.30912 8.4815 5.78149 8.80694 5.45605L10.5414 3.72156C12.3648 1.89817 15.4153 1.89816 17.2387 3.72151L17.3175 3.80033C19.1409 5.62373 19.141 8.6743 17.3176 10.4977L15.5831 12.2322C15.2577 12.5576 14.73 12.5576 14.4046 12.2322C14.0792 11.9068 14.0792 11.3791 14.4046 11.0537L16.1391 9.31919C17.3116 8.14667 17.3116 6.15147 16.1391 4.97893L16.0603 4.90011C14.8878 3.72758 12.8924 3.72754 11.7199 4.90007Z" fill="#80B9FF" />
                <path d="M6.59543 8.76752C6.92086 9.09294 6.92085 9.62061 6.59541 9.94602L4.86093 11.6804C3.68841 12.853 3.68841 14.8483 4.86093 16.0208L4.93977 16.0996C6.11231 17.272 8.10758 17.2721 9.28006 16.0996L11.0146 14.3652C11.34 14.0397 11.8676 14.0397 12.1931 14.3651C12.5185 14.6906 12.5185 15.2182 12.1931 15.5437L10.4586 17.2782C8.63518 19.1015 5.58466 19.1015 3.76126 17.2782L3.68243 17.1993C1.85916 15.3759 1.85907 12.3254 3.68243 10.5019L5.41691 8.76751C5.74235 8.44207 6.26998 8.44208 6.59543 8.76752Z" fill="#80B9FF" />
                <path d="M13.302 8.83628C13.6245 8.508 13.6198 7.98038 13.2915 7.65783C12.9632 7.33529 12.4356 7.33996 12.113 7.66826L7.69799 12.1622C7.37545 12.4904 7.38012 13.0181 7.70842 13.3406C8.03673 13.6632 8.56434 13.6585 8.88688 13.3302L13.302 8.83628Z" fill="#80B9FF" />
              </svg>

              {/* Gradient Text Box */}
              <div
                className="
                          flex items-center justify-center
                          px-[20px] py-[5px]
                          rounded-[12px]
                          bg-gradient-to-r
                          from-[rgba(128,185,255,0.80)]
                          to-[rgba(61,176,203,0.80)]
                          text-white font-comfortaa text-[12px]
                          not-italic font-bold leading-normal text-center
                          w-[255px] min-w-[255px] max-w-[255px]
                          mb-[7px]
                        ">
                {t('carouselSlideResources.carouselSlideResources_Card2_Tag3')}
              </div>
            </div>

            <div className="flex flex-row items-center gap-[5px]">
              {/* SVG Icon */}
              <svg className='mb-[5px] hidden lg:block' width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_33_591)">
                  <path d="M9.36467 10.1341C10.622 10.1341 11.7107 9.65938 12.6004 8.72279C13.4899 7.78636 13.941 6.64058 13.941 5.31689C13.941 3.99365 13.49 2.84771 12.6003 1.91098C11.7105 0.9747 10.6219 0.5 9.36467 0.5C8.10715 0.5 7.01866 0.9747 6.12905 1.91113C5.23944 2.84756 4.78833 3.99349 4.78833 5.31689C4.78833 6.64058 5.23944 7.78652 6.12905 8.72295C7.01895 9.65922 8.10759 10.1341 9.36467 10.1341ZM6.91647 2.73983C7.59908 2.0213 8.39983 1.67203 9.36467 1.67203C10.3294 1.67203 11.1303 2.0213 11.813 2.73983C12.4956 3.45852 12.8276 4.30157 12.8276 5.31689C12.8276 6.33251 12.4956 7.1754 11.813 7.89409C11.1303 8.61278 10.3294 8.96205 9.36467 8.96205C8.40012 8.96205 7.59937 8.61263 6.91647 7.89409C6.23371 7.17555 5.90176 6.33251 5.90176 5.31689C5.90176 4.30157 6.23371 3.45852 6.91647 2.73983Z" fill="#80B9FF" />
                  <path d="M17.372 15.8789C17.3463 15.4892 17.2944 15.064 17.218 14.6151C17.1409 14.1629 17.0416 13.7353 16.9227 13.3445C16.7998 12.9406 16.633 12.5418 16.4264 12.1595C16.2123 11.7628 15.9607 11.4174 15.6783 11.1331C15.383 10.8357 15.0215 10.5966 14.6034 10.4222C14.1868 10.2487 13.7251 10.1608 13.2312 10.1608C13.0373 10.1608 12.8497 10.2446 12.4874 10.4928C12.2645 10.6459 12.0037 10.8229 11.7126 11.0186C11.4638 11.1856 11.1266 11.342 10.7101 11.4836C10.3038 11.622 9.89124 11.6922 9.48391 11.6922C9.07687 11.6922 8.66431 11.622 8.25771 11.4836C7.84167 11.3421 7.50436 11.1857 7.2559 11.0188C6.96758 10.8249 6.70665 10.6479 6.48037 10.4927C6.11841 10.2444 5.93083 10.1606 5.73688 10.1606C5.24286 10.1606 4.78131 10.2487 4.36485 10.4223C3.94707 10.5964 3.5854 10.8355 3.28983 11.1332C3.00745 11.4177 2.75581 11.763 2.54185 12.1595C2.33557 12.5418 2.16858 12.9405 2.04565 13.3447C1.92693 13.7355 1.82764 14.1629 1.75052 14.6151C1.67398 15.0634 1.62223 15.4887 1.59657 15.8793C1.57135 16.2612 1.55859 16.6587 1.55859 17.0604C1.55859 18.1044 1.87388 18.9495 2.49561 19.5729C3.10965 20.1879 3.922 20.4998 4.91018 20.4998H14.0588C15.0467 20.4998 15.859 20.1879 16.4732 19.5729C17.0951 18.95 17.4104 18.1045 17.4104 17.0602C17.4102 16.6572 17.3973 16.2597 17.372 15.8789ZM15.7055 18.7237C15.2998 19.1302 14.7611 19.3278 14.0587 19.3278H4.91018C4.20757 19.3278 3.6689 19.1302 3.26331 18.7239C2.86539 18.3251 2.67202 17.7809 2.67202 17.0604C2.67202 16.6856 2.68376 16.3156 2.70724 15.9603C2.73015 15.6118 2.77697 15.229 2.84641 14.8222C2.91497 14.4204 3.00224 14.0434 3.10603 13.7021C3.20561 13.3747 3.34144 13.0507 3.50988 12.7385C3.67064 12.4409 3.85561 12.1856 4.05971 11.9799C4.25062 11.7875 4.49125 11.6301 4.77479 11.512C5.03702 11.4027 5.33172 11.3429 5.65164 11.3339C5.69064 11.3557 5.76007 11.3974 5.87256 11.4746C6.10145 11.6316 6.36527 11.8107 6.65693 12.0068C6.98569 12.2274 7.40926 12.4267 7.91531 12.5987C8.43267 12.7748 8.96032 12.8642 9.48405 12.8642C10.0078 12.8642 10.5356 12.7748 11.0527 12.5988C11.5591 12.4266 11.9826 12.2274 12.3118 12.0065C12.6102 11.8057 12.8667 11.6317 13.0956 11.4746C13.208 11.3975 13.2775 11.3557 13.3165 11.3339C13.6365 11.3429 13.9312 11.4027 14.1936 11.512C14.477 11.6301 14.7176 11.7877 14.9085 11.9799C15.1126 12.1855 15.2976 12.4408 15.4584 12.7386C15.627 13.0507 15.7629 13.3749 15.8624 13.7019C15.9663 14.0437 16.0537 14.4206 16.1221 14.822C16.1914 15.2296 16.2384 15.6126 16.2613 15.9605V15.9608C16.2849 16.3147 16.2968 16.6845 16.297 17.0604C16.2968 17.781 16.1034 18.3251 15.7055 18.7237Z" fill="#80B9FF" />
                </g>
                <defs>
                  <clipPath id="clip0_33_591">
                    <rect width="19" height="20" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              {/* Gradient Text Box */}
              <div
                className="
                          flex items-center justify-center
                          px-[20px] py-[5px]
                          rounded-[12px]
                          bg-gradient-to-r
                          from-[rgba(128,185,255,0.80)]
                          to-[rgba(61,176,203,0.80)]
                          text-white font-comfortaa text-[12px]
                          not-italic font-bold leading-normal text-center
                          w-[255px] min-w-[255px] max-w-[255px]
                          mb-[7px] 
                        ">
                {t('carouselSlideResources.carouselSlideResources_Card2_Tag4')}
              </div>
            </div>


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
              className="self-stretch text-[32px] w-[172.5px] font-questrial font-normal leading-none mt-5"
              style={{
                color: 'rgba(249, 213, 61, 0.80)',
                WebkitTextStrokeWidth: '0.8px',
                WebkitTextStrokeColor: 'rgba(249, 213, 61, 0.80)',
              }}
            >
              {t('carouselSlideResources.carouselSlideResources_Card3_Title')}
            </p>



          </div>

          {/* Top Right Card */}
          <div style={{ background: "linear-gradient(124deg, rgba(255, 255, 255, 0.20) 0.12%, rgba(242, 93, 144, 0.20) 99.88%)" }}
            className="w-full sm:w-1/2 rounded-xl flex flex-col items-start justify-end p-0">

            <p
              className=" w-[172px]
                        self-stretch
                        text-[24px]
                        font-questrial
                        not-italic
                        font-normal
                        leading-normal
                        text-right
                        text-[rgba(242,93,144,0.80)]
                      "
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: 'rgba(242, 93, 144, 0.80)',
              }}
            >
              {t('carouselSlideResources.carouselSlideResources_Card4_Title')}
            </p>


          </div>
        </div>



        <div style={{ background: "linear-gradient(324deg, rgba(242, 93, 144, 0.60) 0%, rgba(249, 213, 61, 0.60) 100%)" }}
          className="h-[70%] rounded-xl pt-4 pb-4 flex flex-col justify-between">
          <div className="flex gap-0 mb-2 ml-auto">
            <span
              className="flex h-[40px] px-[10px] mt-2 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 text-[#F25D90] text-[14px] font-comfortaa font-semibold leading-none"
            >
              {t('carouselSlideResources.carouselSlideResources_Card5_Tag1')}
            </span>

            <span
              className="flex h-[50px] px-9 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 shadow-[4px_4px_0px_0px_#F25D90] text-[#F25D90] text-[14px] sm:text-[20px] font-comfortaa font-bold leading-none"
            >
              {t('carouselSlideResources.carouselSlideResources_Card5_Tag2')}
            </span>
            <span
              className="flex h-[40px] px-[10px] mt-2 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 text-[#F25D90] text-[14px] font-comfortaa font-semibold leading-none"
            >
              {t('carouselSlideResources.carouselSlideResources_Card5_Tag3')}
            </span>
          </div>

          <div className="relative">
            <button style={{ background: "linear-gradient(90deg, rgba(242, 93, 144, 0.80) 0%, rgba(249, 213, 61, 0.80) 100%)" }}
              className="absolute z-20 right-[220px] top-[10px] px-5 py-[15px] max-w-[308px] rounded-full text-white font-comfortaa text-[16px] font-bold leading-none"
            >
              {t('carouselSlideResources.carouselSlideResources_Card5_Tag4')}
            </button>
          </div>




          <div
            className="relative flex flex-col justify-center items-center gap-0 w-[261px] h-[280px] px-[30px] pt-[30px] pb-[30px] pr-[30px] pl-0 rounded-r-[12px] bg-white/80"
          >
            <div
              className="
                        absolute
                        left-12
                        top-1/2
                        -translate-y-1/2
                        z-20
                        w-[304.463px]
                        h-[203px]
                        aspect-[304.46/203]
                        rounded-[12px]
                        bg-cover
                        bg-no-repeat
                        bg-center
                        hidden lg:block
                        hidden md:block
                      "
              style={{
                backgroundImage: "url('/images/cheerful-asian-lady-attending-video.png')",
                backgroundColor: 'lightgray',
              }}
            />
            <div className="flex flex-row items-center gap-[5px] absolute
                          left-[20px]
                          bottom-[10px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_33_595)">
                  <path d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5136 20 10C20 4.48645 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.66 1.54918 10C1.54918 5.34004 5.34082 1.54918 10 1.54918C14.6592 1.54918 18.4508 5.34004 18.4508 10C18.4508 14.66 14.66 18.4508 10 18.4508Z" fill="#3DB0CB" />
                  <path d="M13.8731 9.15568H10.7747V6.05732C10.7747 5.62975 10.4285 5.28271 10.0001 5.28271C9.57176 5.28271 9.22551 5.62975 9.22551 6.05732V9.15568H6.12715C5.69879 9.15568 5.35254 9.50271 5.35254 9.93029C5.35254 10.3579 5.69879 10.7049 6.12715 10.7049H9.22551V13.8033C9.22551 14.2308 9.57176 14.5779 10.0001 14.5779C10.4285 14.5779 10.7747 14.2308 10.7747 13.8033V10.7049H13.8731C14.3014 10.7049 14.6477 10.3579 14.6477 9.93029C14.6477 9.50271 14.3014 9.15568 13.8731 9.15568Z" fill="#3DB0CB" />
                </g>
                <defs>
                  <clipPath id="clip0_33_595">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p
                className="

                          text-[#3DB0CB]
                          font-comfortaa
                          text-[16px]
                          not-italic
                          font-bold
                          leading-normal
                          tracking-[-0.8px]
                        "
              >
                {t('carouselSlideResources.carouselSlideResources_Card5_Tag5')}
              </p>
            </div>

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
          {t('carouselSlideResources.carouselSlideResources_Card6_Title')}
        </h3>

        <p
          className="self-stretch text-[16px] sm:text-[20px] font-didact font-normal leading-none text-[#282828] mt-[10px] mb-[5px] w-full sm:w-[410px]"
        >
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis1')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis2')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis3')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis4')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis5')}
        </p>

        <p
          className="self-stretch text-[16px] sm:text-[20px] font-didact font-normal leading-none text-[#282828] mb-[15px]"
        >
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis6')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis7')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis8')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis9')} <br />
          {t('carouselSlideResources.carouselSlideResources_Card6_Dis10')}
        </p>

      </div>
    </div>
  );
};

export default CarouselSlideResources;
