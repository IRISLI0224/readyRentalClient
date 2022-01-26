import React, { useState, useRef } from 'react';
import backendApi from '../../api/backendApi';
import styled from 'styled-components';

const StyledInput = styled.div`
  margin-bottom: 1rem;
`;

async function postImage({ image }) {
  const formData = new FormData();
  formData.append('image', image);

  const result = await backendApi.post('/images', formData);
  return result.data;
}

const UploadImage = (setFiles) => {
  const [, setFile] = useState();
  const imageInput = useRef();

  const fileSelected = async (event) => {
    event.preventDefault();

    let imgSelected = imageInput.current.files;
    for (let i = 0; i < imgSelected.length; i++) {
      const file = event.target.files[i];
      setFile(file);
      const result = await postImage({ image: file });
      setFiles(result.Location);
    }
  };

  return (
    <StyledInput>
      <div>Please select one or multiple images of the property</div>
      <input
        className="form-control"
        onChange={fileSelected}
        multiple
        type="file"
        ref={imageInput}
        accept="image/*"
      ></input>
    </StyledInput>
  );
};

export default UploadImage;
