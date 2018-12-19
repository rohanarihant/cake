import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	<div className="mian-content">
		{/* header */}
		<header>
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="logo text-left">
					<h1>
						<a className="navbar-brand" href="index.html">
							<img src="images/logo.png" alt="" className="img-fluid" />Cakes Bakery</a>
					</h1>
				</div>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">

					</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-lg-auto text-lg-right text-center">
						<li className="nav-item active">
							<a className="nav-link" href="index.html">Home
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="about.html">About Us</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
							    aria-haspopup="true" aria-expanded="false">
								Dropdown
							</a>
							<div className="dropdown-menu text-lg-left text-center" aria-labelledby="navbarDropdown">
								<a className="dropdown-item scroll" href="#services">Services</a>
								<a className="dropdown-item scroll" href="#products" title="">New Products</a>
								<a className="dropdown-item scroll" href="#news" title="">Company News</a>
								<a className="dropdown-item" href="about.html" title="">Team</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="gallery.html">Gallery</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">Contact Us</a>
						</li>
					</ul>
					{/* menu button */}
					<div className="menu">
						<a href="#" className="navicon"></a>
						<div className="toggle">
							<ul className="toggle-menu list-unstyled">
								<li>
									<a href="index.html">Index Page</a>
								</li>
								<li>
									<a className="scroll" href="#products">New Products</a>
								</li>
								<li>
									<a href="gallery.html">Latest Cakes</a>
								</li>
								<li>
									<a className="scroll" href="#order">Order Cake</a>
								</li>
								<li>
									<a className="scroll" href="#faqs">Faqs</a>
								</li>
								<li>
									<a href="contact.html">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
					{/* //menu button */}
				</div>
			</nav>
		</header>
		{/* //header */}

		{/* banner */}
		{/* main image slider container */}
		<div id="slider-main">
			<div className="banner-text-agile text-center">
				<div className="container">
					<h3 className="text-white font-weight-bold mb-3">The Taste Of Our Amazing Cakes</h3>
					<p className="text-light">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<button type="button" className="btn btn-primary button mt-md-5 mt-4" data-toggle="modal" data-target=".bd-example-modal-lg">
						<span>Watch Our Video</span>
					</button>
				</div>
			</div>
			{/* previous button */}
			<button id="prev">
				<i className="fas fa-chevron-left"></i>
			</button>

			{/* image container */}
			<div id="slider"></div>

			{/* next button */}
			<button id="next">
				<i className="fas fa-chevron-right"></i>
			</button>

			{/* small circles container */}
			<div id="circles"></div>

		</div>
		{/* end of main image slider container */}
		{/* Modal */}
		<div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-hidden="true">
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title text-center" id="exampleModalCenterTitle">Cake Bakery</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body p-0">
						<iframe src="https://player.vimeo.com/video/58582025" style={{border:"none"}}></iframe>
					</div>
				</div>
			</div>
		</div>
		{/* //Model */}
		{/* //banner */}

		{/* banner bottom icons */}
		<div className="icons-banner-botom">
			<div className="container">
				<ul className="list-unstyled my-4">
					<li className="icons-mkw3ls">
						<p className="mb-2">Chocolate</p>
						<img src="images/img1.png" className="img-fluid" alt="" />
					</li>
					<li className="icons-mkw3ls">
						<p className="mb-2">Strawberry</p>
						<img src="images/img2.png" className="img-fluid" alt="" />
					</li>
					<li className="icons-mkw3ls">
						<p className="mb-2">Pista</p>
						<img src="images/img3.png" className="img-fluid" alt="" />
					</li>
					<li className="icons-mkw3ls">
						<p className="mb-2">Vanilla</p>
						<img src="images/img4.png" className="img-fluid" alt="" />
					</li>
					<li className="icons-mkw3ls">
						<p className="mb-2">Muffins</p>
						<img src="images/img5.png" className="img-fluid" alt="" />
					</li>
				</ul>
			</div>
		</div>
		{/* //banner bottom icons */}
	</div>
	{/* //main */}



	{/* services */}
	<div className="serives-agile py-5 bg-light border-top" id="services">
		<div className="container py-xl-5 py-lg-3">
			<div className="row support-bottom text-center">
				<div className="col-md-4 support-grid">
					<i className="far fa-heart"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Made With Love</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
				</div>
				<div className="col-md-4 support-grid my-md-0 my-4">
					<i className="fas fa-birthday-cake"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Seasonal Pastries</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
				</div>
				<div className="col-md-4 support-grid">
					<i className="far fa-calendar"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Event Catering</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
				</div>
			</div>
		</div>
	</div>
	{/* //services */}

	{/* stats section */}
	<div className="middlesection-agile ">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 text-lg-left text-center pt-4">
					<img src="images/women.png" alt="" className="img-fluid women-style" />
				</div>
				<div className="col-lg-6 left-build-wthree aboutright-agilewthree mt-0 py-5">
					<div className=" py-xl-5 py-lg-3">
						<h2 className="title-2 text-white mb-sm-5 mb-4">Some Statistical Facts</h2>
						<div className="row mb-xl-5 mb-4">
							<div className="col-4 w3layouts_stats_left w3_counter_grid">
								<p className="counter">1680</p>
								<p className="para-text-w3ls text-light">Popularity</p>
							</div>
							<div className="col-4 w3layouts_stats_left w3_counter_grid2">
								<p className="counter">1200</p>
								<p className="para-text-w3ls text-light">Happy Customers</p>
							</div>
							<div className="col-4 w3layouts_stats_left w3_counter_grid1">
								<p className="counter">400</p>
								<p className="para-text-w3ls text-light">Awards Won</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* //stats section */}

	{/* new products */}
	<div className="featured-section py-5" id="products">
		<div className="container py-xl-5 py-lg-3">
			<div className="title text-center mb-5">
				<h3 className="text-dark mb-2">New Products</h3>
				<p>Ut enim ad minim veniam, quis nostrud ullam.</p>
			</div>
			<div className="content-bottom-in">
				<ul id="flexiselDemo1">
					<li>
						<div className="w3l-specilamk">
							<div className="row">
								<div className="col-lg-6 product-name-w3l">
									<h4 className="font-weight-bold">Strawberry Cakes</h4>
									<p className="dont-inti-w3ls mt-4 mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										accuslaudantium.</p>
									<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut
										perspiciatis
										unde omnis iste natus error sit voluptatem accuslaudantium.</p>
									<a href="#order" className="button-3 active mt-5 py-4 scroll">Order Now</a>
								</div>
								<div className="col-lg-6 speioffer-agile">
									<img src="images/product1.jpg" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="w3l-specilamk">
							<div className="row">
								<div className="col-lg-6 product-name-w3l">
									<h4 className="font-weight-bold">Dessert Cakes</h4>
									<p className="dont-inti-w3ls mt-4 mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										accuslaudantium.</p>
									<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut
										perspiciatis
										unde omnis iste natus error sit voluptatem accuslaudantium.</p>
									<a href="#order" className="button-3 active mt-5 py-4 scroll">Order Now</a>
								</div>
								<div className="col-lg-6 speioffer-agile">
									<img src="images/product2.jpg" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="w3l-specilamk">
							<div className="row">
								<div className="col-lg-6 product-name-w3l">
									<h4 className="font-weight-bold">Vanilla Cakes</h4>
									<p className="dont-inti-w3ls mt-4 mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										accuslaudantium.</p>
									<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut
										perspiciatis
										unde omnis iste natus error sit voluptatem accuslaudantium.</p>
									<a href="#order" className="button-3 active mt-5 py-4 scroll">Order Now</a>
								</div>
								<div className="col-lg-6 speioffer-agile">
									<img src="images/product3.jpg" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="w3l-specilamk">
							<div className="row">
								<div className="col-lg-6 product-name-w3l">
									<h4 className="font-weight-bold">Roller Coaster</h4>
									<p className="dont-inti-w3ls mt-4 mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										accuslaudantium.</p>
									<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut
										perspiciatis
										unde omnis iste natus error sit voluptatem accuslaudantium.</p>
									<a href="#order" className="button-3 active mt-5 py-4 scroll">Order Now</a>
								</div>
								<div className="col-lg-6 speioffer-agile">
									<img src="images/product4.jpg" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="w3l-specilamk">
							<div className="row">
								<div className="col-lg-6 product-name-w3l">
									<h4 className="font-weight-bold">Chocolate Cakes</h4>
									<p className="dont-inti-w3ls mt-4 mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
										accuslaudantium.</p>
									<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut
										perspiciatis
										unde omnis iste natus error sit voluptatem accuslaudantium.</p>
									<a href="#order" className="button-3 active mt-5 py-4 scroll">Order Now</a>
								</div>
								<div className="col-lg-6 speioffer-agile">
									<img src="images/product5.jpg" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	{/* //new products	*/}

	{/* news */}
	<div className="news-agile bg-cream py-5" id="news">
		<div className="container py-xl-5 py-lg-3">
			<div className="row">
				{/* order form */}
				<div className="col-lg-4 order-form-w3ls pl-lg-0" id="order">
					<div className="agile_its_registration bg-white">
						<h3 className="title-2 mb-3">Order a Cake</h3>
						<p className="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
						<form action="#" method="post">
							<div className="agileits-location form-group">
								<label>Shape</label>
								<select required>
									<option value="">Round</option>
									<option value="1">rectangle</option>
									<option value="2">square</option>
									<option value="2">custom</option>
								</select>
								<div className="clear"></div>
							</div>
							<div className="agileits-location w3ls-1 form-group">
								<label>Levels</label>
								<select required>
									<option value="">1</option>
									<option value="1">2</option>
									<option value="2">3</option>
									<option value="2">4</option>
								</select>
								<div className="clear"></div>
							</div>
							<div className="agileits-location form-group">
								<label>Size</label>
								<select required>
									<option value="">4 inch</option>
									<option value="">6 inch</option>
									<option value="">8 inch</option>
									<option value="">10 inch</option>
								</select>
								<div className="clear"></div>
							</div>
							<div className="agileits-location w3ls-1 form-group">
								<label>Flavor</label>
								<select required>
									<option value="">Chocolate</option>
									<option value="">Butterscotch </option>
									<option value="">Strawberry</option>
									<option value="">Vanilla</option>
								</select>
								<div className="clear"></div>
							</div>
							<input type="submit" value="Order" className="agileinfo-order btn" />
						</form>
					</div>
				</div>
				{/* //order form */}
				{/* news */}
				<div className="col-lg-8 news-blog mt-lg-0 mt-5">
					<h3 className="title-2 mb-md-5 mb-4">Company News</h3>
					<div className="row">
						<div className="col-sm-6 news-grids-agile">
							<div className="news-top">
								<a href="single.html">
									<img src="images/news1.jpg" alt="" className="img-fluid" />
								</a>
							</div>
							<div className="price-bottom bg-white p-4">
								<a href="single.html" className="text-dark">Sep 21st, 2018</a>
								<h5 className="mt-3">Sit voluptatem accusantium doloremque</h5>
							</div>
						</div>
						<div className="col-sm-6 news-grids-agile mt-sm-0 mt-5">
							<div className="news-top">
								<a href="single.html">
									<img src="images/news2.jpg" alt="" className="img-fluid" />
								</a>
							</div>
							<div className="price-bottom bg-white p-4">
								<a href="single.html" className="text-dark">Sep 21st, 2018</a>
								<h5 className="mt-3">Sit voluptatem accusantium doloremque</h5>
							</div>
						</div>
					</div>
					{/* //news */}
					{/* faqs */}
					<div className="faq-w3agile mt-5" id="faqs">
						<h3 className="title-2 mb-md-5 mb-4">Frequently asked questions</h3>
						<ul className="faq list-unstyled">
							<li className="item1">
								<a href="#" title="click here" className="text-dark border-bottom pb-3">Consectetur adipiscing sit elitipsum nec?
									<i className="fas fa-plus float-right"></i>
								</a>
								<ul className="list-unstyled">
									<li className="subitem1">
										<p className="pt-3 pb-4"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
											tincidunt ut laoreet dolore.
											At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
											atque
											corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
									</li>
								</ul>
							</li>
							<li className="item2 my-3">
								<a href="#" title="click here" className="text-dark border-bottom pb-3">The standard Lorem Ipsum passage Etiam?
									<i className="fas fa-plus float-right"></i>
								</a>
								<ul className="list-unstyled">
									<li className="subitem1">
										<p className="pt-3 pb-4"> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit, sed diam nonummy
											nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
											ducimus
											qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
											occaecati
											cupiditate non provident.</p>
									</li>
								</ul>
							</li>
							<li className="item3 my-3">
								<a href="#" title="click here" className="text-dark border-bottom pb-3">Ut semper nisl ut laoreet ultrices?
									<i className="fas fa-plus float-right"></i>
								</a>
								<ul className="list-unstyled">
									<li className="subitem1">
										<p className="pt-3 pb-4">Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit, sed diam nonummy
											nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
											ducimus
											qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
											occaecati
											cupiditate non provident.</p>
									</li>
								</ul>
							</li>
							<li className="item4">
								<a href="#" title="click here" className="text-dark border-bottom pb-3">Sed diam nonummy nibh eiusmod faucibus?
									<i className="fas fa-plus float-right"></i>
								</a>
								<ul className="list-unstyled">
									<li className="subitem1">
										<p className="pt-3">At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
											nibh euismod consectetuer
											adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis
											praesentium
											voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
											provident.</p>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					{/* //faqs */}
				</div>
			</div>
		</div>
	</div>
	{/* //news */}

	{/* support */}
	<div className="serives-agile py-5" id="support">
		<div className="container py-xl-5 py-lg-3">
			<div className="title text-center mb-5">
				<h3 className="text-dark mb-2">Help & Support</h3>
				<p>Ut enim ad minim veniam, quis nostrud ullam.</p>
			</div>
			<div className="row support-bottom text-center">
				<div className="col-md-4 support-grid">
					<i className="fas fa-headphones"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Online Support</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
					<button type="button" className="button button-2"  >
						<span>Call Us</span>
					</button>
				</div>
				<div className="col-md-4 support-grid my-md-0 my-5">
					<i className="far fa-comments"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Live Chat 24/7</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
					<button type="button" className="button button-2 active"  >
						<span>Let's Chart</span>
					</button>
				</div>
				<div className="col-md-4 support-grid">
					<i className="fas fa-question"></i>
					<h5 className="text-dark text-uppercase mt-4 mb-3">Any Questions</h5>
					<p>Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.</p>
					<button type="button" className="button button-2"  >
						<span>Learn More</span>
					</button>
				</div>
			</div>
		</div>
	</div>
	{/* support */}

	{/* footer */}
	<footer className="text-center py-sm-4 py-3">
		<div className="container py-xl-5 py-3">
			<div className="w3l-footer footer-social-agile mb-4">
				<ul className="list-unstyled">
					<li>
						<a href="#">
							<i className="fab fa-facebook-f"></i>
						</a>
					</li>
					<li className="mx-1">
						<a href="#">
							<i className="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fab fa-dribbble"></i>
						</a>
					</li>
					<li className="ml-1">
						<a href="#">
							<i className="fab fa-vk"></i>
						</a>
					</li>
				</ul>
			</div>
			{/* copyright */}
			<p className="copy-right-grids text-light my-lg-5 my-4 pb-4">© 2018 Cake Bakery. All Rights Reserved | Design by
				<a href="https://w3layouts.com/" target="_blank">W3layouts</a>
			</p>
			{/* //copyright */}
		</div>
		{/* chef */}
		<img src="images/chef.png" alt="" className="img-fluid chef-style" />
		{/* //chef */}
	</footer>
	{/* //footer */}
      </div>
    );
  }
}

export default App;
