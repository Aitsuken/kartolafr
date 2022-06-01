import { Component } from "react";
import "./NavBar.css"
import Grid from '@material-ui/core/Grid';
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <Grid container>
                <Grid item xs ={3}>
                    sidebar
                </Grid>
                <Grid item xs ={6}>
                    mainbar
                </Grid>
                <Grid item xs ={3}>
                    rightbar
                </Grid>
            </Grid>
          );
    }
}
 
export default NavBar;