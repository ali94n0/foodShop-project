// ssg-isr
import MenuPage from "@/components/templates/MenuPage";
import React from "react";

function index({ data }) {
  console.log(data);
  return <MenuPage data={data} />;
}

export default index;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/data");
  const data = await response.json();

  return {
    props: {
      data,

      revalidate: 20,
    },
  };
}
