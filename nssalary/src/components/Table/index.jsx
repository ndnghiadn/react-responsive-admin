import React from 'react'

const Table = ({ title, data, heading }) => {
  return (
    <div className="card">
        <div className="card-body">
            <div className="dropdown float-end">
            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
                
                <a href="javascript:void(0);" className="dropdown-item">Edit Report</a>
                
                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                
                <a href="javascript:void(0);" className="dropdown-item">Action</a>
            </div>
            </div>
            <h4 className="header-title mb-3">{ title }</h4>
            <div className="table-responsive">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
                <thead className="table-light">
                <tr>
                    {
                        heading && heading.data && heading.data.map(item => (
                            <th>{ item }</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    data && data.length > 0 && data.map((item, index) => (
                        <tr>
                            {/* <td style={{width: 36}}>
                            <img src={`assets/images/users/user-${index + 1}.jpg`} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                            </td> */}
                            {
                                Object.entries(item).map(item => (
                                    <td>
                                        { item[0] === 'currency' && (<i className="mdi mdi-currency-btc text-primary" />) }
                                        { item[0] === 'name' ? (<h5 className="m-0 fw-normal">{ item[1] }</h5>) : item[0] !== 'status' ? item[1] : '' }
                                        { item[0] === 'name' && (<p className="mb-0 text-muted"><small>Member Since 2017</small></p>) }
                                        { item[0] === 'status' && (<span className={`badge bg-soft-${item[1] === 'Paid' ? 'success' : item[1] === 'Upcoming' ? 'warning' : 'danger'} text-${item[1] === 'Paid' ? 'success' : item[1] === 'Upcoming' ? 'warning' : 'danger'}`}>{ item[1] }</span>) }
                                    </td>
                                ))
                            }
                            <td>
                            <a href="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-plus" /></a>
                            <a href="javascript: void(0);" className="btn btn-xs btn-danger"><i className="mdi mdi-minus" /></a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
        </div>
        </div>
  )
}

export default Table