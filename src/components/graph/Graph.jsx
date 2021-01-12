import React, { useEffect, useContext, useState } from "react";
import { Line } from "react-chartjs-2";
import CoinContext from "./../../context/coinContext";
import "./Graph.scss";

const Graph = () => {
  const coinContext = useContext(CoinContext);
  const { graphData, getGraphData } = coinContext;
  const [time, setTime] = useState("30");

  const coin = localStorage.getItem("info");
  const currency = localStorage.getItem("currentCurrency");

  const onChange = (e) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    getGraphData({
      id: coin,
      vs_currency: currency,
      days: time,
    });
    //eslint-disable-next-line
  }, [time]);

  const graph = {
    labels: graphData.map((price) => price[0]),
    datasets: [
      {
        label: coin,
        data: graphData.map((price) => price[1]),
        borderColor: "#96bb7c",
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };
  return (
    <>
      <div className="graph">
        <Line
          data={graph}
          width={75}
          height={500}
          options={{
            scales: {
              xAxes: [
                {
                  type: "time",
                  distribution: "linear",
                  scaleLabel: {
                    display: true,
                    labelString: `Time`,
                    fontSize: "20",
                    fontColor: "#96bb7c",
                  },
                },
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: `Price in ${currency}`,
                    fontSize: "20",
                    fontColor: "#96bb7c",
                  },
                  ticks: {
                    // beginAtZero: true,
                  },
                  spanGaps: false,
                },
              ],
            },
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div className="time">
        Duration:
        <input
          type="radio"
          value="1"
          name="time"
          checked={time === "1"}
          onChange={onChange}
        />
        day
        <input
          type="radio"
          value="30"
          name="time"
          checked={time === "30"}
          onChange={onChange}
        />
        month
        <input
          type="radio"
          value="365"
          name="time"
          checked={time === "365"}
          onChange={onChange}
        />
        year
      </div>
    </>
  );
};

export default Graph;
