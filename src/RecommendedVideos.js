import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="246621"
          timestamp="3 days ago"
          channelImage=""
          channel="Clever Programmer"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="246621"
          timestamp="3 days ago"
          channelImage=""
          channel="Clever Programmer"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="246621"
          timestamp="3 days ago"
          channelImage=""
          channel="Clever Programmer"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="246621"
          timestamp="3 days ago"
          channelImage=""
          channel="Clever Programmer"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
