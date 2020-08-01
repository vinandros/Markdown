import React, { Component } from 'react'
import marked from 'marked';

export class Previewer extends Component {

    render() {
        let { text } = this.props;
        let markedText = marked(text);
        
        return (
            <div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} />
        )
    }
}

export default Previewer;
