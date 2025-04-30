"use client";

import { useEffect, useState } from "react";

const SpecialServiceDisplay = () => {

    const [cookies, setCookies] = useState();

    useEffect(() => {
      const trying1 = localStorage.getItem("cookies");
      console.log(trying1);
    })
    



  return (
    <div className="bg-green text-black max-w-fit fixed top-0 py-3 rounded-3xl px-6 right-0 z-[9999]">
        ⭐ We do offer FCP service!
    </div>
  )
}

export default SpecialServiceDisplay;