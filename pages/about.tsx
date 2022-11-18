import React from "react";

const about = () => {
  return <div>about</div>;
};

export async function getStaticProps() {
  const result = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  console.log("result = ", result);
  return {
    props: { post: {} },
  };
}
export default about;
