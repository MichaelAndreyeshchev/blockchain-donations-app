import React from 'react';

export class FromMessage extends React.Component {
    render() {
        return(
            <div className="from-container">
                <div className="from">{this.props.message}</div>
            </div>
        );
    }
}

export class ToMessage extends React.Component {
    render() {
        return(
            <div className="to-container">
                <div className="to">{this.props.message}</div>
            </div>
        );
    }
}
