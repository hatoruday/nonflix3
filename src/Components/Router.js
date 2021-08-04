import React from "react";
import { BrowserRouter  as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "./Header";
const erouter = () => (
    <Router>
        <Header/>   
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/Search" component = {Search}/>
            <Route path = "/TV" component = {TV}/>
            <Route path = "/movie/:id" component = {Detail}/>
            <Route path = "/tv/:id" component = {Detail}/>
            <Redirect excat from = "*" to = "/"/>
        </Switch>
    </Router>
)

export default erouter;