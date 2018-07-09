import React, { Component } from 'react';
import './style.css';


class AccountInformation extends Component {
  render() {
   
    const user ={
      name: "Faisal Ahmad",
      email: "ahmadfaisal.id@gmail.com",
      phone: "081234567899",
      birthdate: "11-12-1994",
      gender: "1",
      id: 1
    };
    return(
      <div react-section="AccountInformation">
        <section className="container mt-4">
          <div className="row mtb-40 ">
  {/* SIDEBAR -----------------------------------------------------------------------------------------------------------------------------------
  =============================================================================================================================================== */}
        
            <div className="col-md-3 sidebar">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-3 avatar float-left"></div>
                    <span>
                      <strong>{user.name}</strong><br />
                      My Account
                    </span>
                </div>
              </div>
              <hr/>

              <div className="row">
                <div className="col-md-12">
                  <div className="widget">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          <div className="icon float-left"></div>
                          <span>Account Information</span>
                        </a>
                      </li>
                      <li>
                        <a className="active" href="#">
                          <div className="icon float-left"></div>
                          <span>Address Book</span>
                        </a>
                      </li>
                      <li>
                        <a className="active" href="#">
                          <div className="icon float-left"></div>
                          <span>My Orders</span>
                        </a>
                      </li>
                      <li>
                        <a className="active" href="#">
                          <div className="icon float-left"></div>
                          <span>Gift Cards</span>
                        </a>
                      </li>
                      <li>
                        <a className="active" href="#">
                          <div className="icon float-left"></div>
                          <span>Payment Confirmation</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          

  {/* CONTENT INFORMATION --------------------------------------------------------------------------------------------------------------------------------- 
  =============================================================================================================================================== */}
        
            <div className="col-md-9 content">

              <div className="row">
                <div className="col-md-12 widget title">
                  <h3>Account Informations</h3>
                  <hr/>
                </div>
              </div>
             
              <div className="row">
                <div className="col-md-12 widget">
                  <form className="form-horizontal" method="post">

                    <div className="col-md-6 float-left">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="" value={user.name}/>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="" value={user.email}/>
                      </div>
                      <div className="form-group">
                        <label>Mobile Phone</label>
                        <input type="text" className="form-control" id="" value={user.phone}/>
                      </div>
                    </div>
                    
                    <div className="col-md-6 float-left">
                      <div className="row">
                        <div className="col-md-6 float-left">
                          <div className="form-group">
                            <label>Birthdate</label>
                            <input type="text" className="form-control" id="" value={user.birthdate}/>
                          </div>
                        </div>
                        <div className="col-md-6 float-left">
                          <div className="form-group">
                            <label className="form-group">Gender</label>
                            <div className="">
                              <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" id="n_pria" value="" name="nws_gender"/>
                                  <label className="form-check-label" htmlFor="n_pria">Pria</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="radio" id="n_wanita" value="" name="nws_gender"/>
                                  <label className="form-check-label" htmlFor="n_wanita">Wanita</label>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="email" className="form-control" id="" value="************"/>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="text" className="form-control" id="" value="************"/>
                      </div>
                    </div>

                    <div className="col-md-12 float-left">
                      <hr />
                      <button type="submit" class="btn btn-light">Submit</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default AccountInformation;