import React, { Component } from "react";

import '../Css/flaticon.css'

import CountUp from 'react-countup';


class Numbers extends Component {
  render() {
    return (
      <div>
        <div className="numbers">
          <div className="container">
            <div className="numbers-parent">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-icon">
                      <i className="flaticon-abc-block"></i>
                    </div>
                    <CountUp className="counter-number" start={0} end={100} />
                    <h5 className="card-title">عملية صيانة</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-icon">
                      <i className="flaticon-people"></i>
                    </div>
                    <CountUp className="counter-number" start={0} end={200} />
                    <h5 className="card-title">عميل سنوي</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-icon">
                      <i className="flaticon-agriculture"></i>
                    </div>
                    <CountUp className="counter-number" start={0} end={300} />
                    <h5 className="card-title">فني خبرة</h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="card">
                    <div className="card-icon">
                      <i className="flaticon-love"></i>
                    </div>
                    <CountUp className="counter-number" start={0} end={400} />
                    <h5 className="card-title">رضا العملاء</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Numbers;
