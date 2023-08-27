import React from "react";
import Apple from "../icons/Apple";
import SpaceX from "../icons/SpaceX";
import Binance from "../icons/Binance";
import Tesla from "../icons/Tesla";
import styles from "./Companies.module.css";
function Companies(props) {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;
