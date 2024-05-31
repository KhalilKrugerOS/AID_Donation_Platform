"use client";

import { useEffect, useRef } from 'react';

const ConditionsOfUseSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg p-8 rounded-md max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Conditions d'Utilisation</h1>
          <p className="text-sm text-gray-500 mb-8 text-right">Dernière mise à jour : 30 mai 2024</p>
          <div className="text-left">
            <div className="mb-9">
              <p className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Introduction
              </p>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Bienvenue sur AID Donation. En utilisant notre site web, vous acceptez de vous conformer et d'être lié par les conditions d'utilisation suivantes. Veuillez les lire attentivement.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Utilisation Acceptable
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Vous acceptez d'utiliser notre site web uniquement à des fins légales et de manière à ne pas enfreindre les droits, restreindre ou inhiber l'utilisation et la jouissance du site par tout tiers.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Propriété Intellectuelle
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Tout le contenu présent sur ce site, y compris les textes,  logos, icônes, images et  téléchargements numériques , est la propriété de AID Donation ou de ses fournisseurs de contenu  est protégé par les lois internationales sur le droit d'auteur.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Limitations de Responsabilité
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                AID Donation ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs qui résultent de l'utilisation ou de l'incapacité à utiliser les matériaux sur ce site, même si AID Donation ou un représentant autorisé de AID Donation a été informé de la possibilité de tels dommages.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Modifications des Conditions
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Toute modification sera publiée sur cette page, et nous vous encourageons à consulter régulièrement cette page pour être informé de toute mise à jour.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Nous Contacter
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Si vous avez des questions concernant ces conditions d'utilisation, vous pouvez nous contacter en utilisant les informations ci-dessous :
                <br/>
                Email: support@aid.com
                <br/>
                Téléphone: +216 12 345 678
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsOfUseSection;
