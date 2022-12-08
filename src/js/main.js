// Import Style
import "../scss/styles.scss";
// Import Bootstrap Js
import * as bootstrap from "bootstrap";

// Import Boxicons
import "boxicons";

// Import Chart JS
import Chart from "chart.js/auto";
// Sales Chart
const ctx = document.getElementById("salesChart");
Chart.defaults.borderColor = "#EBEDF0";
// Chart.defaults.borderWidth = "1px";
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["30 Oct", "31 Oct", "1 Nov", "2 Nov", "3 Nov", "4 Nov", "5 Nov"],
    datasets: [
      {
        label: "Sales Last 7 days",
        data: [102, 190, 172, 159, 300, 95, 232, 309],
        tension: 0.4,
        // backgroundColor: "hsl(210, 82%, 57%)",
        borderColor: "hsl(210, 82%, 57%)",
        backgroundColor: "hsla(210, 82%, 57%, .2)",
        borderWidth: 1,
        fill: true,
        pointStyle: "solid",
      },

      // {
      //   label: "time Last 7 days",
      //   data: [3, 90, 272, 359, 120, 95, 299, 509],
      //   tension: 0.4,
      //   // backgroundColor: "hsl(210, 82%, 57%)",
      //   borderColor: "hsl(0, 0%, 69%)",
      //   backgroundColor: "hsla(0, 0%, 69%, .2)",
      //   borderWidth: 1,
      //   fill: true,
      // },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",

        labels: {
          usePointStyle: false,
          pointStyle: "circle",
        },
      },
      // title: {
      //   display: true,
      //   text: "Last 7 Days",
      //   color: "#000",
      //   position: "top",
      //   align: "start",
      //   font: {
      //     size: "15rem",
      //     weight: "normal",
      //     family: "'Roboto', sans-serif",
      //   },
      // },
    },
    scales: {
      y: {
        beginAtZero: true,
        // suggestedMax: 1000,
        ticks: {
          callback: function (value, index, ticks) {
            // return "$ " + value;
            // return ticks.index ;

            return "$ " + value;
          },
        },
      },

      x: {
        display: false,
      },
    },
  },
});
