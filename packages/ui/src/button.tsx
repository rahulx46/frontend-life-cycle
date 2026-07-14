import styles from "./button.module.css";

export const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      Shared Button
    </button>
  );
};