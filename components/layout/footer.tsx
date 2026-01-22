'use client';

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      style={{
        background:
          "linear-gradient(182deg, rgba(255, 255, 255, 0.06) 34.08%, rgba(128, 185, 255, 0.60) 71.07%, rgba(61, 176, 203, 0.60) 98.7%)",
      }}
      className="py-12 px-4 sm:px-6 md:px-12"
    >
      <div
        style={{ background: "rgba(255, 255, 255, 0.50)" }}
        className="w-full max-w-screen-2xl mx-auto rounded-[12px] p-6 md:p-10"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/uni-learn-logos.svg"
                alt="UniLearn Logo"
                width={180}
                height={60}
                className="sm:w-[220px] sm:h-[80px] md:w-[260px] md:h-[100px] object-contain"
              />
            </Link>
          </div>

          {/* Title + Description */}
          <div className="w-full md:w-4/5 text-left md:text-right">
            <p className="text-base sm:text-lg md:text-xl font-rocksalt text-brand-pink font-normal leading-tight">
              {t("footer.footer_Title_One")}
              <br className="block sm:hidden" />
              <span className="text-[#3DB0CB] text-lg sm:text-xl md:text-2xl font-rocksalt font-normal">
                {t("footer.footer_Title_Two")}
              </span>
            </p>
            <p className="text-[#5C5C5C] text-sm sm:text-base md:text-lg font-didact mt-4 leading-relaxed">
              {t("footer.footer_Dis")}
            </p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: `${t("footer.legal_Stuff")}`,
              links: [
                {
                  href: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/terms#/`,
                  label: t("footer.legal_Stuff_One"),
                },
                {
                  href: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/privacy_policy#/`,
                  label: t("footer.legal_Stuff_Two"),
                },
                {
                  href: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/privacy_policy#/`,
                  label: t("footer.legal_Stuff_Three"),
                },
                {
                  href: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/commercial_disclosure#/`,
                  label: t("footer.legal_Stuff_Four"),
                },
              ],
            },
            {
              title: `${t("footer.learners")}`,
              links: [
                {
                  href: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/projects/browse#/`,
                  label: t("footer.learners_One"),
                },
                {
                  href: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/instructors#/`,
                  label: t("footer.learners_Two"),
                },
                { href: "/pricing?mentor=false", label: t("footer.learners_Three") },
                {
                  href: `${process.env.NEXT_PUBLIC_LEARNER_HELP_URL}`,
                  label: t("footer.learners_Four"),
                },
              ],
            },
            {
              title: `${t("footer.mentors")}`,
              links: [
                { href: "/mentors", label: t("footer.mentors_One") },
                {
                  href: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=mentor#/`,
                  label: t("footer.mentors_Two"),
                },
                { href: "/pricing?mentor=true", label: t("footer.mentors_Three") },
                {
                  href: `${process.env.NEXT_PUBLIC_MENTOR_HELP_URL}`,
                  label: t("footer.mentors_Four"),
                },
              ],
            },
            {
              title: `${t("footer.connect")}`,
              links: [
                { href: "mailto:contact@uni-learn.online", label: t("footer.connect_One") },
                {
                  href: "https://humdrum-art-946.notion.site/261463789b58804da257fc956fc9891a?v=261463789b58802b9ada000cb0a584b0&source=copy_link",
                  label: t("footer.connect_Two"),
                },
                {
                  href: "https://www.notion.so/Work-with-us-255463789b5880699b9ae9eb087c4df5?source=copy_link",
                  label: t("footer.connect_Three"),
                },
              ],
              social: true,
            },
          ].map((section, i) => (
            <nav key={i} aria-labelledby={`${section.title.toLowerCase()}-heading`}>
              <p
                id={`${section.title.toLowerCase()}-heading`}
                className="text-lg sm:text-xl md:text-2xl text-[#1E1E1E] font-comfortaa font-bold mb-4"
              >
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.social && (
                  <li className="flex space-x-4 mb-3">
                    <Link href="https://www.facebook.com/share/1EQDRMPQXS/" aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M17.0703 0H2.92969C1.31439 0 0 1.31439 0 2.92969V17.0703C0 18.6856 1.31439 20 2.92969 20H8.82812V12.9297H6.48438V9.41406H8.82812V7.03125C8.82812 5.09262 10.4051 3.51562 12.3438 3.51562H15.8984V7.03125H12.3438V9.41406H15.8984L15.3125 12.9297H12.3438V20H17.0703C18.6856 20 20 18.6856 20 17.0703V2.92969C20 1.31439 18.6856 0 17.0703 0Z"
                          fill="#004699"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.instagram.com/unilearnonline?igsh=MWxndnk3YnhjYjA2bQ=="
                      aria-label="Instagram"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M10 6.33069C7.97603 6.33069 6.33203 7.97469 6.33203 9.99869C6.33203 12.0227 7.97603 13.6707 10 13.6707C12.024 13.6707 13.672 12.0227 13.672 9.99869C13.672 7.97469 12.024 6.33069 10 6.33069Z"
                          fill="#004699"
                        />
                        <path
                          d="M15.536 0H4.464C2.004 0 0 2.004 0 4.464V15.536C0 18 2.004 20 4.464 20H15.536C18 20 20 18 20 15.536V4.464C20 2.004 18 0 15.536 0ZM10 16.48C6.428 16.48 3.52 13.572 3.52 10C3.52 6.428 6.428 3.524 10 3.524C13.572 3.524 16.48 6.428 16.48 10C16.48 13.572 13.572 16.48 10 16.48ZM16.616 4.7C15.86 4.7 15.244 4.088 15.244 3.332C15.244 2.576 15.86 1.96 16.616 1.96C17.372 1.96 17.988 2.576 17.988 3.332C17.988 4.088 17.372 4.7 16.616 4.7Z"
                          fill="#004699"
                        />
                      </svg>
                    </Link>
                  </li>
                )}
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-base sm:text-lg text-[#004699] font-questrial"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-10 pt-6 text-left sm:text-center border-t border-[#ccc]/30">
          <p className="text-sm sm:text-base md:text-lg text-[#004699] font-questrial">
            {t("footer.uni_Learn")}
          </p>
          <p className="text-sm sm:text-base text-[#004699] font-questrial">
            {t("footer.all_Rights_Reserved")}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#5C5C5C] font-didact mt-2">
            {t("footer.built_learners")}
          </p>
        </div>
      </div>
    </footer>
  );
}
