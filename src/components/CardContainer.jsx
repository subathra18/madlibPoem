import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNextQuestionnaire } from "../features/questionnaires";
import { generateMadlib } from "../features/madlib";
import Card from "./Card";
import Poem from "./Poem";

const INITIAL_BUTTON_TEXT = "NEXT";

const CardContainer = ({ onSubmit }) => {
  const [buttonText, setButtonText] = useState(INITIAL_BUTTON_TEXT);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [isInitialQuestionSetOver, setIsInitialQuestionSetOver] =
    useState(false);
  const dispatch = useDispatch();

  const currentQuestionnaire = useSelector((state) => {
    return state.questionnaires.currentQuestionnaire;
  });

  const questionObj = currentQuestionnaire.questionnaire;

  const handleAnswerChange = (qnId, key, answer) => {
    setAnswer((answerArray) => {
      return [...answerArray, { qnId, key, answer }];
    });
  };

  const submitAnswers = (ans) => {
    dispatch(
      generateMadlib({
        answers: [...answer, ans],
        questionnaireID: currentQuestionnaire.madlibId,
      })
    );
    onSubmit(true);
  };

  const fetchNextSetOfQuestions = (ans) => {
    dispatch(fetchNextQuestionnaire({ answer: [...answer, ans] }));
  };

  const getButtonText = () => {
    return isInitialQuestionSetOver && questionIndex == questionObj.length - 1
      ? "SUBMIT"
      : buttonText;
  };

  const handleButtonClick = (qnid, key, ans) => {
    if (!isInitialQuestionSetOver && questionIndex == questionObj.length - 1) {
      setIsInitialQuestionSetOver(true);
      fetchNextSetOfQuestions({ qnid, key, answer: ans });
      setQuestionIndex(0);
      handleAnswerChange(qnid, key, ans);
    } else if (
      isInitialQuestionSetOver &&
      questionIndex == questionObj.length - 1
    ) {
      submitAnswers({ qnid, key, answer: ans });
    } else {
      handleAnswerChange(qnid, key, ans);
      setQuestionIndex((index) => {
        return index + 1;
      });
    }
  };

  return (
    <Card
      questionObj={questionObj[questionIndex]}
      buttonText={getButtonText()}
      handleButtonClick={handleButtonClick}
    ></Card>
  );
};

export default CardContainer;
