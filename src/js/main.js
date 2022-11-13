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
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["30 Oct", "31 Oct", "1 Nov", "2 Nov", "3 Nov", "4 Nov", "5 Nov"],
    datasets: [
      {
        label: "Sales Last 7 days",
        data: [102, 190, 172, 159, 300, 95, 232, 309],
        tension: 0.4,
        backgroundColor: "hsl(210, 82%, 57%)",
        borderColor: "hsl(210, 82%, 57%)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      grid: {
        display: false,
      },
    },
  },
});
