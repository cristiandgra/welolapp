import React from "react";

export const InitialVideo = () => {
  return (
    <div className="homevideo">
      <iframe
        title="LolHomeVideo"
        frameBorder="2"
        autoplay="1"
        width="1080"
        height="413"
        src="https://www.youtube.com/embed/aR-KAldshAE?autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
