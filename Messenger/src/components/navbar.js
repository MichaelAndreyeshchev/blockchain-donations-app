import React from 'react';

class Navbar extends React.Component {
   constructor () {
      super();

      this.state = {
         showMessagePane: false
      }
   }

   openMessagePane() {

   }

   render(){
      return(
         <div class="navbar">
            <button onClick={this.openMessagePane} type="button" id="openContactButton"></button>
         </div>
      );
   }
}
export default Navbar;