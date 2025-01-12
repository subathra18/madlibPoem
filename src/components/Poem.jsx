import React from "react";
import { useSelector } from "react-redux";
import popular from "../assets/popular.svg";
const Poem = () => {
  const poem = useSelector((state) => {
    return state.madlibs.generatedMadlib;
  });
  const URL = `https://wa.me/?text=${poem}`;
  const onButtonClick = () => {
    window.open(URL, "_blank");
  };
  return (
    <div className="card w-96   shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Poem for you!</h2>
        <p>{poem}</p>
        <div className="card-actions justify-end">
          <button
            onClick={onButtonClick}
            className="btn  bg-cl-border text-white"
          >
            whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poem;
