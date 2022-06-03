import { Component } from "react";
import "./NavBar.css"
import Grid from '@material-ui/core/Grid';
import kartolalogo from "../../img/kartola.png" 
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <Grid container className="navbar__main">
                <Grid item xs ={3}>
                    <div className="navbar__leftbar">
                        <img src={kartolalogo} width="40px" className="navbar__logo"></img>
                        <div height="35px" className="neemu">kartola</div> 

                    </div>
                    
                </Grid>
                <Grid item xs ={6}>
                    <div className="navbar__midbar">
                        <input className="navbar__search" type="text" placeholder="Search"/>
                    </div>

                </Grid>
                <Grid item xs ={3}>
                    rightbar
                </Grid>
            </Grid>
          );
    }
}
 
export default NavBar;