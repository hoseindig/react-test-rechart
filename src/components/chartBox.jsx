import BarChartBox from "./barChart";
import LineChart from "./LineChart";
import PieChartBox from "./pieChart";
import RadialBarChartBox from "./RadialBarChart";
import React, { Component } from "react";
class ChartBox extends Component {
  componentDidMount() {
    setInterval(() => {
      this.makeDataFake();
    }, 3000);
  }
  state = {
    groupName: ["Page A", "Page B", "Page C", "Page D", "Page E"],
    groupName2: ["Page E", "Page F", "Page G", "Page H", "Page I"],
    data: [],
    data2: [],
  };
  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  makeDataFake = () => {
    const { groupName, groupName2 } = this.state;
    let data = [];
    let data2 = [];
    for (let i = 0; i < groupName.length; i++) {
      let obj = {
        name: groupName[i],
        uv: this.randomNumber(1000, 10000),
        pv: this.randomNumber(1000, 10000),
        amt: this.randomNumber(1000, 10000),
        value: this.randomNumber(1000, 10000),
        fill:
          "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
      };
      let obj2 = {
        name: groupName2[i],
        uv: this.randomNumber(1000, 10000),
        pv: this.randomNumber(1000, 10000),
        amt: this.randomNumber(1000, 10000),
        value: this.randomNumber(1000, 10000),
        fill:
          "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
      };
      data.push(obj);
      data2.push(obj2);
    }
    this.setState({ data, data2 });
    console.log(data);
  };
  render() {
    const { data, data2 } = this.state;

    return (
      <div>
        <BarChartBox data={data} />
        <LineChart data={data} />
        <PieChartBox data={data} data2={data2} />

        <RadialBarChartBox data={data} />
      </div>
    );
  }
}

export default ChartBox;
/*
const ChartBox = () => {
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
  setInterval(() => {
    makeDataFake();
  }, 1000);
  return (
    <div>
      <BarChartBox data={data} />
    </div>
  );
};

export default ChartBox;
*/
