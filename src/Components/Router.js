import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Filter from "./Filter";
import Details from "./Details";
import AgentPanel from "./AgentPanel";
import CreateP from "./CreateP";
import UpdateP from "./UpdateP";
import Nav1 from "./Nav1";
import AddData1 from "./AddData1";


function Router (){
    return(
        <BrowserRouter>
        <Route path="*" component={Nav1} />
            <Route exact path="/" component={Home}/>
            <Route path="/filter" component={Filter}/>
            <Route path="/detail" component={Details}/>
            <Route path="/agent" component={AgentPanel}/>
            <Route path="/create" component={CreateP}/>
            <Route path="/update" component={UpdateP}/>
            <Route path="/addData1" component={AddData1}/>




        </BrowserRouter>
    )
}

export default Router;