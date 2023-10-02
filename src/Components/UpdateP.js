import React from "react";
import queryString from "query-string";
import axios from "axios";
import "./styles/agent.css"

class UpdateP extends React.Component{
    constructor(){
        super();
        this.state={
            property:[],
            name:"",
            Address:"",
            contact_number:"",
            min_price:"",
            city:"",
        }
    }


    componentDidMount = async ()=>{
        const qs = queryString.parse(this.props.location.search);
        const {property}=qs;
        console.log(property)

        const result = await axios({
            method: "GET",
            url: `http://localhost:8050/propertyById/${property}`,
            headers: { "Content-Type": "application/json" },
          });
  
          this.setState({property:result.data.property})

    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(event.target.value)
      };

      handleSubmit = async (event) => {
        event.preventDefault();
    
        const qs = queryString.parse(this.props.location.search);
        const {property}=qs;
        const updatedData = {
          name: this.state.name,
          city: this.state.city,
          Address:this.state.Address,
          contact_number:this.state.contact_number,
          min_price:this.state.min_price
        };

        axios
        .put(`http://localhost:8050/update/${property}`, updatedData)
        .then((response) => {
          
          console.log('Property updated:', response.data);
        })
        .catch((error) => {
          console.error('Error updating property:', error);
        });

    }


    render(){
        const {property} = this.state;
        // console.log(property)
        return(
            <>
                <div id="update" className="container d-flex justify-content-center align-items-center" style={{"width":"100%","minHeight":"100vh"}}>
                    <div className="updateForm">
                    <h2>Update Property</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="inpt"
              value={this.state.name}
              placeholder={property.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              className="inpt"
              value={this.state.city}
              placeholder={property.city}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Contact No:</label>
            <input
              type="text"
              name="contact_number"
              className="inpt"
              value={this.state.contact_number}
              placeholder={property.contact_number}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="text"
              name="min_price"
              value={this.state.min_price}
              className="inpt"
              placeholder={property.min_price}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="Address"
              value={this.state.Address}
              placeholder={property.Address}
              className="inpt"
              onChange={this.handleInputChange}
            />
          </div>
          {/* Add form fields for other properties */}
          <button className="btn btn-secondary" type="submit">Update</button>
        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default UpdateP;