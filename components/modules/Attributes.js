import React from "react";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import styles from "./Attributes.module.css";

function Attributes(props) {
  return (
    <div className={styles.container}>
      <h3>Why us?</h3>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurant</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24 - 7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
