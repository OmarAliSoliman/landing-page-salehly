import React, { Component } from "react";

class Characteristics extends Component {
  render() {
    return (
      <div>
        <div className="characteristics" id="whoUs">
          <div className="container">
            <div className="section-header">
              <h5>لماذا صلحلي</h5>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                <div className="characeristics-content">
                  <h5>
                    {" "}
                    شركة صلحلي إتأسست فى 1/1/ 2019 . وفى سنتين بس حققنا ارقام و
                    انجازات مبهره
                  </h5>
                  <p>
                    صلحلى بتقدم خدماتها ل : المنازل -الكيانات
                    الطبيه-الفنادق-الشركات-المؤسسات التعليميه المطاعم و الأماكن
                    التجاريه
                  </p>
                  <p>
                    في محافظات : أسيوط، سوهاج، الوادي الجديد، وقربيا فى 3
                    محافظات تانيه
                  </p>
                  <p>
                    يعنى لم تطلب صنايعى من تارقامنا او من تطبيق صلحلي : هنوصلك
                    فنى علي كفاءه عاليه عارفين اصله وفصله هيجيلك بسرعه و فى
                    الميعاد اللى تحدده وهيعملك معاينة مجانيه للمشكلة ويقولك على
                    السعرالمحدد و الثابت للصيانه الثابت مش بمزاج الفنى كمان لو
                    احتاجت قطعة غيار هبنوفر القطع لأصليه ونديك ضمان شهر علي
                    الصيانه. وفريق صلحلى هيعملك متابعه اثناء وبعد التنفيذ
                  </p>
                  <ul>
                    <li>
                      حصلت على جائزة افضل شركة ناشئة في صعيد مصر من مؤسسة ( اثر
                      – ( Athar
                    </li>
                    <li>
                      في مركز الابداع التكنولوجي وياردة الاعمال التابع لوزارة
                      الاتصالات{" "}
                    </li>
                    <li>من افضل 5 شركات ناشئه Startup Factory من مؤسسة</li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                <div className="characeristics-cards">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                      <div className="card">
                        <div className="card-img">
                          <img src="./images/positive-vote.png" alt="" />
                        </div>
                        <h5 className="card-title">الاحترافية</h5>
                        <p className="card-text">
                          في التعامل مع كل المشاكل الفنية والتقنية للمنزل
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                      <div className="card">
                        <div className="card-img">
                          <img src="./images/clock.png" alt="" />
                        </div>
                        <h5 className="card-title">السرعة</h5>
                        <p className="card-text">
                          في الاستجابة لطلبات العميل وتنفيذ المهمة بنجاح
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                      <div className="card">
                        <div className="card-img">
                          <img src="./images/worker.png" alt="" />
                        </div>
                        <h5 className="card-title">الخبرة</h5>
                        <p className="card-text">
                          في التعامل مع كل انواع الاعطال المنظلية والتجارية
                        </p>
                      </div>
                    </div>
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

export default Characteristics;
