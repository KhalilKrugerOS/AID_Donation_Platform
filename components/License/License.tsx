import React from "react";
import "./lic.css";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import GeneratePDF from "../GeneratePDF/GeneratePDF";

const License = async ({ params, searchParams }: any) => {
  const { sessionClaims } = auth();
  const clerkId = sessionClaims?.userId as string;
  const userInfo = await getUserById(clerkId);
  console.log(userInfo);

  // Function to get the current date
  const getCurrentDate = () => {
    const today = new Date();
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("fr-FR", options);
  };

  // Define the location
  const location = "Tunis, Tunisie";

  return (
    <div id="certificate" className="certificate">
      <div className="water-mark-overlay"></div>
      <div className="certificate-header">
        <img src="/assets/images/logo/aya.jfif" className="logo" alt="Logo" />
      </div>
      <div
        className="certificate-body"
        style={{
          marginTop: "10px",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <hr
          style={{
            borderTop: "2px solid black",
            width: "80%",
            margin: "5px auto",
          }}
        />
        <p
          className="certificate-title"
          style={{
            color: "black",
            marginTop: "10px",
            fontFamily: "Algerian, cursive",
            fontSize: "28px",
          }}
        >
          <strong>Certification De Donation</strong>
        </p>
        <hr
          style={{
            borderTop: "2px solid black",
            width: "80%",
            margin: "5px auto",
          }}
        />
        <h1 style={{ textAlign: "center", color: "black" }}>
          Ceci certifie que
        </h1>
        <div className="certificate-content" style={{ marginTop: "10px" }}>
          <p className="topic-title" style={{ color: "black" }}>
            {/* Any additional content can go here */}
          </p>
          <div className="text-center">
            <p
              className="topic-description text-muted"
              style={{ color: "black" }}
            >
              {/* Any additional content can go here */}
            </p>
            <p style={{ color: "black" }}>
              M(me). {userInfo.firstName} {userInfo.lastName} a réussi(e) à
              faire un don de {userInfo.donatedMoney} TND
              {/* Add the name of the organization or recipient here */}. Au nom
              de nous tous à la platforme AID, nous vous remercions pour votre
              don et votre assistance !
            </p>
          </div>
        </div>
      </div>
      <div className="signature">
        <img src="/assets/images/logo/sigg.jfif" alt="Signature" />
        <p className="signature-date">
          {location}, le {getCurrentDate()}
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          onClick={GeneratePDF}
        >
          Télecharger PDF
        </button>
      </div>
    </div>
  );
};

export default License;
