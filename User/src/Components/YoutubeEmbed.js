import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedID }) => (
  <div className="video-responsive">
    <iframe 
    width="100px"
    height="400"
    src={`www.youtube.com/embed/${embedID}`}
    allow="acclerometer; clipboard-write; encryption-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embed Youtube Vedio"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedID: PropTypes.string.isRequired,
};
