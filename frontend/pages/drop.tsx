import { GetStaticProps } from "next";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const drop = () => {
  return (
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
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default drop;
