'use client';

import { useTranslation } from "react-i18next";
const CarouselSlideMilestones = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
      {/* Left Side */}

      <div className="flex flex-col gap-4 w-full max-w-[360px] mx-auto max-h-[1134px]">
        {/* Avatar Card */}
        <div style={{ background: "linear-gradient(213deg, rgba(128, 185, 255, 0.60) 16.25%, rgba(61, 176, 203, 0.60) 94.68%)" }}
          className="w-full h-[50%] flex-1 rounded-xl flex flex-col items-center justify-center p-4 text-white text-[36px] font-black relative overflow-hidden">



          <div className="relative w-full h-full hidden lg:flex flex-col items-center justify-between pt-[10px] pb-[0px]">
            {/* Text Box */}
            <div className="
                  flex flex-col items-center w-[350px] px-[30px] py-[10px]
                  rounded-[96px]
                  bg-[rgba(61,176,203,0.80)]
                  shadow-[4px_4px_4px_0px_rgba(128,185,255,0.80)]
                  text-start
                  mt-[49px]
                ">
              <p className="
                text-white
                font-comfortaa
                text-[16px]
                not-italic
                font-bold
                leading-normal
              ">
                {t('carouselSlideMilestones.carouselSlideMilestones_Card1_Dis')}
              </p>
            </div>

            {/* Milestones Heading */}
            <p
              className="absolute left-[-20px]  bottom-[135px] text-[#80B9FF] font-questrial text-[78px] not-italic font-normal leading-normal"
              style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#80B9FF'
              }}
            >
              {t('carouselSlideMilestones.carouselSlideMilestones_Card1_Title')}
            </p>

            {/* Image at Bottom Center */}
            <div
              className="absolute top-40 left-[29px] z-20 w-[319px] h-[272px] bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('/images/elegant-bright-woman-wearing-scarf-on-head-having.png')`,
              }}
            />
          </div>


          <p
            style={{
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: '#80B9FF'
            }}
            className="text-[#80B9FF] font-questrial text-[66px] not-italic font-normal leading-normal block lg:hidden"
          >
            {t('carouselSlideMilestones.carouselSlideMilestones_Card1_Title')}
          </p>


        </div>

        {/* Description Card */}
        <div
          style={{
            background:
              'linear-gradient(122deg, rgba(255, 255, 255, 0.00) 0.01%, rgba(61, 176, 203, 0.20) 99.99%)',
          }}
          className="relative w-full h-[50%] max-h-[190px] flex-1 rounded-xl flex flex-col items-start justify-end p-4"
        >
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
              {t('carouselSlideMilestones.carouselSlideMilestones_Card2_Dis')}
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
              className="
                self-stretch
                text-white
                text-[15px]
                font-rocksalt
                not-italic
                font-normal
                leading-normal
                line-through
              "
              style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#C7C7C7',
              }}
            >
              {t('carouselSlideMilestones.carouselSlideMilestones_Card3_Title')}
            </p>

            <p
              className="self-stretch text-[32px] w-[172.5px] font-questrial font-normal leading-none mt-5"
              style={{
                color: 'rgba(249, 213, 61, 0.80)',
                WebkitTextStrokeWidth: '0.8px',
                WebkitTextStrokeColor: 'rgba(249, 213, 61, 0.80)',
              }}
            >
              {t('carouselSlideMilestones.carouselSlideMilestones_Card3_Dis')}
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
              {t('carouselSlideMilestones.carouselSlideMilestones_Card4_Title')}
            </p>
            <div className="flex items-end justify-end w-full h-full">
              <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_31_402)">
                  <path d="M8.45549 27.8208C7.58647 27.3145 6.94939 26.4764 6.68811 25.5186L8.53413 22.231L11.6717 21.3369L13.7994 22.6383C14.2866 22.9363 14.6313 23.4282 14.7458 23.9876C14.86 24.5467 14.7358 25.1336 14.4049 25.598C14.1608 25.9397 13.9078 26.3066 13.652 26.6872C12.502 28.4012 10.2197 28.8995 8.45549 27.8208Z" fill="#F25D90" />
                  <path d="M15.5563 20.9064L13.6061 19.7138L17.8413 13.8554L24.8409 10.2867C24.9373 12.2514 24.069 14.4879 22.3956 16.5307C21.2081 17.9809 20.205 18.8194 19.2348 19.6297C18.8447 19.9562 18.4408 20.2936 18.0256 20.6704C17.3488 21.2849 16.3337 21.3817 15.5563 20.9064Z" fill="#F25D90" />
                  <path d="M10.5416 20.6457C10.0544 20.3477 9.45972 20.2652 8.90934 20.418C8.35934 20.5712 7.89315 20.9502 7.63003 21.4571C7.39345 21.9127 7.17197 22.3425 6.96849 22.7374C6.51291 23.623 6.43809 24.6161 6.68815 25.5185L11.6716 21.3369L10.5416 20.6457Z" fill="#F25D90" fillOpacity="0.6" />
                  <path d="M24.7687 9.61985C24.5412 8.27842 23.8394 7.21415 22.739 6.5409C21.2627 5.63845 19.521 5.52936 17.8344 6.23533C16.1134 6.95582 14.4867 8.50814 13.1315 10.724C12.4247 11.8801 11.5165 13.4791 10.4325 15.4757C10.0174 16.241 10.1328 17.1562 10.6648 17.7892C10.8049 17.9563 10.9742 18.1042 11.17 18.2236L13.6062 19.7138L24.8409 10.2867C24.8296 10.0607 24.8058 9.83816 24.7687 9.61985Z" fill="#F25D90" fillOpacity="0.6" />
                  <path d="M16.417 32.0065L16.4487 32.0862C16.6028 32.4786 16.8168 32.833 17.0759 33.1419C17.4349 33.5697 17.8809 33.9107 18.3774 34.1467L21.9355 32.8996L23.3609 29.965L22.4488 27.6436C22.2399 27.1121 21.8153 26.6872 21.2842 26.4773C20.7535 26.2678 20.154 26.2881 19.6392 26.5334C19.2602 26.7145 18.855 26.8999 18.4357 27.0857C16.5481 27.9207 15.661 30.0818 16.417 32.0065Z" fill="#F25D90" fillOpacity="0.6" />
                  <path d="M24.4594 26.2142L25.2953 28.3418L31.8001 25.1882L36.53 18.9147C34.6119 18.4786 32.2586 18.9454 29.9563 20.2385C28.3219 21.1563 27.3219 21.9985 26.3554 22.8133C25.9662 23.1407 25.5637 23.4798 25.1207 23.8233C24.3979 24.3832 24.1264 25.366 24.4594 26.2142Z" fill="#F25D90" fillOpacity="0.6" />
                  <path d="M23.3608 29.9651L18.3773 34.1467C19.2227 34.5497 20.2136 34.6485 21.1649 34.3536C21.5891 34.2218 22.0509 34.0784 22.5406 33.9244C23.0856 33.7533 23.5397 33.36 23.7861 32.845C24.032 32.3295 24.0542 31.7295 23.8453 31.198L23.3608 29.9651Z" fill="#F25D90" />
                  <path d="M36.53 18.9147L25.2952 28.3418L26.3397 30.9997C26.4233 31.2134 26.5396 31.4057 26.6797 31.5727C27.2108 32.2065 28.0921 32.4791 28.9178 32.2032C31.0723 31.4824 32.8047 30.8657 34.066 30.3704C36.4836 29.4205 38.2948 28.0882 39.3031 26.5183C40.2913 24.98 40.4862 23.2458 39.8539 21.6352C39.382 20.4346 38.4557 19.5586 37.1741 19.1017C36.9656 19.0273 36.7506 18.9653 36.53 18.9147Z" fill="#F25D90" />
                </g>
                <defs>
                  <clipPath id="clip0_31_402">
                    <rect width="30" height="30" fill="white" transform="translate(23.7163 0.867432) rotate(50)" />
                  </clipPath>
                </defs>
              </svg>
            </div>


          </div>
        </div>



        <div style={{ background: "linear-gradient(324deg, rgba(242, 93, 144, 0.60) 0%, rgba(249, 213, 61, 0.60) 100%)" }}
          className="h-[70%] rounded-xl pt-4 pb-4 flex flex-col justify-between">
          <div className="flex gap-0 mb-2 ml-auto">
            <span
              className="flex h-[40px] px-[10px] mt-2 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 text-[#F25D90] text-[14px] font-comfortaa font-semibold leading-none"
            >
              {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag1')}
            </span>

            <span

              className="flex h-[50px] px-9 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 shadow-[4px_4px_0px_0px_#F25D90] text-[#F25D90] text-[20px] font-comfortaa font-bold leading-none"
            >
              {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag2')}
            </span>

            <span
              className="flex h-[40px] px-[10px] mt-2 py-[9px] flex-col justify-center items-center rounded-full bg-white/80 text-[#F25D90] text-[14px] font-comfortaa font-semibold leading-none"
            >
              {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag3')}
            </span>
          </div>

          <div className="relative hidden lg:block">
            <button
              className="
                        absolute
                        right-10
                        top-[-20px]
                        inline-flex
                        justify-center
                        items-center
                        px-[38px]
                        py-[14px]
                        max-w-[308px]
                        rounded-[96px]
                        text-white
                        font-comfortaa
                        text-[18px]
                        not-italic
                        font-bold
                        leading-normal
                        bg-gradient-to-r
                        from-[#80B9FF]
                        to-[#3DB0CB]
                        shadow-[0px_4px_4px_0px_rgba(199,199,199,0.60)]
                      "
            >
              {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag4')}
            </button>

            <div className=" absolute
                        right-10
                        top-[15px] w-[50px] h-[50px] shrink-0 aspect-square">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_31_443)">
                  <path d="M49.5079 42.2895L39.5576 32.3388L46.6564 28.2385C47.2111 27.9181 47.5338 27.3092 47.4877 26.6703C47.4416 26.0312 47.0345 25.4748 46.4396 25.2376L14.7845 12.6104C14.164 12.3626 13.4554 12.5085 12.9828 12.9809C12.5103 13.4536 12.3643 14.162 12.612 14.7826L25.2372 46.4413C25.4746 47.0363 26.031 47.4435 26.67 47.4897C27.3091 47.5361 27.9182 47.2132 28.2384 46.6583L32.3384 39.5595L42.288 49.5102C42.6015 49.8238 43.0271 50.0001 43.4704 50.0001C43.914 50.0001 44.3392 49.8238 44.6527 49.5102L49.5081 44.6541C50.1609 44.0011 50.1609 42.9425 49.5079 42.2895Z" fill="#F25D90" />
                  <path d="M7.34177 4.97505C6.68874 4.32253 5.63032 4.32236 4.97695 4.97505C4.32409 5.62808 4.32409 6.68684 4.97695 7.33987L8.69227 11.0552C9.0187 11.3816 9.44648 11.5449 9.87459 11.5449C10.3024 11.5449 10.7303 11.3816 11.0567 11.0552C11.7098 10.4022 11.7098 9.34357 11.0567 8.69054L7.34177 4.97505Z" fill="#F25D90" />
                  <path d="M8.60085 16.5346C8.60085 15.6114 7.8522 14.8625 6.92863 14.8625H1.67442C0.751019 14.8625 0.00219727 15.6112 0.00219727 16.5346C0.00219727 17.458 0.75085 18.2068 1.67442 18.2068H6.92863C7.8522 18.2067 8.60085 17.458 8.60085 16.5346Z" fill="#F25D90" />
                  <path d="M7.923 21.695L4.20718 25.4107C3.55431 26.0637 3.55431 27.1225 4.20718 27.7753C4.53378 28.1018 4.96172 28.2651 5.3895 28.2651C5.81728 28.2651 6.24539 28.1018 6.57182 27.7753L10.2875 24.0598C10.9405 23.4068 10.9405 22.3481 10.2875 21.695C9.63462 21.0425 8.57637 21.0423 7.923 21.695Z" fill="#F25D90" />
                  <path d="M16.5356 8.59899C17.459 8.59899 18.2078 7.85034 18.2078 6.92677V1.67205C18.2078 0.748653 17.4591 0 16.5356 0C15.6123 0 14.8635 0.748485 14.8635 1.67205V6.92694C14.8635 7.85034 15.6122 8.59899 16.5356 8.59899Z" fill="#F25D90" />
                  <path d="M22.8779 10.7754C23.306 10.7754 23.7338 10.6122 24.0602 10.2857L27.7754 6.5704C28.4284 5.91737 28.4284 4.85861 27.7754 4.20558C27.1224 3.55289 26.0636 3.55289 25.4107 4.20558L21.6956 7.92107C21.0426 8.5741 21.0426 9.63286 21.6956 10.2857C22.0222 10.6122 22.45 10.7754 22.8779 10.7754Z" fill="#F25D90" />
                </g>
                <defs>
                  <clipPath id="clip0_31_443">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>






          <div
            className="flex flex-col justify-center items-center w-[261px] h-[290px] px-[30px] pt-[30px] pb-[30px] pr-[30px] pl-[0px] rounded-r-[12px] bg-white/80"
          >
            <div
              className="
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-[10px]
                        p-[5px]
                        self-stretch
                        rounded-[0px_96px_96px_0px]
                        text-white
                        font-comfortaa
                        text-[14px]
                        not-italic
                        font-bold
                        leading-normal
                        mb-[10px]
                      "
              style={{
                background: 'linear-gradient(90deg, rgba(128, 185, 255, 0.50) 0%, rgba(61, 176, 203, 0.50) 100%)',
              }}
            >
              <p >
                {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag5')}
              </p>
            </div>
            <div
              className="
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-[10px]
                        p-[5px]
                        self-stretch
                        rounded-[0px_96px_96px_0px]
                        text-white
                        font-comfortaa
                        text-[14px]
                        not-italic
                        font-bold
                        leading-normal
                        mb-[10px]
                      "
              style={{
                background: 'linear-gradient(90deg, rgba(128, 185, 255, 0.60) 0%, rgba(61, 176, 203, 0.60) 100%)',
              }}
            >
              <p >
                {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag6')}
              </p>
            </div>
            <div
              className="
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-[10px]
                        p-[5px]
                        self-stretch
                        rounded-[0px_96px_96px_0px]
                        text-white
                        font-comfortaa
                        text-[14px]
                        not-italic
                        font-bold
                        leading-normal
                        mb-[10px]
                      "
              style={{
                background: 'linear-gradient(90deg, rgba(128, 185, 255, 0.70) 0%, rgba(61, 176, 203, 0.70) 100%)',
              }}
            >
              <p >
                {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag7')}
              </p>
            </div>
            <div
              className="
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-[10px]
                        p-[5px]
                        self-stretch
                        rounded-[0px_96px_96px_0px]
                        text-white
                        font-comfortaa
                        text-[14px]
                        not-italic
                        font-bold
                        leading-normal
                      "
              style={{
                background: 'linear-gradient(90deg, rgba(128, 185, 255, 0.80) 0%, rgba(61, 176, 203, 0.80) 100%)',
              }}
            >
              <p >
                {t('carouselSlideMilestones.carouselSlideMilestones_Card5_Tag8')}
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
          {t('carouselSlideMilestones.carouselSlideMilestones_Card6_Title')}
        </h3>

        <p
          className="self-stretch text-[16px] sm:text-[20px] font-didact font-normal leading-none text-[#282828] mt-[10px] mb-[15px]"
        >
          {t('carouselSlideMilestones.carouselSlideMilestones_Card6_Dis')}
        </p>

      </div>
    </div>
  );
};

export default CarouselSlideMilestones;

