import React, { useEffect, useState } from 'react';
import BentoGrid from './BentoGrid';

const ImageGallery = () => {
  // Dummy data for images
  const images = [];
  const [imagesToBeSent, setImagesToBeSent] = useState('');
  const [shouldICallBentoGrid, setShouldICallBentoGrid] = useState(false)
  useEffect(()=>{
    for (let i = 1; i <= 21; i++) {
      const image = {
        src: `Images/${i}.jpg`,
        alt: `Image ${i}`,
      };
      images.push(image);
    }
    setImagesToBeSent(images);
  },[])

  useEffect(()=>{
    console.log(imagesToBeSent);
    setShouldICallBentoGrid(true);
  },[imagesToBeSent])

  return (
      shouldICallBentoGrid && <BentoGrid  imagesToBeSent={imagesToBeSent} />
  );
};

export default ImageGallery;