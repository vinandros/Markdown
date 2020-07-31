import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Previewer extends Component {
    render() {
        return (
            <div>
                <h2>Previewer</h2>
                <p>hi</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Previewer)
