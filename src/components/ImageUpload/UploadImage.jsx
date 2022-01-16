import React, { useState, useRef } from 'react';
import axios from 'axios';
import backendApi from '../../api/backendApi'

async function postImage({ image }) {
  const formData = new FormData();
  formData.append('image', image);

  const result = await backendApi.post('/images', formData);
  return result.data;
}

const UploadImage = ({ setFiles }) => {
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const imageInput = useRef();

  const fileSelected = async (event) => {
    event.preventDefault();
    
    const file = event.target.files[0];
    setFile(file);
    
    let imgSelected = imageInput.current.files;
    for (let i = 0; i < imgSelected.length; i++) {
      const result = await postImage({ image: file });
      setImages([result.image, ...images]);
      setFiles(result.Location);
    }
  };

  return (
    <>
      <div>Please select one or multiple images of the property</div>
      <input onChange={fileSelected} multiple type="file" ref={imageInput} accept="image/*"></input>
    </>
  );
};

export default UploadImage;
