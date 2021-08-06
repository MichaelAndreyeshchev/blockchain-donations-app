import React from 'react';

import {ToMessage,FromMessage} from './message.js';

class MessagePane extends React.Component {
   scrollMessages = () => {
      var ms = document.getElementById("messages-container");
      ms.scrollTop = ms.scrollHeight;

   }

   componentDidMount(){
      this.scrollMessages();
   }

   render(){
      return(
         <div id="message-pane-container" className={this.props.show}>
            <div id="message-pane">
               <div id="messages-container">
                  <ToMessage message={"hi"}/>
                  <FromMessage message={"testing hello"}/>
                  <FromMessage message={"abcdef akjsdfklajsdf"}/>
                  <FromMessage message={"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."}/>
                  <ToMessage message={"Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."}/>
               </div>

               <div id="interaction-box">
                  <div id="message-box">
                     <div contentEditable="true" id="message-entry"/>
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