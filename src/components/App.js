import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div>
      <About  />
      <Article  />
      <ArticleList  />
      <Header  />
    </div>
  );
}

export default App;
