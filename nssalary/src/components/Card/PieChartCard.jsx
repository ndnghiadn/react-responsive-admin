import React from 'react';
import Chart from '../Chart';

const PieChartCard = ({ options, series }) => {
  return (
    <div className="card">
        <div className="card-body">
            <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
                
                <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                
                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                
                <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                
                <a href="javascript:void(0);" className="dropdown-item">Action</a>
            </div>
            </div>
            <h4 className="header-title mb-0">Total Revenue</h4>
            <div className="widget-chart text-center" dir="ltr">
                <Chart options={options} series={series} type="radialBar" height="290" />
            <h5 className="text-muted mt-0">Total sales made today</h5>
            <h2>$178</h2>
            <p className="text-muted w-75 mx-auto sp-line-2">Traditional heading elements are designed to work best in the meat of your page content.</p>
            <div className="row mt-3">
                <div className="col-4">
                <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                <h4><i className="fe-arrow-down text-danger me-1" />$7.8k</h4>
                </div>
                <div className="col-4">
                <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
                <h4><i className="fe-arrow-up text-success me-1" />$1.4k</h4>
                </div>
                <div className="col-4">
                <p className="text-muted font-15 mb-1 text-truncate">Last Month</p>
                <h4><i className="fe-arrow-down text-danger me-1" />$15k</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PieChartCard