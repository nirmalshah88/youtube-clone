import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Avatar } from "@mui/material";

import "./Header.css";

function Header() {
  return (
    <div class="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="logo"
        />
      </div>
      <div className="header__input">
        <input type="text" />
        <SearchSharpIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallSharpIcon />
        <AppsSharpIcon />
        <NotificationsSharpIcon />
        <Avatar alt="avatar" src="ns-logo-black-bg.png" />
      </div>
    </div>
  );
}

export default Header;
