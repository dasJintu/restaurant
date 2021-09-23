import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import about1 from "../public/about1.png";
import about2 from "../public/about2.png";

function About() {
  return (
    <div className="container">
      <h1 className="text-center font-serif mt-24 mb-6 text-4xl font-bold text-gray-800">
        ONE PATTY AT A TIME
      </h1>
      <p className="text-center text-lg text-gray-600 mb-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
      <div className="flex justify-between items-center gap-8 my-20">
        <div className="space-y-4">
          <Image src={about1} className="w-full" alt="Picture of burger" />
          <h1 className="text-xl font-serif text-gray-700 text-center">
            WE'RE HERE TO SERVE YOU
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>
        <div className="space-y-4">
          <Image src={about2} className="w-full" alt="Picture of burger" />
          <h1 className="text-xl font-serif text-gray-700 text-center">
            A FAMILY GATHERING
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
