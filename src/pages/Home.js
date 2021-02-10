import React from 'react';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { Chart } from "react-google-charts";


import '../Styles/Home.css'

function Home() {

  const data = [
    ["Year", "Visitations", { role: "style" }],
    ["2010", 10, "color: gray"],
    ["2020", 14, "color: #76A7FA"],
    ["2030", 16, "color: blue"],
    ["2040", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
    [
      "2050",
      28,
      "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
    ]
  ];

  const datax = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7] // CSS-style declaration
  ];
  const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false
  };

  return (
    <>
      <div className='container'>
        <div className='box'>
          <div className='container-head'>
            <IconContext.Provider value={{ color: 'blue', fontSize: 42, marginRight: 6 }}>
              <FaIcons.FaCuttlefish />
            </IconContext.Provider>
          </div>

        </div>

        <div className='box'>
          <div className='container-head'>
            <IconContext.Provider value={{ color: 'purple', fontSize: 42, marginRight: 6 }}>
              <FaIcons.FaDev />
            </IconContext.Provider>
          </div>
        </div>

        <div className='box'>
          <div className='container-head'>
            <IconContext.Provider value={{ color: 'skyblue', fontSize: 42, marginRight: 6 }}>
              <FaIcons.FaDocker />
            </IconContext.Provider>
          </div>
        </div>

        <div className='box'>
          <div className='container-head'>
            <IconContext.Provider value={{ color: 'green', fontSize: 42, marginRight: 6 }}>
              <FaIcons.FaFontAwesomeFlag />
            </IconContext.Provider>
          </div>
        </div>
        </div>

        <div className='container-graph'>
          <Chart chartType="BarChart" width="100%" height="400px" data={data} />
        </div>

        <div className='container-graph'>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={datax}
            options={options}
          />
        </div>
        
    
    </>
  );
}

export default Home;