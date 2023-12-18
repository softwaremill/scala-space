import { Spinner } from "@components/Spinner/Spinner";
import { useCreateForm } from "./useCreateForm";
import globalStyles from "@css/globals.module.scss";
import styles from "./Form.module.scss";

export const Form = () => {
  useCreateForm();

  return (
    <div className={`${globalStyles.section} ${styles.container}`}>
      <div className={styles.heading}>
        <h1 className={globalStyles.h1}>
          Let's <span className={globalStyles["color-secondary"]}>talk</span>
        </h1>
        <p className={styles["title-suffix"]}>about all things Scala-related</p>
      </div>
      <div id="hubspot-form" className={styles.form}>
        <Spinner />
      </div>
    </div>
  );
};
