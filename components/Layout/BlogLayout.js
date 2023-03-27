import React from "react";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Headers/Header";

const BlogLayout = (props) => {
  const title = props.title;
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <main className="min-h-[100vh]">
        <Header />
        <div className=" mt-24 sm:mt-32">
          <h1 className="text-gray-700">{title}</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogLayout;
