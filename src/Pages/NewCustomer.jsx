import React, { Component } from "react";

// joi
import joi from "joi-browser";

// axios
import axios from "axios";
import { EnumerableOwnPropertyNames } from "es-abstract/es2019";
import { toast } from "react-toastify";

class NewCustomer extends Component {
  state = {
    fullName: "",
    password: "",
    mobile: "",
    email: "",
    address: "",
    isMale: true,
    errors: {},
    loading: false,
    disabled: false,
  };

  shema = {
    fullName: joi.string().required(),
    password: joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required(),
    mobile: joi.string().alphanum().min(11).max(11).required(),
    email: joi.string().email().required(),
    address: joi.string().required(),
    isMale: joi.required(),
  };

  validate = () => {
    let state = { ...this.state };
    delete state.errors;
    delete state.loading;
    delete state.disabled;
    var res = joi.validate(state, this.shema, { abortEarly: false });

    if (res.error === null) {
      this.setState({
        errors: {},
      });
      return res.error;
    }

    let newError = {};
    res.error.details.map((er) => {
      if(er.path[0] == "password"){
        er.message = "Minimum eight characters, at least one letter and one number";
        newError[er.path] = er.message;
      }else{
        newError[er.path] = er.message;
      }
      console.log(er)
    });

    // console.log(this.state.errors);
    // this.state.errors.password = "Minimum eight characters, at least one letter and one number:";

    this.setState({
      errors: newError,
    });

    return res.error;
  };

  render() {
    const handelChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const submitForm = async (e) => {
      e.preventDefault();
      this.setState({
        loading: true,
        disabled: true
      })
      const errors = this.validate();
      if (errors === null) {
        let state = { ...this.state };
        delete state.errors;
        delete state.loading;
        delete state.disabled;
        var ismale = Boolean(state.isMale);
        state.isMale = ismale;
        console.log(state);
        try{
          await axios
          .post(
            "http://sal7lyy-001-site1.gtempurl.com/api/Customer/Create",
            state
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              toast.success("Happy New Customer");
              this.setState({
                loading: false,
                disabled: false
              })
              setInterval(() => {
                this.props.history.replace("/")
              }, 1000);
            }
          });
        }catch(ex){
          toast.error("some error");
          console.log(ex);
        }
      } else {
        toast.error("some error");
        this.setState({
          loading: false,
          disabled: false
        })
        return;
      }

      console.log(this.state);
    };

    return (
      <div className="new-customer">
        <div className="container">
          <h5 className="headOfPage">عميل جديد</h5>
          <div className="new-customer-form">
            <form action="" onSubmit={submitForm}>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="full-name">الاسم بالكامل</label>
                    <input
                      type="text"
                      placeholder="الاسم بالكامل"
                      name="fullName"
                      id="full-name"
                      className="form-control"
                      value={this.state.fullName}
                      onChange={handelChange}
                    />
                    <span className="error">{this.state.errors.fullName}</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="cu-password">الرقم السري</label>
                    <input
                      type="password"
                      placeholder="الرقم السري"
                      name="password"
                      id="cu-password"
                      className="form-control"
                      value={this.state.password}
                      onChange={handelChange}
                    />
                    <span className="error">{this.state.errors.password}</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="cu-mobile">رقم التلفون</label>
                    <input
                      type="number"
                      placeholder="رقم التلفون"
                      name="mobile"
                      id="cu-mobile"
                      className="form-control"
                      value={this.state.mobile}
                      onChange={handelChange}
                    />
                    <span className="error">{this.state.errors.mobile}</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="cu-email">الايميل</label>
                    <input
                      type="email"
                      placeholder="الايميل"
                      name="email"
                      id="cu-emeail"
                      className="form-control"
                      value={this.state.email}
                      onChange={handelChange}
                    />
                    <span className="error">{this.state.errors.email}</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="cu-adress">الجنس</label>
                    <select
                      name="isMale"
                      id=""
                      value={this.state.isMale}
                      onChange={handelChange}
                      className="form-control"
                    >
                      <option value={true}>ذكر</option>
                      <option value={false}>انثى</option>
                    </select>
                    <span className="error">{this.state.errors.isMale}</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="cu-adress">العنوان</label>
                    <input
                      type="text"
                      placeholder="العنوان"
                      name="address"
                      id="cu-adress"
                      className="form-control"
                      onChange={handelChange}
                      value={this.state.address}
                    />
                    <span className="error">{this.state.errors.address}</span>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-12">
                  <div className="btn-submit">
                    <button type="submit" className="btn" disabled={this.state.disabled}>
                      {this.state.loading ? (
                        <div class="spinner-border text-light" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "تسجيل"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCustomer;
