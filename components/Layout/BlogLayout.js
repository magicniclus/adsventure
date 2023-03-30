import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Headers/Header";
import HeroBottom from "../Organisms/Hero/HeroBottom";
import { getContent } from "../../utils/getContent";
import ValideModale from "../Organisms/Modales/ValideModale";
import { useSelector } from "react-redux";
import ErrorModal from "../Organisms/Modales/ErrorModal";

const BlogLayout = (props) => {
  const robots = props.robots || "follow";
  const data = props.datas;
  const canonical = data.slug;
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
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="robots" content={"index, " + robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fr" />
        <link
          rel="canonical"
          href={"https://www.adsventure-agency.com/" + canonical}
        />
      </Head>
      <main className="min-h-[100vh]">
        <Header />
        <div className="bg-white py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <div className="md:float-left mr-8 mb-4">
              <img
                src={data.imageUrl}
                alt={data.image.alt}
                className="h-52 w-full object-cover object-top"
              />
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.title}
            </h1>
            {data.content &&
              data.content.map((c, index) => (
                <div key={index}>{getContent(c)}</div>
              ))}
            <div className="relative mt-8 flex items-center gap-x-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                <span className="text-xs font-medium leading-none text-white">
                  NC
                </span>
              </span>
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <span className="absolute inset-0" />
                  {data.author.name}
                </p>
                <p className="text-gray-600">{data.author.role}</p>
              </div>
            </div>
          </div>
        </div>
        <HeroBottom />
      </main>
      <Footer />
      {show ? <ValideModale /> : null}
      {showError ? <ErrorModal /> : null}
    </>
  );
};

export default BlogLayout;
