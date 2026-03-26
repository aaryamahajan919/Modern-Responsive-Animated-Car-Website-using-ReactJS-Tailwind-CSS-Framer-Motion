import React from 'react'
import CarPng from "../../assets/car.png";
import BuildingImage from "../../assets/building2.jpg";
import { FaArrowRight } from "react-icons/fa"; 

const bgImage = {
backgroundImage: `url(${BuildingImage})`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "center",
}

const Hero = () => {
  return (
  <main style={bgImage}>
    <div className=" from-primary to bg-primaryDark/50">
      <div className="container text-white">
        {/* Navbar component here */}

        {/* Hero component here */}
        <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
          {/* text content section */}
          <div className='space-y-8'>
            <h1 className= "text-5xl lg:text-7xl font-bold leading-tight">
              Honda <br/> <span className='uppercase text-transparent text-outline'>Sports EV</span>
            </h1>
          <button className='outline-btn flex justify-center place-items-center gap-4 group'>
            Explore 
            <FaArrowRight 
            className='group-hover:translate-x-2 transition'/>
          </button>
          {/* feature section here */}
          <div className="bg-black/40" style={{ padding: "10px" }}>
          <h1>Vehicle Features</h1>
            <p className="text-justify">The car features rear-hinged suicide doors. Yuki Terai is credited with the exterior design. The interior fits four adults, with the front passengers seated on a single bench seat. The dashboard is decorated in wood trim with a long digital screen as the instrument and infotainment panel.
            </p>
          </div>
          </div>
          {/* image section */}
          <div>
            <img src={CarPng} alt=""/>
          </div>
        </section>
      </div>
    </div>
  </main>
  );
};

export default Hero;