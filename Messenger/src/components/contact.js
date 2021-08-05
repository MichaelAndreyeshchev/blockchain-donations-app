import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <button class="contact">
                <div class="displayname">{this.props.displayName}</div>
                <div class="message">{this.props.lastMessage}</div>
            </button>
        );
    }
}

export default Contact;