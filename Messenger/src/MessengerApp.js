import React from 'react';
import MessagePane from './components/messagePane.js';
import ContactPane from './components/contactPane.js';
import Navbar from './components/navbar.js'

class BasePage extends React.Component {

   constructor () {
      super();
      this.toggleMessagePane = this.toggleOnlyMessagePane.bind(this);

      this.state = {
         mobileMessagePaneToggle: false
      }

   }

   toggleOnlyMessagePane = () => {
      this.setState({mobileMessagePaneToggle: !this.state.mobileMessagePaneToggle});
   }

   render(){
      return(
         <div class="page">
            <div class="navbar">
               <Navbar toggleMobileView = {this.toggleOnlyMessagePane} />
            </div>
            <div class="container">
               {
                  this.state.mobileMessagePaneToggle ? (
                     /*for mobile*/
                     <>
                        <ContactPane showId={"contactPaneHide"}/>
                        <MessagePane/>
                     </>
                  ) : (
                     <>
                        <ContactPane showId={"contactPageShow"}/>
                        <MessagePane/>
                     </>
                  )
               }
            </div>
         </div>

      );
   }
}
export default BasePage;