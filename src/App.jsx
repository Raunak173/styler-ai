import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import { useState } from "react";

function App() {
  const [vid, setVid] = useState(null);
  return (
    <div
      style={{ backgroundColor: "#A8A8A8", minHeight: "100vh" }}
      className="flex"
    >
      <Left />
      <Middle vid={vid} setVid={setVid} />
      <Right vid={vid} setVid={setVid} />
    </div>
  );
}

export default App;
