import { GetStaticProps } from "next";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <div className="text-center md:w-1/2 mx-auto px-5">
        <h2 className="font-semibold text-3xl mb-8 mt-6">What is TrueDrop?</h2>
        <article className="text-skin-secondary text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisci ng elit. Et sed purus
          ullamcorper enim. Non viverr a id mauris egestas ipsum. Placerat
          platea convallis eu cras. Tellus libero cras amet etiam nam ut. Dis
          urn a proin et scelerisque dolor.
        </article>
      </div>
      <hr className="w-[100px] mx-auto border-dashed border-black  my-10" />
      <div className="text-center md:w-1/2 mx-auto px-5 ">
        <h2 className="font-semibold text-3xl mb-8 mt-6">How to Use </h2>
        <article className="text-skin-secondary text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisci ng elit. Et sed purus
          ullamcorper enim. Non viverr a id mauris egestas ipsum. Placerat
          platea convallis eu cras. Tellus libero cras amet etiam nam ut. Dis
          urn a proin et scelerisque dolor.
        </article>
      </div>
      <hr className="w-[100px] mx-auto border-dashed border-black  my-10" />
      <h2 className="font-semibold text-3xl mb-16 mt-6 text-center">
        Our Team
      </h2>
      <section className="flex justify-around flex-wrap px-2 py-10">
        <Card />
        <Card />
        <Card />
      </section>

      <Footer />
    </section>
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
