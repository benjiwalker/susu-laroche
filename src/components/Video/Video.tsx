import React from "react";
import * as S from "../Video/Video.styles";
import Vimeo from "@u-wave/react-vimeo";
import YouTube from "react-youtube";
import getVideoId from "get-video-id";

const opts = {
  width: "100%",
};

const Video = ({ src }: { src: string }) => {
  let iframe;

  const { id, service } = getVideoId(src);

  if (id && service === "vimeo") {
    iframe = <Vimeo video={id} responsive />;
  } else if (id && service === "youtube") {
    iframe = <YouTube opts={opts} videoId={id} />;
  }

  return <S.Video>{iframe}</S.Video>;
};

export default Video;
