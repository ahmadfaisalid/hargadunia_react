import React, { Component } from 'react';
import './style.css';
import Sidebar from '../global/Sidebar';


class GiftCard extends Component {
  render() {
   
    const user_data ={
      name: "Faisal Ahmad",
      email: "ahmadfaisal.id@gmail.com",
      phone: "081234567899",
      fax: "0212345678",
      gender: "1",
      id: 1
    };

    const giftcard_data = [{
      code: "0908001",
      date_add: "2018-10-10",
      expired_date: "2018-10-12",
      value: "IDR 200,000",
      balance: "IDR 250,000",
      id: 1
    }, {
      code: "0908002",
      date_add: "2018-06-10",
      expired_date: "2018-06-12",
      value: "IDR 200,000",
      balance: "IDR 250,000",
      id: 2
    }, {
      code: "0908003",
      date_add: "2018-09-10",
      expired_date: "2018-09-12",
      value: "IDR 200,000",
      balance: "IDR 250,000",
      id: 3
    }, {
      code: "0908004",
      date_add: "2018-12-10",
      expired_date: "2018-10-10",
      value: "IDR 200,000",
      balance: "IDR 250,000",
      id: 4
    }];

    return(
      <div react-section="GiftCard">
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
                          <th scope="col">Code</th>
                          <th scope="col">Date Add</th>
                          <th scope="col">Expired Date</th>
                          <th scope="col">Value</th>
                          <th scope="col">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {giftcard_data.map((gc_data) =>
                        <tr>
                          <td>{gc_data.code}</td>
                          <td>{gc_data.date_add}</td>
                          <td>{gc_data.expired_date}</td>
                          <td>{gc_data.value}</td>
                          <td>{gc_data.balance}</td>
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

export default GiftCard;