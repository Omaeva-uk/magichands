import Image from "next/image";
import {Hero, AboutUs, Services, Cta, Testimonial, BookAppointment, ModalPopup, Pricing } from "@/components";
import { resolve } from "styled-jsx/css";

export default async function Home() {
  

  return (
    <div className="font-lato">
      <Hero />
      <AboutUs />
      <Services />
      <Cta />
      <Pricing />
      <Testimonial />
      <BookAppointment />
      <ModalPopup />
    </div>
  );
}
