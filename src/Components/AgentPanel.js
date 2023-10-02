import React from "react";
import axios from "axios";
import { withRouter,Outlet, Link } from "react-router-dom";


// import "./styles/agent.css"

class AgentPanel extends React.Component{
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

        handleDelete = (i)=>{
            console.log(i._id);
            axios
      .delete(`https://real-estate-node-code.vercel.app/delete/${i._id}`)
      .then(() => {
        // Handle the success here, e.g., show a success message
        console.log('Property deleted successfully');
      })
      .catch((error) => {
        // Handle errors here, e.g., show an error message
        console.error('Error deleting property:', error);
      });
           
        }

        handleUpdate = (i)=>{
            console.log(i._id)
            const id = i._id;
            this.props.history.push(`/update?property=${i._id}`);

        }

    render(){
        const {property} = this.state;
        return(
            <>
                <div id="Agent" className="agent1">
                    <div className="container row contentD">
                    <h2>All Data Update or Delete Data</h2>
                       <Link className="nav-link" to="/addData1"> <span className="addData">+Add Data</span></Link>

                        {property.map((i)=>{
                            return(<>
                                <div className="col-xl-12 col-lg-12 col-md-11 col-sm-11 bx101" >
                                    <img src={i.banner} style={{"width":"50px","height":"50px"}}></img>
                                    <h5>Name:{i.name}</h5>
                                    <h5>Address:{i.Address}</h5>
                                    <h5>Price:{i.min_price}</h5>
                                    <h5>Location:{i.location},{i.city}</h5>
                                    <h6>Contact:{i.contact_number}</h6>
                                    <div><button value={i._id} className="btn btn-secondary" onClick={()=>this.handleUpdate(i)} style={{"marginRight":"10px"}}>update</button>
                                    <button value={i._id} className="btn btn-secondary" onClick={()=>this.handleDelete(i)}>delete</button>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default AgentPanel;