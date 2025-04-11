"use client";

import MuxPlayer from "@mux/mux-player-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  playbackId: string;
  videoTitle: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  playbackId,
  videoTitle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-black p-4 rounded-lg max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          ×
        </button>
        {/* Video Player */}
        <MuxPlayer
          playbackId={playbackId}
          metadataVideoTitle={videoTitle}
          metadataViewerUserId="user-id"
          className="w-full"
          autoPlay
          onEnded={onClose} // Close the modal when the video ends
          disableCookies
        />
      </div>
    </div>
  );
};

export default VideoModal;