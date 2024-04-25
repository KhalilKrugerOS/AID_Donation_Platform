import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain  py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-3xl font-bold leading-tight text-primary-900 md:text-5xl">
              Hosti, chouf w reservi teskertek maana
            </h1>
            <p className="p-regular-20 md:p-regular-24 ">
              Platform Tounsi For event hosting, booking and ticket reserving
            </p>
            <Button size="lg" className="rounded-full w-full sm:w-fit">
              <Link href="#events">Get started</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero image"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col">
        <h2 className="h2-bold text-center">
          Trusted by <br />
          Major Tunisian Events
        </h2>
      </section>
    </>
  );
}
