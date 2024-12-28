import React, { useEffect } from "react";

const InstagramEmbed = ({ reelUrl }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={reelUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "99.375%",
        }}
      />
    </div>
  );
};

export default InstagramEmbed;
