import React from "react";
import styles from "./QuestionItem.module.css";
import { getAnswerBoxStyle } from "../../../utils";

const QuestionItem = ({
  title,
  link,
  score,
  answers,
  viewed,
  accepted,
  owner,
}) => {
  return (
    <div>
      <h3 className={styles.title}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <div className={styles.box}>
        <div className={styles.boxItem}>
          <h4>Score</h4>
          <p style={{ color: score < 0 ? "#c94925" : "" }}>{score}</p>
        </div>
        <div className={styles.boxItem}>
          <h4>Answers</h4>
          <div
            className={styles.ans}
            style={getAnswerBoxStyle(answers, accepted)}
          >
            {answers}
          </div>
        </div>
        <div className={styles.boxItem}>
          <h4>Viewed</h4>
          <p>{viewed}</p>
        </div>
        <div className={styles.boxItem}>
          <img
            className={styles.profilePict}
            src={owner?.profile_image}
            alt="Avatar"
          />
          <h4>{owner?.display_name}</h4>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
