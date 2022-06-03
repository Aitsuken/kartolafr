import React, { Component } from 'react';
import "./MainPage.css";
import { Grid } from '@material-ui/core';
import LeftPanel from './LeftPanel/LeftPanel';
class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="mainpage__container">
                <Grid container >
                    <Grid item xs={3}>
                        < LeftPanel />
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={3}>
                        right
                    </Grid>
                </Grid>
            </div>
          );
    }
}
 
export default Layout;