import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import { colors } from "../../styles/colors";

function BarChart() {
  const [series, setSeries] = useState([
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 5.8, 2.5, 3],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 300,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      // ...other data label options
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      // ...other xaxis options
    },
    // Set the color of the bars
    colors: [colors.colorOrange], // Orange color
  });

  return (
    <div style={{ textAlign: "center", flex: 0.65 }} id="chart">
      <span style={{ fontSize: "14px", fontWeight: "700" }}>
        Social Overview
      </span>
      <ApexCharts options={options} series={series} type="bar" height={250} />
    </div>
  );
}

export default BarChart;
