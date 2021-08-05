import React from 'react';

class Navbar extends React.Component {
   click = () => {
      this.props.toggleMobileView();
   }

   render(){

      return(
         <div id="navbar">
            <button onClick={this.click} type="button" id="open-contact-button"></button>
         </div>
      );
   }
}
export default Navbar;