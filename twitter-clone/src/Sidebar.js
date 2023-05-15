import React from 'react';
import "./Sidebar.css"

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArticleIcon from '@mui/icons-material/Article';
import  {Button}  from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebaroptions from './Sidebaroptions';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twittericon" />
      <Sidebaroptions active Icon={HomeIcon} text="Home" />
      <Sidebaroptions Icon={SearchIcon} text="Explore" />
      <Sidebaroptions Icon={NotificationsIcon} text="Notification" />
      <Sidebaroptions Icon={MessageIcon} text="Messages" />
      <Sidebaroptions Icon={BookmarkIcon} text="Bookmarks" />
      <Sidebaroptions Icon={ArticleIcon} text="Lists" />
      <Sidebaroptions Icon={AccountCircleIcon} text="Profile" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}


