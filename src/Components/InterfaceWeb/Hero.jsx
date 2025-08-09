import React from "react";
import heroSection from "../../assets/webInterface/heroSection.png";

const Hero = () => {
  return (
    <section className="mt-10 p-6 grid lg:grid-cols-2 gap-8 items-center">
      {/* Texte */}
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight">
          Transformez votre stage en <span className="text-cyan-600">expérience inoubliable</span>
        </h1>
        {/* <p className="text-lg text-gray-600">
          De la candidature au rapport final — notre plateforme vous accompagne à chaque étape pour 
          organiser, suivre et réussir votre stage en toute sérénité.
        </p> */}
        <div className="flex gap-4">
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-xl shadow hover:bg-cyan-700 transition">
            Commencer maintenant
          </button>
          <button className="border border-cyan-600 text-cyan-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
            Découvrir comment
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="lg:ml-8">
        <img
          src={heroSection}
          alt="Interface de gestion de stage"
          
        />
      </div>
    </section>
  );
};

export default Hero;
