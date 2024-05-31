"use client";

import { useEffect, useRef } from 'react';

const PrivacyPolicyPage = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100 ">
      <div className="container mx-auto">
        <div className="bg-white  shadow-lg p-8 rounded-md max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Politique de Confidentialité</h1>
          <p className="text-sm text-gray-500 mb-8 text-right">Dernière mise à jour : 30 mai 2024</p>
          <div className="text-left">
            <div className="mb-9">
              <p className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                🔒 Politique de Confidentialité
              </p>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Votre vie privée est importante pour nous. Cette politique de confidentialité explique quelles informations nous recueillons, comment nous les utilisons, et comment nous les protégeons.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                📋 Collecte d'Informations
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Nous recueillons des informations lorsque vous vous inscrivez sur notre site, Faite un aide  ou remplissez un formulaire. Les informations collectées peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, et d'autres détails nécessaires pour fournir nos services.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                🔐 Utilisation des Informations
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Les informations que nous recueillons peuvent être utilisées pour :
                <ul className="list-disc ml-5 text-left inline-block">
                  <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
                  <li>Améliorer notre site web et nos services.</li>
                  <li>Vous envoyer des e-mails périodiques pour des mises à jour ou d'autres informations pertinentes.</li>
                </ul>
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                🔒 Protection des Informations
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Nous mettons en œuvre diverses mesures de sécurité pour protéger vos informations personnelles. Nous utilisons des méthodes avancées pour assurer la sécurité de vos données transmises et stockées sur notre site.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                🗂 Partage d'Informations à des Tiers
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Nous ne vendons, n'échangeons, ni ne transférons vos informations personnelles identifiables à des tiers. Ceci exclut les tierce parties de confiance qui nous aident à exploiter notre site web, tant que ces parties conviennent de garder ces informations confidentielles.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                📅 Modifications de notre Politique de Confidentialité
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page, et nous vous encourageons à consulter régulièrement cette page pour être informé de toute mise à jour.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                📞 Nous Contacter
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter en utilisant les informations ci-dessous :
                <br/>
                Email: support@aid.com
                <br/>
                Téléphone: +216 12345678
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
