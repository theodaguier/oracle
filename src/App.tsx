import { useState } from "react";
import Oracle from "./Components/Oracle";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Oracle />
    </div>
  );
}

export default App;
