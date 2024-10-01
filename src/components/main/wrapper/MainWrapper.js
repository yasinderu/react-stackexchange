import React, { useState, lazy, Suspense, useEffect } from "react";

import styles from "./MainWrapper.module.css";
import Tags from "../../tags/Tags";
const QuestionsContainer = lazy(() =>
  import("../../questions/QuestionsContainer")
);

const MainWrapper = () => {
  const [tagValue, setTagValue] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <div className={styles.mainWrapper}>
      <div
        className={`${styles.searchContainer} ${scroll ? styles.sticky : ""}`}
      >
        <form>
          <input
            type="text"
            placeholder="Tags"
            value={tagValue}
            onChange={(e) => setTagValue(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
        <h2>Trending</h2>
        <Tags tagSearchValue={tagValue} setActiveTag={setActiveTag} />
      </div>
      <Suspense>
        <QuestionsContainer activeTag={activeTag} />
      </Suspense>
    </div>
  );
};

export default MainWrapper;
