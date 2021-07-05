import React, { Component } from 'react'

export class MiniHead extends Component {
    render() {
        return (
            <div className="title text-left text-capitalize">
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default MiniHead
