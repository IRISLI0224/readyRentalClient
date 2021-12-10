import Button from '../../../../hoc/Button';
import {
  HeroContainer,
  MainContainer,
  ButtonContainer,
  ImageContainer,
  CenterWrap,
} from '../Container';
import StyledIcon from '../Icon';
import { BoldText, HeaderText, StyledText } from '../Text';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';

const BasicInfo = () => (
  <MainContainer>
    <HeroContainer>
      <HeaderText>10 Quilan Court, Caroline Springs, VIC 3023</HeaderText>
      <CenterWrap>
        <StyledText>
          <CenterWrap>
            <StyledIcon>
              <BiBed />
            </StyledIcon>
            &nbsp;3&nbsp;&nbsp;&nbsp;
            <StyledIcon>
              <BiBath />
            </StyledIcon>
            &nbsp;2&nbsp;&nbsp;&nbsp;
            <StyledIcon>
              <AiOutlineCar />
            </StyledIcon>
            &nbsp;2&nbsp;&nbsp;&nbsp;
          </CenterWrap>
        </StyledText>
        <StyledText>House</StyledText>
      </CenterWrap>
      <BoldText>$430 per week</BoldText>
      <StyledText>Bond $1863</StyledText>
      <ButtonContainer>
        <Button size="200px">Request an inspection</Button>
      </ButtonContainer>
      <StyledText>Available 07 Dec 2021</StyledText>
    </HeroContainer>
    <ImageContainer></ImageContainer>
  </MainContainer>
);

export default BasicInfo;
