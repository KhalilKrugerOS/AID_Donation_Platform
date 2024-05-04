import "./lic.css";

const License = ({ currentUser, generateCertificated }) => {
  return (
    <div className="certificate"> {/* Conteneur du certificat */}
      <div className="water-mark-overlay"></div>
      <div className="certificate-header">
        <img
          src="/images/logo/aya.png"
          className="logo"
          alt=""
        />
      </div>
      <div className="certificate-body" style={{ marginTop: "10px", textAlign: "center", padding: "20px", borderRadius: "10px" }}> {/* Ajout du padding et des coins arrondis */}
        <hr style={{ borderTop: "2px solid black", width: "80%", margin: "5px auto" }} /> {/* Première ligne au-dessus du titre */}
        <p className="certificate-title" style={{ color: "black", marginTop: "10px", fontFamily: "Algerian, cursive" }}> {/* Application de la police Gabriola */}
          <strong>Certification De Donation</strong>
        </p>
        <hr style={{ borderTop: "2px solid black", width: "80%", margin: "5px auto" }} /> {/* Première ligne en dessous du titre */}
        <h1 style={{ textAlign: "center", color: "black" }}>Ceci certifie que</h1> {/* Application de la police Gabriola */}
        <p className="student-name" style={{ color: "black" }}>{currentUser?.name}</p>
        <div className="certificate-content" style={{ marginTop: "10px" }}>
          <p className="topic-title" style={{ color: "black" }}>{generateCertificated?.fileName}</p>
          <div className="text-center">
            <p className="topic-description text-muted" style={{ color: "black" }}>
              {generateCertificated?.description}
            </p>
            <p style={{ color: "black" }}>M. {generateCertificated?.fileName} a réussi à faire un don de DT {currentUser?.address} à X {generateCertificated?.ID}. Au nom de nous tous à l'association AID, nous vous remercions pour votre don et votre assistance !</p>
          </div>
        </div>
       
      </div>
      <div className="signature" style={{ marginTop: "2px", textAlign: "center" }}>
        <img src="/images/logo/sig.png" alt="Signature" style={{ width: "250px", height: "auto" }} />
      </div>
      <div className="flex justify-center mt-10"> {/* Utilisation des classes de Tailwind CSS pour centrer le bouton */}
        <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
          Télecharger PDF
        </button>
      </div>
    </div>
  );
};

export default License;
