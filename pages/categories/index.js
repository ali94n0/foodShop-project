import CategoriesPage from "@/components/templates/CategoriesPage";
import React from "react";

function index({ filteredData }) {
  return <CategoriesPage data={filteredData} />;
}

export default index;

export async function getServerSideProps({ query }) {
  const { difficulty, time } = query;
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filteredData = data.filter((food) => {
    const difficultyResult = food.details.filter(
      (item) => item.Difficulty && item.Difficulty === difficulty
    );

    const timeResult = food.details.filter((item) => {
      const cookingTime = item["Cooking Time"] || "";
      const [timeDetails] = cookingTime.split(" ");
      if (time === "less" && timeDetails && +timeDetails <= 30) {
        return item;
      } else if (time === "more" && timeDetails && +timeDetails > 30) {
        return item;
      }
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return food;
    } else if (time && !difficulty && timeResult.length) {
      return food;
    } else if (!time && difficulty && difficultyResult.length) {
      return food;
    }
  });

  return {
    props: { filteredData },
  };
}
