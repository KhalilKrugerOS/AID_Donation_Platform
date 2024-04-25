import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bottom-0 sticky">
      <div className="flex wrapper flex-between flex-center gap-4 p-5 flex-col text-center sm:flex-row">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="teskerti logo"
          />
        </Link>
        <p className="text-gray-500">Copyright © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
