import styles from "./StarRating.module.css";

export const StarRating = () => {
  return (
    <>
      <div id={styles.rating}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </>
  );
};
