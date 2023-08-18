import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";

function App() {
  return (
    <div
      style={{ backgroundColor: "#A8A8A8", minHeight: "100vh" }}
      className="flex"
    >
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default App;
