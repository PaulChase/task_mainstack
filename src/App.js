import intro2 from "./assets/intro2.jpg";
import intro from "./assets/intro.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import phone from "./assets/iphone12.png";

function App() {
	return (
		<main>
			{/* nav bar */}
			<nav className=" d-flex justify-content-between align-items-center p-3 ">
				<h2 className=" fw-bold">Mainstack</h2>

				<div className=" d-flex justify-content-between align-items-center">
					<a href="" className=" ms-4">
						Pricing
					</a>

					<a href="" className=" ms-4 ">
						Blog
					</a>

					<a href="" className=" ms-4">
						About Us
					</a>
					<a href="" className=" ms-4 ">
						Contact Us
					</a>
				</div>
				<div className="">
					<a href="" className=" ms-4 btn btn-outline-secondary rounded-pill px-3">
						Sign Up
					</a>
					<a href="" className=" ms-4 bg-dark p-3 px-4 rounded-pill text-white">
						Create free account
					</a>
				</div>
			</nav>

			{/* hero text and call to action */}
			<section className=" p-5 d-flex flex-column justify-content-center align-items-center ">
				<h1 className=" my-5 " id="hero-text">
					<b>
						Create a one-page site to <br /> showcase your incredible works <br /> and{" "}
						<span className=" primary-text">get more clients</span>
					</b>
				</h1>
				<form action="">
					<div className="signup p-3 rounded-pill">
						<label htmlFor="">Mainstack.app/</label>
						<input type="text" name="" id="" className=" border-none" placeholder="yourname" />
					</div>
					<button className="primary-bg btn ms-3 p-3  rounded-pill text-light fw-bold">
						create your stack
					</button>
				</form>
			</section>

			<section className="  " id="section2">
				<img src={intro} alt="" className="" />
				<img src={intro2} alt="" className="" />
			</section>

			<section className="bg-dark text-light p-5 " id="section3">
				<div className=" d-flex  flex-column justify-content-between align-items-start">
					<div>
						<h2 className=" mb-3 fw-bold">Conversations designed for people, not bots</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit error vitae necessitatibus
							laborum iure distinctio magnam quia provident omnis delectus consequatur magni, doloremque
							quam cupiditate nostrum repellat veniam nulla, laboriosam rem! Voluptatibus tenetur odio
							eligendi quibusdam dolorum! Porro, soluta reiciendis.
						</p>
					</div>
					<a href="" className="btn btn-light px-3 rounded-pill">
						Get started
					</a>
				</div>
				<img src={intro2} alt="" className="" />
				<img src={intro2} alt="" className="" />
			</section>

			<section className="p-5" id="section4">
				<div className="text-center " id="texthead">
					<h2 className=" fw-bold mb-4">
						Conversations designed for people, <br /> <span className=" primary-text">not bots</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, soluta culpa voluptas
						debitis qui fugiat. Laboriosam commodi laudantium sequi. Tenetur cumque perspiciatis velit. Fuga
						dolore veniam itaque ratione est debitis.
					</p>
				</div>

				<div className="  row primary-bg text-light mt-5 p-5 rounded-lg ">
					<div className=" col-5 d-flex  flex-column justify-content-between align-items-start">
						<div>
							<h1 className=" mb-5 fw-bold">Conversations designed for people, not bots</h1>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit error vitae necessitatibus
								laborum iure distinctio magnam quia provident omnis delectus consequatur magni,
								doloremque quam cupiditate nostrum repellat veniam nulla, laboriosam rem! Voluptatibus
								tenetur odio eligendi quibusdam dolorum! Porro, soluta reiciendis.
							</p>
						</div>
						<a href="" className="btn btn-light px-3 rounded-pill">
							Get started
						</a>
					</div>
					<div className=" col-7 " id="gal">
						<img src={img1} alt="" className="" id="mainImg" />
						<div className=" " id="gal2">
							<img src={img2} alt="" />
							<img src={img3} alt="" />
						</div>
					</div>
				</div>
			</section>

			<section className=" mt-5" id="section5">
				<div className=" bg-light p-5 rounded-lg">
					<i className="fab fa-youtube mb-3 primary-text fa-2x"></i>
					<h4 className=" fw-bold primary-text">share your favourite youtube playlist</h4>
					<p>
						<span className=" fw-bold">
							see your most important conversation first. <br /> snooze, archive or jump back in.
						</span>{" "}
						<span>
							{" "}
							Acitivity feed always keep your conversations within reach, so you can quickly catch up on
							what's new.
						</span>
					</p>
					<img src={phone} alt="" />
				</div>
				<div className=" bg-light p-5 rounded-lg">
					<i className="fab fa-twitter mb-3 text-primary fa-2x"></i>
					<h4 className=" fw-bold text-primary">Embed your tweets</h4>
					<p>
						<span className=" fw-bold">
							see your most important conversation first. <br /> snooze, archive or jump back in.
						</span>{" "}
						<span>
							{" "}
							Acitivity feed always keep your conversations within reach, so you can quickly catch up on
							what's new.
						</span>
					</p>
					<img src={phone} alt="" />
				</div>
				<div className=" bg-light p-5 rounded-lg">
					<i className="fab fa-spotify mb-3  fa-2x" style={{ color: "green" }}></i>
					<h4 className=" fw-bold " style={{ color: "green" }}>
						share your favourite spotify playlist
					</h4>
					<p>
						<span className=" fw-bold">
							see your most important conversation first. <br /> snooze, archive or jump back in.
						</span>{" "}
						<span>
							{" "}
							Acitivity feed always keep your conversations within reach, so you can quickly catch up on
							what's new.
						</span>
					</p>
					<img src={phone} alt="" />
				</div>
				<div className=" bg-light p-5 rounded-lg">
					<i className="fa fa-music mb-3 primary-text fa-2x"></i>
					<h4 className=" fw-bold primary-text">See what others are listening to</h4>
					<p>
						<span className=" fw-bold">
							see your most important conversation first. <br /> snooze, archive or jump back in.
						</span>{" "}
						<span>
							{" "}
							Acitivity feed always keep your conversations within reach, so you can quickly catch up on
							what's new.
						</span>
					</p>
					<img src={phone} alt="" />
				</div>
			</section>

			<section id="section6" className=" p-4 rounded-lg row bg-light">
				<div
					className=" col-6 d-flex p-5  flex-column justify-content-between align-items-start"
					style={{ height: "500px" }}
				>
					<p className="fs-4">set up all your media links</p>
					<div>
						<h4 className=" fs-2 fw-bold">
							see your most important <span className=" primary-text">conversations first</span>
						</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure molestiae tempora quas,
							possimus, est maxime animi a perferendis laudantium expedita magni beatae quaerat deleniti
							repellat incidunt. Debitis exercitationem totam iure!
						</p>
					</div>
					<a href="" className="btn btn-dark px-3 rounded-pill">
						Get started
					</a>
				</div>
				<img src={phone} alt="" className=" col-6 " />
			</section>

			<section id="section7">
				<div className=" bg-light p-4 rounded-lg">
					<h5 className=" text-primary">Collect payments from your fans</h5>
					<p>
						<span className=" fw-bold">see your most important conversation first.</span>
						snooze, archive or jump back in.
					</p>
					<div className=" border p-3 rounded-lg">
						<h5 className=" fw-bold">Buy marvellous coffee</h5>
						<p>
							{" "}
							<i className="fa fa-coffee mx-2"></i> $10 (each) * 1 = $10 total
						</p>
						<form action="">
							<input
								type="email"
								name="email"
								id=""
								className=" form-control mb-3"
								placeholder="your email"
							/>
							<input
								type="text"
								name="name"
								id=""
								className=" form-control mb-3"
								placeholder=" your name (optional)"
							/>
							<textarea
								className=" form-control mb-3"
								name=""
								id=""
								rows="4"
								placeholder="your message"
							></textarea>
							<button type="submit" className=" btn btn-primary my-2" style={{ width: "100%" }}>
								Buy <b>$10</b> coffee
							</button>
						</form>
						<p>
							<i className="fa fa-coffee mx-2"></i> 120 coffee received
						</p>
					</div>
				</div>
				<div className=" bg-light p-4 rounded-lg">
					<h5 className=" primary-text">Collect payments from your fans</h5>
					<p>
						<span className=" fw-bold">see your most important conversation first.</span>
						snooze, archive or jump back in.
					</p>
					<div className=" border p-3 rounded-lg">
						<img src={img3} alt="" style={{ height: "200px" }} className=" rounded-lg mb-3" />
						<h3>
							<b>Design Seminar</b>
						</h3>
						<small className=" text-primary">Sat, sep 18 12:00 PM</small> <br />
						<small>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti aliquid commodi
							provident ut debitis distinctio, nulla culpa necessitatibus magni, blanditiis suscipit
							voluptate doloribus illo omnis dicta quia porro quaerat.
						</small>{" "}
						<br />
						<button className=" btn primary-bg mt-2 text-light" style={{ width: "100%" }}>
							Register with $10
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
