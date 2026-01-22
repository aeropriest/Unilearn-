"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { DropdownContentLearners } from "./DropdownContentLearners";
import { DropdownContentMentors } from "./DropdownContentMentors";
import LearningSidebar from "./LearningSidebar";
import MentorsSidebar from "./MentorsSidebar";
import DropdownLanguageCurrency from "./DropdownLanguageCurrency";
import { useTranslation } from "react-i18next";
import i18n from "../../lib/i18n";

export default function Header() {
  const { t } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState('en');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [languageLoaded, setLanguageLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en';
    i18n.changeLanguage(storedLang).then(() => {
      setSelected(storedLang);
      setLanguageLoaded(true);
    });
  }, []);

  useEffect(() => {
    const storedCurrency = localStorage.getItem('currency');
    const defaultCurrency = storedCurrency || 'USD';
    setSelectedCurrency(defaultCurrency);
    if (!storedCurrency) {
      localStorage.setItem('currency', 'USD');
    }
  }, [setSelectedCurrency]);
  
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      const el = dropdownRef.current;
      if (!el) return;

      if (!el.contains(e.target as Node)) {
        setActiveDropdown(null);
        setOpen(false);
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, { capture: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, { capture: true } as any);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!languageLoaded) return null;

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  
  return (
    <div ref={dropdownRef} className="relative z-[50] mt-[80px] mb-[20px]">
      <header className="w-full pl-0 pr-0 md:pl-4 md:pr-4 lg:pl-4 lg:pr-4">
        {/* <div className="container mx-auto px-[20px] py-[12px] h-15 flex max-h-[80px] max-w-[1400px] items-center justify-between bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-soft rounded-full"> */}
        <div className="
                        mx-auto
                        w-[85%] md:w-full           /* narrower on mobile, full at md+ */
                        px-[12px] md:px-[20px]      /* tighter padding on mobile */
                        py-[12px]
                        h-15 flex max-h-[80px]
                        md:max-w-[1400px]           /* cap width on desktop/tablet */
                        items-center justify-between
                        bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60
                        shadow-soft rounded-full
                      ">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/uni-learn-logos.svg"
                alt="Hero Top Image"
                width={173} // large default
                height={54}
                className="relative z-10 w-[173px] h-[54px] max-[1100px]:w-[120px] max-[1100px]:h-[40px]"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            <button
              onClick={() => toggleDropdown("learners")}
              className="flex items-center justify-center text-sm font-medium text-gray-600 hover:text-primary-700 transition-all duration-300 hover:scale-105"
              aria-expanded={activeDropdown === "learners"}
              aria-haspopup="true"
            >
              <p className={`text-center font-comfortaa font-bold text-[18px] leading-[32px] ${activeDropdown === 'learners' ? 'text-brand-skyBlue' : 'text-[#004699]'}`}>
                {t('nav.learners')}
              </p>
            </button>
            <button
              onClick={() => toggleDropdown("mentors")}
              className="flex items-center justify-center text-sm font-medium text-gray-600 hover:text-primary-700 transition-all duration-300 hover:scale-105"
              aria-expanded={activeDropdown === "mentors"}
              aria-haspopup="true"
            >
              <p className={`text-center font-comfortaa font-bold text-[18px] leading-[32px] ${activeDropdown === 'mentors' ? 'text-brand-skyBlue' : 'text-[#004699]'}`}>
                {t('nav.mentors')}
              </p>
            </button>
          </nav>

   

          <div className="hidden md:flex items-center space-x-3">
            {/* LANGUAGE & CURRENCY TRIGGER */}
            <div className="relative z-30">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between px-[40px] py-2 text-[#3DB0CB] text-[16px] font-comfortaa font-bold leading-[20px] cursor-pointer"
              >
                
                {`${selected === 'ja' ? '日本語' : selected === 'zhCN' ? '简体中文' : selected === 'tccn' ? '繁体中文'  : 'English'} | ${selectedCurrency}`}
                {/* <span className="ml-2">⌄</span> */}
              </button>

              {open && (
                <DropdownLanguageCurrency
                  setSelected={setSelected}
                  setSelectedCurrency={setSelectedCurrency}
                  selected={selected}
                  selectedCurrency={selectedCurrency}
                  setOpen={setOpen}
                />
              )}
            </div>
            {/* Desktop: inline buttons */}
            <div className="hidden lg:flex gap-4">
              <Link href={`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_in#/`}>
                <button className="w-[168.5px] h-[48px] px-[38px] py-[14px] rounded-full border border-[#80B9FF] text-[#80B9FF] font-comfortaa font-bold text-[16px] leading-[16px] transition-transform duration-300 hover:scale-105 hover:border-[2px]">
                  {t('nav.login')}
                </button>
              </Link>

              <Link href={`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=learner#/`}>
                {/* <button className="w-[168.5px] h-[48px] px-[38px] py-[14px] rounded-full bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB] text-white font-comfortaa font-bold isEnglish ? text-[16px] : text-[14px] leading-[16px] transition-transform duration-300 hover:scale-105 hover:outline hover:outline-2 hover:outline-white"> */}
                <button
                  className={`
    w-[168.5px] h-[48px]
    px-[38px] py-[14px]
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    text-white font-comfortaa font-bold
    ${isEnglish ? "text-[16px]" : "text-[14px]"}
    leading-[16px]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
    hover:outline hover:outline-2 hover:outline-none
  `}
                >
                  {t("nav.signup")}
                </button>
              </Link>
            </div>

            {/* Tablet & Mobile: dropdown */}
            <div className="lg:hidden relative">
              <details className="group">
                <summary className="flex items-center cursor-pointer select-none px-3 py-2">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6719 10.1719H5.32812C4.50469 10.1719 3.875 9.54219 3.875 8.71875C3.875 7.89531 4.50469 7.26562 5.32812 7.26562H25.6719C26.4953 7.26562 27.125 7.89531 27.125 8.71875C27.125 9.54219 26.4953 10.1719 25.6719 10.1719Z" fill="url(#paint0_linear_2271_935)" />
                    <path d="M25.6719 16.9531H5.32812C4.50469 16.9531 3.875 16.3234 3.875 15.5C3.875 14.6766 4.50469 14.0469 5.32812 14.0469H25.6719C26.4953 14.0469 27.125 14.6766 27.125 15.5C27.125 16.3234 26.4953 16.9531 25.6719 16.9531Z" fill="url(#paint1_linear_2271_935)" />
                    <path d="M25.6719 23.7344H5.32812C4.50469 23.7344 3.875 23.1047 3.875 22.2812C3.875 21.4578 4.50469 20.8281 5.32812 20.8281H25.6719C26.4953 20.8281 27.125 21.4578 27.125 22.2812C27.125 23.1047 26.4953 23.7344 25.6719 23.7344Z" fill="url(#paint2_linear_2271_935)" />
                    <defs>
                      <linearGradient id="paint0_linear_2271_935" x1="15.5" y1="7.26562" x2="15.5" y2="10.1719" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#80B9FF" />
                        <stop offset="1" stopColor="#3DB0CB" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_2271_935" x1="15.5" y1="14.0469" x2="15.5" y2="16.9531" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#80B9FF" />
                        <stop offset="1" stopColor="#3DB0CB" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_2271_935" x1="15.5" y1="20.8281" x2="15.5" y2="23.7344" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#80B9FF" />
                        <stop offset="1" stopColor="#3DB0CB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </summary>

                <div
                  className="absolute right-[39px] top-[96px] w-40 p-[5px] rounded-[12px] flex flex-col items-center gap-[5px] 
             bg-[linear-gradient(130deg,rgba(128,185,255,0.36)_0.9%,rgba(61,176,203,0.36)_99.1%)] 
             shadow-lg ring-1 ring-black/5"
                >
                  <Link href={`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=learner#/`}>
                    <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded w-[127px] rounded-[12px]
                       hover:bg-gray-50 text-[#3DB0CB] font-comfortaa font-bold text-[16px] leading-normal bg-white">
                      {/* Signup icon */}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0151 9.27363C14.2948 8.34031 15.1282 6.82984 15.1282 5.1282C15.1282 2.30051 12.8277 0 9.99998 0C7.17228 0 4.87177 2.30051 4.87177 5.1282C4.87177 6.82984 5.70509 8.34031 6.98486 9.27363C3.80361 10.491 1.53845 13.5754 1.53845 17.1795C1.53845 18.7347 2.80373 20 4.35896 20H15.641C17.1962 20 18.4615 18.7347 18.4615 17.1795C18.4615 13.5754 16.1963 10.491 13.0151 9.27363ZM6.41025 5.1282C6.41025 3.14883 8.0206 1.53848 9.99998 1.53848C11.9794 1.53848 13.5897 3.14883 13.5897 5.1282C13.5897 7.10758 11.9794 8.71797 9.99998 8.71797C8.0206 8.71797 6.41025 7.10758 6.41025 5.1282ZM15.641 18.4615H4.35896C3.65205 18.4615 3.07693 17.8864 3.07693 17.1795C3.07693 13.362 6.18255 10.2564 10 10.2564C13.8175 10.2564 16.9231 13.362 16.9231 17.1795C16.9231 17.8864 16.3479 18.4615 15.641 18.4615Z" fill="#3DB0CB" />
                      </svg>
                      {t('nav.signup')}
                    </button>
                  </Link>

                  <Link href={`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_in#/`}>
                    <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-white w-[127px] rounded-[12px]
                       hover:bg-gray-50 text-[#3DB0CB] font-comfortaa font-bold text-[16px] leading-normal">
                      {/* Login icon */}
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0675 0.00561523H6.37564C5.61228 0.00654558 4.88046 0.310198 4.34069 0.849969C3.80092 1.38974 3.49727 2.12156 3.49634 2.88491V4.66171C3.49634 4.88549 3.58523 5.1001 3.74347 5.25833C3.9017 5.41656 4.11631 5.50546 4.34009 5.50546C4.56386 5.50546 4.77848 5.41656 4.93671 5.25833C5.09494 5.1001 5.18384 4.88549 5.18384 4.66171V2.88491C5.18421 2.56894 5.30989 2.26602 5.53332 2.0426C5.75674 1.81917 6.05967 1.69349 6.37564 1.69311H14.0675C14.3832 1.69377 14.6858 1.81958 14.909 2.04299C15.1321 2.26639 15.2576 2.56916 15.2579 2.88491V15.1151C15.2576 15.431 15.132 15.7339 14.9086 15.9574C14.6852 16.1808 14.3824 16.3065 14.0664 16.3069H6.37564C6.05967 16.3065 5.75674 16.1808 5.53332 15.9574C5.30989 15.734 5.18421 15.431 5.18384 15.1151V13.0595C5.18384 12.8357 5.09494 12.6211 4.93671 12.4629C4.77848 12.3046 4.56386 12.2157 4.34009 12.2157C4.11631 12.2157 3.9017 12.3046 3.74347 12.4629C3.58523 12.6211 3.49634 12.8357 3.49634 13.0595V15.1151C3.49727 15.8784 3.80092 16.6102 4.34069 17.15C4.88046 17.6898 5.61228 17.9934 6.37564 17.9944H14.0675C14.8306 17.9931 15.562 17.6892 16.1015 17.1495C16.641 16.6098 16.9444 15.8782 16.9454 15.1151V2.88491C16.9444 2.1218 16.641 1.3902 16.1015 0.850465C15.562 0.310734 14.8306 0.00691754 14.0675 0.00561523Z" fill="#3DB0CB" />
                        <path d="M12.8194 8.38587L9.81703 5.38528C9.66082 5.22902 9.44954 5.14027 9.2286 5.1381C9.00766 5.13593 8.79468 5.22052 8.63543 5.37368C8.29441 5.70169 8.3025 6.25716 8.63719 6.59185L10.2006 8.1563H1.89844C1.67466 8.1563 1.46005 8.24519 1.30182 8.40343C1.14358 8.56166 1.05469 8.77627 1.05469 9.00005C1.05469 9.22383 1.14358 9.43844 1.30182 9.59667C1.46005 9.7549 1.67466 9.8438 1.89844 9.8438H10.2009L8.62242 11.4223C8.46415 11.5805 8.37521 11.7952 8.37518 12.019C8.37514 12.2428 8.46402 12.4574 8.62225 12.6157C8.78047 12.774 8.9951 12.8629 9.2189 12.8629C9.4427 12.863 9.65735 12.7741 9.81563 12.6159L12.8194 9.61317C12.9001 9.53265 12.9641 9.437 13.0078 9.3317C13.0514 9.2264 13.0739 9.11352 13.0739 8.99952C13.0739 8.88552 13.0514 8.77264 13.0078 8.66735C12.9641 8.56205 12.9001 8.4664 12.8194 8.38587Z" fill="#3DB0CB" />
                      </svg>
                      {t('nav.login')}
                    </button>
                  </Link>
                </div>

              </details>
            </div>

          </div>

          <button
            className="md:hidden text-gray-600 text-brand-blue"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" onClick={() => {
              setActiveDropdown(null);
              setOpen(false)
            }} /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-md mt-2 mx-4 p-4 space-y-4">
            <button
              onClick={() => toggleDropdown("learnersMob")}
              className={`w-full text-left text-sm font-medium font-comfortaa ${activeDropdown === "learnersMob" ? "text-brand-skyBlue" : "text-[#004699]"
                }`}
            >
              {t("nav.learners")}
            </button>
            {activeDropdown === "learnersMob" && <LearningSidebar setActiveDropdown={setActiveDropdown} setOpen={setOpen} />}
 
            <button
              onClick={() => toggleDropdown("mentorsMob")}
              className={`w-full text-left text-sm font-medium font-comfortaa ${activeDropdown === "mentorsMob" ? "text-brand-skyBlue" : "text-[#004699]"
                }`}
            >
              {t("nav.mentors")}
            </button>
            {activeDropdown === "mentorsMob" && <MentorsSidebar setActiveDropdown={setActiveDropdown} setOpen={setOpen} />}
            {/* LANGUAGE & CURRENCY TRIGGER */}
            <hr className="my-2" />
            <div className="relative z-30 flex">
              <button
                onClick={() => setOpen(!open)}
                className="ml-auto flex items-center justify-between w-[150px] px-4 py-2 text-[#3DB0CB] text-[16px] font-comfortaa font-bold leading-[20px] cursor-pointer"
              >
                {/* {`${selected === "ja" ? "日本語" : "English"} | ${selectedCurrency}`} */}
                {`${selected === 'ja' ? '日本語' : selected === 'zhCN' ? '简体中文' : selected === 'tccn' ? '繁体中文' : 'English'} | ${selectedCurrency}`}
              </button>

              {open && (
                <DropdownLanguageCurrency
                  setSelected={setSelected}
                  setSelectedCurrency={setSelectedCurrency}
                  selected={selected}
                  selectedCurrency={selectedCurrency}
                  setOpen={setOpen}
                />
              )}
            </div>
          </div>
        )}

      </header>

      <div className="flex justify-center items-center w-full">
        {activeDropdown === "learners" && <DropdownContentLearners setActiveDropdown={setActiveDropdown} />}
        {activeDropdown === "mentors" && <DropdownContentMentors setActiveDropdown={setActiveDropdown} />}
      </div>
    </div>
  );
}
