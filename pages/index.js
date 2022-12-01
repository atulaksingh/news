import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Contentcard1 from "../components/cards/Leftcard";
import Hero from "../components/main/Hero";
import OpinionC from "../components/cards/OpinionC";
import Plays from "../components/main/Plays";
import Entertainment from "../components/main/Entertainment";
import State from "../components/main/State";
import CategoryN from "../components/main/CategoryN";
import CityN from "../components/main/CityN";
import HealthN from "../components/main/HealthN";
import World from "../components/main/World";
import Automobile from "../components/main/Automobile";
import Business from "../components/main/Business";
import Astrology from "../components/main/Astrology";
import LatestN from "../components/main/LatestN";
import DetailsP from "../components/cards/DetailsP";
import DPage from "../components/main/DPage";
// import Automobile from '../components/main/Automobile'

// import Business from '../components/main/Business'
// import Astrology from '../components/main/Astrology'
// import LatestN from '../components/main/LatestN'

export default function Home() {
  return (
    <>
      <Layout>
        <div className="container m-auto px-3">
          <Hero />

          <OpinionC />
          <Plays />
          <Entertainment />

          <State />
          <CategoryN />
          <CityN />
          <HealthN />
          <World />
          <Automobile />
          <Business />
          <Astrology />
          <LatestN />
        </div>
      </Layout>
    </>
  );
}
