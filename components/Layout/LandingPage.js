import React from "react";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Headers/Header";
import HeaderWithHeroTwo from "../Organisms/Headers/HeaderWithHeroTwo";

const LandingPage = (props) => {
  const description = props.description || null;
  const title = props.title || null;
  const withHero = props.withHero || false;

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <main className="min-h-[100vh]">
        {withHero ? <HeaderWithHeroTwo /> : <Header />}
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
