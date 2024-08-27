"use client";

import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Dashboard: React.FC = () => {
  const pieData = {
    labels: [
      "IT",
      "Engineering",
      "Electronic",
      "Furniture & Fixtures",
      "General",
    ],
    datasets: [
      {
        label: "Asset Distribution",
        data: [400, 0, 0, 0, 0],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Total"],
    datasets: [
      {
        label: "Asset Status",
        data: [400],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Inventory Dashboard
      </h2>

      <div className="flex justify-between mb-12">
        <div className="w-1/2 pr-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-medium text-gray-700 mb-4 text-center">
              Asset Distribution
            </h3>
            <Pie data={pieData} />
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-medium text-gray-700 mb-4 text-center">
              Asset Status
            </h3>
            <Bar
              data={barData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: "rgba(54, 162, 235, 1)",
                      font: { size: 14 },
                    },
                    grid: {
                      color: "rgba(200, 200, 200, 0.2)",
                    },
                  },
                  x: {
                    ticks: {
                      color: "rgba(54, 162, 235, 1)",
                      font: { size: 14 },
                    },
                    grid: {
                      color: "rgba(200, 200, 200, 0.2)",
                    },
                  },
                },
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      color: "rgba(54, 162, 235, 1)",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { label: "Total Assets", value: 400 },
          { label: "IT Assets", value: 400 },
          { label: "Furniture & Fixtures", value: 0 },
          { label: "General Assets", value: 0 },
          { label: "Engineering Assets", value: 0 },
          { label: "Electronic Assets", value: 0 },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold text-gray-700">{label}</h3>
            <p className="text-3xl font-bold text-blue-500 mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
