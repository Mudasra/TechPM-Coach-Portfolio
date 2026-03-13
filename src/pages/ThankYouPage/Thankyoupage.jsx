import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageBackground from "./Pagebackground";
import SuccessHero from "./Successhero";
import WhatHappensNext from "./Whathappensnext";
import WhileYouWait from "./Whileyouwait";
import RedirectNotice from "./Redirectnotice";
import { selectSubmittedData } from "../../redux/formSlice";


const ThankYouPage = () => {
  const submittedData = useSelector(selectSubmittedData);

  const [visible,   setVisible]   = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#06080C",
        color: "#E8E2D6",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PageBackground />

      <main className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-6 py-20">
        <SuccessHero visible={visible} submittedName={submittedData?.name} />
        <WhatHappensNext visible={visible} />
        <WhileYouWait visible={visible} />
        <RedirectNotice visible={visible} countdown={countdown} />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;0,700;1,300;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default ThankYouPage;