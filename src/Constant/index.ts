import { Scene } from "./types";

export const DEBUG_LINK: string = process.env.REACT_APP_DEBUG_LINK || "";

export const DEFAULT_SCENE = {
  sceneId: "",
  characterName: "",
  sceneScript: "",
  characterImage: "",
  backgroundImage: "",
  sceneSound: "",
  backgroundSound: "",
  nextSceneId: "",
  options: [
    {
      answer: "",
      reaction: "",
      nextId: "",
    },
  ],
  sceneType: "meet",
  step: "script",
  optionIndex: 0
} as Scene;

export const SCENE_TYPE_TEXT = "text"
export const SCENE_TYPE_MEET = "meet"
export const SCENE_TYPE_ENDING = "ending"


export const MEET_STEP_SCRIPT = "script";
export const MEET_STEP_OPTION = "option";
export const MEET_STEP_REACTION = "reaction";
export const MEET_STEP_ENDING = "ending";

export const SCENE_TYPE_CHANGE_DURATION = 4000;

export const BGM_MAIN = "main.mp3";
export const BGM_AMY = "amy.mp3";
export const BGM_BELLA = "bella.mp3";
export const BGM_CLAIR = "clair.mp3";

export const ENDING_COUNTER_STORAGE_KEY = "ending-counter"
