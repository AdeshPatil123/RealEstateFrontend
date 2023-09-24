import React from "react";
import "./styles/filter.css";
import axios from "axios";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      location: undefined,
      property: [],
      count: undefined,
      propertyType: "",
      lcost: undefined,
      hcost: undefined,
      sort: 1,
      page: 1,
      pageCount: [],
      propertyType: undefined,
    };
  }

  componentDidMount() {
    const qs = queryString.parse(this.props.location.search);
    console.log(qs);
    const { propertyType, name, location } = qs;
    this.setState({ propertyType: propertyType });
    this.setState({ location: location });
    this.setState({ propertyType: propertyType });
    const { sort, page } = this.state;

    const filterObj = {
      propertType: Number(propertyType),
      location,
      page,
    };

    axios({
      method: "POST",
      url: `https://real-estate-node-code.vercel.app/filter`,
      headers: { "Content-Type": "application/json" },
      data: filterObj,
    })
      .then((response) => {
        this.setState({
          property: response.data.property,
          count: response.data.count,
          pageCount: response.data.pageCount,
        });
      })
      .catch((err) => console.log(err));

    axios({
      method: "GET",
      url: "https://real-estate-node-code.vercel.app/location",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        this.setState({ locations: response.data.locations });
      })
      .catch((err) => console.log(err));
  }

  handleLocationChange = async (event) => {
    const location = event.target.value;
    this.setState({ location: event.target.value });

    let { sort, page, propertyType } = this.props;
    const filterObj = {
      propertType: Number(propertyType),
      location,
      page,
    };
    const response = await axios({
      method: "POST",
      url: `https://real-estate-node-code.vercel.app/filter`,
      headers: { "Content-Type": "application/json" },
      data: filterObj,
    });

    this.setState({
      property: response.data.property,
      count: response.data.count,
      pageCount: response.data.pageCount,
    });
  };

  handleCost =async (lcost, hcost) => {
    console.log(lcost, hcost);
    const { location, sort, page, propertyType } = this.state;
    const filterObj = {
      propertType: Number(propertyType),
      location,
      page: page,
      lowCost: lcost,
      highCost: hcost,
    };
   const response = await axios({
      method: "POST",
      url: `https://real-estate-node-code.vercel.app/filter`,
      headers: { "Content-Type": "application/json" },
      data: filterObj,
    })
      
        this.setState({
          property: response.data.property,
          count: response.data.count,
          lcost: lcost,
          hcost: hcost,
          pageCount: response.data.pageCount,
        });
     
  };

  handleChnge = async (propId) => {
    console.log(propId);
    let propertType = propId;
    const { location, sort, page, lcost, hcost } = this.state;
    const filterObj = {
      propertType: Number(propertType),
      location,
      page: page,
      lowCost: lcost,
      highCost: hcost,
    };
    const response = await axios({
      method: "POST",
      url: `https://real-estate-node-code.vercel.app/filter`,
      headers: { "Content-Type": "application/json" },
      data: filterObj,
    })
    
        this.setState({
          property: response.data.property,
          count: response.data.count,
          propertyType: propertType,
          pageCount: response.data.pageCount,
        });
     
      
  };

  handleSort = async (sort) => {
    const { propertyType, location, lcost, hcost, page } = this.props;
    const filterObj = {
      propertType: Number(propertyType),
      location,
      page: page,
      lowCost: lcost,
      highCost: hcost,
      page: page,
      sort: sort,
    };
    const response = await axios({
      method: "POST",
      url: `https://real-estate-node-code.vercel.app/filter`,
      headers: { "Content-Type": "application/json" },
      data: filterObj,
    })
      
        this.setState({
          property: response.data.property,
          count: response.data.count,
          sort: sort,
          pageCount: response.data.pageCount,
        });
     
  };

  selectProperty =  (i)=>{
    console.log('detail')
    this.props.history.push(`/detail?property=${i._id}`);
}

  render() {
    const { locations, property } = this.state;
    console.log(property);
    return (
      <>
        <div className="container filterCont">
          <div className="row d-flex justify-content-center ">
            <div className="filter col-xl-4 col-lg-4 col-md-5 col-sm-10">
              <h2>Filter</h2>

              <div className="row">
                <div className="content col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
                  <div className="select">
                    <h3>Select Location</h3>
                    <select
                      name="location"
                      onChange={this.handleLocationChange}
                      className="form-select"
                      id="select"
                    >
                      <option value="mm" selected disabled>
                        Select Location
                      </option>
                      {locations.map((item) => {
                        return (
                          <option value={item.location_id}>
                            {item.name},{item.city}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="cost">
                    <h3>Cost</h3>
                    <div className="rdo">
                      <div>
                        <input
                          type="radio"
                          className="form-check-input"
                          name="s"
                          onChange={() => this.handleCost(1000000, 5000000)}
                        />
                        10lack to 50lack
                      </div>
                      <div>
                        {" "}
                        <input
                          type="radio"
                          className="form-check-input"
                          name="s"
                          onChange={() => this.handleCost(5000000, 10000000)}
                        />{" "}
                        50lack to 1cr
                      </div>
                      <div>
                        {" "}
                        <input
                          type="radio"
                          className="form-check-input"
                          name="s"
                          onChange={() => this.handleCost(10000000, 20000000)}
                        />
                        1cr to 2cr
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="form-check-input"
                          name="s"
                          onChange={() => this.handleCost(20000000, 60000000)}
                        />
                        2cr+
                      </div>
                    </div>
                  </div>

                  <div className="chbx">
                    <h3>Property Type</h3>
                    <div className="check">
                      <div>
                        <input
                          type="radio"
                          className="form-check-input"
                          name="prop"
                          onChange={() => this.handleChnge(1)}
                        />{" "}
                        benglow
                      </div>
                      <div>
                        {" "}
                        <input
                          type="radio"
                          className="form-check-input"
                          name="prop"
                          onChange={() => this.handleChnge(2)}
                        />{" "}
                        Land
                      </div>
                      <div>
                        {" "}
                        <input
                          type="radio"
                          className="form-check-input"
                          name="prop"
                          onChange={() => this.handleChnge(3)}
                        />{" "}
                        milti family residency
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="form-check-input"
                          name="prop"
                          onChange={() => this.handleChnge(4)}
                        />{" "}
                        apartment
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="form-check-input"
                          name="prop"
                          onChange={() => this.handleChnge(5)}
                        />{" "}
                        Shop
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="form-check-input"
                          name="prop"
                          onChange={() => this.handleChnge(6)}
                        />{" "}
                        Single family home
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="cost1">
                    <h3>Sort</h3>
                    <div className="rdo">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sn"
                          onChange={() => this.handleSort(1)}
                        />{" "}
                        Price low to high
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sn"
                          onChange={() => this.handleSort(-1)}
                        />{" "}
                        Price high to low
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>

            <div className="result col-xl-8 col-lg-8 col-md-8 col-sm-10">
              <div className="row d-flex justify-content-center align-items-center">
                {property.length > 0
                  ? property.map((i) => {
                      return (
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 card1" onClick={()=>this.selectProperty(i)}>
                          <div className="upper row">
                            <img
                              src={i.banner}
                              alt="img not found"
                              className="col-xl-3 col-lg-3 col-md-3 col-sm-10"
                            />
                            <div className="content col-xl-9 col-lg-9 col-md-9 col-sm-11">
                              <h1>{i.name}</h1>
                              <h4>{i.location}</h4>
                              <p>{i.Address}</p>
                            </div>
                          </div>

                          <div className="lower">
                            <div className="content">
                              
                              <p>
                                COST: <span>&#8377;{i.min_price}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : <div
                  className="col-xl-11 col-lg-11 col-md-11 col-sm-11 card1"
                  onClick={() => this.selectingRestaurant()}
                >
                  <div className="upper row">
                    <img
                      src=""
                      alt="img not found"
                      className="col-xl-3 col-lg-3 col-md-3 col-sm-10"
                    />
                    <div className="content col-xl-9 col-lg-9 col-md-9 col-sm-11">
                      
                    </div>
                  </div>

                  <div className="lower">
                    <div className="content">
                      Data Not Found
                      <p>
                        COST FOR TWO: <span>&#8377; </span>
                      </p>
                    </div>
                  </div>
                </div>}

                

                {/* <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 card1">
                                    <div className="upper row">
                                        <img src="#" alt="data not found" className="col-xl-3 col-lg-3 col-md-3 col-sm-10" />
                                        <div className="content col-xl-9 col-lg-9 col-md-9 col-sm-11" >
                                            <h1 >No Data Found..</h1>
                                            <h4></h4>
                                            <p></p>
                                        </div>
                                    </div>

                                    <div className="lower">
                                        <div className="content">
                                            <p>CUISINES:</p>
                                            <p>COST FOR TWO: </p>

                                        </div>
                                    </div>
                                </div> */}

                {/* {restaurants.length >0 ?
                                    <div className="card2">
                                    <button id="0">&lt;</button>
                                    {pageCount.map((pageNo) =>{
                                        
                                        return <button id={pageNo} onClick={(e)=>{
                                            this.pageChange(e)
                                        }}>{pageNo}</button>
                                    })}
                                    <button id="-1">&gt;</button>
                                </div> :
                                    null
                                } */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Filter);
