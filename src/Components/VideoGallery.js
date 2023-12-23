import React, { useState, useEffect } from 'react';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [videoSizes, setVideoSizes] = useState([]);

  useEffect(() => {
    // Generate video file names from 1.mp4 to 27.mp4
    const videoFiles = Array.from({ length: 27 }, (_, index) => `${index + 1}.mp4`);
    setVideos(videoFiles);

    // Fetch video sizes
    const fetchVideoSizes = async () => {
      const sizes = await Promise.all(videoFiles.map(video => getVideoSize(video)));
      setVideoSizes(sizes);
    };

    fetchVideoSizes();
  }, []);

  const calculateSize = (originalWidth, originalHeight) => {
    const targetWidth = originalWidth / 2;
    const targetHeight = originalHeight / 2;

    return {
      maxWidth: `${targetWidth}px`,
      maxHeight: `${targetHeight}px`,
    };
  };

  const getVideoSize = (videoSrc) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.src = `Images/${videoSrc}`;
      video.onloadedmetadata = () => {
        const { videoWidth, videoHeight } = video;
        resolve({ width: videoWidth, height: videoHeight });
      };
      // Handle case where video metadata can't be loaded
      video.onerror = () => resolve({ width: 0, height: 0 });
    });
  };
  return (
    <>
      <h1 className="text-3xl text-gray-800 font-bold pt-56">
        Video Gallery
      </h1>
  
      <div className="max-w-screen-lg mx-auto flex flex-wrap gap-4 justify-center items-center relative">
        {videos.map((video, index) => {
          const { width, height } = videoSizes[index] || {};
          const size = calculateSize(width, height);
  
          return (
            <div
              key={index}
              className="flex-shrink-0 relative cursor-pointer overflow-hidden rounded-lg lg:w-1/4 md:w-1/2 w-full"
              style={{
                margin: '0.5rem', // Adjust the gap between items
                ...size,
              }}
            >
              <video
                src={`Images/${video}`}
                alt={`Video ${index + 1}`}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                onPause={(e) => e.target.load()}
              />
            </div>
          );
        })}
      </div>
    </>
  );
  
  
};

export default VideoGallery;

