import React, { Component } from 'react'

export class Editor extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div id="editorWindows">
                <h4>&nbsp;Editor</h4>
                <textarea onChange={this.props.onChange} value={this.props.value} name="" id="editor" cols="100" rows="10"></textarea>
            </div>
        )
    }
}

export default Editor;
