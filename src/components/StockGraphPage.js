// StockGraphPage.js
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import 'tailwindcss/tailwind.css';

const StockGraphPage = () => {
  const generateData = () => {
    const data = [];
    const baseValue = Math.random() * (2000 - 1900) + 1900;

    for (let i = 0; i < 10; i++) {
      data.push({
        x: new Date().getTime() - i * 2000,
        y: baseValue + Math.random() * 20,
      });
    }

    return data.reverse();
  };

  const [graphOptions, setGraphOptions] = useState({
    chart: {
      id: 'stock-chart',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 2000,
        },
      },
      background: '#f0f0f0', // Set background color to a light gray
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `৳${value.toFixed(2)}`; // Dhaka Stock Exchange uses the Bangladeshi Taka symbol
        },
      },
    },
    colors: ['#FF5733'], // Line color for the graph
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  });

  const [graphSeries, setGraphSeries] = useState([
    {
      name: 'DSE Index',
      data: generateData(),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGraphSeries([
        {
          name: 'DSE Index',
          data: generateData(),
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stock-graph-page-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="stock-graph-page-title text-4xl font-bold text-blue-700 mb-8">
        Dhaka Stock Market
      </h1>

      <div className="stock-graph-chart-container w-full max-w-screen-md bg-white p-8 rounded-md shadow-md">
        <Chart options={graphOptions} series={graphSeries} type="area" height={400} />
      </div>

      <div className="stock-graph-info mt-8">
        <p className="text-lg text-gray-700">
          The financial market is a complex ecosystem where various factors influence
          stock prices, including economic indicators, investor sentiment, and global events.
          Stay informed to make strategic investment decisions and navigate the dynamic market
          landscape.
        </p>
      </div>
    </div>
  );
};

export default StockGraphPage;



