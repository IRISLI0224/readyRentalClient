import React from 'react';
import { FlexWrap, BodyContainer, DescItem, VerticalMargin } from '../Container';
import { BoldText, StyledText } from '../Text';
import StyledIcon from '../Icon';
import { MdOutlineGarage } from 'react-icons/md';

const Description = () => (
  <>
    <BodyContainer direction="column">
      <DescItem>
        <BoldText>Ideal Family Home</BoldText>
        <StyledText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem adipisci laborum
          ratione, voluptatibus nemo harum possimus nesciunt sequi aliquam veritatis autem ab
          reiciendis qui ipsa dolor. Vitae pariatur, vero sint voluptate consequatur laborum
          veritatis hic aspernatur error alias soluta quia neque, dolorum ipsa commodi laboriosam
          repudiandae? Voluptatum consequuntur alias libero. Assumenda ipsam architecto fugit.
          Eveniet veniam atque laudantium doloribus aliquid facilis recusandae numquam. Nobis
          assumenda repellendus nesciunt cum sapiente excepturi consequuntur tempora, provident
          debitis non magnam nam sed reprehenderit dicta, itaque optio quam minima. Esse assumenda
          deleniti illo molestias omnis quidem atque temporibus animi! Accusantium debitis obcaecati
          optio animi! Labore!
        </StyledText>
      </DescItem>
      <DescItem>
        <BoldText>Property Features</BoldText>
        <VerticalMargin margin="1rem">
          <FlexWrap direction="row">
            <StyledIcon primary>
              <MdOutlineGarage />
            </StyledIcon>
            <StyledText>
              &nbsp;Garage spaces: <b>2</b>
            </StyledText>
          </FlexWrap>
        </VerticalMargin>
      </DescItem>
    </BodyContainer>
  </>
);

export default Description;
