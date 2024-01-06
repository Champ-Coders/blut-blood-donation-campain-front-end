import config from '@/config/config';
import { useState } from 'react';

export const uploadImageBB = async (imageFile:any) => {
    // console.log(imageFile);
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const url = config.imageBbKey;
    //   console.log(url);

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const imageData = await response.json();
    //   console.log(imageData);

      if (imageData?.success) {
        return imageData?.data?.url
      } else {
        return'Image upload failed. Please try again.'
      }
    } catch (error) {
      return'An error occurred during image upload'
    }
  };


