import Link from "next/link";

/* Progress bar */
const Progress = ({ value }: any) => {
  return (
    <div className="w-full bg-gray-200 rounded border border-gray-300">
      <div
        className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
        style={{ width: `${value}%` }}
      >
        {`${value}%`}
      </div>
    </div>
  );
};

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-24 lg:py-32">
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
            src="/assets/images/test-2.png"
          />
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  $12,345 raised of $20,000 goal
                </p>
                <p className="text-lg font-medium">62%</p>
              </div>
              <Progress value={62} />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                3,456 people have contributed
              </p>
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-7 sm:space-y-0">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Donate Now
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                share
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            About Our Organization
          </h2>
          <p className="text-lg max-w-prose">
            We are a non-profit organization dedicated to providing aid and
            support to those in need. Our mission is to make a positive impact
            on the lives of our community members.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Bank Account:</span> 12345678901
            </p>
            <p>
              <span className="font-medium">Phone:</span> 123-456-7890
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
          <div className="space-y-2">
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
              <Link className="underline" href="#">
                Facebook
              </Link>
              ,
              <Link className="underline" href="#">
                Twitter
              </Link>
              ,
              <Link className="underline" href="#">
                Instagram
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
