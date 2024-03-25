import React from "react";
import { useState } from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";

const Card = ({ questionObj, handleButtonClick, buttonText }) => {
  const [answer, setAnswer] = useState("");
  const { question, type = "input" } = questionObj;

  const OnButtonClick = () => {
    handleButtonClick(questionObj.id, questionObj.key, answer);
    setAnswer("");
  };
  return (
    <div className="w-9/12 text-cl-text flex flex-col justify-center items-center text-center">
      <p className="text-3xl font-medium">{question}</p>
      <div className="text-2xl my-4">
        {type == "input" ? (
          <Input
            placeholder="pen here"
            value={answer}
            onChangeHandler={setAnswer}
          ></Input>
        ) : (
          ""
        )}
        {type == "dropdown" ? (
          <Dropdown
            selectedValue={answer}
            onSelectHandler={setAnswer}
            options={questionObj.options}
          ></Dropdown>
        ) : (
          ""
        )}
      </div>

      <button
        onClick={OnButtonClick}
        className="btn  text-white  bg-cl-button hover:bg-cl-border"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
