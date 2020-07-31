import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

class Wrapper extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />  
            </Provider>
        )
    }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));