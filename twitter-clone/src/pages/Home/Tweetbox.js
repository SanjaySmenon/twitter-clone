import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
// var user = firebase.auth().currentUser;
// var email;
// if (user) {
//   email = user.email;
// }
function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "sanjay",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName: firebase.auth().currentUser.email,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://4kwallpapers.com/images/wallpapers/itachi-uchiha-naruto-black-background-minimal-art-amoled-2560x2560-4942.png",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://4kwallpapers.com/images/wallpapers/itachi-uchiha-naruto-black-background-minimal-art-amoled-2560x2560-4942.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="whats happening?!"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__inputimg"
          placeholder="Enter image URL"
          type="text"
        />
        <button onClick={sendTweet} type="submit">
          Tweet
        </button>
      </form>
    </div>
  );
}

export default Tweetbox;
