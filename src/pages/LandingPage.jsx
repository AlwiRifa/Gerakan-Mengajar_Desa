import React from "react";
import Footer from "../components/landingPages-component/Footer";
import Hero from "../components/landingPages-component/Hero";
import Navbar from "../components/landingPages-component/Navbar";
import OurActivity from "../components/landingPages-component/OurActivity";
import OurPartnership from "../components/landingPages-component/OurPartnership";
import OurScope from "../components/landingPages-component/OurScope";
import WhatAreWe from "../components/landingPages-component/WhatAreWe";
import WhatTheySay from "../components/landingPages-component/WhatTheySay";


function LandingPage() {
  return (
    <div className=" h-screen text-white">
      <Navbar />

      <Hero />

      <WhatAreWe />

      <OurScope />

      <OurActivity />

      <WhatTheySay />

      <OurPartnership />

      <Footer />
    </div>
  );
}

export default LandingPage;
