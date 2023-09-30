import "./App.css";
import { Main } from "./Main/Main";
import { Header } from "./Home/Header";
import { Controls } from "./Controllers/Controllers";
// import Dom from "./Hooks/Dom/Dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Controls />
    </div>
  );
}

export default App;
