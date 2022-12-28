import { useContext } from "react";
import { ExerciceContext } from "../providers";

export const useExerciceContext = () => {
  const exerciceContext = useContext(ExerciceContext);
  return {
    state: exerciceContext[0],
    dispatch: exerciceContext[1],
  };
};
