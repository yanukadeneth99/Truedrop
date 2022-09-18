import { GetStaticProps } from "next";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { NextSeo } from "next-seo";

const Drop = () => {
  return (
    <>
      <NextSeo title="Drop | Truedrop" description="Create your Souldrop now" />
      ;
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <section className="">
          <h2 className="text-3xl text-center my-10 font-semibold">
            Create Drop Now...
          </h2>
          <Form />
        </section>
        <Footer />
      </div>
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

export default Drop;
