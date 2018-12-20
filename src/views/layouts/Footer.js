import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from "../pages/AboutUs";

class Footer extends Component {
  render() {
    return (
	    <footer react-section="footer">
			<div className="container">
				<div className="row content-link">
					<div className="ftr-block">
						<div className="ftr-col">
							<div className="ftr-ttl">About Hargadunia</div>
							<ul className="ftr-section">
								<li><a href="#">About Us</a></li>
								<li><a href="#">Term & Condition</a></li>
								<li><a href="#">Testimonials</a></li>
								<li><a href="#">Ready Stock in Indonesia</a></li>
							</ul>
						</div>
					</div>
					<div className="ftr-block">
						<div className="ftr-col">
							<div className="ftr-ttl">Let Us Help You</div>
							<ul className="ftr-section">
								<li><a href="#">Shopping Cart</a></li>
								<li><a href="#">Your Account</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">FAQs</a></li>
								<li><a href="#">How to Order</a></li>
							</ul>
						</div>
					</div>
					<div className="ftr-block">
						<div className="ftr-col">
							<div className="ftr-ttl">Chat With Us</div>
							<ul className="ftr-section">
								<li className="ftr-ico-s"><a href="https://line.me/R/ti/p/%40hargadunia" target="_blank"><span className="ico-s ico-s-line"></span>@hargadunia</a></li>
								<li className="ftr-ico-s"><a href="https://api.whatsapp.com/send?phone=628990011115&text=Hai%20Customer%20Service%20Hargadunia,%20Saya%20butuh%20bantuan."  target="_blank"><span className="ico-s ico-s-wa"></span>08990011115</a></li>
								<li className="ftr-ico-s"><a href="#"><span className="ico-s ico-s-bbm"></span>5A78886D</a></li>
							</ul>
						</div>
					</div>
					<div className="ftr-block">
						<div className="ftr-col">
							<div className="ftr-ttl">Newsletter</div>
							<div className="ftr-section">
							<form className="form-abs">
								<div className="form-group">
									<input type="email" className="form-control" id="" placeholder="Enter email"/>
								</div>
								<div className="form-group">
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" id="n_pria" value="" name="nws_gender"/>
										<label className="form-check-label" htmlFor="n_pria">Pria</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" id="n_wanita" value="" name="nws_gender"/>
										<label className="form-check-label" htmlFor="n_wanita">Wanita</label>
									</div>
								</div>
								<button type="submit" className="btn btn-gray btn-block">Subscribe</button>
								</form>
							</div>
						</div>
					</div>
					<div className="ftr-block">
						<div className="ftr-col">
							<div className="ftr-ttl">Follow Us</div>
							<ul className="ftr-section">
								<li className="ftr-ico-s-m">
									<a href="#" target="_blank">
										<span className="ico-s ico-s-fb"></span>
									</a>
								</li>
								<li className="ftr-ico-s-m">
									<a href="#" target="_blank">
										<span className="ico-s ico-s-tw"></span>
									</a>
								</li>
								<li className="ftr-ico-s-m">
									<a href="#" target="_blank">
										<span className="ico-s ico-s-ig"></span>
									</a>
								</li>
								<li className="ftr-ico-s-m">
									<a href="#" target="_blank">
										<span className="ico-s ico-s-yt"></span>
									</a>
								</li>
								<li className="ftr-ico-s-m">
									<a href="#" target="_blank">
										<span className="ico-s ico-s-gp"></span>
									</a>
								</li>
								<li className="ftr-ico-s-m">
									<a href="#" target="_blank">
										<span className="ico-s ico-s-in"></span>
									</a>
								</li>
								<li className="ftr-ico-s-m">
									<a href="#" target="_blank">
										<span className="ico-s ico-s-bl"></span>
									</a>
								</li>
							</ul>
							<div className="float-left mt-3">
								<ul className="ftr-section">
									<li className="ftr-ico-s-m">
										<a href="#" target="_blank">
											<span className="ico-apsdwn ico-a-pstore"></span>
										</a>
									</li>
									<li className="ftr-ico-s-m">
										<a href="#" target="_blank">
											<span className="ico-apsdwn ico-a-astore"></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row content-img">
					<div className="col-md-2">
						<div className="ftr-ttl">Logistic Partner</div>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/jne-logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/rex-logo.png"/>
					</div>
					<div className="col-md-4">
						<div className="ftr-ttl">Secure Payment</div>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Verified%20by%20Visa.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Secure%20Code.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/J%20Secure.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Safe%20Secure.png"/>
					</div>
					<div className="col-md-6">
						<div className="ftr-ttl">Payment Method</div>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/BCA%20Klikpay%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Mandiri%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Visa%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/ATM%20Bersama%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/CIMB%20Clicks%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Doku%20Wallet%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/JCB%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Mastercard%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Sakuku%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Akulaku%20Logo.png"/>
						<img className="img-block-footer" src="https://hargadunia.com/resources/img/payment-method/Kredivo%20Logo.png"/>
					</div>
				</div>

				<Route exact path='/' component={AboutUs}/>
				<div className="row">
					<div className="col-md-12 ftr-copyright">© Copyright Hargadunia.com - Hobi belanja barang-barang branded murah? Gak usah jauh-jauh ke Amerika. Pilih barang yang kamu suka dan Hargadunia belikan untuk kamu dengan biaya $1 Dollar saja. </div>
				</div>
			</div>
	    </footer>
    );
  }
}
export default Footer;