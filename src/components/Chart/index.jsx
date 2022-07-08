import React from 'react'
import Chart from "react-apexcharts";

const CustomChart = ({ options, series, type }) => {
  return (
    <Chart
        className="mt-0"
        options={options}
        series={series}
        type={type}
        width="100%"
    />
  )
}

export default CustomChart