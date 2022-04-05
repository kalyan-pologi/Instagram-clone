import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import "./StatusBar.css"
//import statusimg from "../../images/images/pp1.png"
import uploadImage from "../../images/images/upload.png";

export default class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        statusList: []
    };
  }
  componentDidMount(){
      this.getData();
  }
  getData = () =>{
      let data = [
        {
          userName: "kalyan",
          imageURL: "../../images/images/pp1.png",
        },
        {
          userName: "poloji",
          imageURL: "../../images/images/pp1.png",
        },
        {
          userName: "pawan",
          imageURL: "../../images/images/pp1.png",
        },
        {
          userName: "darshana",
          imageURL: "../../images/images/pp1.png",
        },
        {
          userName: "selva",
          imageURL: "../../images/images/pp1.png",
        },
        {
          userName: "sweety",
          imageURL: "../../images/images/pp1.png",
        },
        {
          userName: "yakshith",
          imageURL: "../../images/images/pp1.png",
        },
      ];
      this.setState({statusList: data});
  }
  
  render() {

    return (
      <div className="statusbar_container">
        <div className="fileupload">
          <label for="file-upload-status">
            <img
              className="statusbar__upload"
              src={uploadImage}
              width="55px"
              height="55px"
            alt=''/>
          </label>
          <input
            id="file-upload-status"
            type="file"
          />
        </div>
        {this.state.statusList.map((item, index) => {
          return (
            <div className="status">
              <Avatar src={item.imageURL} className="statusbar_status"></Avatar>
              <div className="statusbar_text">{item.userName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
