import React from "react";
import FilterIcon from "@mui/icons-material/TuneSharp";

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <FilterIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming tutorials here"
        verified
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training... check this out"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with REACT JS"
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj"
      />
    </div>
  );
}

export default SearchPage;
