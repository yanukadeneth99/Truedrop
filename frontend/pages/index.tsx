import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
