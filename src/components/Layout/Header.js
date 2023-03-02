import React from "react";

import classes from "./Header.module.css";
import mealsImg from "../../assest/meals.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
