import React from 'react';
import MessagePane from './components/messagePane.js';
import ContactPane from './components/contactPane.js';
import Navbar from './components/navbar.js'

class BasePage extends React.Component {
   render(){
      return(
         <div class="page">
            <div class="navbar">
               <Navbar/>
            </div>
            <div class="container">
               <ContactPane/>
               <MessagePane/>
            </div>
         </div>
      );
   }
}
export default BasePage;