import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
