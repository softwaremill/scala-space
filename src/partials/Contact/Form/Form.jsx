import { Spinner } from "@components/Spinner/Spinner";
import styles from "./Form.module.scss";
import { useCreateForm } from "./useCreateForm";

export const Form = () => {
  useCreateForm();

  return (
    <div className={`section ${styles.container}`}>
      <h1 className="h1">
        Let's <span className="color-secondary">talk</span>
      </h1>
      <p className={styles["title-suffix"]}>about all things Scala-related</p>
      <div id="hubspot-form" className={styles.form}>
        <Spinner />
      </div>
    </div>
  );
};
