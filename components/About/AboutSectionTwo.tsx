"use client";
import "./about.css";
import Image from "next/image";

const AboutSectionTwoo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
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
                  S'engager pour le Changement: Chez AID, nous croyons que
                  chaque initiative a le pouvoir de changer le monde. Nous nous
                  engageons à soutenir chaque cause, grande ou petite.
                </p>
              </div>
              <div className="mb-9">
                <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  💫 Notre Vision
                </h6>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Innover pour Inspirer : AID vise à révolutionner la manière
                  dont le soutien financier est apporté aux projets caritatifs,
                  en rendant le processus de don aussi simple et transparent que
                  possible. Avec chaque nouvelle fonctionnalité, nous espérons
                  inciter une vague de générosité globale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const AboutSectionTwo = () => {
  return (
    <>
      <div className="line-break"></div>
      <div className="project-container">
        <section id="projects">
          <h2>A propos de notre Equipe</h2>
          <article>
            <div className="text">
              <h3>💫 Notre Mission</h3>
              {/* <h3> The Quiet Place</h3> */}
              <p className="description">
                S'engager pour le Changement: Chez AID, nous croyons que chaque
                initiative a le pouvoir de changer le monde. Nous nous engageons
                à soutenir chaque cause, grande ou petite.<a href="">ici</a> !
              </p>
              {/* <h4>Tecnologies used include :</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>NODE</li>
              </ul> */}
            </div>
            <div className="image">
              <figure>
                <Image
                  src="/images/about/imagec.jpg"
                  alt="Coffee Shop"
                  height="150"
                  width="200"
                />
              </figure>
            </div>
          </article>
          <article className="reverse">
            <div className="text">
              <h3>💫 Notre Vision</h3>
              {/* <h3> </h3> */}
              <p className="description">
                Innover pour Inspirer : AID vise à révolutionner la manière dont
                le soutien financier est apporté aux projets caritatifs, en
                rendant le processus de don aussi simple et transparent que
                possible. Avec chaque nouvelle fonctionnalité, nous espérons
                inciter une vague de générosité globale.
              </p>
              {/* <h4>Tecnologies used include :</h4>
              <ul>
                <li>Python</li>
                <li>Pandas</li>
              </ul> */}
            </div>
            <div className="image">
              <figure>
                <Image
                  src="/assets/images/transactions.png"
                  alt="$$"
                  height="250"
                  width="250"
                />
              </figure>
            </div>
          </article>
        </section>
      </div>
      <div className="line-break"></div>
    </>
  );
};
export default AboutSectionTwo;
