import Image from "next/image";
import {Hero, AboutUs, Services, Cta, Testimonial, BookAppointment, ModalPopup, Pricing, Providers, Preloader, Team, SpecialServiceDisplay } from "@/components";
import { resolve } from "styled-jsx/css";


export default async function Home() {
  

  return (
    <div className="font-lato">
      <Hero />
      <Providers />
      <AboutUs />
      <Services />
      <Cta />
      <Pricing />
      <Team />
      <Testimonial />
      <BookAppointment />
      <Preloader />
      <ModalPopup />
      {/* <SpecialServiceDisplay /> */}
    </div>
  );
}
