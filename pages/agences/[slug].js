import React from "react";
import { useRouter } from "next/router";
import { getAgencys } from "../../data/agencys";
import AgenceLayout from "../../components/Layout/AgenceLayout";

export default function Agence() {
  const router = useRouter();
  const { slug } = router.query;

  const agency = getAgencys.find((agency) => agency.slug === slug);

  if (!agency) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        Agence non trouvée
      </div>
    );
  }

  return (
    <>
      <AgenceLayout title={agency.title} />
    </>
  );
}

// export default function Agence({ agency }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Chargement...</div>;
//   }

//   if (!agency) {
//     return <div>Agence non trouvée</div>;
//   }

//   return (
//     <>
//       <AgenceLayout title={agency.title} />
//     </>
//   );
// }

// export async function getStaticPaths() {
//   const paths = getAgencys.map((agency) => ({
//     params: { slug: agency.slug },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const agency = getAgencys.find((agency) => agency.slug === params.slug);

//   return {
//     props: {
//       agency,
//     },
//     revalidate: 1,
//   };
// }
