// Dependencies
import React, { useReducer } from "react";

// Local context
import { ExerciceProvider } from "./providers";

// Local reducer
import { exerciceReducer } from "./reducers";

// Style
import "./App.scss";

// Layouts
import Layout from "./layouts";

function App() {
  // Reducer
  const state = useReducer(exerciceReducer, {});

  return (
    <ExerciceProvider value={state}>
      <Layout />
    </ExerciceProvider>
  );
}

export default App;
