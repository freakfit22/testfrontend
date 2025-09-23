import React from "react";

// Frame component for the video clip
function VideoFrame({ src, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-2xl mx-4 my-8 bg-[#181818] rounded-xl shadow-2xl flex items-center justify-center">
        <button
          className="absolute top-3 right-3 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 z-10"
          onClick={onClose}
        >
          &times;
        </button>
        <video
          src={src}
          controls
          autoPlay
          className="rounded-lg max-h-[70vh] max-w-full object-contain"
          style={{ aspectRatio: "16/9" }}
        />
      </div>
    </div>
  );
}

export default VideoFrame;
