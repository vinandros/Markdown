import React, { Component } from 'react'
import marked from 'marked';

export class Previewer extends Component {

    render() {
        let { text } = this.props;
        let markedText = marked(text);
        
        return (
            <div id="previewWindows">
                <h4>&nbsp;Preview</h4>
                <div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} />
            </div>
        )
    }
}

export default Previewer;
