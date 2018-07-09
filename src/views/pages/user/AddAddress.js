import React, { Component } from 'react';
import './style.css';


class ListAddress extends Component {
  render() {
   
    const user ={
      name: "Faisal Ahmad",
      email: "ahmadfaisal.id@gmail.com",
      phone: "081234567899",
      fax: "0212345678",
      gender: "1",
      id: 1
    };
    return(
      <div react-section="ListAddress">
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
                  <h3>Add Address</h3>
                  <hr/>
                </div>
              </div>
             
              <div className="row">
                <div className="col-md-12 widget">
                  <form className="form-horizontal" method="post">

                    <div className="col-md-6 float-left">
                      <div className="form-group">
                        <label>Receipent</label>
                        <input type="text" className="form-control" id="" placeholder=""/>
                      </div>
                     <div className="row">
                        <div className="col-md-6 float-left">
                          <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="text" className="form-control" id="" placeholder="eg: 6212345678"/>
                          </div>
                        </div>
                        <div className="col-md-6 float-left">
                          <div className="form-group">
                            <label>Fax</label>
                            <input type="text" className="form-control" id="" placeholder="eg: 6212345678"/>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Address Type</label>
                        <input type="text" className="form-control" id="" placeholder="Home, Office, or Other"/>
                      </div>
                      <div className="form-group">
                        <label>Detail Address</label>
                        <textarea className="form-control" id="" placeholder=""></textarea>
                      </div>
                    </div>
                    
                    <div className="col-md-6 float-left">
                      <div className="form-group">
                        <label>Provinsi</label>
                        <select className="form-control" id=""></select>
                      </div>
                      <div className="form-group">
                        <label>Kota</label>
                        <select className="form-control" id=""></select>
                      </div>
                      <div className="form-group">
                        <label>Kecamatan</label>
                        <select className="form-control" id=""></select>
                      </div>
                      <div className="form-group">
                        <label>Kelurahan</label>
                        <select className="form-control" id=""></select>
                      </div>
                      <div className="form-group">
                        <label>Kode Pos</label>
                        <select className="form-control" id=""></select>
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

export default ListAddress;