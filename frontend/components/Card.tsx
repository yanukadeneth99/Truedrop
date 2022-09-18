import { GetStaticProps } from "next";
import Image from "next/image";
import HaroonImg from "../assets/Haroon.jpeg";
import YanukaImg from "../assets/Yanuka.jpeg";
import LJImg from "../assets/LJ.jpg";
import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="max-w-xs bg-skin-secondary rounded-xl text-[#ffffff] my-8">
        <div className="flex flex-col justify-center items-center py-8 px-8">
          <div className="w-[256px] h-[237px] relative">
            <Image src={HaroonImg} className="rounded-full" layout="fill" />
          </div>
          <h2 className="text-3xl my-3">Haroon Hassan</h2>
          <p className="mb-3">Frontend</p>
          <div className="flex space-x-9">
            <BsGithub className="text-3xl cursor-pointer" />
            <BsTwitter className="text-3xl cursor-pointer" />
            <BsDiscord className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default Card;
