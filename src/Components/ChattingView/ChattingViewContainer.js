import React, { useState, useEffect } from "react";
import ChattingViewPresenter from "./ChattingViewPresenter";

const ChattingViewContainer = ({ scriptInterpreter }) => {
  const [chatList, setChatList] = useState([
    { who: "left", message: "당신의 이름은?" },
    { who: "right", message: "나의 이름은 ..." },
  ]);

  useEffect(() => stepNextStep(), []);

  const stepNextStep = () => {
    const { sceneScript } = scriptInterpreter.currentScene;
    setChatList((chatList) => [
      ...chatList,
      { who: "left", message: sceneScript },
    ]);
  };

  const selectOption = (optionIndex) => {
    const {answer, reaction, nextId} = scriptInterpreter.currentScene.options[optionIndex]
    setChatList((chatList) => [
      ...chatList,
      { who: "right", message: answer },
      { who: "left", message: reaction },
    ]);
    scriptInterpreter.getNextScene( nextId )
    stepNextStep()
  }

  return (
    <ChattingViewPresenter
      chatList={chatList}
      scene={scriptInterpreter.currentScene}
      selectOption={selectOption}
    ></ChattingViewPresenter>
  );
};

export default ChattingViewContainer;
