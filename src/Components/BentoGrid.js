
import React, { useState, useEffect } from 'react';

const BentoGrid = ({ imagesToBeSent }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleLoad = (index, width, height) => {
      setLoadedImages((prevImages) => [
        ...prevImages,
        { index, width, height },
      ]);
    };

    imagesToBeSent.forEach((image, index) => {
      const img = new Image();
      img.onload = () => handleLoad(index, img.width, img.height);
      img.src = image.src;
    });
  }, [imagesToBeSent]);

  const calculateSize = (originalWidth, originalHeight) => {
    const targetWidth = originalWidth / 5; // Set your desired target width here
    const targetHeight = originalHeight / 5;

    return {
      width: Math.ceil(targetWidth),
      height: Math.ceil(targetHeight),
    };
  };

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <h1 className="text-3xl text-gray-800 font-semibold pt-56 ">
    Image Gallery
  </h1>
    <div className="max-w-screen-lg mx-auto flex flex-wrap gap-4 justify-center items-center relative -z-10">

      {imagesToBeSent.map((image, index) => {
        const loadedImage = loadedImages.find((img) => img.index === index);

        if (!loadedImage) {
          return null; // Skip rendering until image is loaded
        }

        const size = calculateSize(loadedImage.width, loadedImage.height);

        return (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg"
            style={{
              flex: '0 0 auto',
              maxWidth: `${size.width}px`,
              height: `${size.height}px`,
              marginBottom: '1rem',
            }}
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {selectedImage !== null && (
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={imagesToBeSent[selectedImage].src}
              alt={imagesToBeSent[selectedImage].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default BentoGrid;












