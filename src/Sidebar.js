import React from "react";
import {
  HomeSharp,
  WhatshotSharp,
  SubscriptionsSharp,
  ExpandMoreOutlined,
  HistorySharp,
  OndemandVideoSharp,
  ThumbUpAltOutlined,
  VideoLibrarySharp,
  WatchLaterSharp,
} from "@mui/icons-material";

import SidebarRow from "./SidebarRow";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharp} title="Home" />
      <SidebarRow Icon={WhatshotSharp} title="Trending" />
      <SidebarRow Icon={SubscriptionsSharp} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibrarySharp} title="Library" />
      <SidebarRow Icon={HistorySharp} title="History" />
      <SidebarRow Icon={OndemandVideoSharp} title="Your videos" />
      <SidebarRow Icon={WatchLaterSharp} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
