import React, { Component } from 'react';
import './style.css';


class ListAddress extends Component {
  render() {
   
    const user_data ={
      name: "Faisal Ahmad",
      email: "ahmadfaisal.id@gmail.com",
      phone: "081234567899",
      fax: "0212345678",
      gender: "1",
      id: 1
    };

    const address_data = [{
      detail_alamat: "Jl. Gading Indah Utara VIII No.15a, Kelapa Gading",
      kota: "Jakarta Utara",
      kodepos: "14240",
      id: 1
    }, {
      detail_alamat: "Jl. Veteran III No.13, Seseupan",
      kota: "Bogor",
      kodepos: "16720",
      id: 2
    }, {
      detail_alamat: "Jl. Mayjen HE. Edi Sukma Km.17, Cimande",
      kota: "Bogor",
      kodepos: "16730",
      id: 3
    }, {
      detail_alamat: "Jl. Mayjen HE. Edi Sukma Km.16, Caringin",
      kota: "Bogor",
      kodepos: "16740",
      id: 3
    }];

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
                      <strong>{user_data.name}</strong><br />
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
                  <div className="row"> 
                    <div className="col-md-6">
                      <h3>List Address</h3>
                    </div>
                    <div className="col-md-6">
                      <form className="form-horizontal" method="post">  
                        <div className="row">
                          <div className="col-md-7"> 
                            <input type="text" className="form-control" id="" placeholder="Cari Alamat disini.."/> 
                          </div>
                          <div className="col-md-5">
                            <button type="submit" class="btn btn-light">Tambah Alamat Baru</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="row">
                <div className="col-md-12 widget">
                  <div className="col-md-12 widget">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Detail Alamat</th>
                          <th scope="col">Kabupaten/Kota</th>
                          <th scope="col">Kode Pos</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {address_data.map((adrs_data) =>
                        <tr>
                          <td>{adrs_data.detail_alamat}</td>
                          <td>{adrs_data.kota}</td>
                          <td>{adrs_data.kodepos}</td>
                          <td>
                            <div className="">
                              <button type="button" class="btn btn-light">Edit</button>&nbsp;&nbsp;
                              <button type="button" class="btn btn-light">Hapus</button>
                            </div>
                          </td>
                        </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
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