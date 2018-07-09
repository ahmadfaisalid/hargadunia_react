import React, { Component } from 'react';
import './style.css';
import Sidebar from '../global/Sidebar';


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
            <Sidebar/>
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