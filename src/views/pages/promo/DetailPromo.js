import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';
class DetailPromo extends Component {
  render() {
  	const other_promo_List = [
	{
	  title: "Pesan Pesawat Sekarang, Nikmati Cashback Hingga Rp50.000",
	  image: "https://s4.bukalapak.com/uploads/promo_partnerinfo/0382/Promo_Partner.jpg",
	  id: 1
	}, {
	  title: "Jalan-Jalan Naik Kereta Api, Dapat Cashback Hingga Rp35.000",
	  image: "https://s2.bukalapak.com/uploads/promo_partnerinfo/5382/Promo_Partner_%281%29.jpg",
	  id: 2
	}, {
	  title: "Bayar Tagihan Jadi Lancar, Dapat Cashbacknya Hingga Rp50.000",
	  image: "https://s4.bukalapak.com/uploads/promo_partnerinfo/0682/Promo_Partner.jpg",
	  id: 3
	}];
    return (
    <section react-section="detail-promo">
    	<div className="container mt-4 promo-page">
	    	<div className="row">
	    		<div className="col-md-8">
	    			<img className="img-fluid img-dtl-promo" src="https://s4.bukalapak.com/uploads/promo_partnerinfo_bloggy/2922/Bloggy_1.jpg" title="" alt=""/>
	    			<div className="row no-gutters dtl-ttl-block">
	    				<div className="col-md-3 col-sm-6 inf-dtl">
	    					<div className="promo-sm-title">Priode Promo</div>
	    					<div className="promo-priode-dtl">1 - 31 Jul 2018</div>
	    				</div>
	    				<div className="col-md-4 col-sm-6 inf-dtl">
	    					<div className="promo-sm-title">Kode Promo</div>
	    					<div className="promo-code-dtl">BAYARLUNAS</div>
	    				</div>
	    				<div className="col-md-3 offset-md-2 col-sm-12 offset-sm-0 inf-dtl">
	    					<button className="btn btn-gray btn-block btn-copy-code-dtl">Salin Kode Promo</button>
	    				</div>
	    			</div>
	    			<div className="block-desc">
	    				<div className="title-dtl-promo">Bayar Tagihan Jadi Lancar, Dapat Cashbacknya Hingga Rp50.000</div>
	    				<p><strong>Cara Mendapatkan Voucher:</strong><br/>

Lakukan proses Product Request dengan langkah berikut: Masukkan link product, email Anda, dan data tambahan lainnya.
Hargadunia akan memproses dalam waktu 1x24jam.
Link product akan dikirimkan melalui email beserta kode voucher discount 5%.
Syarat & Ketentuan Voucher:

Tidak ada minimum pembelanjaan
Berlaku untuk semua produk
Tidak dapat digabung dengan product discount & Free Shipping
Tidak dapat digabung dengan promo lain
Hanya berlaku 1x per akun</p>
	    			</div>
	    		</div>
	    		<div className="col-md-4 block-other-promo">
	    			<NavLink to="/promo" className="btn btn-gray btn-block mb-4">Lihat Promo Lainnya</NavLink>
	    			{other_promo_List.map((other_promo_List) =>
	    			<a href="/detail-promo"  key={other_promo_List.id}>
		    			<div className="other-promo-block">
		    				<img className="img-fluid" src={other_promo_List.image} title="" alt=""/>
		    				<div className="ttl-other-promo">{other_promo_List.title}</div>
		    			</div>
	    			</a>
	    			)}
	    		</div>
	    	</div>
    		
    	</div>
    </section>
    );
  }
}
export default DetailPromo;
