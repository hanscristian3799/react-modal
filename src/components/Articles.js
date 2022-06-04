import React from "react";
import { articles } from "../helpers/datas/data";

const Articles = () => {
  return (
    <div className="articles">
      {articles.map((a) => {
        return (
          <div className="article" key={a.id}>
            <h3 className="article-title">{a.title}</h3>
            <p className="article-content">{a.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
