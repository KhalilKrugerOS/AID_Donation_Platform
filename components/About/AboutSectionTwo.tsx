"use client";

import { useEffect, useRef } from 'react';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

const AboutSectionTwo = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              ref={imageRef}
              className={`relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0 transition-transform duration-1000 ${
                imageInView ? 'transform translate-x-0' : 'transform translate-x-full'
              }`}
            >
              <Image
                src="/images/about/imagec.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/imagec.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <p className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  💫 Notre Mission
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  S'engager pour le Changement: Chez AID, nous croyons que chaque initiative a le pouvoir de changer le monde. Nous nous engageons à soutenir chaque cause, grande ou petite.
                </p>
              </div>
              <div className="mb-9">
                <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  💫 Notre Vision
                </h6>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Innover pour Inspirer : AID vise à révolutionner la manière dont le soutien financier est apporté aux projets caritatifs, en rendant le processus de don aussi simple et transparent que possible. Avec chaque nouvelle fonctionnalité, nous espérons inciter une vague de générosité globale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
