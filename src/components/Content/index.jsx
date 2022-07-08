import React, { useState } from 'react';
import Flatpickr from "react-flatpickr";
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'
import Card from '../Card';
import PieChartCard from '../Card/PieChartCard';
import BarChartCard from '../Card/BarChartCard';
import Table from '../Table';

import cardItems from '../../data_json/CardItems.json';
import top5UsersBalanceData from '../../data_json/Top5UsersBalance.json';
import revenueHistory from '../../data_json/RevenueHistory.json';

const barChartOptions = {
  chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
};
const barChartSeries = [
  {
    name: 'Actual',
    data: [
      {
        x: '2011',
        y: 1292,
        goals: [
          {
            name: 'Expected',
            value: 1400,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2012',
        y: 4432,
        goals: [
          {
            name: 'Expected',
            value: 5400,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2013',
        y: 5423,
        goals: [
          {
            name: 'Expected',
            value: 5200,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2014',
        y: 6653,
        goals: [
          {
            name: 'Expected',
            value: 6500,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2015',
        y: 8133,
        goals: [
          {
            name: 'Expected',
            value: 6600,
            strokeHeight: 13,
            strokeWidth: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2016',
        y: 7132,
        goals: [
          {
            name: 'Expected',
            value: 7500,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2017',
        y: 7332,
        goals: [
          {
            name: 'Expected',
            value: 8700,
            strokeHeight: 5,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '2018',
        y: 6553,
        goals: [
          {
            name: 'Expected',
            value: 7300,
            strokeHeight: 2,
            strokeDashArray: 2,
            strokeColor: '#775DD0'
          }
        ]
      }
    ]
  }
];
const pieChartOptions = {
    series: [70],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Revenue'],
  };
const pieChartSeries = [68];

function Content() {
  const [date, setDate] = useState(new Date());

  return (
   
    <div className="content-page">
  <div className="content">
  
    <div className="container-fluid">
     
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <form className="d-flex align-items-center mb-3">
                <div className="input-group input-group-sm">
                <Flatpickr
                  value={date} // giá trị ngày tháng
                  // các option thêm cho thư viện
                  options={{
                    dateFormat: "d-m-Y", // format ngày giờ
                    plugins: [new rangePlugin({ input: "#secondRangeInput" })]
                  }}
                  // event
                  onChange={(dateSelect) => setDate(dateSelect)}
                />
                <input id="secondRangeInput" style={{ display: 'none' }} />
                  <span className="input-group-text bg-primary border-primary text-white">
                    <i className="mdi mdi-calendar-range" />
                  </span>
                </div>
                <a href="javascript: void(0);" className="btn btn-primary btn-sm ms-2">
                  <i className="mdi mdi-autorenew" />
                </a>
                <a href="javascript: void(0);" className="btn btn-primary btn-sm ms-1">
                  <i className="mdi mdi-filter-variant" />
                </a>
              </form>
            </div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </div>
      </div>     
  
      <div className="row">
        {
          cardItems.map(item => (
            <div className="col-md-6 col-xl-3">
              <div className="widget-rounded-circle card">
                <div className="card-body">
                  <div className="row">
                    <Card 
                      icon={item.icon}
                      value={item.value} 
                      subTitle={item.subTitle} 
                      color={item.color}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </div> 
                </div>
              </div>
            </div>
          ))
        }
      </div>
     
      <div className="row">
        <div className="col-lg-4">
          <PieChartCard options={pieChartOptions} series={pieChartSeries} />
        </div>
        <div className="col-lg-8">
          <BarChartCard options={barChartOptions} series={barChartSeries} /> 
        </div> 
      </div>
      
      <div className="row">
        <div className="col-xl-6">
          <Table title="Top 5 Users Balances" data={top5UsersBalanceData} heading={{ data: ["Profile", "Currency", "Balance", "Reserved in orders", "Action"] }} />
        </div>
        <div className="col-xl-6">
          <Table title="Revenue History" data={revenueHistory} heading={{ data: ["Marketplaces", "Date", "Payouts", "Status", "Action"] }}/>
        </div> 
      </div>
    
    </div>
  </div> 
 
  {/* <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          © UBold theme by <a href>Coderthemes</a> 
        </div>
        <div className="col-md-6">
          <div className="text-md-end footer-links d-none d-sm-block">
            <a href="javascript:void(0);">About Us</a>
            <a href="javascript:void(0);">Help</a>
            <a href="javascript:void(0);">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer> */}

</div>



  )
}

export default Content