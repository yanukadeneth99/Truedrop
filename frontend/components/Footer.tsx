import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Logo from "../assets/Logo.svg";
import Tw from "../assets/thirdweb.jpeg";
import Polygon from "../assets/polygon.jpeg";
const Footer = () => {
  return (
    <section className="flex justify-between items-center bg-black px-2 py-4 min-w-full mt-auto">
      <div className="flex flex-col basis-[150px]">
        <Logo width={40} height={40} />
        <h1 className="self-end font-bold text-2xl uppercase text-white">
          TrueDrop
        </h1>
      </div>
      <div>
        <p className="text-white font-semibold">
          TrueDrop 2022| All Rights Reserved
        </p>
      </div>
      <div className="flex ">
        <BsGithub className="text-3xl mr-4 text-white" />
        <span className="inline-block rounded-full mr-4">
          <Image src={Tw} width={30} height={30} />
        </span>
        <span className="inline-block rounded-full mr-4">
          <Image src={Polygon} width={30} height={30} />
        </span>
      </div>
    </section>
  );
};

export default Footer;
