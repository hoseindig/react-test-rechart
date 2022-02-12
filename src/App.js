import logo from "./logo.svg";
import "./App.css";
import BarChartBox from "./barChart";
function App() {
  return (
    <div className="App">
      <BarChartBox />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
