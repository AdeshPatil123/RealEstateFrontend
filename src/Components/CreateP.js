import React from "react";
import axios from "axios";
import "./styles/home.css";
import { withRouter } from "react-router-dom";

class CreateP extends React.Component{
    constructor(){
        super()
        this.state={
            property:[]
        }
    }

    componentDidMount = async ()=>{
        const result = await axios({
            method: "GET",
            url: `https://real-estate-node-code.vercel.app/fetch`,
            headers: { "Content-Type": "application/json" },
          });
          this.setState({property:result.data.Data})
          console.log(result.data.Data)
        }

        selectProperty =  (i)=>{
            console.log('detail')
            this.props.history.push(`/detail?property=${i._id}`);
        }



    render(){
        const {property} = this.state;
        console.log(property)
        return(
            <>
                <div className="container-fluid">
                    <div className="container">
                    <h1 style={{"textAlign":"center","marginTop":"10px"}}>All Properties</h1>
            
                        <div className="row d-flex justify-content-center align-items-center">
                        {property.map((i)=>{
                            return(
                                <>
                                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-9 box12">
                                        <img src={i.banner}></img>
                                        <h4>{i.name}</h4>
                                        <h5>{i.Address}</h5>
                                        <h5>&#8377;{i.min_price}/.</h5>
                                        <button className="btn btn-primary" onClick={()=>this.selectProperty(i)}>Read more</button>
                                    </div>
                                </>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default  withRouter(CreateP);