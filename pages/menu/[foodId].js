import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";
import React from "react";

function Details({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading Page...</h2>;
  }
  console.log(data);
  return <DetailsPage data={data} />;
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const result = await res.json();
  const data = result.slice(0 - 10);

  const paths = data.map((food) => ({
    params: {
      foodId: food.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:4000/data/${params.foodId}`);
  const data = await response.json();

  return {
    props: {
      data,
      revalidate: 20,
    },
  };
}
