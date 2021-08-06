import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <button className="contact">
                <div className="displayname">{this.props.displayName}</div>
                <div className="charityMessage">{this.props.lastMessage}</div>
            </button>
        );
    }
}

export default Contact;