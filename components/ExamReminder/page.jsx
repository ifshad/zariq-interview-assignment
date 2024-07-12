"use client";
import React, { useEffect, useState } from "react";

export default function ExamReminder() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const countTime = () => {
      const examDate = new Date("2024-10-10").getTime();
      const presentDate = new Date().getTime();
      const difference = examDate - presentDate;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(countTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-96 p-6 bg-secondary-color fixed bottom-0 right-0 text-primary-color text-center">
      <h1 className="text-2xl font-semibold">Final Exam 2023-2024</h1>
      <div className="border border-primary-color flex space-x-5 justify-center">
        <p className="flex flex-col text-yellow-300 text-4xl font-bold">
          {timeLeft.days}
          <span className="text-lg text-primary-color font-normal">days</span>
        </p>
        <p className="flex flex-col text-yellow-300 text-4xl font-bold">
          {timeLeft.hours}
          <span className="text-lg text-primary-color font-normal">hours</span>
        </p>
        <p className="flex flex-col text-yellow-300 text-4xl font-bold">
          {timeLeft.minutes}
          <span className="text-lg text-primary-color font-normal">
            minutes
          </span>
        </p>
        <p className="flex flex-col text-yellow-300 text-4xl font-bold">
          {timeLeft.seconds}
          <span className="text-lg text-primary-color font-normal">
            seconds
          </span>
        </p>
      </div>
      <p>In Sha Allah</p>
    </div>
  );
}
