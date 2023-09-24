import React from "react";
import CategoryCard from "./CategoryCard";
import "./styles/category.css"

class Category extends React.Component{

    render(){
        const {categoryData} = this.props;
        // console.log(categoryData)
        return(
            <>
                <section class="container" id="category" style={{"marginTop":"40px"}}>
    <h2 style={{"textAlign": "center"}}>Category</h2>
    <h3>Quick Search</h3>
    <div class="container cont1 d-flex justify-content-center align-items-center mt-5 mrb">
      <div class="row g-3 mb-5 d-flex justify-content-center align-items-center">
          
            {categoryData.map((item)=>{
                const {name,propertyType_id,content,image} = item;
                return(
                    <>
                        <CategoryCard categoryData={item}/>
                    </>
                )
            })}
  
      </div>
  </div>
   </section>
            </>
        )
    }
}

export default Category;