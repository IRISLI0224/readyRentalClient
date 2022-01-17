import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import notvisibleIcon from '../../assests/img/notvisibility.png';
import visibleIcon from '../../assests/img/visibility.png';

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 0 15px;
  height: 50px;
  border-radius: none;
  border: 2px solid #e5e8ec;
  display: flex;
  width: ${(props) => props.size};
  height: ${(props) => props.height};
`;

const InputField = styled.input`
  border-radius: none;
  background-color: rgb(255, 255, 255);
  padding: 0 15px;
  height: 40px;
  border: none;
  outline: none;
  flex-grow: 1;
`;

const IconLeft = styled.img`
  margin-top: 11px;
  width: 20px;
  height: 20px;
`;
const PasswordHidden = styled.img`
  margin-top: 11px;
  width: 20px;
  height: 20px;
`;

const Input = ({
  defaultText,
  iconleft,
  hidden,
  size,
  onChange,
  onBlur,
  value,
  type,
  id,
  name,
  error,
  height,
}) => {
  const [Visible, setVisible] = useState(notvisibleIcon);
  const [PasswordType, setPasswordType] = useState(type);
  return (
    <Container className="Input container" size={size} height={height}>
      {iconleft ? <IconLeft className="Input left img" src={iconleft}></IconLeft> : null}
      <InputField
        placeholder={defaultText}
        size={size}
        onChange={onChange}
        onBlur={onBlur}
        type={PasswordType}
        id={id}
        name={name}
        error={error}
        height={height}
      />
      {hidden ? (
        <PasswordHidden
          src={Visible}
          onClick={() => {
            if (Visible == visibleIcon) {
              setVisible(notvisibleIcon);
              setPasswordType('password');
            } else {
              setVisible(visibleIcon);
              setPasswordType('string');
            }
          }}
        />
      ) : null}
    </Container>
  );
};

export default Input;
