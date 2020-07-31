import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Editor extends Component {
    render() {
        return (
            <div>
                <h2>Editor</h2>
                <textarea name="" id="" cols="100" rows="10"></textarea>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
