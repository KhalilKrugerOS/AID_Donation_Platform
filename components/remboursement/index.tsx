"use client";

import { useEffect, useRef } from 'react';

const RefundPolicyPage = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg p-8 rounded-md max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Politique de Remboursement</h1>
          <p className="text-sm text-gray-500 mb-8 text-right">Dernière mise à jour : 30 mai 2024</p>
          <div className="text-left">
            <div className="mb-9">
              <p className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                🔄 Politique de Remboursement
              </p>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Chez AID Donation, nous nous engageons à garantir la satisfaction de nos donateurs. Si, pour une raison quelconque, vous n'êtes pas entièrement satisfait de votre donation ou si vous avez fait une erreur, nous sommes là pour vous aider avec notre politique de remboursement.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                🕒 Délai de Remboursement
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Vous avez 30 jours calendaires pour demander un remboursement à partir de la date de votre donation. Passé ce délai, nous ne pourrons malheureusement pas vous offrir un remboursement ou un échange.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                📦 Conditions de Remboursement
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Pour être éligible à un remboursement, votre demande doit répondre aux critères suivants :
                <ul className="list-disc ml-5 text-left inline-block">
                  <li>La demande doit être faite dans les 30 jours suivant la donation.</li>
                  <li>La donation doit avoir été effectuée par erreur ou suite à une décision volontaire de retrait de soutien.</li>
                </ul>
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                💸 Processus de Remboursement
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Une fois que nous aurons reçu votre demande de remboursement, nous l'examinerons et vous informerons de la réception de votre demande. Nous vous notifierons immédiatement de l'état de votre remboursement après examen. Si votre demande est approuvée, nous initierons un remboursement sur votre carte de crédit (ou le mode de paiement original). Vous recevrez le crédit dans un certain nombre de jours, selon les politiques de l'émetteur de votre carte.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                📅 Modifications de notre Politique de Remboursement
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de remboursement à tout moment. Toute modification sera publiée sur cette page, et nous vous encourageons à consulter régulièrement cette page pour être informé de toute mise à jour.
              </p>
            </div>
            <div className="mb-9">
              <h6 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                📞 Nous Contacter
              </h6>
              <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed">
                Si vous avez des questions concernant cette politique de remboursement, vous pouvez nous contacter en utilisant les informations ci-dessous :
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

export default RefundPolicyPage;
