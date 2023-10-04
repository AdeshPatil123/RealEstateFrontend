import React from "react";
import { Outlet, Link } from "react-router-dom";

class Popular extends React.Component{
    render(){
        return(
            <>
                <section className="container popular" id="popular" style={{"marginTop":"40px"}}>
        <div className="text-center">
            <h2>Popular</h2>
        </div>
        <div className="d-flex popularh">
            <h2>Our Popular Residence</h2>
            <h6 className="ms-auto"><Link className="nav-link" to="/create">Explore All <span className="arrow-icon">&rarr;</span></Link></h6>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 mt-2">
            <div className="col">
                <div className="card border-1 rounded-0">
                    <img src="./Assets/car1.jpg" className="card-img-top rounded" alt="image"/>
                    <div className="card-body">
                        <p className="card-text text-muted">Vichumbe,Panvel</p>
                        <div className="d-flex my-2">
                            <button className="btn btn-lg text-white bg-dark px-4">Book Now</button>
                            <h5 className="my-auto ms-auto">&#8377;2,20,11,330</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-0 rounded-0">
                    <img src="./Assets/banglow.jpg" className="card-img-top rounded" alt="image"/>
                    <div className="card-body">
                        <p className="card-text text-muted">Karanjade,Panvel</p>
                        <div className="d-flex my-2">
                            <button className="btn btn-lg text-white bg-dark px-4">Book Now</button>
                            <h5 className="my-auto ms-auto">&#8377;2,20,11,330</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card border-0 rounded-0">
                    <img src="./Assets/sfh.jpg" className="card-img-top rounded" alt="image"/>
                    <div className="card-body">
                        <p className="card-text text-muted">Kamothe,Panvel</p>
                        <div className="d-flex my-2">
                            <button className="btn btn-lg text-white bg-dark px-4">Book Now</button>
                            <h5 className="my-auto ms-auto">&#8377;2,20,11,330</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="bg-dark" style={{"marginTop":"-15%"}}>
        <div className="container pt-5">
            <div className="row" style={{"marginTop":"25%"}}>
                <div className="col-lg-4">
                    <h2 style={{"color":"#b5b5b5"}}>Adesh Patil</h2>
                    <p style={{"color":"#b5b5b5"}}>Founder</p>
                </div>
                <div className="col-lg-8 mb-5">
                    <h6 className="lh-lg" style={{"color":"#b5b5b5"}}>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque voluptatum inventore cupiditate, quo quisquam accusamus facilis ipsa totam, nam expedita ab blanditiis. Unde iure ex dignissimos at sed eveniet molestiae fugit doloremque, voluptatibus officia possimus voluptate iste aspernatur facere! Exercitationem earum ea explicabo consequatur nemo odio, pariatur debitis natus.&ldquo;</h6>
                </div>
            </div>
            <hr className="text-light" />
            <div className="container mt-5 pb-5">
                <div className="row text-center">
                    <div className="col-md-3 col-sm-6">
                        <img src="./Assets/logo2.png" style={{"width":"55%"}} alt="logo"/>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src="./Assets/logo.png" style={{"width":"55%"}} alt="logo"/>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src="./Assets/logo3.png" style={{"width":"55%"}} alt="logo"/>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src="./Assets/logo4.png" style={{"width":"55%"}} alt="logo"/>
                    </div>
                </div>
            </div>
        </div>

      </section>
            </>
        )
    }
}

export default Popular;