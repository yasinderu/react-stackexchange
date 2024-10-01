import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import QuestionItem from "./item/QuestionItem";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/actionCreators/questions";
import spinner from "../../spinner/spinner.svg";

const QuestionsContainer = ({ activeTag }) => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);
  const [page, setPage] = useState(1);
  const fetchQuestions = () => {
    dispatch(getQuestions(activeTag, page, true));
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={questions.length}
        next={fetchQuestions}
        hasMore={true}
        loader={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={spinner} alt="Loading..." />
          </div>
        }
      >
        {questions?.map((q) => (
          <QuestionItem
            title={q.title}
            score={q.score}
            viewed={q.view_count}
            link={q.link}
            answers={q.answer_count}
            accepted={q.is_answered}
            owner={q.owner}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default QuestionsContainer;
