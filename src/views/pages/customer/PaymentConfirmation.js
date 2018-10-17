import React, { Component } from 'react';
import './style.css';
import Sidebar from '../global/Sidebar';


class PaymentConfirmation extends Component {
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
      <div react-section="PaymentConfirmation">
        <section className="container mt-4">
          <div className="row mtb-40 ">
            <Sidebar/>
  {/* CONTENT INFORMATION --------------------------------------------------------------------------------------------------------------------------------- 
  =============================================================================================================================================== */}
        
            <div className="col-md-9 content">

              <div className="row">
                <div className="col-md-12 widget title">
                  <h3>Payment Confirmation</h3>
                  <hr/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="bank-account text-center">
                    <span>Silakan Transfer ke nomor rekening berikut :</span>
                    <div className="bank-img border">Image</div>
                    <span>0986612345678</span><br/>
                    <span>PT Global Technology Resources</span><br/>
                    <span>Cabang Kelapa Gading</span>
                  </div>
                </div>
              </div>
             
              <div className="row">
                <div className="col-md-12 widget">
                  <form className="form-horizontal" method="post">

                    <div className="col-md-6 float-left">
                      <div className="form-group">
                        <label>Nomor Order</label>
                        <input type="text" className="form-control" id=""/>
                      </div>
                      <div className="form-group">
                        <label>Bank Anda</label>
                        <input type="email" className="form-control" id="" />
                      </div>
                      <div className="form-group">
                        <label>Rekening Atas Nama Anda</label>
                        <input type="text" className="form-control" id=""/>
                      </div>
                    </div>
                    <div className="col-md-6 float-left">
                      <div className="form-group">
                        <label>Metode Pembayaran</label>
                        <select className="form-control" id="" ></select>
                      </div>
                      <div className="form-group">
                        <label>Nominal Transfer</label>
                        <input type="email" className="form-control" id="" placeholder="IDR"/>
                      </div>
                      <div className="form-group">
                        <label>Tanggal Transfer</label>
                        <input type="text" className="form-control" id="" placeholder="Tanggal/Bulan/Tahun"/>
                      </div>
                    </div>
                    
                    <div className="col-md-12 float-left">
                      <hr />
                      <button type="submit" class="btn btn-light">Konfirmasi</button>
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

export default PaymentConfirmation;