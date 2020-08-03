import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Component } from "react";
import './css/styles.scss';

class Wrapper extends Component{
    render(){
        return(
            <App />  
        )
    }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));