"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useTranslation } from "react-i18next";
export function SignupForm() {
  const { t } = useTranslation();

  return (
    <Card style={{ background: 'linear-gradient(161deg, rgba(128, 185, 255, 0.02) 0.66%, rgba(128, 185, 255, 0.40) 99.34%)' }} className="shadow-xl border-0 rounded-[12px]">
      <CardContent className="pt-[60px] lg:p-[50px]">
        <div className="mb-6">
          <h2
            className="self-stretch text-[30px] leading-[30px] font-bold font-comfortaa text-[#004699]"
          >
            {t('signup.signup')}
          </h2>
          <p
            className="text-[24px] leading-[24px] font-bold font-comfortaa mt-[20px]"
            style={{ color: 'rgba(0, 70, 153, 0.8)' }}
          >
            {t('signup.signup_Dis')}{" "}
            <Link href="/login" className="text-[rgba(242,93,144,0.8)] text-[24px] leading-[24px] font-bold font-comfortaa hover:underline">
              {t('signup.signup_Login')}
            </Link>
          </p>
        </div>

        {/* Social Login */}
        <div className="space-y-3 mb-[20px]">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-[15px] py-8 px-0 w-full max-w-[600px] max-h-[72px] rounded-[96px] bg-white border-none"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_7_1612)">
                <path d="M23.5938 10.1906L13.8044 10.1901C13.3721 10.1901 13.0217 10.5405 13.0217 10.9727V14.1C13.0217 14.5322 13.3721 14.8826 13.8044 14.8826H19.3171C18.7135 16.4492 17.5868 17.7612 16.1493 18.5949L18.5 22.664C22.2707 20.4833 24.5 16.6569 24.5 12.3736C24.5 11.7637 24.455 11.3277 24.3651 10.8368C24.2968 10.4638 23.9729 10.1906 23.5938 10.1906Z" fill="#167EE6" />
                <path d="M12.5 19.5814C9.80218 19.5814 7.44699 18.1073 6.18207 15.9261L2.11304 18.2714C4.18374 21.8603 8.06283 24.277 12.5 24.277C14.6768 24.277 16.7307 23.6909 18.5 22.6696V22.664L16.1494 18.5948C15.0742 19.2184 13.8299 19.5814 12.5 19.5814Z" fill="#12B347" />
                <path d="M18.5 22.6696V22.664L16.1494 18.5948C15.0741 19.2184 13.83 19.5814 12.5 19.5814V24.277C14.6767 24.277 16.7308 23.6909 18.5 22.6696Z" fill="#0F993E" />
                <path d="M5.19566 12.277C5.19566 10.9472 5.55856 9.70311 6.18205 8.62794L2.11302 6.28259C1.08603 8.04636 0.5 10.0947 0.5 12.277C0.5 14.4593 1.08603 16.5077 2.11302 18.2714L6.18205 15.9261C5.55856 14.8509 5.19566 13.6068 5.19566 12.277Z" fill="#FFD500" />
                <path d="M12.5 4.97269C14.2593 4.97269 15.8753 5.59782 17.1375 6.63765C17.4488 6.89415 17.9014 6.87563 18.1867 6.5904L20.4024 4.37462C20.7261 4.05099 20.703 3.52126 20.3573 3.22135C18.2425 1.38671 15.491 0.277039 12.5 0.277039C8.06283 0.277039 4.18374 2.69377 2.11304 6.28262L6.18207 8.62796C7.44699 6.44673 9.80218 4.97269 12.5 4.97269Z" fill="#FF4B26" />
                <path d="M17.1374 6.63765C17.4488 6.89415 17.9015 6.87563 18.1866 6.5904L20.4024 4.37462C20.726 4.05099 20.7029 3.52126 20.3573 3.22135C18.2425 1.38666 15.491 0.277039 12.5 0.277039V4.97269C14.2592 4.97269 15.8752 5.59782 17.1374 6.63765Z" fill="#D93F21" />
              </g>
              <defs>
                <clipPath id="clip0_7_1612">
                  <rect width="24" height="24" fill="white" transform="translate(0.5 0.277039)" />
                </clipPath>
              </defs>
            </svg>
            <span
              className="text-center font-comfortaa font-bold leading-[24px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB] bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(95deg, #80B9FF 0.89%, #3DB0CB 99.11%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('signup.google')}
            </span>

          </Button>


          <Button
            variant="outline"
            className="flex items-center justify-center gap-[15px] py-8 px-0 w-full max-w-[600px] max-h-[72px] rounded-[96px] bg-white border-none"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_7_1621)">
                <path d="M24 12.277C24 18.2667 19.6116 23.2313 13.875 24.1313V15.7458H16.6711L17.2031 12.277H13.875V10.0261C13.875 9.07688 14.34 8.15204 15.8306 8.15204H17.3438V5.19891C17.3438 5.19891 15.9703 4.96454 14.6573 4.96454C11.9166 4.96454 10.125 6.62579 10.125 9.63329V12.277H7.07812V15.7458H10.125V24.1313C4.38844 23.2313 0 18.2667 0 12.277C0 5.64985 5.37281 0.277039 12 0.277039C18.6272 0.277039 24 5.64985 24 12.277Z" fill="#1877F2" />
                <path d="M16.6711 15.7458L17.2031 12.277H13.875V10.0261C13.875 9.07707 14.3399 8.15204 15.8306 8.15204H17.3438V5.19891C17.3438 5.19891 15.9705 4.96454 14.6576 4.96454C11.9165 4.96454 10.125 6.62579 10.125 9.63329V12.277H7.07812V15.7458H10.125V24.1312C10.736 24.2271 11.3621 24.277 12 24.277C12.6379 24.277 13.264 24.2271 13.875 24.1312V15.7458H16.6711Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_7_1621">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.277039)" />
                </clipPath>
              </defs>
            </svg>
            <span
              className="text-center font-comfortaa font-bold leading-[24px] sm:text-[18px] md:text-[20px] lg:text-[24px] bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB] bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(95deg, #80B9FF 0.89%, #3DB0CB 99.11%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >{t('signup.facebook')}</span>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2.5 p-2 w-full mb-[20px]">
          <div className="w-72 h-px bg-white" />
          <div className="text-[#FFFFFF] text-[24px] leading-[24px] font-bold font-comfortaa">
            {t('signup.or')}
          </div>

          <div className="w-72 h-px bg-white" />
        </div>

        {/* Email Form */}
        <form className="space-y-[20px]">
          <div>
            <Label
              htmlFor="email"
              className="w-[369.851px] text-[24px] leading-[24px] font-bold font-comfortaa text-[#004699]"
            >
              {t('signup.email')}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('signup.your_Email')}
              className="mt-1 h-12 bg-white rounded-[96px] border-none placeholder:text-[rgba(0,0,0,0.25)] placeholder:text-lg"
              required
              autoComplete="email"
            />
          </div>


          <div>
            <Label htmlFor="password" className="w-[369.851px] text-[24px] leading-[24px] font-bold font-comfortaa text-[#004699]">
              {t('signup.password')}
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t('signup.your_Password')}
              className="mt-1 h-12 bg-white rounded-[96px] border-none placeholder:text-[rgba(0,0,0,0.25)] placeholder:text-lg"
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="w-[369.851px] text-[24px] leading-[24px] font-bold font-comfortaa text-[#004699]">
              {t('signup.password_Confirmation')}
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={t('signup.confirm_Your_Password')}
              className="mt-1 h-12 bg-white rounded-[96px] border-none placeholder:text-[rgba(0,0,0,0.25)] placeholder:text-lg"
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>

          <Button
            type="submit"
            className="
    w-full h-[67px]
    text-white font-semibold
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
  "
          >
            <span className="text-white text-[24px] font-bold leading-none font-comfortaa">
              {t("signup.sign_Up")}
            </span>
          </Button>

          <p className="text-[18px] leading-[18px] font-bold text-[#282828] font-comfortaa text-start py-3 max-w-[516px]">
            {t('signup.by_Clicking')}<br />
            <Link href={`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/terms#/`} className="text-[18px] leading-[18px] font-bold text-[#004699] font-comfortaa hover:underline">
              {t('signup.terms_Conditions')}
            </Link>{" "}
            {t('signup.and')}{" "}
            <Link href={`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/privacy_policy#/`} className="text-[18px] leading-[18px] font-bold text-[#004699] font-comfortaa hover:underline">
              {t('signup.privacy_Policy')}
            </Link>
            <br />
            <br />
            <span className="text-[18px] leading-[18px] font-bold text-[#004699] font-comfortaa hover:underline">
              {t('signup.instructions')}
            </span>
          </p>
          <div className="w-[290px] h-[97px] shrink-0 rounded-[12px] bg-white">

          </div>

        </form>
      </CardContent>
    </Card>
  )
}

