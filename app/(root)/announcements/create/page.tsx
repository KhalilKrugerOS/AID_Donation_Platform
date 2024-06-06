"use client"
import React, { useEffect, useState } from 'react';
import EventForm from "@/components/shared/EventForm";
import { useAuth } from "@clerk/nextjs";
import Image from 'next/image';

const CreateRequest = () => {
  const { isLoaded, userId } = useAuth();
  const [loadedUserId, setLoadedUserId] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && userId) {
      setLoadedUserId(userId);
    }
  }, [isLoaded, userId]);

  console.log("userId : ", loadedUserId);

  if (!loadedUserId) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="full-page">
        <div className="header-line"></div>
        <section className="background-container py-5">
          <br />
        <br />
          <h3 className="wrapper h3-bold text-center md:py-10 text-white mb-10">
            Request a donation
          </h3>
          <br />
          <br />
          <div className="wrapper my-8 fadeIn form-container">
            <EventForm userId={loadedUserId} type={"Create"} />
          </div>
        </section>
      </div>
      <style jsx>{`
        .full-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          background: url('/images/logo/rue1.png') no-repeat center center fixed;
          background-size: cover;
        }
        .header-line {
          position: absolute;
          top: 0;
          width: 100%;
          height: 5px;
          background-color: #007BFF; /* Change this color as needed */
        }
        .background-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          margin-left:65px;
          padding: 0 20px;
        }
        .form-container {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 20px; /* Add spacing between form fields */
        }
        h3 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px; /* More space between the title and form */
        }
        .animated-title {
          animation: titleAnimation 3s ease-in-out infinite;
        }
        @keyframes titleAnimation {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default CreateRequest;