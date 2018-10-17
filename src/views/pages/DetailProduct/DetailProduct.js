import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import ReactStars from 'react-stars';
import './style.css';
class DetailProduct extends Component {
  	render() {
  		const product_Detail = {
	      name: "Termurah - BTSpeaker Waterproof Bluetooth Shower Speak",
	      cond: "Baru",
	      price: "Rp. 589.000",
	      pdisc: "Rp. 328.000",
	      disc: "40%",
	      country: "AU",
	      prdfrom: "Jakarta, Indonesia",
	      store: "Ebay",
	      image: "https://images-na.ssl-images-amazon.com/images/I/51nk%2BaSvOFL.jpg",
	      id: 1
	    };

	    // Discount Product Check
	    const isDisc = product_Detail.disc;
	    let disc_price;

	    if (isDisc) {
	      disc_price = ( 
		      	<div>
		      		<s>{product_Detail.price}</s>
		      		<div className="price-disc-real">{product_Detail.pdisc}</div>
		      	</div>
	      	);
	    } else {
	      disc_price = <div>{product_Detail.price}</div>
	    }

	  	return (
	  		<div className="pd-area" react-section="product-detail">
	  			<div className="container">
	  			{/* Product Detail Data  */}
	  				<div className="row pdetail-data">
	  					<div className="col-md-3">
	  						<div className="pimg-box">
	  							<img src ={product_Detail.image}/>
	  						</div>
	  					</div>
	  					<div className="col-md-6">
	  						<div className="pd-top">
		  						<div className="ptitle">
		  							<h1 className="title-prd">{product_Detail.name}</h1>
		  						</div>
		  						<div className="pdsc">
		  							<span className="prd-disc">{product_Detail.disc}</span>
		  						</div>
	          					<ReactStars className="prd-starRat" count={5} size={20} color2={'#ffce3d'} color1={'#cccccc'} value={3} edit={false} /> <span className="count-rat">10 ulasan</span>
	  						</div>
	  						<div className="pd-mid">
	  							<div className="row">
	  								<div className="col-md-6">
	  									<table className="table-pdetail" cellPadding = "5">
	  										<tbody>
		  										<tr>
		  											<td width="100px" style={{'verticalAlign':'top'}} >Harga</td>
		  											<td>
		  												{disc_price}
		  											</td>
		  										</tr>
		  										<tr>
		  											<td width="100px">Kondisi</td>
		  											<td>Baru</td>
		  										</tr>
	  										</tbody>
	  									</table>
	  								</div>
	  								<div className="col-md-6">
	  									<table className="table-pdetail" cellPadding = "5">
	  										<tbody>
	  											<tr>
	  												<td width="100px">Penjual</td>
	  												<td>{product_Detail.store}</td>
	  											</tr>
	  											<tr>
	  												<td width="100px">Alamat</td>
	  												<td>{product_Detail.country}</td>
	  											</tr>
	  											<tr>
	  												<td width="100px">Link Detail</td>
	  												<td>
	  													<a href="#" className="btn btn-gray btn-sm">Detail Product</a>
	  												</td>
	  											</tr>
	  										</tbody>
	  									</table>
	  								</div>
	  								<div className="col-md-12 mt-4">
	  									<table className="table-pdetail" cellPadding = "5">
	  										<tbody>
	  											<tr>
	  												<td style={{'verticalAlign':'top'}} width="100px">Keterangan</td>
	  												<td>
	  													<textarea className="form-control mb-2" rows="3" placeholder="Masukan warna ukuran atau ketentuan lain yang Anda inginkan berdasarkan ketersediaan di link Detail product ...">
	  														
	  													</textarea>
	  												</td>
	  											</tr>
	  											<tr>
	  												<td style={{'verticalAlign':'top'}} width="100px">Jumlah</td>
	  												<td>
	  													<select className="form-control mb-2" style={{'width':'60px'}}>
	  														<option>1</option>
	  														<option>2</option>
	  														<option>3</option>
	  														<option>4</option>
	  														<option>5</option>
	  													</select>
	  												</td>
	  											</tr>
	  											<tr>
	  												<td></td>
	  												<td>
	  													<button className="btn btn-hg mr-2" > Add to cart</button>
	  													<button className="btn btn-gray" > Add to Wishlist</button>
	  												</td>
	  											</tr>
	  										</tbody>
	  									</table>
	  								</div>
	  							</div>
	  						</div>
	  						<div className="pd-bottom">
	  							<ul>
		  							<li className="lst-ftr"> Pastikan produk yang Anda beli tidak terikat kontrak. Untuk lebih jelas, silahkan lihat di Detail produk </li>
		  							<li className="lst-ftr"> Standar produk elektronik listrik di USA adalah 110v, diperlukan Travo untuk mengubah listrik menjadi 220v agar bisa digunakan </li>
	  							</ul>
	  						</div>

	  					</div>
	  					<div className="col-md-3">
	  						<div className="card card-pnl mb-4">
							  <div className="card-header pnl-header text-center">
							    Lowest Price Guarantee
							  </div>
							  <div className="card-body">
							      <div>Silahkan hubungi
							      	<a href="https://api.whatsapp.com/send?phone=628990011115&amp;text=Hai Customer Service Hargadunia, Saya butuh bantuan." className="wa-num" target="_blank">
							      	<img width="16" height="16" src="https://d3ol8ih1xbmzso.cloudfront.net/img/img-wa-icon.svg" className="d-inline wa-img"/> 08990011115 </a>
							    	untuk harga yang tidak sesuai dan kami akan sesuaikan.
							    </div>
							  </div>
							</div>
							<div className="card card-pnl mb-4">
							  <div className="card-header text-center">
							    Price Doctor
							  </div>
							  <div className="card-body">
							      <div>Silahkan hubungi 
							      	<a href="https://api.whatsapp.com/send?phone=6281519946044&text=Hai Product Doctor Hargadunia, Saya ingin bertanya mengenai produk ini [Product Link]" className="wa-num" target="_blank">
							      	<img width="16" height="16" src="https://d3ol8ih1xbmzso.cloudfront.net/img/img-wa-icon.svg" className="d-inline wa-img"/> 081519946044 </a>
							    	untuk mengetahui informasi lebih lanjut mengenai produk (hanya melayani pertanyaan seputar produk).
							    </div>
							  </div>
							</div>
							<div className="card card-pnl mb-4">
							  <div className="card-header text-center">
							    Product Not Found?
							  </div>
							  <div className="card-body">
							      <div>Gunakan fitur <a href="#" className="link">Product Request</a> untuk mendapatkan informasi produk yang diinginkan.
							    </div>
							  </div>
							</div>
	  					</div>
	  				</div>
	  				{/* Product Summary  */}
		  			<div className="row detail-smry mt-4">
		  				<div className="col-md-12">
							<ul className="nav nav-tabs hg-tabs" role="tablist">
							  <li className="nav-item">
							    <a className="nav-link active" href="#profile" role="tab" data-toggle="tab">Deskripsi Produk</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link" href="#buzz" role="tab" data-toggle="tab">Ulasan</a>
							  </li>
							</ul>

							<div className="tab-content prd-summary-content">
							  <div role="tabpanel" className="tab-pane fade show active" id="profile">...</div>
							  <div role="tabpanel" className="tab-pane fade" id="buzz">bbb</div>
							</div>

		  				</div>
		  			</div>
	  			</div>
	  			

	  		</div>
	  	);
  	}
}
export default DetailProduct;
