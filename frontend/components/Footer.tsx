import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Logo from "../assets/Logo.svg";
import Tw from "../assets/thirdweb.jpeg";
import Polygon from "../assets/polygon.jpeg";
const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center bg-black sm:px-8 px-2 py-4 min-w-full mt-auto">
      <div className="flex flex-col sm:basis-[130px]">
        <Logo width={40} height={40} />
        <h1 className="self-end font-bold text-xl uppercase text-white mb-3 sm:mb-0">
          TrueDrop
        </h1>
      </div>
      <div>
        <p className="text-white font-semibold mb-3 sm:mb-0">
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
