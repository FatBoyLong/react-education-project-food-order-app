import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mealsImg from "../../assest/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
