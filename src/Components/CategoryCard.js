import React from "react";
import { withRouter } from "react-router-dom";

class CategoryCard extends React.Component {


    handleNavigate=(propertyType_id,name)=>{
        const locationId= sessionStorage.getItem("locationID");
        console.log(locationId)
        console.log('hiiii');
        if(locationId){
            this.props.history.push(`/filter?propertyType=${propertyType_id}&name=${name}&location=${locationId}`)
        }else{
            this.props.history.push(`/filter?propertyType=${propertyType_id}&name=${name}`)
        }
    }


  render() {
    const {name,propertyType_id,content,image}=this.props.categoryData;
    return (
      <>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-11" onClick={()=>this.handleNavigate(propertyType_id,name)}>
          <div class="card">
            <img src={image} alt="img" />
            <div class="content2 p-2">
              <h2>{name}</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        
      </>
    );
  }
}

export default withRouter(CategoryCard);
