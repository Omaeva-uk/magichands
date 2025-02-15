"use client";

import React, { useEffect, useState } from "react";
import cookie from "js-cookie";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed z-[1000] bottom-0 right-0 bg-lighGreen p-6 rounded-3xl">
      <p>This website uses cookies to improve your browsing experience.</p>
      <p>Please click Accept to continue.</p>
      <div className="flex gap-7 mt-5">
        <button className="bg-green p-3 rounded-2xl" onClick={handleAccept}>Accept</button>
        <button className="bg-blue p-3 rounded-2xl text-white" onClick={handleReject}>Reject</button>
      </div>
      
    </div>
  );
};

export default CookieConsentBanner;
