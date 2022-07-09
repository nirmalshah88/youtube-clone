import React from "react";
import FilterIcon from "@mui/icons-material/TuneSharp";

import ChannelRow from "./ChannelRow";

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
    </div>
  );
}

export default SearchPage;
