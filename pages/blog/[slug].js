import { useRouter } from "next/router";
import posts from "../../data/posts";
import BlogLayout from "../../components/Layout/BlogLayout";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Article non trouvé</div>;
  }

  return (
    <>
      <BlogLayout datas={post} />
    </>
  );
}

// // pages/blog/[slug].js
// import { useRouter } from "next/router";
// import posts from "../../data/posts";
// import BlogLayout from "../../components/Layout/BlogLayout";

// export default function BlogPost({ post }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Chargement...</div>;
//   }

//   if (!post) {
//     return <div>Article non trouvé</div>;
//   }

//   return (
//     <>
//       <BlogLayout title={post.title} />
//     </>
//   );
// }

// export async function getStaticPaths() {
//   const paths = posts.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const post = posts.find((post) => post.slug === params.slug);

//   return {
//     props: {
//       post,
//     },
//     revalidate: 1,
//   };
// }
