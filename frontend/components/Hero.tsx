import HeroImg from "../assets/Hero.png";
import Image from "next/image";
import Elipse from "../assets/elipse.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" px-2">
      <div className="md:flex items-center justify-around ">
        <div className="w-10/12 md:w-[36%] mx-auto md:mx-0 my-8 order-2 relative overflow-hidden">
          <span className="absolute left-[90%]">
            <Elipse className="text-8xl" />
          </span>
          <Image src={HeroImg} />
        </div>
        <div className=" md:w-2/4 px-4 py-4 ">
          <h2 className=" font-semibold my-4 leading-tight text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </h2>
          <p className="text-xl text-skin-muted sm:mb-14 mb-10">
            rem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            malesuada tincidunt arcu. Nulla neque felis, ullamcorper eget
          </p>
          <div className="flex justify-center sm:justify-start space-x-10 ">
            <Link href="/About">
              <button className=" bg-primary bg-skin-base py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full text-yellow-50 ">
                How to Use
              </button>
            </Link>
            <Link href="/drop">
              <button className=" bg-primary bg-skin-base py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full text-yellow-50">
                Create Drop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;