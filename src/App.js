//https://recharts.org/en-US/api/BarChart
import logo from "./logo.svg";
import "./App.css";


import ChartBox from "./components/chartBox";
function App() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const groupName = ["Page A", "Page B", "Page C", "Page D", "Page E"];
  let data = [];
  function makeDataFake() {
    data = [];
    for (let i = 0; i < groupName.length; i++) {
      let obj = {
        name: groupName[i],
        uv: randomNumber(1000, 10000),
        pv: randomNumber(1000, 10000),
        amt: randomNumber(1000, 10000),
      };
      data.push(obj);
    }
    console.log(data);
  }

  // setInterval(() => {
  makeDataFake();
  // }, 1000);
  return (
    <div className="App">
      <ChartBox />
      {/* 
      
      <RadialBarChartBox /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
