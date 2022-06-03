import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import "./MainPage.css";

class ImageLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="imageLayout__container">
                <div className="imageLayout__imglay">
                    <Avatar className="ImageLayout__img" src={this.props.image}></Avatar>
                </div>
                <div className="imageLayout__text">
                    {this.props.text}
                </div>
            </div>
          );
    }
}
 
export default ImageLayout;