import React, { Component } from 'react';
import './style.css';
import Sidebar from '../global/Sidebar';


class OrderDetail extends Component {
  render() {
   
    const user_data ={
      name: "Faisal Ahmad",
      email: "ahmadfaisal.id@gmail.com",
      phone: "081234567899",
      fax: "0212345678",
      gender: "1",
      id: 1
    };

    const od_data = {
      name:"Faisal Ahmad",
      nomor_order: "0908001",
      order_date:"08-09-2018",
      jne:"IDR 18,000",
      biaya:"IDR 398,000",
      payment_method:"Transfer BCA",
      alamat:"Jl. Gading Indah Utara VIII No.15a, Kelapa Gading, Jakarta Utara, Indonesia 14240",
      jumlah: "12",
      nomor_resi: "JN012989012",
      status: "Menunggu Konfirmasi",
      id: 1
    };

    const od_product=[{
      product_name:"Anker SoundCore Bluetooth Speaker with 24-Hour Playtime, 66-Foot Bluetooth Range & Built-in Mic, Dual-Driver Portable Wireless Speaker with Low Harmonic Distortion and Superior Sound - Black",
      qty:"2",
      price:"IDR 289,000",
      amount:"IDR 563,000",
      status_produk: "Sedang Dalam Pengiriman",
      id: 1
    }];

    return(
      <div react-section="OrderDetail">
        <section className="container mt-4">
          <div className="row mtb-40 ">
            <Sidebar/>
  {/* CONTENT INFORMATION --------------------------------------------------------------------------------------------------------------------------------- 
  =============================================================================================================================================== */}
        
            <div className="col-md-9 content">

              <div className="row">
                <div className="col-md-12 widget title">
                  <div className="row"> 
                    <div className="col-md-12">
                      <h3>Detail Pesanan {od_data.nomor_order}</h3>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="row">
                <div className="col-md-12 widget">
                  <div className="col-md-12 widget pd-15">
                    <div className="row">
                      <div className="col-md-4">
                        <strong>Order Date</strong><br/>
                        <span>{od_data.order_date}</span>
                      </div>
                      <div className="col-md-4">
                        <strong>Nomor Resi</strong><br/>
                        <span>{od_data.nomor_resi}</span>
                      </div>
                      <div className="col-md-4">
                        <strong>Status Order</strong><br/>
                        <span>{od_data.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 widget pd-15">
                    <div className="row">
                      <div className="col-md-4">
                        <strong>Local Shipping Charge (JNE/REX)</strong><br/>
                        <span>{od_data.jne}</span>
                      </div>
                      <div className="col-md-4">
                        <strong>Total Biaya</strong><br/>
                        <span>{od_data.biaya}</span>
                      </div>
                      <div className="col-md-4">
                        <strong>Payment Method</strong><br/>
                        <span>{od_data.payment_method}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 widget pd-15">
                    <div className="row">
                      <div className="col-md-12 widget">
                        <strong>Alamat</strong><br/>
                        <span>{od_data.name}</span><br/>
                        <span>{od_data.alamat}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 widget pd-15">
                    <div className="row">
                      <div className="col-md-12 widget">  
                        <h3>Product List</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 widget pd-15">
                    <div className="row">
                      <div className="col-md-12 widget">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Product</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Price</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {od_product.map((od_prd) =>
                            <tr>
                              <td>
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="prd-img">
                                      
                                    </div>
                                  </div>
                                  <div className="col-md-8 prd-name">
                                      <span>{od_prd.product_name}</span>
                                  </div>
                                </div>
                              </td>
                              <td>{od_prd.qty}</td>
                              <td>{od_prd.price}</td>
                              <td>{od_prd.amount}</td>
                              <td>{od_prd.status_produk}</td>
                            </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
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

export default OrderDetail;