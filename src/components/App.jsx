import React from "react";
import Editor from "./Editor.jsx";
import Previewer from "./Previewer.jsx";

class App extends React.Component{
    render(){
        return ( 
            <div>
                <Editor />
                <Previewer />
            </div>
        );
    };
}

export default App;