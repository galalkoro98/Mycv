import "./App.css";
import { MainSections } from "./Main/Main";
import { Header } from "./Home/Header";
import { Controls } from "./Controllers/Controllers";
// import Dom from "./Hooks/Dom/Dom";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSections />
      <Controls />
    </div>
  );
}

export default App;
