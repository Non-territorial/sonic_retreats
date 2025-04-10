"use client";

import MuxPlayer from "@mux/mux-player-react";

const Video: React.FC<{ playbackId: string }> = ({ playbackId }) => {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId={playbackId}
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
};

export default Video;