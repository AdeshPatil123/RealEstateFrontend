import React from "react";
import "./styles/home.css";
import Nav1 from "./Nav1";
import Wallpaper from "./Wallpaper";
import Popular from "./Popular";
import Category from "./Category";
import axios from "axios";


class Home extends React.Component{
    constructor(){
        super();
        this.state={
            location:[],
            propertyType:[]
        }
    }

    componentDidMount(){
        sessionStorage.clear();
        axios({
            method:'GET',
            url:'https://real-estate-node-code.vercel.app/location',
            headers:{'Content-Type':'application/json'}
        })
        .then(response =>{ this.setState({location:response.data.locations})})
        .catch(err => console.log(err))


        axios({
            method:'GET',
            url:'https://real-estate-node-code.vercel.app/category',
            headers:{'Content-Type':'application/json'}
        })
        .then(response =>{ this.setState({propertyType:response.data.category})})
        .catch(err => console.log(err))
    }

    



    render(){
        const {location,propertyType} = this.state;
        return(
            <>
            <Wallpaper locationData={location}/>
            <Category categoryData={propertyType}></Category>
            <Popular ></Popular>


      

      

            </>
        )
    }
}

export default Home;