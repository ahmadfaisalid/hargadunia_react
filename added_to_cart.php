<div class="row add-to-cart">
	<div class="col-xs-12">
		<?php foreach($getProduct as $row): ?>
		<?php if($notice !== true): ?>
			<h4 class="title-hm bold"><i class="fa fa-check-circle"></i> Added to Cart</h4>
		<?php else: ?>
			<h4 class="title-hm bold" style="color:#d50000"><i class="fa fa-warning" ></i> Not added</h4>
		<?php endif; ?>
			<div class="col-lg-2 col-md-3 col-sm-3 hidden-xs">
				<img src="<?php echo $row['image'] ?>" class="img img-responsive">
			</div>
			<div class="col-lg-3 col-md-4 col-sm-4 hidden-xs">
				<a href="<?php echo base_url('product/'.filterLink($row['title']) .'/'. $row['product_id']) ?>">
					<h6 class="sub-title"> <?php echo $row['title'] ?> </h6>
				</a>
				<span class="orange-hg"><?php echo print_idr(format_idr($row['nettPrice'])) ?></span>
			</div>
			<div class="hidden-lg hidden-md hidden-sm col-xs-12">
				<div style="float:left;margin-right:10px;">
					<img src="<?php echo $row['image'] ?>" class="img img-responsive">
				</div>
				<div>
					<h6 class="sub-title"> <?php echo $row['title'] ?> </h6>
					<span class="orange-hg"><?php echo print_idr(format_idr($row['nettPrice'])) ?></span>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="col-lg-7 col-md-5 col-sm-12 col-xs-12 alert alert-info">
				<div class="">
					<div class="inline-added" style="">
						<p style="font-size:12px;">
							<b class="dark-hg">
							Cart subtotal : 
							<span class="orange-hg"><?php echo print_idr(format_idr($subTotal)) ?></span>
							</b>
						</p>
						<b class="dark-hg"> <?php echo array_sum($this->session->userdata('itemQty')) ?> </b> <span class="dark-hg">item in your Cart</span>
					</div>
					<div style="">
						<!-- Edit Cart Button -->
						<a class="btn btn-primary" href="<?php echo base_url() ?>cart/editCart" style="margin-top:5px;">
							<i class="fa fa-shopping-cart"></i> <small>Edit Shopping Cart</small>
						</a>
						<!-- Edit Continue Button -->
						<a class="btn btn-info" href="<?php echo base_url() ?>" style="margin-top:5px;">
							<i class="fa fa-shopping-bag"></i> <small>Continue Shopping</small>
						</a>	
						<!-- Edit Proceed Checkout Button -->				
						<a class="btn btn-danger" href="<?php echo base_url() ?>address/shippingAddress" style="margin-top:5px;">
							 <small>Proceed to Checkout</small> <i class="fa fa-chevron-right"></i> 
						</a>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			<script>
				var ga_product 	= "<?php echo $row['product_id']; ?>";
				var ga_name = "<?php echo htmlentities($row['title']); ?>";
				var ga_price = "<?php echo $row['nettPrice']; ?>";
				var ga_brand = "<?php echo htmlentities($row['manufacturer']); ?>";
				var ga_category = "<?php echo htmlentities($row['title_category']); ?>";
				var qty = "<?php echo array_sum($this->session->userdata('itemQty')); ?>";
				if (ga_price == "") {
					ga_price = 0;
				}
				
				// GA Add to Cart - Start
				ga('create', '<?php echo GA_CODE ?>');
				ga("require", "ec");
				ga("ec:addProduct", {
					"id": ga_product,
					"name": ga_name,
					"price": ga_price,
					"brand": ga_brand,
					"category": ga_category,
					"variant": "",
					"dimension1": "",
					"position": 0,
					"quantity": qty
				});
				ga("ec:setAction", "add", {"step" : 1});
				ga("send", "event", "detail view", "click", "addToCart");
				// GA Add to Cart - End
			</script>

		<?php endforeach;?>
		<div class="col-xs-12">
			<?php if($notice === true): ?>
				<div class="box-warning">
					<div class="box-alert-container">
						<h4 class="alert-heading">Ada masalah saat menambahkan produk ini ke Cart</h4>
						<i class="fa fa-warning icon-alert"></i>
						<p class="alert-content">
							Produk 
							<a href="<?php echo base_url('product/'.filterLink($row['title']) .'/'. $row['product_id']) ?>">
							<?php echo $row['title'] ?>
							</a> 
							dari penjual memiliki batas <?php echo $this->my_store->getOption('limit_order') ?> per pelanggan. Kami akan mengubah jumlah 
							<a href="<?php echo base_url('product/'.filterLink($row['title']) .'/'. $row['product_id']) ?>">
							<?php echo $row['title'] ?>
							</a>
							ke <?php echo $this->my_store->getOption('limit_order') ?>.
						</p>
					</div>
				</div>
			<?php endif; ?>
		</div>
		<div class="row">
			<div class="col-xs-12 related-product">
				<h4 class="title-hm">Customers Who Bought This Item Also Bought</h4>
			</div>	
		</div>

		<?php if($relatedProducts != 0): ?>	
			<div class="row">
				<div class="col-xs-12">
					<?php $this->my_product->printProducts($relatedProducts); ?>
				</div>
			</div>
		<?php endif; ?>
	</div>
</div>