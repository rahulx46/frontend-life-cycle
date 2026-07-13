import styles from "./Button.module.css";

export const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      Shared Button
    </button>
  );
};