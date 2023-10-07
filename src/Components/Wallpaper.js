import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const container1 = {
  minHeight: "100vh",
  background: "url('./Assets/car1.jpg') no-repeat center/cover",
  padding:"10px"
};

class Wallpaper extends React.Component {
  constructor() {
    super();
    this.state = {
      property: [],
      inputText: "",
      suggetions: [],
      propertyName: "",
    };
  }

  handleLocation = async (event) => {
    const locationId = event.target.value;
    console.log(locationId);
    sessionStorage.setItem("locationID", locationId);
    // http://localhost:8050/byId/2
    const response = await axios({
      method: "GET",
      url: `https://real-estate-node-code.vercel.app/byId/${locationId}`,
      headers: { "Content-Type": "application/json" },
    });
    this.setState({ property: response.data.property });
  };

  handleSearch = async (event) => {
    let inputText = event.target.value;
    // console.log(inputText);
    const { property } = this.state;
    const suggetions = property.filter((i) =>
      i.name.toLowerCase().includes(inputText.toLowerCase())
    );
    this.setState({
      suggetions: suggetions,
      inputText: inputText,
    });
    // console.log(suggetions);
  };

  showSuggestion = () => {
    const { suggetions, inputText } = this.state;
    if (suggetions.length == 0 && inputText == undefined) {
      return null;
    }
    if (suggetions.length > 0 && inputText == undefined) {
      return null;
    }
    if (suggetions.length == 0 && inputText) {
      return (
        <ul className="list-group" style={{ zIndex: "1000" }}>
          <li className="list-group-item">No search found</li>
        </ul>
      );
    }

    return (
      <ul className="list-group">
        {suggetions.map((i, index) => (
          <li
            className="list-group-item li1"
            key={index}
            onClick={() => this.selectProperty(i)}
          >
            {i.name}-{i.location}
          </li>
        ))}
      </ul>
    );
  };

  selectProperty = (i) => {
    this.props.history.push(`/detail?property=${i._id}`);
  };

  render() {
    // console.log(this.state.property);
    const { locationData } = this.props;
    // console.log(locationData);
    // console.log(this.state.property.slice(0, 3));

    return (
      <>
        <div className="container-fluid container1" style={container1}>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div className="bx10 col-xl-8 col-lg-9 col-md-10 col-sm-12 py-5 d-flex flex-column justify-content-center align-items-center content1">
              <div className="logo1 mb-3">
                <h2>Megatron Realestates</h2>
              </div>
              <p className="mb-4">Discover Properties More Easily</p>
              <div className=" row col-12 d-flex justify-content-around p-2">
                <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 mb-2">
                  <select
                    className="form-select locations"
                    onChange={this.handleLocation}
                  >
                    <option value="caption">--select city--</option>
                    {locationData.map((item) => {
                      return (
                        <option value={item.location_id}>
                          {item.name},{item.city}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-10  col-sm-12  mb-2">
                  <span
                    style={{
                      position: "absolute",
                      paddingLeft: "1rem",
                      marginTop: "7px",
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="search"
                    id="srch"
                    className="form-control me-2"
                    placeholder="search property here..."
                    onChange={this.handleSearch}
                  />
                  {this.showSuggestion()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Wallpaper);
