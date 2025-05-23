import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happing, <br /> We are bloging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imageURL={blog01}
            date="12/07/2024"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imageURL={blog02}
            date="12/07/2024"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imageURL={blog03}
            date="12/07/2024"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imageURL={blog04}
            date="12/07/2024"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imageURL={blog05}
            date="12/07/2024"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
