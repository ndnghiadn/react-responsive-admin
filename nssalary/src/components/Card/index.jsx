import React from 'react';
import CountUp from 'react-countup';

const Card = ({ icon, value, subTitle, color, prefix, suffix }) => {
  return (
    <>
        <div className="col-6">
            <div className={`avatar-lg rounded-circle bg-soft-${color}`}>
            <i className={`${icon} font-22 avatar-title text-${color}`} />
            </div>
        </div>
        <div className="col-6">
            <div className="text-end">
            <h3 className="text-dark mt-1">
                <span style={{ display: 'inline'}}>
                    <CountUp 
                        start="0" 
                        end={value}
                        duration="0.5"
                        separator=" "
                        decimals={2}
                        decimal=","
                        prefix={prefix}
                        suffix={suffix}
                    />
                </span></h3>
            <p className="text-muted mb-1 text-truncate">{ subTitle }</p>
            </div>
        </div>
    </>
  )
}

export default Card