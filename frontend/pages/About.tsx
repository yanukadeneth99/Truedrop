import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Images
import HaroonImage from "../assets/Haroon.jpeg";
import YanukaImage from "../assets/Yanuka.jpg";
import LarryImage from "../assets/LJ.jpg";

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About | Truedrop" description="Learn about Truedrop" />
      <section className="min-h-screen flex flex-col">
        <Navbar />
        <div className="text-center md:w-1/2 mx-auto px-5">
          <h2 className="font-semibold text-3xl mb-8 mt-6">
            What is TrueDrop?
          </h2>
          <article className="text-skin-secondary text-2xl">
            Truedrop is an initialiser which you can use to quick start your
            souldrop project easily. Souldrop is similar to airdrop where
            airdrop has vulnerabilities like the sybil attack, souldrop uses
            Soul Bound NFT tokens for drops.
          </article>
        </div>
        <hr className="w-[100px] mx-auto border-dashed border-black  my-10" />
        <div className="text-center md:w-1/2 mx-auto px-5 ">
          <h2 className="font-semibold text-3xl mb-8 mt-6">How to Use</h2>
          <article className="text-skin-secondary text-2xl">
            Click Create Drop at the Home page to generate your own souldrop
            contract quick and easy.
          </article>
        </div>
        <hr className="w-[100px] mx-auto border-dashed border-black  my-10" />
        <h2 className="font-semibold text-3xl mb-16 mt-6 text-center">
          Our Team
        </h2>
        <section className="flex justify-around flex-wrap px-2 py-10">
          <Card
            name="Haroon"
            position="Frontend Developer"
            links={[
              "https://github.com/Haroonrules",
              "https://twitter.com/codingHaroon",
              "https://discordapp.com/users/663025968603987969",
            ]}
            image={HaroonImage}
          />
          <Card
            name="Larry Cutts"
            position="Smart Contract Engineer"
            links={[
              "https://github.com/ljcutts",
              "https://twitter.com/LarryCutts6",
              "https://discordapp.com/users/868928557034917919",
            ]}
            image={LarryImage}
          />
          <Card
            name="Yanuka Deneth"
            position="Fullstack Developer"
            links={[
              "https://github.com/yanukadeneth99",
              "https://twitter.com/yanukadeneth99",
              "https://discordapp.com/users/660852074644373505",
            ]}
            image={YanukaImage}
          />
        </section>

        <Footer />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default About;
