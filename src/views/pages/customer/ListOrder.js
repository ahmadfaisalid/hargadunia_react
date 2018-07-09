import React, { Component } from 'react';
import './style.css';
import Sidebar from '../global/Sidebar';


class ListOrder extends Component {
  render() {
   
    const user_data ={
      name: "Faisal Ahmad",
      email: "ahmadfaisal.id@gmail.com",
      phone: "081234567899",
      fax: "0212345678",
      gender: "1",
      id: 1
    };

    const order_data = [{
      nomor_order: "0908001",
      jumlah: "12",
      nomor_resi: "JN012989012",
      status: "Menunggu Konfirmasi",
      id: 1
    }, {
      nomor_order: "0908002",
      jumlah: "10",
      nomor_resi: "JN012989012",
      status: "Sedang Diproses",
      id: 2
    }, {
      nomor_order: "0908003",
      jumlah: "8",
      nomor_resi: "JN012989012",
      status: "Pembayaran Belum Dilakukan",
      id: 3
    }, {
      nomor_order: "0908004",
      jumlah: "2",
      nomor_resi: "JN012989012",
      status: "Pembayaran Selesai",
      id: 4
    }];

    return(
      <div react-section="ListOrder">
        <section className="container mt-4">
          <div className="row mtb-40 ">
            <Sidebar/>
  {/* CONTENT INFORMATION --------------------------------------------------------------------------------------------------------------------------------- 
  =============================================================================================================================================== */}
        
            <div className="col-md-9 content">

              <div className="row">
                <div className="col-md-12 widget title">
                  <div className="row"> 
                    <div className="col-md-9">
                      <h3>My Order</h3>
                    </div>
                    <div className="col-md-3">
                      <form className="form-horizontal" method="post">  
                        <div className="row">
                          <div className="col-md-12"> 
                            <input type="text" className="form-control" id="" placeholder="Cari Alamat disini.."/> 
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
                          <th scope="col">Nomor Order</th>
                          <th scope="col">Jumlah Produk</th>
                          <th scope="col">Nomor Resi</th>
                          <th scope="col">Status</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {order_data.map((ordr_data) =>
                        <tr>
                          <td>{ordr_data.nomor_order}</td>
                          <td>{ordr_data.jumlah}</td>
                          <td>{ordr_data.nomor_resi}</td>
                          <td>{ordr_data.status}</td>
                          <td>
                            <div className="">
                              <a class="btn btn-light">Cetak</a>&nbsp;&nbsp;
                              <a href="/order-detail"class="btn btn-light">Rincian</a>
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

export default ListOrder;