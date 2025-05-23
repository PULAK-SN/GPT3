import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAi
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          eligendi deleniti dignissimos voluptatum provident obcaecati saepe
          asperiores laborum a sunt veniam, sit quibusdam esse id tenetur unde.
          Modi voluptates officia Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam, ad!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
