import {Raleway, Lato } from "next/font/google";
import { OfferBanner, Navbar, Footer, CookieConsentBanner, AosAnimation, Preloader } from "@/components";
import "./globals.css";


const ralewayFont = Raleway({
  subsets: ["latin"],
});

const latoFont = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Magichands Physiotherapy",
  description: "Trusted physiotherapy clinic in the Swindon, UK offering tailored treatments for pain relief, injury recovery, and improved mobility. Start your journey to better health today!",
};

export default async function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <AosAnimation />
      <body
        className={`${ralewayFont.className} ${latoFont.className} antialiased relative`}
      >
        <OfferBanner/>
        <div className="max-w-[1200px] pt-10 xl:max-w-[1400px] mx-auto">
          <Navbar />
        </div>
        <main className="xl:max-w-[1400px] max-w-[1200px] mt-12 px-6 mx-auto">
          {children}
        </main>
        <Footer />
        <CookieConsentBanner />
        {/* <Preloader /> */}
      </body>
    </html>
  );
}
