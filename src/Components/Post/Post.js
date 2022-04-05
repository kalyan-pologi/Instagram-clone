import React, { Component } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import postImageURL from "../../images/images/post.jpg";
import love from "../../images/images/love.svg";
import comment from "../../images/images/comment.svg";
import share from "../../images/images/share.svg";
import imageSrc1 from "../../images/images/pp1.png";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList:[]
    };
  }
  componentDidMount(){
    this.getComment();
  }
getComment = () =>{
  let data = [
    {
      userName: "kalyan",
      commentId: "123",
      timeStamp: "12345",
      description: "comment 1",
     
      likes: "100",
    },
    {
      userName: "poloji",
      commentId: "1234",
      timeStamp: "123456",
      description: "comment 2",
      likes: "200",
    },
  ];
  this.setState( {commentList: data} )
}



  render() {
    return (
      <div className="post_container">
        {/* header */}
        <div className="post_header">
          <Avatar className="post_image" src={imageSrc1} />
          <div className="post_username">kalyan</div>
          {/* <div className="post_username">{this.state.userName}</div> */}
        </div>
        {/* image */}
        <div>
          <img
            className=""
            // src={this.state.postImageURL}
            src={postImageURL}
            width="625px"
            height="450px"
            alt=""
          ></img>
        </div>
        {/* analytics */}
        <div>
          <div style={{ marginLeft: "10px" }}>
            <img className="post_reactimage" src={love} alt=""></img>
            <img className="post_reactimage" src={comment} alt=""></img>
            <img className="post_reactimage" src={share} alt=""></img>
          </div>
          <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
            {/* {this.state.likes} likes */}
            100 likes
          </div>
        </div>
        {/* comment session */}
        {/* <div>
          <div className="post_comment">hello comment</div>
          <div className="post_comment">hello comment</div>
          <div className="post_comment">hello comment</div>
          <div className="post_comment">hello comment</div>
          <input
            type="text"
            className="post_commentbox"
            placeholder="Add a comment..."
          ></input>
        </div> */}
        <div>
          {this.state.commentList.map((item, index) =>
            index < 4 ? (
              <div className="post_comment">
                {item.userName}: {item.description}
              </div>
            ) : (
              <span></span>
            )
          )}
          <input
            text="text"
            className="post_commentbox"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    );
  }
}
