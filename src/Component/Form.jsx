import React, { Component } from "react";

// axios
import axios from "axios";

// joi
import joi from "joi-browser";

//
import { toast } from "react-toastify";

//
import { Link } from "react-router-dom";

class Form extends Component {
  state = {
    cities: [],
    services: [],
    emplyees: [],
    date: "",
    time: "",
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
    price: 0,
    offerPrice: 0,
    priceAfterOffer: 0,
    errors: {},
    loading: false,
    disabled: false
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

  schema = {
    fullName: joi.string().required(),
    mobile: joi.string().alphanum().min(11).max(11).required(),
    email: joi.string().email().required(),
    address: joi.string().required(),
    cityId: joi.string().required(),
    employeeId: joi.string().required(),
    serviceId: joi.string().required(),
    date: joi.date().required(),
    time: joi.string().required(),
    orderDetails: joi.string().required(),
  };

  validate = () => {
    var state = { ...this.state };
    delete state.cities;
    delete state.services;
    delete state.emplyees;
    delete state.handyManId;
    delete state.datePrefered;
    delete state.orderStepId;
    delete state.offerId;
    delete state.orderComments;
    delete state.orderNotes;
    delete state.price;
    delete state.offerPrice;
    delete state.priceAfterOffer;
    delete state.customerId;
    delete state.errors;
    delete state.loading;
    delete state.disabled;

    const res = joi.validate(state, this.schema, { abortEarly: false });
    console.log(res);
    if (res.error === null) {
      this.setState({
        errors: {},
      });
      return res.error;
    }

    let newErrors = {};
    res.error.details.map((er) => {
      newErrors[er.path] = er.message;
    });

    this.setState({
      errors: newErrors,
    });

    return res.error;
  };

  render() {
    const handelChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const submitForm = (e) => {
      e.preventDefault();
      const errors = this.validate();
      this.setState({
        loading: true,
        disabled: true

      })
      if (errors === null) {
        let state = { ...this.state };
        delete state.cities;
        delete state.services;
        delete state.emplyees;
        delete state.date;
        delete state.time;
        delete state.fullName;
        delete state.mobile;
        delete state.email;
        delete state.address;
        delete state.employeeId;
        delete state.handyManId;
        delete state.orderStepId;
        delete state.offerId;
        delete state.errors;
        delete state.loading;
        delete state.disabled;


        let newDate = this.state.date + "T" + this.state.time + "Z";
        state.datePrefered = newDate;
        console.log(state);

        axios
          .post(
            "http://sal7lyy-001-site1.gtempurl.com/api/Orders/CreateOrder",
            state
          )
          .then((res) => {
            console.log(res);
            toast.success("Success");
            this.setState({
              loading: false,
              disabled: false
            })
          });
      } else {
        toast.error("There are some of erros");
        this.setState({
          loading: false,
          disabled: false
        })
        return;
      }
    };

    const customerVerfication = async (e) => {
      e.preventDefault();
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
            console.log(customerInfo);
            this.setState({
              fullName: customerInfo[0].fullName,
              address: customerInfo[0].address,
              mobile: customerInfo[0].mobile,
              email: customerInfo[0].email,
              cityId: "4ad6ae8f-dc36-4820-0366-08d963983a5d",
              customerId: customerInfo[0].id,
              errors: {},
            });
          });
      } catch (ex) {
        toast.info("Not matching please go to add new Customer");
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
        <div
          className="new-order"
          id="NewOrder"
          style={{ backgroundImage: "url('./images/menu-bg.jpg')" }}
        >
          <div className="">
            <div className="cardForm">
              <form action="" onSubmit={submitForm}>
                <h5 className="formHead">عمل طلب جديد</h5>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="customer-verification">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-8">
                          <div className="input-group">
                            <input
                              type="number"
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
                          <span className="error">
                            {this.state.errors.mobile}
                          </span>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <Link to="/new-customer" className="btn">
                            عميل جديد
                          </Link>
                        </div>
                      </div>
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
                      <span className="error">
                        {this.state.errors.fullName}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="number"
                        name="mobile"
                        id=""
                        className="form-control"
                        placeholder="رقم التلفون"
                        value={this.state.mobile}
                        onChange={handelChange}
                      />
                      <span className="error">{this.state.errors.mobile}</span>
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
                      <span className="error">{this.state.errors.address}</span>
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
                      <span className="error">{this.state.errors.email}</span>
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
                          <option value={city.id}>{city.name}</option>
                        ))}
                      </select>
                      <span className="error">{this.state.errors.cityId}</span>
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
                          <option value={em.id}>{em.fullName}</option>
                        ))}
                      </select>
                      <span className="error">
                        {this.state.errors.employeeId}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select
                        name="serviceId"
                        id=""
                        className="customSelect form-control"
                        value={this.state.serviceId}
                        onChange={handelChange}
                      >
                        <option value="" selected disabled>
                          نوع الخدمة{" "}
                        </option>
                        {services.map((serv) => (
                          <option value={serv.id}>{serv.name}</option>
                        ))}
                      </select>
                      <span className="error">
                        {this.state.errors.serviceId}
                      </span>
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
                      <span className="error">{this.state.errors.date}</span>
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
                      <span className="error">{this.state.errors.time}</span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="orderDetails"
                        className="form-control"
                        id=""
                        placeholder="وصف الخدمه"
                        value={this.state.orderDetails}
                        onChange={handelChange}
                      ></textarea>
                      <span className="error">
                        {this.state.errors.orderDetails}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="btn-submit">
                  <button type="submit" disabled={this.state.disabled}>
                  {this.state.loading ? (
                        <div class="spinner-border text-light" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "تسجيل"
                      )}
                  </button>
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
