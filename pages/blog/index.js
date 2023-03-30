import React from "react";
import posts from "../../data/posts";
import LandingPage from "../../components/Layout/LandingPage";
import Link from "next/link";

export default function index({ posts }) {
  return (
    <LandingPage
      description="Consultez notre blog et apprenez à améliorer votre stratégie de marketing digital grâce à nos conseils en SEA, SEO. Adsventure spécialiste Google Ads"
      title="Découvrez tous nos articles blog pour booster votre activité"
      canonical="blog"
    >
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Actualité Adventure
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Découvrez notre actualité ainsi que quelques informations
              importantes sur Adventure et Google Ads.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                  </Link>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 mr-3">
                      <span className="text-xs font-medium leading-none text-white">
                        NC
                      </span>
                    </span>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </LandingPage>
  );
}
export async function getStaticProps() {
  const postsData = posts;
  return {
    props: {
      posts: postsData,
    },
  };
}
