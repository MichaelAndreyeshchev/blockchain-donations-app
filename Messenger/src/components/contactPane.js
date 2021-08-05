import React from 'react';
import Contact from './contact.js';

class ContactPane extends React.Component {
   render(){
      return(
         <div id="contact-pane-container" className={this.props.show}>
            <div id="contact-pane">
               <Contact displayName="Best charity" lastMessage="You: Hello testing one two three this is a very good message"/>
            </div>
         </div>
      );
   }
}

export default ContactPane;