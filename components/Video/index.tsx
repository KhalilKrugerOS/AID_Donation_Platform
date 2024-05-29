"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Vous aider à aider les autres"
          paragraph="Toutes les organisations à but non lucratif ont une idée en commun. Répondre à un besoin qui, selon elles, rend le monde meilleur. Notre mission est de permettre à cette idée de réussir.."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-6 lg:w-1/2">
          <p className="text-2xl text-body-color leading-relaxed">
            ☞ Offrir une expérience utilisateur optimale au sein de la communauté.
            <p className="text-2xl text-body-color leading-relaxed">
              ☞ Partagez librement vos idées et interagissez avec les autres pour
              tisser des liens durables.
              </p>
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto max-w-[400px] h-[300px] perspective-1000">
              <div className="relative h-full w-full transform-3d">
                <Image
                  src="/images/blog/image.png" // Assurez-vous que ce chemin est correct
                  alt="3D image"
                  layout="fill"
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-3d {
          transform: rotateX(20deg) rotateZ(-5deg) translateZ(60px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Video;




