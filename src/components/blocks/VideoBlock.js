import React from "react";

export const VideoBlock = ({data}) => <div className="video"><iframe src={data.src} allowFullScreen/></div>;
