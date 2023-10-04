import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./styles/detail.css";
import queryString from "query-string";
import axios from "axios";


class Details extends React.Component{
  constructor(){
    super();
    this.state={
      property:{},
      thumbnail:[]
    }
  }


  // componentDidMount(){
  //   const qs = queryString.parse(this.props.location.search);
  //   const {property} = qs;
  //   console.log(property);
  //   // propertyById
    

  //   const result =axios({
  //     method: "GET",
  //     url: `http://localhost:8050/propertyById/${property}`,
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   this.setState({property:result.data.property})
  //   console.log(property)

  // }

  componentDidMount = async () => {
    const qs = queryString.parse(this.props.location.search);
    const {property} = qs;
    

    const result = await axios({
          method: "GET",
          url: `https://real-estate-node-code.vercel.app/propertyById/${property}`,
          headers: { "Content-Type": "application/json" },
        });

        this.setState({property:result.data.property})
        console.log("indeatil page")
          console.log(result.data.property)
          this.setState({
            thumbnail: result.data.property.images.map((i) => {
              return i;
            }),
          });
  };
    render(){
      const {property,thumbnail} = this.state;
      
      
        return(
           <>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={thumbnail[0]} class="d-block w-100-height" alt="..."/>
      <div class="carousel-caption carousel1">
      <h5>{property.name}</h5>
      <h4>{property.Address}</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src={thumbnail[1]} class="d-block w-100-height" alt="..." />
      <div class="carousel-caption carousel1">
      <h5>{property.name}</h5>
      <h4>{property.Address}</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src={thumbnail[2]} class="d-block w-100-height" alt="..." />
      <div class="carousel-caption carousel1">
      <h5>{property.name}</h5>
      <h4>{property.Address}</h4>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="container" style={{"marginTop":"1rem","marginBottom":"1rem"}}>
    <div className="row d-flex description">
          <div className="col-xl-6 col-lg-6 col-md-10 col-sm-10 imgbx">
            <img src={thumbnail[1]}></img>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-11 col-sm-11 content3">
            <p>{property.description}</p>
            <p><i class="fa-solid fa-location-dot" style={{"color":"orange"}}></i>{property.Address}</p>
            <p><i class="fa-solid fa-phone" style={{"color":"orange"}}></i>{property.contact_number}</p>
            <p><i class="fa-solid fa-indian-rupee-sign" style={{"color":"orange"}}></i>{property.min_price}/.</p>
          </div>
    </div>
    <div className="row gmap">
    <iframe src={property.gmapURL} col-xl-11 col-lg-12 col-md-11 col-sm-11  style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
           </>
        )

    }
}
export default Details;