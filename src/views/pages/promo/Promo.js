import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';
class Promo extends Component {
  render() {
    const promo_List = [
    {
      title: "Bayar Tagihan Jadi Lancar, Dapat Cashbacknya Hingga Rp50.000",
      image: "https://s4.bukalapak.com/uploads/promo_partnerinfo/0682/Promo_Partner.jpg",
      start: "2018-07-10",
      end: "2018-07-20",
      code: "BAYARLUNAS",
      prd: "1 - 31 Jul 2018",
      id: 1
    }, {
      title: "Jalan-Jalan Naik Kereta Api, Dapat Cashback Hingga Rp35.000",
      image: "https://s2.bukalapak.com/uploads/promo_partnerinfo/5382/Promo_Partner_%281%29.jpg",
      start: "2018-07-10",
      end: "2018-07-20",
      code: "KERETA35",
      prd: "10 Hari Lagi Berakhir",
      id: 2
    }, {
      title: "Pesan Pesawat Sekarang, Nikmati Cashback Hingga Rp50.000",
      image: "https://s4.bukalapak.com/uploads/promo_partnerinfo/0382/Promo_Partner.jpg",
      start: "2018-07-10",
      end: "2018-07-20",
      code: "TERBANG50",
      prd: "Terakhir Hari Ini",
      id: 3
    }, {
      title: "Bayar Tagihan Jadi Lancar, Dapat Cashbacknya Hingga Rp50.000",
      image: "https://s4.bukalapak.com/uploads/promo_partnerinfo/0682/Promo_Partner.jpg",
      start: "2018-07-10",
      end: "2018-07-20",
      code: "BAYARLUNAS",
      prd: "1 - 31 Jul 2018",
      id: 4
    }, {
      title: "Jalan-Jalan Naik Kereta Api, Dapat Cashback Hingga Rp35.000",
      image: "https://s2.bukalapak.com/uploads/promo_partnerinfo/5382/Promo_Partner_%281%29.jpg",
      start: "2018-07-10",
      end: "2018-07-20",
      code: "KERETA35",
      prd: "10 Hari Lagi Berakhir",
      id: 5
    }, {
      title: "Pesan Pesawat Sekarang, Nikmati Cashback Hingga Rp50.000",
      image: "https://s4.bukalapak.com/uploads/promo_partnerinfo/0382/Promo_Partner.jpg",
      start: "2018-07-10",
      end: "2018-07-20",
      code: "TERBANG50",
      prd: "Terakhir Hari Ini",
      id: 6
    }];
    return (
    <section react-section="promo" className="promo-page">
    <div className="promo-banner">
      <img src="assets/img/hargadunia-promo-banner.png" className="img-fluid img-bnr" />
    </div>
    <div className="opt-block">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 tx-opt">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Cari Promosi"/>
              <div className="input-group-append">
                <button className="btn btn-gray" type="button">
                  Cari
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 offset-md-6 col-sm-6 tx-opt">
          <select name="sort" id="sort" className="form-control">
              <option disabled="disabled">- Urutkan -</option>
              <option value="newest">Promo Terbaru</option>
              <option value="popular">Hampir Berakhir</option>
          </select>
          </div>
        </div>
      </div>
    </div>
      <div className="container container-promo">
        <div className="row">
        {promo_List.map((promo_List) =>
          <div className="col-md-4 col-sm-6"  key={promo_List.id}>
            <div className="box-prm">
              <div className="prm-img-box">
                <img className="prm-img" src={promo_List.image} title={promo_List.title} alt={promo_List.title}/>
              </div>
              <div className="prm-desc-box">
                <p className="promo-title" title={promo_List.title}>{promo_List.title}</p>
                <div className="promo-sm-title">Kode Promo</div>
                <div className="promo-code">{promo_List.code} <button className="btn btn-light btn-copy-code">Salin Kode</button></div>
                <div className="promo-btn-box">
                <div className="row prm-btn-card">
                  <div className="col-md-7 prm-div-card">
                    <div className="promo-priode">{promo_List.prd}</div>
                  </div>
                  <div className="col-md-5 prm-div-card">
                    {/* <NavLink strict className="btn btn-hg btn-block" to='/detail-promo'>Lihat Rincian</NavLink> */}
                    <a href="/detail-promo" className="btn btn-hg btn-block">Lihat Rincian</a>
                  </div>
                  
                </div>
                </div>

              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
    );
  }
}
export default Promo;
