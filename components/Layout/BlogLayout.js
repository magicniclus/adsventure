import React from "react";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Headers/Header";
import HeroBottom from "../Organisms/Hero/HeroBottom";

const BlogLayout = (props) => {
  const data = props.datas;

  const getContent = (content) => {
    switch (content.tag) {
      case "h2":
        return (
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {content.content}
          </h2>
        );
      case "h3":
        return (
          <h3 className="mt-16 text-xl font-bold tracking-tight text-gray-900">
            {content.content}
          </h3>
        );
      case "h4":
        return (
          <h4 className="mt-16 text-lg font-bold tracking-tight text-gray-900">
            {content.content}
          </h4>
        );
      case "p":
        return <p className="mt-6 text-xl leading-8">{content.content}</p>;
      default:
        return null;
    }
  };
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
      </Head>
      <main className="min-h-[100vh]">
        <Header />
        <div className="bg-white py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <div className="md:float-left mr-8 mb-4">
              <img
                src="/images/blogs/agence-google.jpg"
                alt="your-image-description"
                className="md:h-64 md:w-64 w-full object-cover object-top"
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
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
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
    </>
  );
};

export default BlogLayout;
