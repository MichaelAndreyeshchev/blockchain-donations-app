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
         <div id="page">
            <Navbar toggleMobileView = {this.toggleOnlyMessagePane} />
            <div id="container">
               {
                  this.state.mobileMessagePaneToggle ? (
                     /*for mobile*/
                     <>
                        <ContactPane show={"flexHide"}/>
                        <MessagePane show={""}/>
                     </>
                  ) : (
                     <>
                        <ContactPane show={""}/>
                        <MessagePane show={"flexHide"}/>
                     </>
                  )
               }
            </div>
         </div>

      );
   }
}
export default BasePage;