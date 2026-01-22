import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useTranslation } from "react-i18next";


export const DropdownContentMentors = ({ setActiveDropdown }) => {
  const { t } = useTranslation();

  return (
    <div onMouseLeave={() => setActiveDropdown(null)} className="absolute top-full left-0 right-0 z-50 py-[15px] animate-slide-down">
    <div className="container mx-auto px-4">
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto 
                 justify-items-center lg:justify-items-stretch">
        {/* Main Card */}
        <div
          style={{
            borderRadius: '12px',
            border: '12px solid transparent',
            padding: '2px',
            background: 'linear-gradient(215deg, rgba(61,176,203,0.6) 0.9%, rgba(128,185,255,0.6) 100%)',
          }}
          // className="lg:col-span-1 w-[390px] h-[450px]"
            className="lg:col-span-1 w-full max-w-[390px] h-[450px] mx-auto"
        >
          <Card
            style={{
              background: 'rgb(234, 245, 250)',
              borderRadius: '12px',
            }}
            className="w-full h-full"
          >



            <CardContent className="p-0">
              <div className="mb-4">
                <Image
                  src="/images/ForMentors.png?height=200&width=300"
                  alt="Learning mentors illustration"
                  width={358}
                  height={325}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <h2
                className="self-stretch text-[26px] leading-[26px] font-normal text-[#004699] font-[Questrial] ml-[15px]"
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                  WebkitTextStrokeColor: '#004699',
                }}
              >
                  {t('forMentors.what_type')}
              </h2>
              <Link href="/mentorsQuiz" className="flex items-center space-x-2 mb-4">
              <Button
                size="sm"
                className="text-[#F25D90] text-[20px] leading-[20px] font-bold font-[Comfortaa] text-center px-3 py-1 flex items-center gap-2"
              >
                {t('forMentors.take_quiz')}
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2271_232)">
                    <path d="M10 0.505127C4.47727 0.505127 0 4.98239 0 10.5051C0 16.0279 4.47727 20.5051 10 20.5051C15.5227 20.5051 20 16.0279 20 10.5051C20 4.98239 15.5227 0.505127 10 0.505127ZM10 18.8384C5.39773 18.8384 1.66668 15.1074 1.66668 10.5051C1.66668 5.90286 5.39773 2.17181 10 2.17181C14.6023 2.17181 18.3333 5.90286 18.3333 10.5051C18.3333 15.1074 14.6023 18.8384 10 18.8384Z" fill="#F25D90" />
                    <path d="M8.92259 5.7492C8.59716 5.42377 8.0695 5.42377 7.74407 5.7492C7.41864 6.07463 7.41864 6.60229 7.74407 6.92771L11.3215 10.5051L7.74407 14.0826C7.41864 14.408 7.41864 14.9356 7.74407 15.2611C8.0695 15.5865 8.59716 15.5865 8.92259 15.2611L13.0893 11.0944C13.4147 10.769 13.4147 10.2413 13.0893 9.91588L8.92259 5.7492Z" fill="#F25D90" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2271_232">
                      <rect width="20" height="20" fill="white" transform="translate(0 0.505127)" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
              </Link>

            </CardContent>
          </Card>
        </div>

        {/* Guide Card */}
        <div
          style={{
            borderRadius: '12px',
            border: '12px solid transparent',
            padding: '2px',
            background: 'linear-gradient(215deg, rgba(61,176,203,0.6) 0.9%, rgba(128,185,255,0.6) 100%)',
          }}
          className="lg:col-span-1 w-[390px] h-[450px]"
        >
          <Card
            style={{
              background: 'rgb(234, 245, 250)',
              borderRadius: '12px',
            }}
            className="w-full h-full"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3
                  className="self-stretch text-[20px] leading-[36px] font-bold text-[#282828] font-[Comfortaa] mb-[30px]"
                >
                    {t('forMentors.learn')}
                </h3>
              </div>

              <div className="">
                  <div className="flex items-center gap-4">
                    <svg className="mt-[7px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2271_244)">
                        <path d="M30.1513 8.53293L31.6325 7.05173C32.4171 6.26707 31.8615 4.9177 30.7487 4.9177H27.0822V1.25145C27.0822 0.141586 25.735 -0.419204 24.9482 0.367416L23.467 1.84862C21.175 0.637923 18.6132 0.00144941 15.9992 0.00144941C7.15691 0.00144941 -6.10352e-05 7.1572 -6.10352e-05 16.0007C-6.10352e-05 24.843 7.15569 31.9999 15.9992 31.9999C24.8415 31.9999 31.9984 24.8442 31.9984 16.0007C31.9984 13.3867 31.3622 10.8252 30.1513 8.53293ZM25.8322 7.4177H27.7309L25.3144 9.8342H22.1657V6.68552L24.5822 4.26902V6.1677C24.5822 6.85813 25.1418 7.4177 25.8322 7.4177ZM15.9992 29.5002C8.5385 29.5002 2.49994 23.4624 2.49994 16.0007C2.49994 8.54001 8.53753 2.5012 15.9992 2.5012C17.943 2.5012 19.852 2.91771 21.6007 3.71507L20.0319 5.28391C19.7975 5.51829 19.6657 5.83616 19.6657 6.1677V10.5664L15.1154 15.1169C14.6274 15.6049 14.6274 16.3965 15.1154 16.8845C15.6034 17.3725 16.3949 17.3728 16.8832 16.8845L21.4335 12.3342H25.8322C26.1637 12.3342 26.4816 12.2024 26.716 11.9682L28.2851 10.3991C29.0824 12.1479 29.4987 14.0569 29.4987 16.0007C29.4987 23.4614 23.4611 29.5002 15.9992 29.5002ZM25.8561 16.0007C25.8561 21.4358 21.4345 25.8576 15.9992 25.8576C10.5641 25.8576 6.14227 21.4358 6.14227 16.0007C6.14227 10.5656 10.5641 6.14378 15.9992 6.14378C16.6896 6.14378 17.2492 6.70335 17.2492 7.39378C17.2492 8.0842 16.6896 8.64377 15.9992 8.64377C11.9426 8.64377 8.64226 11.9441 8.64226 16.0007C8.64226 20.0573 11.9426 23.3576 15.9992 23.3576C20.0558 23.3576 23.3564 20.0573 23.3564 16.0007C23.3564 15.3103 23.9159 14.7507 24.6061 14.7507C25.2965 14.7507 25.8561 15.3103 25.8561 16.0007Z" fill="#004699" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2271_244">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <Link
                        href="/pbl" onClick={() => {
                          setActiveDropdown(null);
                        }}>
                      <h4
                        // onClick={() => {
                        //   window.open(
                        //     `/pbl`,
                        //     "_blank"
                        //   );
                        //   setActiveDropdown(null);
                        // }} 
                      // onClick={() => window.open(`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=mentor#/`, "_blank")}
                        className="self-stretch text-[28px] leading-[28px] font-normal text-[#004699] font-[Questrial] cursor-pointer"
                        style={{
                          WebkitTextStrokeWidth: '0.5px',
                          WebkitTextStrokeColor: '#004699',
                        }}
                      >
                        {t('forMentors.learning_Projects')}
                        

                      </h4>
                      </Link>
                      <p
                      className="mt-2 flex flex-col justify-center flex-[1_0_0] self-stretch text-[18px] leading-[18px] font-normal text-[#282828] font-[Comfortaa]"
                    >
                        {t('forMentors.create_dynamic_paths')}
                    </p>

                    </div>
                  </div>

                  <div className="flex items-center gap-[12px] mt-[55px] mb-[55px]">
                    <svg className="mt-[7px]" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.7212 17.533L15.2317 14.054C14.9102 13.8149 14.5441 13.6887 14.1724 13.6887C13.2232 13.6887 12.4802 14.4981 12.4802 15.5317V22.4675C12.4802 23.501 13.2232 24.3105 14.1724 24.3105C14.5441 24.3105 14.9102 24.1842 15.2388 23.94L19.8008 20.4776C20.2445 20.1475 20.4998 19.6376 20.4998 19.0787C20.4998 18.4739 20.2033 17.892 19.7212 17.533ZM14.3434 22.2806L14.3517 15.7292L18.5796 19.0059L18.6081 19.0451L14.3434 22.2806Z" fill="#004699" />
                      <path d="M33.7472 11.0402C33.0699 10.674 32.2537 10.7053 31.6172 11.1205L27.854 13.5628V12.3401C27.854 9.76836 25.7692 7.68311 23.197 7.68311H7.82367C5.25154 7.68311 3.16669 9.76836 3.16669 12.3401V25.6599C3.16669 28.2316 5.25154 30.3169 7.82367 30.3169H23.197C25.7692 30.3169 27.854 28.2316 27.854 25.6599V24.4308L31.6156 26.8779C31.958 27.1011 32.3519 27.2139 32.7477 27.2139C33.0901 27.2139 33.4341 27.1296 33.7476 26.9598C34.4173 26.5968 34.8334 25.9029 34.8334 25.1489V12.8515C34.8334 12.097 34.4173 11.4031 33.7472 11.0402ZM25.9912 25.6599C25.9912 27.2005 24.738 28.4541 23.197 28.4541H7.82367C6.28308 28.4541 5.02948 27.2009 5.02948 25.6599V12.3401C5.02948 10.7995 6.28269 9.5459 7.82367 9.5459H23.197C24.7376 9.5459 25.9912 10.7991 25.9912 12.3401V25.6599ZM32.9706 25.1489C32.9706 25.2241 32.9334 25.2823 32.8601 25.3218C32.815 25.3464 32.7267 25.3788 32.6321 25.3175L27.854 22.2086V15.7842L32.6333 12.6833C32.7259 12.6227 32.8146 12.6548 32.8601 12.6793C32.9334 12.7189 32.9706 12.7771 32.9706 12.8527V25.1489Z" fill="#004699" />
                    </svg>
                    <div className="flex flex-col">
                    <Link
                        href="/mentors" onClick={() => {
                        setActiveDropdown(null);
                      }}>
                    <h4
                      className="cursor-pointer text-[28px] leading-none font-normal text-[#004699] font-[Questrial]"
                      style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#004699' }}
                        >{t('forMentors.mentor_Session')}
                      
                    </h4>
                    </Link>
                    <p
                      className="mt-2 flex flex-col justify-center flex-[1_0_0] self-stretch text-[18px] leading-[18px] font-normal text-[#282828] font-[Comfortaa]"
                    >
                      {t('forMentors.facilitate_learning')}
                    </p>
                    </div>
                  </div>


                  <div className="flex items-center gap-[12px]">
                    <svg
                      className="block w-[36px] h-[36px] shrink-0"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG content unchanged */}
                      <g clipPath="url(#clip0_2271_261)">
                        <path d="M12.5158 26.5126C13.476 25.6226 14.0787 24.3518 14.0787 22.9424C14.0787 20.2572 11.8941 18.0729 9.20914 18.0729C6.52417 18.0729 4.33961 20.2572 4.33961 22.9424C4.33961 24.3531 4.94309 25.6253 5.9052 26.5153C3.35614 27.7476 1.59375 30.3594 1.59375 33.3752V34.4746C1.59375 35.041 2.05277 35.5 2.61914 35.5H15.7989C16.3652 35.5 16.8243 35.041 16.8243 34.4746V33.3763C16.8243 29.7164 14.4266 27.4349 12.5158 26.5126ZM9.20914 20.1237C10.7633 20.1237 12.0276 21.388 12.0276 22.9424C12.0276 24.4965 10.7633 25.7609 9.20914 25.7609C7.65477 25.7609 6.39039 24.4965 6.39039 22.9424C6.39039 21.388 7.65477 20.1237 9.20914 20.1237ZM14.7735 33.4492H3.64453V33.3752C3.64453 30.3076 6.14018 27.8117 9.20888 27.8117C12.2816 27.8117 14.7735 30.2977 14.7735 33.3763V33.4492Z" fill="#004699" />
                        <path d="M30.0886 26.5126C31.0489 25.6226 31.6513 24.3518 31.6513 22.9424C31.6513 20.2574 29.467 18.0729 26.782 18.0729C24.097 18.0729 21.9125 20.2572 21.9125 22.9424C21.9125 24.3518 22.5149 25.6226 23.4751 26.5126C21.5696 27.4325 19.1666 29.7156 19.1666 33.3763V34.4746C19.1666 35.041 19.6259 35.5 20.192 35.5H33.3718C33.9381 35.5 34.3971 35.041 34.3971 34.4746V33.3763C34.3971 29.7276 32.011 27.4405 30.0886 26.5126ZM23.9633 22.9424C23.9633 21.388 25.2276 20.1237 26.782 20.1237C28.3361 20.1237 29.6005 21.388 29.6005 22.9424C29.6005 24.4965 28.3361 25.7609 26.782 25.7609C25.2276 25.7609 23.9633 24.4965 23.9633 22.9424ZM32.3464 33.4492H21.2174V33.3763C21.2174 30.3039 23.7034 27.812 26.782 27.812C29.8545 27.812 32.3464 30.2977 32.3464 33.3763V33.4492Z" fill="#004699" />
                        <path d="M21.9056 8.39313C21.4524 8.05347 20.8097 8.14533 20.47 8.59847C19.8892 9.37312 18.9643 9.83562 17.9955 9.83562C17.0267 9.83562 16.1017 9.37312 15.5209 8.59847C15.1813 8.14533 14.5385 8.05347 14.0856 8.39313C13.6325 8.73279 13.5404 9.37553 13.88 9.82868C14.8461 11.1171 16.3845 11.8864 17.9955 11.8864C19.6065 11.8864 21.1448 11.1171 22.1109 9.82868C22.4506 9.37553 22.3587 8.73279 21.9056 8.39313Z" fill="#004699" />
                        <path d="M16.8243 5.91852C16.8243 6.48489 16.3653 6.94391 15.7989 6.94391C15.2325 6.94391 14.7735 6.48489 14.7735 5.91852C14.7735 5.35242 15.2325 4.89313 15.7989 4.89313C16.3653 4.89313 16.8243 5.35242 16.8243 5.91852Z" fill="#004699" />
                        <path d="M21.2174 5.91852C21.2174 6.48489 20.7584 6.94391 20.192 6.94391C19.6256 6.94391 19.1666 6.48489 19.1666 5.91852C19.1666 5.35242 19.6256 4.89313 20.192 4.89313C20.7584 4.89313 21.2174 5.35242 21.2174 5.91852Z" fill="#004699" />
                        <path d="M26.782 15.7305C28.5586 15.7305 30.004 14.2851 30.004 12.5086V3.72197C30.004 1.92673 28.5473 0.5 26.782 0.5H9.20911C7.41254 0.5 5.98688 1.95771 5.98688 3.72197V12.5086C5.98688 14.2851 7.4323 15.7305 9.20911 15.7305H14.3513L17.0785 21.1846C17.252 21.532 17.6072 21.7515 17.9954 21.7515C18.384 21.7515 18.7388 21.532 18.9127 21.1846L21.6396 15.7305H26.782ZM20.0889 14.2466L17.9954 18.4331L15.9022 14.2466C15.7284 13.8992 15.3735 13.6797 14.9849 13.6797H9.20911C8.56317 13.6797 8.03766 13.1542 8.03766 12.5086V3.72197C8.03766 3.08457 8.55302 2.55078 9.20911 2.55078H26.782C27.4322 2.55078 27.9532 3.07816 27.9532 3.72197V12.5086C27.9532 13.1542 27.4277 13.6797 26.782 13.6797H21.0059C20.6174 13.6797 20.2625 13.8992 20.0889 14.2466Z" fill="#004699" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2271_261">
                          <rect width="35" height="35" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="flex flex-col">
                    <Link
                      href="/mentors" onClick={() => {
                        setActiveDropdown(null);
                      }}>
                    <h4
                      className="text-[28px] leading-none font-normal text-[#004699] font-[Questrial]"
                      style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#004699' }}
                        >{t('forMentors.co_Learning')}
                      
                    </h4>
                    </Link>
                    <p
                      className="mt-2 flex flex-col justify-center flex-[1_0_0] self-stretch text-[18px] leading-[18px] font-normal text-[#282828] font-[Comfortaa]"
                    >
                      {t('forMentors.support_collaboration')}
                    </p>
                    </div>
                  </div>


              </div>
            </CardContent>
          </Card>
        </div>
        {/* Support Card */}
        <div
          style={{
            borderRadius: '12px',
            border: '12px solid transparent',
            padding: '2px',
            background: 'linear-gradient(215deg, rgba(61,176,203,0.6) 0.9%, rgba(128,185,255,0.6) 100%)',
          }}
          className="lg:col-span-1 w-[390px] h-[450px]"
        >
          <Card
            style={{
              background: 'rgb(234, 245, 250)',
              borderRadius: '12px',
            }}
            className="w-full h-full"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <h3
                  className="self-stretch text-[20px] leading-[36px] font-bold text-[#282828] font-[Comfortaa] mb-[30px]"
                  >
                    {t('forMentors.support')}
                    
                    {/* {t('forMentors.support')} */}
                  </h3>
              </div>

              <div className="">
                <div className="flex items-center gap-4">
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8433 21.4513C14.9284 21.4513 14.1876 22.2138 14.1876 23.1288C14.1876 24.022 14.9066 24.8063 15.8433 24.8063C16.7801 24.8063 17.5208 24.022 17.5208 23.1288C17.5208 22.2138 16.7584 21.4513 15.8433 21.4513Z" fill="#004699" />
                    <path d="M16.1268 8.75C13.1858 8.75 11.8351 10.4928 11.8351 11.6693C11.8351 12.5189 12.554 12.9111 13.1422 12.9111C14.3186 12.9111 13.8393 11.2336 16.0615 11.2336C17.1508 11.2336 18.0222 11.7129 18.0222 12.715C18.0222 13.8915 16.8022 14.5668 16.0833 15.1768C15.4515 15.7214 14.6236 16.6147 14.6236 18.4882C14.6236 19.6211 14.9286 19.9479 15.8218 19.9479C16.8893 19.9479 17.1071 19.4686 17.1071 19.0547C17.1071 17.9218 17.129 17.2683 18.3272 16.3315C18.9154 15.874 20.7672 14.3926 20.7672 12.3447C20.7672 10.2968 18.9154 8.75 16.1268 8.75Z" fill="#004699" />
                    <path d="M16.3334 0C7.49062 0 0.333374 7.15606 0.333374 16V30.75C0.333374 31.4404 0.892999 32 1.58337 32H16.3334C25.1761 32 32.3334 24.8439 32.3334 16C32.3334 7.15725 25.1773 0 16.3334 0ZM16.3334 29.5H2.83337V16C2.83337 8.53894 8.87131 2.5 16.3334 2.5C23.7944 2.5 29.8334 8.53794 29.8334 16C29.8334 23.4611 23.7954 29.5 16.3334 29.5Z" fill="#004699" />
                  </svg>
                  <div>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_MENTOR_HELP_URL}`} >
                    <h4
                      className="self-stretch text-[28px] leading-[28px] font-normal text-[#004699] font-[Questrial]"
                      style={{
                        WebkitTextStrokeWidth: '0.5px',
                        WebkitTextStrokeColor: '#004699',
                      }}
                    >
                        {t('forMentors.help_Center')}
                    </h4>
                    </Link>
                    <p
                      className="mt-2 flex flex-col justify-center flex-[1_0_0] self-stretch text-[18px] leading-[18px] font-normal text-[#282828] font-[Comfortaa]"
                    >
                        {t('forMentors.get_help')}
                    </p>

                  </div>
                </div>

                <div className="flex items-center gap-4 mt-[55px]">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2271_288)">
                      <path d="M28.2741 17.997L26.52 16.243L24.0341 18.7289L25.7882 20.4828C27.1588 21.8536 27.1588 24.0843 25.7882 25.4548C24.4177 26.8254 22.187 26.8254 20.8162 25.4548L11.6044 16.243L9.11853 18.7289L18.3303 27.9407C21.076 30.6864 25.5284 30.6864 28.2741 27.9407C31.0198 25.1951 31.0198 20.7426 28.2741 17.997Z" fill="#004699" />
                      <path d="M9.85051 25.4548C8.47974 26.8254 6.24905 26.8254 4.87851 25.4548C3.50797 24.0843 3.50797 21.8536 4.87851 20.4828L14.0903 11.271L11.6044 8.78516L2.39262 17.997C-0.353043 20.7426 -0.353043 25.1951 2.39262 27.9407C5.13829 30.6864 9.59073 30.6864 12.3364 27.9407L14.0903 26.1866L11.6044 23.7007L9.85051 25.4548Z" fill="#004699" />
                      <path d="M20.8162 4.54514C22.187 3.17459 24.4177 3.17459 25.7882 4.54514C27.1588 5.91568 27.1588 8.14636 25.7882 9.51714L16.5764 18.7289L19.0623 21.2148L28.2741 12.003C31.0198 9.25735 31.0198 4.80492 28.2741 2.05925C25.5284 -0.686417 21.076 -0.686417 18.3303 2.05925L16.5764 3.8134L19.0623 6.29929L20.8162 4.54514Z" fill="#004699" />
                      <path d="M4.14677 13.7569L6.63266 11.2711L4.87851 9.51714C3.50797 8.14636 3.50797 5.91568 4.87851 4.54514C6.24905 3.17459 8.47974 3.17459 9.85051 4.54514L19.4262 14.1209L21.9121 11.635L12.3364 2.05925C9.59073 -0.686417 5.13829 -0.686417 2.39262 2.05925C-0.353043 4.80492 -0.353043 9.25735 2.39262 12.003L4.14677 13.7569Z" fill="#004699" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2271_288">
                        <rect width="30" height="30" fill="white" transform="translate(0.333374)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                      <Link
                        href='https://humdrum-art-946.notion.site/261463789b58804da257fc956fc9891a?v=261463789b58802b9ada000cb0a584b0&source=copy_link' onClick={() => {
                          setActiveDropdown(null);
                        }} >
                    <h4
                      className="self-stretch text-[28px] leading-[28px] font-normal text-[#004699] font-[Questrial]"
                      style={{
                        WebkitTextStrokeWidth: '0.5px',
                        WebkitTextStrokeColor: '#004699',
                      }}
                    >
                          {t('forMentors.community')}   
                    </h4>
                     </Link>
                    <p
                      className="mt-2 flex flex-col justify-center flex-[1_0_0] self-stretch text-[18px] leading-[18px] font-normal text-[#282828] font-[Comfortaa]"
                    >
                        {t('forMentors.check_out_latest_updates')}
                    </p>

                  </div>
                </div>

                  <div className="flex items-center gap-4 mt-[55px]">
                    <Image
                      src="/images/download.svg"   // update path to your asset
                      alt="icon"
                      width={31}
                      height={30}
                    />
                    <div>
                      <Link
                        href='/pricing?mentor=true' onClick={() => {
                          setActiveDropdown(null);
                        }} >
                        <h4
                          className="self-stretch text-[28px] leading-[28px] font-normal text-[#004699] font-[Questrial]"
                          style={{
                            WebkitTextStrokeWidth: '0.5px',
                            WebkitTextStrokeColor: '#004699',
                          }}
                        >
                          {t('forMentors.pricing')}
                        </h4>
                      </Link>
                      <p
                        className="mt-2 flex flex-col justify-center flex-[1_0_0] self-stretch text-[18px] leading-[18px] font-normal text-[#282828] font-[Comfortaa]"
                      >
                        {t('forMentors.get_started_for_free')}
                      </p>

                    </div>
                  </div>


              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
  );
}; 
