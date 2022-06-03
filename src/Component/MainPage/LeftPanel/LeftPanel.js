import React, { Component } from 'react';
import "./LeftPanel.css";
import ImageLayout from '../ImageLayout';


import profile from '../../../img/profile.png';
import mailbox from '../../../img/mailbox.png';
import groups from '../../../img/groups.png';
import message from '../../../img/message.png';
import friend from '../../../img/friend.png';

class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    getData=() => {
        let jsondata = [
            {
                "image": message,
                "text": "Message"
        },
            {
            "image": groups,
            "text": "Groups"
        },
        {
            "image": friend,
            "text": "Friends"
        }
    ];
        this.setState({data : jsondata});
    }

    componentDidMount(){
        this.getData();
    }

    render() { 
        return ( 
            <div>
                <ImageLayout image={profile} text="Profile"/>
                <ImageLayout image={mailbox} text="MailBox"/>
                <hr className="border"></hr>
                {
                this.state.data.map( (item) =>(
                    <ImageLayout image={item.image} text={item.text}/>
                ))
                }
            </div>
         );
    }
}
 
export default LeftPanel;