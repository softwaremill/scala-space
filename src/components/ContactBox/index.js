import React from "react";
import style from "./styles.module.scss";

export default function ContactBox() {
  return (
    <section className={style.formWrapper}>
      <h2 className="title mb-4">Stay current with all the Scala things</h2>
      <a href="https://scalatimes.com/" target="_blank">
        <img src="./img/scala-times.svg" />
      </a>
    </section>
  );
}
