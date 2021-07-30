import React from 'react';

class Navbar extends React.Component {
   click = () => {
      this.props.toggleMobileView();
   }

   render(){

      return(
         <div class="navbar">
            <button onClick={this.click} type="button" id="openContactButton"></button>
         </div>
      );
   }
}
export default Navbar;