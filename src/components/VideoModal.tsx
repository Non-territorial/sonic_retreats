"use client";

import MuxPlayer from "@mux/mux-player-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  playbackId: string;
  videoTitle: string;
  videoDescription: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  playbackId,
  videoTitle,
  videoDescription,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-black p-4 sm:p-6 md:p-8 rounded-lg max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl sm:text-3xl"
        >
          ×
        </button>
        {/* Video Player and Description Container */}
        <div className="w-full max-w-full">
          <MuxPlayer
            playbackId={playbackId}
            metadataVideoTitle={videoTitle}
            metadataViewerUserId="user-id"
            className="w-full"
            autoPlay
            onEnded={onClose}
            disableCookies
          />
          {/* Description */}
          <div className="mt-4 text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-full break-words">
            {videoDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;