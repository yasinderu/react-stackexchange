import React from "react";
import styles from "./QuestionItem.module.css";
import { getAnswerBoxStyle } from "../../../utils";

const QuestionItem = ({ title, link, score, answers, viewed, accepted }) => {
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
          <h5>hello world 4</h5>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
