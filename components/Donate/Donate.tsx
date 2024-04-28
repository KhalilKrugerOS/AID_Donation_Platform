import React from "react";
import Link from "next/link";
import Progress from "../ui/Progress";
import Social from "../SocialMedia/Social";
import { FiShare } from "react-icons/fi";

export interface OrganizationProps {
  name: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  contributors: number;
  Phone: string;
  email: string;
  bankAccount: string;
  image: string;
}
function calculatePercentage(value: number, total: number): string {
  if (typeof value !== "number" || typeof total !== "number" || total === 0) {
    return "Invalid input. Please provide numerical values and ensure the total is not zero.";
  }

  const percentage: number = (value / total) * 100;
  return percentage.toFixed(0);
}

export default function Donate({
  name,
  description,
  goalAmount,
  raisedAmount,
  contributors,
  Phone,
  email,
  bankAccount,
  image,
}: OrganizationProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-8 md:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center">
            Support Our Cause
          </h1>
          <p className="text-lg max-w-prose mx-auto text-center text-gray-500 dark:text-gray-400">
            Your donation can make a real difference in the lives of those in
            need. Help us continue our mission to provide aid and support to the
            community.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img
            alt="Hero"
            className="rounded-xl object-cover w-full"
            src={image}
          />
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  {raisedAmount} raised of {goalAmount} goal
                </p>
                <p className="text-lg font-medium">
                  {calculatePercentage(raisedAmount, goalAmount)} %
                </p>
              </div>
              <Progress value={calculatePercentage(raisedAmount, goalAmount)} />
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-bold">
                {contributors} people have contributed !
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-7 sm:space-y-0 justify-center">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                <a href="https://buy.stripe.com/test_aEUaIk5dq6UQ7gQfYY">
                  Donate Now
                </a>
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <div className="flex">
                  share {"  "}
                  <FiShare />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            About Our Organization
          </h2>
          <p className="text-lg max-w-prose mx-auto text-center text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="mt-8 tracking-tighter space-y-4 text-center">
          <h3 className="text-3xl font-bold">Contact Us</h3>
          <div className="text-lg space-y-2 text-gray-500 dark:text-gray-400">
            <p>
              <span className="font-medium">Bank Account:</span> {bankAccount}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {Phone}
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href={email}>{email}</a>
            </p>

            <p>
              <span className="font-medium">Legal Documents:</span>
              <Link className="underline" href="#">
                Terms of Service
              </Link>
              ,
              <Link className="underline" href="#">
                Privacy Policy
              </Link>
            </p>
            <p>
              <span className="font-medium">Social Media:</span>
              <Social />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
