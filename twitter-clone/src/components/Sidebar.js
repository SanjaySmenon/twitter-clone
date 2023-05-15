import React from "react";
import "./Sidebar.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArticleIcon from "@mui/icons-material/Article";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebaroptions from "./Sidebaroptions";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twittericon" />
      <Sidebaroptions Icon={LoginIcon} text="Login" path="/login" />
      <Sidebaroptions active Icon={HomeIcon} text="Home" path="/" />
      <Sidebaroptions Icon={SearchIcon} text="Explore" path="/explore" />
      <Sidebaroptions
        Icon={NotificationsIcon}
        text="Notification"
        path="/notifications"
      />
      <Sidebaroptions Icon={MessageIcon} text="Messages" path="/messages" />
      <Sidebaroptions Icon={BookmarkIcon} text="Bookmarks" path="/bookmarks" />
      <Sidebaroptions Icon={ArticleIcon} text="Lists" path="/lists" />
      <Sidebaroptions Icon={AccountCircleIcon} text="Profile" path="/profile" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}
