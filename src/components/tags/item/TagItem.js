import React from "react";
import styles from "./TagItem.module.css";

const TagItem = ({ onClick, active, tagName }) => {
  return (
    <div
      className={`${styles.tagItem} ${active === tagName ? styles.active : ""}`}
      onClick={onClick}
    >
      {tagName}
    </div>
  );
};

export default TagItem;
