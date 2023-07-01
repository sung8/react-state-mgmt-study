import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
      }
    },
    {
      names: [],
      name: ""
    }
  );
  return (
    <div className="App">
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />
      <div>Name = {state.name}</div>
    </div>
  );
}

export default App;
