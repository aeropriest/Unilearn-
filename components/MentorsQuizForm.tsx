'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image"
import { evaluateMentorType } from './mentoreTypeScorer';
import MentorReport from './MentorReport';
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input"

export default function MentorsQuizForm() {
  const { t } = useTranslation();

  const questions = [
    `${t('mentorReports.Q1')}`,
    `${t('mentorReports.Q2')}`,
    `${t('mentorReports.Q3')}`,
    `${t('mentorReports.Q4')}`,
    `${t('mentorReports.Q5')}`,
    `${t('mentorReports.Q6')}`,
    `${t('mentorReports.Q7')}`,
    `${t('mentorReports.Q8')}`,
    `${t('mentorReports.Q9')}`,
  ];

  const [step, setStep] = useState(0); // 0 = Welcome screen
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [result, setResult] = useState<LearnerTypeResult | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleAnswer = (value: number) => {
    const updated = [...answers];
    updated[step - 1] = value;
    setAnswers(updated);
    if (step < questions.length) setStep(step + 1);
  };

  const handleSubmit = async () => {
    // You can also POST this data to an API endpoint here.

    const rawAnswers = Object.fromEntries(
      answers.map((val, index) => [`Q${index + 1}`, val])
    );

    // Calculate learner type result
    const result = evaluateMentorType(rawAnswers);


    const mentorTypes = ["PGS", "PGE", "PPS", "PPE", "DGS", "DGE", "DPS", "DPE"];

    const code = result?.mentorTypeCode;

    const learnerType = mentorTypes.includes(code as string)
      ? code
      : mentorTypes[Math.floor(Math.random() * mentorTypes.length)];



    setResult(learnerType);
    setStep(step + 1); // move to final result step

    if (result) {
      const PROJECT_URL = process.env.NEXT_PUBLIC_PROJECT_URL;
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      const url = `${window.location.origin}/mentorReport?result=${learnerType}`;
      try {
        const response = await fetch(`${PROJECT_URL}/rest/v1/contacts`, {
          method: "POST",
          headers: {
            apikey: API_KEY!,
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            gender: null,
            email,
            type: "Mentor",
            link: url,
          }),
        });

        const data = await response.json();
      } catch (error) {
        console.error("error saving contact", error);
      }
    }
    
  };

  const handleStart = (selectedGender: 'male' | 'female') => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: { name?: string; email?: string } = {};

    if (!name) {
      newErrors.name = "Please enter your name";
    }

    if (!email) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    // ✅ only continue if no errors
    if (Object.keys(newErrors).length === 0) {
      setGender(selectedGender);
      setStep(1);
    }
  };


  if (result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <MentorReport result={result} gengenderder={gender} />
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="fixed top-4 left-4 z-50 lg:ml-[50px] mt-[50px]">
        <Link href="/" className="flex items-start space-x-2">
          <Image
            src="/images/uni-learn-logos.svg"
            alt="Uni Learn Logo"
            width={173.7099}
            height={54}
            className="relative"
          />
        </Link>
      </div>

      <div className="max-w-[920px]">
        {step === 0 ? (
          <>
            <h1
              className="self-stretch text-[#004699] font-comfortaa 
             text-[16px] sm:text-[28px] lg:text-[40px] 
             font-bold leading-[20px] sm:leading-[32px] lg:leading-normal mb-10 lg:mb-0"
            >
              {t('mentorDetails.title')}
            </h1>
            <div
              className="p-[20px] gap-4 rounded-[25px] mt-10 mb-10"
              style={{
                background:
                  "linear-gradient(161deg, rgba(128, 185, 255, 0.02) 0.66%, rgba(128, 185, 255, 0.40) 99.34%)",
              }}
            >
              <form>
                {/* Name Field */}
                <div className="mb-4">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("signup.your_Name")}
                    className={`mt-1 h-12 bg-white rounded-[96px] border ${errors.name ? "border-red-500" : "border-none"
                      } placeholder:text-[rgba(0,0,0,0.25)] placeholder:text-lg w-full`}
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("signup.your_Email")}
                    className={`mt-1 h-12 bg-white rounded-[96px] border ${errors.email ? "border-red-500" : "border-none"
                      } placeholder:text-[rgba(0,0,0,0.25)] placeholder:text-lg w-full`}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </form>
            </div>
            <div className="flex gap-[80px] justify-start items-center mb-[30px]">
              <button
                onClick={() => handleStart("male")}
                className="
    w-[300px] h-[48px] text-[16px]
    sm:w-[271px] sm:h-[67px] sm:text-[18px]
    md:max-lg:w-[220px] md:max-lg:h-[56px]
    flex justify-center items-center
    font-bold font-comfortaa text-white
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
    cursor-pointer mx-auto
  "
              >
                {t("mentorDetails.button")}
              </button>

            </div>


            <Link href="/">
              <div className="text-[14px] font-400 text-[#C7C7C7] font-comfortaa cursor-pointer mb-2 w-fit">
                &lt; {t('mentorDetails.back_Button')}
              </div>
            </Link>
          </>
        ) : (
          <>
              <p
                className="self-stretch text-[#004699] 
             text-[16px] sm:text-[22px] lg:text-[28px] 
             font-bold font-comfortaa 
             mb-[20px] sm:mb-[30px] 
             text-center sm:text-start 
             px-[10px] sm:px-0
             max-w-full sm:max-w-[910px]"
              >
              {questions[step - 1]}
            </p>

              <div className="
                            flex flex-col items-start gap-1 mb-[15px]
                            text-[16px] leading-[18px] font-semibold
                            text-[var(--Colors-Milky-Blue,#80B9FF)]
                            font-comfortaa text-center pl-5 lg:pl-0
                          ">
                <span>1 → {t('mentorDetails.strongly_Disagree')}</span>
                <span>5 → {t('mentorDetails.strongly_Agree')}</span>
            </div>

              <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  onClick={() => handleAnswer(val)}
                  className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] 
                  rounded-full border-2 
                  text-[16px] sm:text-[20px] lg:text-[24px] 
                  leading-[16px] sm:leading-[18px] 
                  font-bold font-comfortaa text-center
        ${answers[step - 1] === val
                      ? 'text-white bg-gradient-to-b from-[#80B9FF] to-[#3DB0CB] border-none'
                      : 'text-[#3DB0CB] border-[#3DB0CB]'
                    }`}
                >
                  {val}
                </button>
              ))}
            </div>

            <div
                className="text-[14px] font-400 text-[#C7C7C7] font-comfortaa cursor-pointer 
             mb-2 w-fit transition-transform hover:scale-105
             mx-auto sm:mx-0 text-center sm:text-left"
              onClick={() => setStep(step - 1)}
            >
                &lt; {t('mentorDetails.back_Button')}
            </div>

              {step === questions.length && answers[8] !== 0 && (
                <button
                  onClick={handleSubmit}
                  className="
    w-[300px] h-[48px] text-[16px]
    sm:w-[271px] sm:h-[67px] sm:text-[18px]
    md:max-lg:w-[220px] md:max-lg:h-[56px]
    flex justify-center items-center
    font-bold font-comfortaa text-white
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
    cursor-pointer mx-auto
  "
                >
                  {t("mentorDetails.submit_Button")}
                </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
