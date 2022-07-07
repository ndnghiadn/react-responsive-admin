import React from 'react';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="Dashboard-container">
      <div className="content-page">
                <div className="content">

                    <div className="container-fluid">
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <form className="d-flex align-items-center mb-3">
                                            <div className="input-group input-group-sm">
                                                <input type="text" className="form-control border-0 shadow" id="dash-daterange" />
                                                <span className="input-group-text bg-primary border-primary text-white">
                                                    <i className="mdi mdi-calendar-range"></i>
                                                </span>
                                            </div>
                                            <a href="https://www.tommyshelby.pw/" className="btn btn-primary btn-sm ms-2">
                                                <i className="mdi mdi-autorenew"></i>
                                            </a>
                                            <a href="https://www.tommyshelby.pw/" className="btn btn-primary btn-sm ms-1">
                                                <i className="mdi mdi-filter-variant"></i>
                                            </a>
                                        </form>
                                    </div>
                                    <h4 className="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget-rounded-circle card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="avatar-lg rounded-circle bg-soft-primary">
                                                    <i className="fe-heart font-22 avatar-title text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <h3 className="text-dark mt-1">$<span data-plugin="counterup">58,947</span></h3>
                                                    <p className="text-muted mb-1 text-truncate">Total Revenue</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="widget-rounded-circle card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="avatar-lg rounded-circle bg-soft-success">
                                                    <i className="fe-shopping-cart font-22 avatar-title text-success"></i>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <h3 className="text-dark mt-1"><span data-plugin="counterup">127</span></h3>
                                                    <p className="text-muted mb-1 text-truncate">Today's Sales</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="widget-rounded-circle card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="avatar-lg rounded-circle bg-soft-danger">
                                                    <i className="fe-bar-chart-line- font-22 avatar-title text-danger"></i>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <h3 className="text-dark mt-1"><span data-plugin="counterup">0.58</span>%</h3>
                                                    <p className="text-muted mb-1 text-truncate">Conversion</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="widget-rounded-circle card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="avatar-lg rounded-circle bg-soft-warning">
                                                    <i className="fe-eye font-22 avatar-title text-warning"></i>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <h3 className="text-dark mt-1"><span data-plugin="counterup">78.41</span>k</h3>
                                                    <p className="text-muted mb-1 text-truncate">Today's Visits</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="dropdown float-end">
                                            <a href="https://www.tommyshelby.pw/" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Sales Report</a>
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Export Report</a>
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Profit</a>
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
    
                                        <h4 className="header-title mb-0">Total Revenue</h4>
    
                                        <div className="widget-chart text-center" dir="ltr">
                                            
                                            <div id="total-revenue" className="mt-0"  data-colors="#2892fd"></div>
    
                                            <h5 className="text-muted mt-0">Total sales made today</h5>
                                            <h2>$178</h2>
    
                                            <p className="text-muted w-75 mx-auto sp-line-2">Traditional heading elements are designed to work best in the meat of your page content.</p>
    
                                            <div className="row mt-3">
                                                <div className="col-4">
                                                    <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                                                    <h4><i className="fe-arrow-down text-danger me-1"></i>$7.8k</h4>
                                                </div>
                                                <div className="col-4">
                                                    <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
                                                    <h4><i className="fe-arrow-up text-success me-1"></i>$1.4k</h4>
                                                </div>
                                                <div className="col-4">
                                                    <p className="text-muted font-15 mb-1 text-truncate">Last Month</p>
                                                    <h4><i className="fe-arrow-down text-danger me-1"></i>$15k</h4>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body pb-2">
                                        <div className="float-end d-none d-md-inline-block">
                                            <div className="btn-group mb-2">
                                                <button type="button" className="btn btn-xs btn-light">Today</button>
                                                <button type="button" className="btn btn-xs btn-light">Weekly</button>
                                                <button type="button" className="btn btn-xs btn-secondary">Monthly</button>
                                            </div>
                                        </div>
    
                                        <h4 className="header-title mb-3">Sales Analytics</h4>
    
                                        <div dir="ltr">
                                            <div id="sales-analytics" className="mt-4" data-colors="#1abc9c,#2892fd"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="dropdown float-end">
                                            <a href="https://www.tommyshelby.pw/" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Edit Report</a>
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Export Report</a>
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
    
                                        <h4 className="header-title mb-3">Top 5 Users Balances</h4>
    
                                        <div className="table-responsive">
                                            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
    
                                                <thead className="table-light">
                                                    <tr>
                                                        <th colspan="2">Profile</th>
                                                        <th>Currency</th>
                                                        <th>Balance</th>
                                                        <th>Reserved in orders</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: '36px' }}>
                                                            <img src="assets/images/users/user-2.jpg" alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                        </td>
        
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Tomaslau</h5>
                                                            <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                        </td>
        
                                                        <td>
                                                            <i className="mdi mdi-currency-btc text-primary"></i> BTC
                                                        </td>
        
                                                        <td>
                                                            0.00816117 BTC
                                                        </td>
        
                                                        <td>
                                                            0.00097036 BTC
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></a>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-danger"><i className="mdi mdi-minus"></i></a>
                                                        </td>
                                                    </tr>
        
                                                    <tr>
                                                        <td style={{ width: '36px' }}>
                                                            <img src="assets/images/users/user-3.jpg" alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                        </td>
        
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Erwin E. Brown</h5>
                                                            <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                        </td>
        
                                                        <td>
                                                            <i className="mdi mdi-currency-eth text-primary"></i> ETH
                                                        </td>
        
                                                        <td>
                                                            3.16117008 ETH
                                                        </td>
        
                                                        <td>
                                                            1.70360009 ETH
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></a>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-danger"><i className="mdi mdi-minus"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: '36px' }}>
                                                            <img src="assets/images/users/user-4.jpg" alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                        </td>
        
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Margeret V. Ligon</h5>
                                                            <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                        </td>
        
                                                        <td>
                                                            <i className="mdi mdi-currency-eur text-primary"></i> EUR
                                                        </td>
        
                                                        <td>
                                                            25.08 EUR
                                                        </td>
        
                                                        <td>
                                                            12.58 EUR
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></a>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-danger"><i className="mdi mdi-minus"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: '36px' }}>
                                                            <img src="assets/images/users/user-5.jpg" alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                        </td>
        
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Jose D. Delacruz</h5>
                                                            <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                        </td>
        
                                                        <td>
                                                            <i className="mdi mdi-currency-cny text-primary"></i> CNY
                                                        </td>
        
                                                        <td>
                                                            82.00 CNY
                                                        </td>
        
                                                        <td>
                                                            30.83 CNY
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></a>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-danger"><i className="mdi mdi-minus"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: '36px' }}>
                                                            <img src="assets/images/users/user-6.jpg" alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                        </td>
        
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Luke J. Sain</h5>
                                                            <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                        </td>
        
                                                        <td>
                                                            <i className="mdi mdi-currency-btc text-primary"></i> BTC
                                                        </td>
        
                                                        <td>
                                                            2.00816117 BTC
                                                        </td>
        
                                                        <td>
                                                            1.00097036 BTC
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></a>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-danger"><i className="mdi mdi-minus"></i></a>
                                                        </td>
                                                    </tr>
    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="dropdown float-end">
                                            <a href="https://www.tommyshelby.pw/" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Edit Report</a>
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Export Report</a>
                                                <a href="https://www.tommyshelby.pw/" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
    
                                        <h4 className="header-title mb-3">Revenue History</h4>
    
                                        <div className="table-responsive">
                                            <table className="table table-borderless table-nowrap table-hover table-centered m-0">
    
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Marketplaces</th>
                                                        <th>Date</th>
                                                        <th>Payouts</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Themes Market</h5>
                                                        </td>
        
                                                        <td>
                                                            Oct 15, 2018
                                                        </td>
        
                                                        <td>
                                                            $5848.68
                                                        </td>
        
                                                        <td>
                                                            <span className="badge bg-soft-warning text-warning">Upcoming</span>
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></a>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Freelance</h5>
                                                        </td>
        
                                                        <td>
                                                            Oct 12, 2018
                                                        </td>
        
                                                        <td>
                                                            $1247.25
                                                        </td>
        
                                                        <td>
                                                            <span className="badge bg-soft-success text-success">Paid</span>
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></a>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Share Holding</h5>
                                                        </td>
        
                                                        <td>
                                                            Oct 10, 2018
                                                        </td>
        
                                                        <td>
                                                            $815.89
                                                        </td>
        
                                                        <td>
                                                            <span className="badge bg-soft-success text-success">Paid</span>
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></a>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Envato's Affiliates</h5>
                                                        </td>
        
                                                        <td>
                                                            Oct 03, 2018
                                                        </td>
        
                                                        <td>
                                                            $248.75
                                                        </td>
        
                                                        <td>
                                                            <span className="badge bg-soft-danger text-danger">Overdue</span>
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></a>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Marketing Revenue</h5>
                                                        </td>
        
                                                        <td>
                                                            Sep 21, 2018
                                                        </td>
        
                                                        <td>
                                                            $978.21
                                                        </td>
        
                                                        <td>
                                                            <span className="badge bg-soft-warning text-warning">Upcoming</span>
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></a>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                        <td>
                                                            <h5 className="m-0 fw-normal">Advertise Revenue</h5>
                                                        </td>
        
                                                        <td>
                                                            Sep 15, 2018
                                                        </td>
        
                                                        <td>
                                                            $358.10
                                                        </td>
        
                                                        <td>
                                                            <span className="badge bg-soft-success text-success">Paid</span>
                                                        </td>
        
                                                        <td>
                                                            <a href="https://www.tommyshelby.pw/" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></a>
                                                        </td>
                                                    </tr>
    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
              </div>
    </div>
  )
}

export default Dashboard