import React, { Component } from "react";

import axios from "axios";

class Form extends Component {
  state = {
    cities: [],
    services: [],
    emplyees: [],
    customermobile: "",
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    cityId: "",
    customerId: "",
    employeeId: "",
    handyManId: "",
    datePrefered: "",
    serviceId: "",
    orderStepId: "",
    offerId: "",
    orderDetails: "",
    orderComments: "",
    orderNotes: "",
    price: "",
    offerPrice: "",
    priceAfterOffer: "",
  };

  componentDidMount() {
    axios
      .get("http://sal7lyy-001-site1.gtempurl.com/api/City/GetAllCities")
      .then((res) => {
        this.setState({
          cities: res.data.data,
        });
      });

    axios
      .get(
        "http://sal7lyy-001-site1.gtempurl.com/api/MainService/GetAllMainService"
      )
      .then((res) => {
        this.setState({
          services: res.data.data,
        });
      });

    axios
      .get("http://sal7lyy-001-site1.gtempurl.com/api/Employee/GetAllEmployee")
      .then((res) => {
        this.setState({
          emplyees: res.data.data,
        });
      });
  }

  render() {
    const handelChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const handelCityChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value,
      })
     }

    const submitForm = (e) => {
      e.preventDefault();
      let state = { ...this.state };
      state.id = this.state.lastItem + 1;
      state.code = "ORD-102";
      state.orderstatus = "تحت المعاينة والطلب";
      state.price = "0";
      delete state.errors;
      delete state.lastItem;
      axios.post("http://localhost:3000/fixordersNotset", state);
    };

    const customerVerfication = async (e) => {
      e.preventDefault();

      // const oldState = {...this.state};

      var customerInfo = {};
      var customermobile = this.state.mobile;
      console.log(customermobile);
      try {
        await axios
          .get(
            "http://sal7lyy-001-site1.gtempurl.com/api/Customer/GetAllCustomer"
          )
          .then((res) => {
            customerInfo = res.data.data.filter(
              (cu) => cu.mobile === customermobile
            );
            this.setState({
              fullName: customerInfo[0].fullName,
              address: customerInfo[0].address,
              mobile: customerInfo[0].mobile,
              email: customerInfo[0].email,
              cityId: "4ad6ae8f-dc36-4820-0366-08d963983a5d"
            });
          });
      } catch (ex) {
        alert("not ound");
        this.setState({
          fullName: "",
          address: "",
          mobile: "",
          email: "",
          cityId: "",
        });
      }
    };

    const { cities, services, emplyees } = this.state;

    return (
      <div className="conatiner">
        <div className="new-order">
          <div className="">
            <div className="cardForm">
              <form action="" onSubmit={submitForm}>
                <h5 className="formHead">عمل طلب جديد</h5>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="customer-verification">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-8">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="رقم الهاتف"
                              name="mobile"
                              onChange={handelChange}
                              value={this.state.mobile}
                            />
                            <div className="input-group-append">
                              <button
                                onClick={customerVerfication}
                                className="input-group-text"
                              >
                                <i className="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <button className="btn">عميل جديد</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="form-group checkmarkForm-group">
                      <label className="container checkmarkContainer">
                        <span className="word-label">مستعجل </span>
                        <input
                          type="radio"
                          name="orderfast"
                          onChange={handelChange}
                          value="مستعجل"
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container checkmarkContainer">
                        <span className="word-label">عادي </span>
                        <input
                          type="radio"
                          name="orderfast"
                          onChange={handelChange}
                          value="عادي"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullName"
                        id=""
                        className="form-control"
                        placeholder="اسم العميل"
                        value={this.state.fullName}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="mobile"
                        id=""
                        className="form-control"
                        placeholder="رقم التلفون"
                        value={this.state.mobile}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="address"
                        id=""
                        className="form-control"
                        placeholder="العنوان"
                        value={this.state.address}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id=""
                        className="form-control"
                        placeholder="الايميل"
                        value={this.state.email}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select
                        name="cityId"
                        id=""
                        value={this.state.cityId}
                        className="customSelect form-control"
                        onChange={handelChange}
                      >
                        <option value="" selected disabled>
                          المحافظة
                        </option>
                        {cities.map((city) => (
                          <option value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select
                        name="employeeId"
                        id=""
                        className="customSelect form-control"
                        value={this.state.employeeId}
                        onChange={handelChange}
                      >
                        <option value="" selected disabled>
                          تسجيل
                        </option>
                        {emplyees.map((em) => (
                          <option value={em.id} >
                            {em.fullName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select
                        name="service"
                        id=""
                        className="customSelect form-control"
                        value={this.state.service}
                        onChange={handelChange}
                      >
                        <option value="" selected disabled>
                          نوع الخدمة{" "}
                        </option>
                        {services.map((serv) => (
                          <option value={serv.name} id={serv.id}>
                            {serv.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="date"
                        name="date"
                        id=""
                        className="form-control"
                        placeholder="التاريخ"
                        value={this.state.date}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="الموعد المتاح للطلب"
                        name="time"
                        type="time"
                        value={this.state.time}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="description"
                        className="form-control"
                        id=""
                        placeholder="وصف الخدمه"
                        value={this.state.description}
                        onChange={handelChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="btn-submit">
                  <button type="submit">تسجيل</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
