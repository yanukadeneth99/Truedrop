import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Truedrop"
        description="Create your souldrop using thirdweb"
      />

      <div className="min-h-screen flex flex-col ">
        <Navbar />
        <motion.div
          animate={{ y: [0, -130, 0] }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <Hero />
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
