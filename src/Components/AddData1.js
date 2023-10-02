import React from "react";
import axios from "axios";
import "./styles/addData.css"

class AddData1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      city: "",
      location_id: undefined,
      city_id: undefined,
      Address: "",
      location: "",
      images: [],
      propertyType_id: undefined,
      min_price: undefined,
      contact_number: undefined,
      banner: "",
      gmapURL: "",
      description: "",
      img1: "",
      img2: "",
      img3: "",
    };
  }

  handleCity = (event, city_id) => {
    console.log(event.target.value);
    console.log(city_id);
    this.setState({ city: event.target.value, city_id: city_id });
  };
  handleLocation = (location, location_id) => {
    console.log(location);
    this.setState({ location: location, location_id: location_id });
    console.log(location_id);
  };

  handleImage1Change = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(e.target.value);
    this.setState((prevState) => ({
      ...prevState,
      images: [prevState.img1, prevState.img2, prevState.img3],
    }));
    console.log(this.state.images);
  };
  handleProperty_id = (e) => {
    console.log(e.target.value);
    this.setState({ propertyType_id: e.target.value });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(e.target.value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      city,
      location_id,
      city_id,
      Address,
      location,
      images,
      propertyType_id,
      min_price,
      contact_number,
      banner,
      gmapURL,
      description,
    } = this.state;

    const newData = {
      name: name,
      city: city,
      location_id: location_id,
      city_id: city_id,
      Address: Address,
      location: location,
      images: images,
      propertyType_id: propertyType_id,
      min_price: min_price,
      contact_number: contact_number,
      banner: banner,
      gmapURL: gmapURL,
      description: description,
    };

    axios({
      method: "POST",
      url: `https://real-estate-node-code.vercel.app/create`,
      headers: { "Content-Type": "application/json" },
      data: newData,
    })
    .then(response =>console.log("Data Added Successfully"))
    .catch(err=>console.log(err));

    this.setState({
        name: "",
      city: "",
      location_id: undefined,
      city_id: undefined,
      Address: "",
      location: "",
      images: [],
      propertyType_id: undefined,
      min_price: undefined,
      contact_number: undefined,
      banner: "",
      gmapURL: "",
      description: "",
      })

     let heading = document.getElementById("heading1")
      heading.style.color="#f0f";
      heading.innerHTML = "New Data Added Successfully";

      window.location.reload();
  };

  render() {
    return (
      <>
        <div
          className="container-fluid AddDatabx d-flex justify-content-center align-items-center " style={{"marginTop":"10px"}}
        >
            <h2 id="heading1">Add New Property</h2>
            <form className="row" onSubmit={this.handleSubmit}>
          <div className="container formboc">
              <div className="inputbx">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  placeholder="Enter Name..."
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="inputbx">
              <label>Select city:</label>
                <select
                  required
                  className="form-select"
                  onChange={(e) => this.handleCity(e, 10)}
                >
                  <option>--select City--</option>
                  <option value="Panvel" id="10">
                    Panvel
                  </option>
                </select>
              </div>

              <div className="inputbx loc1">
                <label>Select Location:</label>
                <div className="locBx">
                <div className="rdo">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="s"
                    onChange={() => this.handleLocation("Vichumbe", 1)}
                    required
                  />
                  Vichumbe
                </div>
                <div className="rdo">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="s"
                    onChange={() => this.handleLocation("Rasayni", 2)}
                    required
                  />
                  Rasayni
                </div>
                <div className="rdo">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="s"
                    onChange={() => this.handleLocation("Karanjade", 3)}
                    required
                  />
                  Karanjade
                </div>
                <div className="rdo">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="s"
                    onChange={() => this.handleLocation("Kamothe", 4)}
                    required
                  />
                  Kamothe
                </div>
                </div>
              </div>

              <div className="inputbx">
              <label>Set Address:</label>
                <input
                  type="text"
                  name="Address"
                  className="form-control"
                  value={this.state.Address}
                  placeholder="Enter Address..."
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="inputbx imgarr">
              <label>Enter Images Url:</label>
                <input
                  type="text"
                  name="img1"
                  className="form-control"
                  value={this.state.img1}
                  placeholder="Image one Url"
                  onChange={this.handleImage1Change}
                  required
                />
                <input
                  type="text"
                  name="img2"
                  className="form-control"
                  value={this.state.img2}
                  placeholder="Image Two Url"
                  onChange={this.handleImage1Change}
                  required
                />
                <input
                  type="text"
                  name="img3"
                  className="form-control"
                  value={this.state.img3}
                  placeholder="Image Three Url"
                  onChange={this.handleImage1Change}
                  required
                />
              </div>

              <div className="inputbx">
              <label>Select Type Of Property:</label>
                <select
                  className="form-select"
                  onChange={this.handleProperty_id}
                  required
                >
              
                  <option value="1">Bangalow</option>
                  <option value="2">Land</option>
                  <option value="3">Multifamily Residential</option>
                  <option value="4">Apartment</option>
                  <option value="5">Shop</option>
                  <option value="6">Single Family Home</option>
                </select>
              </div>

              <div className="inputbx">
               <label>Set Price Of Property:</label>
                <input
                  type="text"
                  name="min_price"
                  className="form-control"
                  value={this.state.min_price}
                  placeholder="Set Price of Property..."
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="inputbx">
               <label>Contact Details:</label>
                <input
                  type="text"
                  name="contact_number"
                  className="form-control"
                  value={this.state.contact_number}
                  placeholder="Enter Contact Number..."
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="inputbx">
                <label>Enter Url of Thumbnail:</label>
                <input
                  type="text"
                  name="banner"
                  value={this.state.banner}
                  className="form-control"
                  placeholder="banner Image Url..."
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="inputbx">
               <label>Enter Url of PRoperty Google map location</label>
                <input
                  type="text"
                  name="gmapURL"
                  value={this.state.gmapURL}
                  className="form-control"
                  placeholder="Google Map Url..."
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="inputbx">
                <label>Add Description Of Property:</label>
                <textarea
                  name="description"
                  value={this.state.description}
                  placeholder="Desciption of property..."
                  className="form-control"
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>
              <button className="btn btn-secondary" type="submit">
                Create
              </button>
          </div>
          
            </form>
            
        </div>
      </>
    );
  }
}

export default AddData1;
