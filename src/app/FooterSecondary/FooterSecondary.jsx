import React from 'react';
import styled from 'styled-components';
import { FaceBook, Twitter, Pinterest, Linkedin, Youtube } from '../../hoc/SocialIconGroup';
import { FaPinterestP, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import Item from './Item';
import FlexWrap from '../../hoc/FlexWrap';

const Container = styled.div`
  width: 100%;
  background-color: #f7f8f9;
  color: #d2d5da;
`;

const FooterNavigation = styled.div`
  height: auto;
  padding-top: 2rem;
  color: #494949;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ListWrap = styled(FlexWrap)`
  @media screen and (max-width: 1024px) {
    padding-top: 0.5rem;
    flex-wrap: wrap;
  }
`;

const FooterContent = styled(Container)`
  width: 60%;
  margin: auto;
  font-family: Museo-Sans-300, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  @media screen and (max-width: 767px) {
    width: 80%;
  } ;
`;

const FooterText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 2rem;
  font-size: 0.775rem;
  p {
    width: 100%;
    color: #5c5c5c;
    margin: 0;
    padding: 0;
    border: 0;
    strong {
      color: #2c2c2c;
    }
    a {
      color: #3d3d3d;
      cursor: pointer;
      text-decoration: none;
    }
    &.stock-info {
      color: #666;
      font-size: 0.8125rem;
      padding-bottom: 2rem;
    }
  }
  &.international-site {
    display: block;
    line-height: 1rem;
    height: auto;
    a {
      padding-right: 10px;
      text-decoration: none;
      color: #585858;
      &:hover {
        color: #fff;
      }
      &::after {
        padding-left: 5px;
        content: ' |';
      }
      &.last__link {
        &::after {
          content: none;
        }
      }
    }
  }
`;

const FooterSecondary = () => (
  <React.Fragment>
    <Container>
      <FooterContent>
        <FooterNavigation>
          <FlexWrap>
            <FaceBook href="https://www.facebook.com/">
              <FaFacebookF />
            </FaceBook>
            <Twitter href="https://twitter.com/">
              <BsTwitter />
            </Twitter>
            <Pinterest href="https://pinterest.com/">
              <FaPinterestP />
            </Pinterest>
            <Linkedin href="https://linkedin.com/">
              <ImLinkedin2 />
            </Linkedin>
            <Youtube href="https://youtube.com/">
              <FaYoutube />
            </Youtube>
          </FlexWrap>
          <ListWrap>
            <Item as="a" href="/">
              About us
            </Item>
            <Item as="a" href="/">
              Legal
            </Item>
            <Item as="a" href="/">
              Privacy
            </Item>
          </ListWrap>
        </FooterNavigation>
        <FooterText className="advertising">
          <p>
            <strong>Personalised advertising: </strong>
            We show you more relevant advertising based on your activity. Prefer us not to?
            <a href="https://www.realestate.com.au/opt-out/"> Opt Out </a>
            of personalisation
          </p>
        </FooterText>
        <FooterText className="international-site">
          <span>
            <span className="title" style={{ color: 'black' }}>
              International sites:
            </span>
            <br />
            <a title="Property for sale and rent in China" href="https://www.myfun.com/">
              China
            </a>
            <a title="Property for sale and rent in Malaysia" href="https://www.iproperty.com.my/">
              Malaysia
            </a>
            <a
              title="Property for sale and rent in Singapore"
              href="https://www.propertyguru.com.sg/"
            >
              Singapore
            </a>
            <a title="Property for sale and rent in Indonesia" href="https://www.rumah.com/">
              Indonesia
            </a>
            <a title="Property for sale and rent in Thailand" href="https://www.ddproperty.com/">
              Thailand
            </a>
            <a title="Property for sale and rent in Vietnam" href="https://batdongsan.com.vn/">
              Vietnam
            </a>
            <a title="Property for sale and rent in India" href="https://housing.com/">
              India
            </a>
            <a
              title="International properties"
              href="https://www.realestate.com.au/international/"
              className="last__link"
            >
              International properties
            </a>
          </span>
        </FooterText>
        <FooterText className="international-site">
          <span className="rui-footer-site-links-large-screen-header" style={{ color: 'black' }}>
            Partner sites:
          </span>
          <br />
          <span className="list list-column">
            <a
              href="https://www.news.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              title="Latest news"
            >
              news.com.au
            </a>
            <a
              href="https://www.foxsports.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              title="Sports news"
            >
              foxsports.com.au
            </a>
            <a
              href="https://www.homeguru.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              title="Home valuations"
            >
              homeguru.com.au
            </a>
            <a
              href="https://www.realestate.co.nz/?arcn&amp;rsf=globalnav"
              target="_blank"
              rel="noopener noreferrer"
              title="Property for sale and rent in New Zealand"
            >
              realestate.co.nz
            </a>
            <a
              href="https://www.mansionglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="mansionglobal.com"
            >
              mansionglobal.com
            </a>
            <a
              href="https://askizzy.org.au"
              target="_blank"
              rel="noopener noreferrer"
              title="Ask Izzy: The A to Z directory of homeless help"
            >
              askizzy.org.au
            </a>
            <a
              href="https://www.homeimprovementpages.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              title="hipages.com.au"
            >
              hipages.com.au
            </a>
            <a
              href="https://www.makaan.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="makaan.com"
            >
              makaan.com
            </a>
            <a
              href="https://www.proptiger.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="proptiger.com"
            >
              proptiger.com
            </a>
            <a
              href="https://thinkofliving.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="thinkofliving.com"
              className="last__link"
            >
              thinkofliving.com
            </a>
          </span>
        </FooterText>
        <FooterText>
          <p className="stock-info">
            Ready Rental is owned and operated by Ready Rental
            <span>?? Ready Rental.</span>
          </p>
        </FooterText>
      </FooterContent>
    </Container>
  </React.Fragment>
);

export default FooterSecondary;
