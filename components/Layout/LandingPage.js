import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Headers/Header";
import HeaderWithHeroTwo from "../Organisms/Headers/HeaderWithHeroTwo";
import ValideModale from "../Organisms/Modales/ValideModale";
import { useSelector } from "react-redux";
import ErrorModal from "../Organisms/Modales/ErrorModal";

const LandingPage = (props) => {
  const description = props.description || null;
  const title = props.title || null;
  const withHero = props.withHero || false;
  const state = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    state.validModal?.show ? setShow(true) : setShow(false);
  }, [state.validModal]);
  useEffect(() => {
    state.errorModal?.show ? setShowError(true) : setShowError(false);
  }, [state.errorModal]);
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <main className="min-h-[100vh] relative">
        {withHero ? <HeaderWithHeroTwo /> : <Header />}
        {props.children}
      </main>
      <Footer />
      {show ? <ValideModale /> : null}
      {showError ? <ErrorModal /> : null}
    </>
  );
};

export default LandingPage;
