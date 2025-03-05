import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import ProductCatalogue from "./ProductCatalogue";
import "./studies.css";

function App() {
    return ( <
        Router >
        <
        div className = "container" >
        <
        nav >
        <
        ul >
        <
        li > < NavLink to = "/"
        className = {
            ({ isActive }) => isActive ? "active" : "" } > Login < /NavLink></li >
        <
        li > < NavLink to = "/products"
        className = {
            ({ isActive }) => isActive ? "active" : "" } > Products < /NavLink></li >
        <
        /ul> <
        /nav>

        <
        Routes >
        <
        Route path = "/"
        element = { < Login / > }
        /> <
        Route path = "/products"
        element = { < ProductCatalogue / > }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}

export default App;