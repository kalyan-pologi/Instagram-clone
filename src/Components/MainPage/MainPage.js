import React, { Component } from "react";
import Post from "../Post/Post";
import uploadImage from "../../images/images/upload.png";
import "./MainPage.css";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: []
    };
  }

  componentDidMount() {
    this.getPost();
  }
  getPost = () => {
    let data = [
      {
        postId: "123456",
        userName: "kalyan",
        postImageURL:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ",
        timeStamp: "12345",
        likes: "1234",
      },
      {
        postId: "123456",
        userName: "kalyan",
        postImageURL:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ",
        timeStamp: "12345",
        likes: "1234",
      },
      {
        postId: "123456",
        userName: "kalyan",
        postImageURL:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ",
        timeStamp: "12345",
        likes: "1234",
      },
      {
        postId: "123456",
        userName: "kalyan",
        postImageURL:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ",
        timeStamp: "12345",
        likes: "1234",
      },
    ];
    this.setState({ postArray: data });
  };
  render() {
    return (
      <div>
        <div className="mainpage__container">
          <div className="mainpage__divider"></div>
          <div className="fileupload">
            <label for="file-upload">
              <img className="mainpage__uploadicon" src={uploadImage} alt="" />
            </label>
            <input id="file-upload" type="file" />
          </div>
          <div className="mainpage__divider"></div>
        </div>
        {this.state.postArray.map((item, index) => 
          <Post
            id={item.postId}
            userName={item.userName}
            postImageURL={item.postImageURL}
            likes={item.likes}
          />
        )}
        {/* <Post
          id="1234"
          userName="kalyan"
          postImageURL="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ"
          likes="324"
        />
        <Post
          id="1234"
          userName="kalyan"
          postImageURL="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwjM1dOqsPj2AhWbQGwGHSHwBqkQMygBegUIARDVAQ"
          likes="324"
        /> */}
      </div>
    );
  }
}
