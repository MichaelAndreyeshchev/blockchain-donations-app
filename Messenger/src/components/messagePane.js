import React from 'react';

class MessagePane extends React.Component {
   render(){
      return(
         <div id="message-pane-container" class={this.props.show}>
            <div id="message-pane">
               <div id="interaction-box">
                  <div id="message-box">
                     <div contenteditable="true" id="message-entry"/>
                  </div>
                  <div id="interaction-box-menu">
                     <div id="interaction-box-menu-row">
                        <button id="send-message-button"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
export default MessagePane;