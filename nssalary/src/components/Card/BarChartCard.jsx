import React from 'react';
import Chart from '../Chart';


const BarChartCard = ({ options, series }) => {
  const [seletedTime, setSelectedTime] = React.useState();

  React.useEffect(() => {

  }, [seletedTime])

  return (
    <div className="card">
        <div className="card-body pb-2">
            <div className="float-end d-none d-md-inline-block">
            <div className="btn-group mb-2">
              <button type="button" className="btn btn-xs btn-light" onClick={() => setSelectedTime('Today')}>Today</button>
                {/* <button type="button" className="btn btn-xs btn-light" onClick={() => setSelectedTime('Today')}>Today</button>
                <button type="button" className="btn btn-xs btn-light" onClick={() => setSelectedTime('Weekly')}>Weekly</button>
                <button type="button" className="btn btn-xs btn-secondary" onClick={() => setSelectedTime('Monthly')}>Monthly</button> */}
            </div>
            </div>
            <h4 className="header-title mb-3">Sales Analytics</h4>
            <div dir="ltr">
                <Chart options={options} series={series} type="bar" height="450" />
            </div>
        </div>
    </div>
  )
}

export default BarChartCard