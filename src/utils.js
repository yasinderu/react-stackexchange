export const getAnswerBoxStyle = (answerCount, accepted) => {
  if (answerCount > 1 && !accepted) {
    return { border: "1px solid #46d679" };
  } else if (answerCount > 1 && accepted) {
    return { "background-color": "#46d679" };
  } else {
    return {};
  }
};
