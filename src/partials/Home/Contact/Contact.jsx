import { useState } from "react";
import ScalaTimes from "@assets/images/scala-times.webp";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.contact}>
      <h4 className="h4">Stay current with all the Scala things</h4>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="email" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="consent"
            value={isChecked}
            onChange={handleCheck}
          />
          <label htmlFor="consent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </label>
        </div>
      </form>
      <div className={styles.logo}>
        <img src={ScalaTimes} alt="Scala Times" width={187} height={49} />
      </div>
    </section>
  );
};
