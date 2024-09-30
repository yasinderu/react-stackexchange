import React, { useEffect, useMemo, useState } from "react";
import TagItem from "./item/TagItem";

import styles from "./Tags.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../store/actionCreators/tags";
import { getQuestions } from "../../store/actionCreators/questions";

const Tags = ({ tagSearchValue, setActiveTag }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  const { tags } = useSelector((state) => state.tags);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (tags.length) {
      setActive(tags[0].name);
    }
  }, [tags]);

  useEffect(() => {
    if (active !== "") {
      dispatch(getQuestions(active, 1));
    }
  }, [dispatch, active]);

  useEffect(() => {
    setActiveTag(active);
  }, [setActiveTag, active]);

  const data = useMemo(() => {
    if (!tagSearchValue) {
      return tags;
    }

    return tags?.filter((tag) => {
      return tag?.name.toLowerCase().includes(tagSearchValue.toLowerCase());
    });
  }, [tagSearchValue, tags]);

  return (
    <div className={styles.tags}>
      {data?.map((tag) => (
        <TagItem
          onClick={() => setActive(tag.name)}
          tagName={tag.name}
          active={active}
        />
      ))}
    </div>
  );
};

export default Tags;
