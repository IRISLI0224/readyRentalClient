import React from 'react';
import styled from 'styled-components';
import { getAllProperties } from '../../config/Properties';
import img_first from '../../assests/img/Homepage__NewsCard-first.jpeg';
import img_second from '../../assests/img/Homepage__NewsCard-second.png';
import img_third from '../../assests/img/Homepage__NewsCard-third.jpeg';
import SlideCardContainer from '../../components/SlideCardContainer';

const Container = styled.div`
  overflow: hidden;
  height: auto;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
  width: 100%;
`;

const NewsContainer = styled.div`
  overflow: hidden;
  width: 55rem;
  height: 60rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
`;

const NewsCardTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  font-size: 1.3rem;
  color: #333f48;
`;

const PropertyCardTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  font-size: 1.3rem;
  color: #333f48;
  margin-left: 20%;
`;

const NewsCard = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  text-align: left;
  margin-bottom: 60px;
  position: relative;
  &:hover {
    h3 {
      color: #e4002b;
    }
  }
  &:visited {
    color: #fff;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
    opacity: 0;
    z-index: 1;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NewsCardImg = styled.div`
  width: 40%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  src: ${(props) => props.src};
`;

const NewsCardContent = styled.div`
  width: 65%;
  height: 100%;
  padding: 0px 20px 0px 20px;
  line-height: 1.25em;
  h3 {
    margin: 0;
    padding-bottom: 0.4rem;
    line-height: 1.25;
    font-size: 1.5rem;
  }
  span {
    font-size: 0.75em;
    color: #969fa9;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
  }
  p {
    color: #697684;
    font-size: 1em;
    line-height: 1.5;
    margin: 0;
    padding-top: 0.8rem;
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    this.getPropertiesInfo();
  }

  async getPropertiesInfo() {
    this.setState({
      properties: await getAllProperties(),
    });
  }

  render() {
    const { properties } = this.state;
    return (
      <Container>
        {properties.length>0 ? (
          <div>
            <PropertyCardTitle>
              <h2>Recommended Properties </h2>
            </PropertyCardTitle>
            <SlideCardContainer properties={properties}/>
            <br />
          </div>
        ) : null}

        <NewsContainer>
          <NewsCardTitle>
            <h2>Latest Property News</h2>
          </NewsCardTitle>
          <NewsCard>
            <NewsCardImg>
              <Img src={img_first}></Img>
            </NewsCardImg>
            <NewsCardContent>
              <h3>
                Sydney auctions: Records smashed as inner west house sells for nearly $1m over
                reserve
              </h3>
              <span>by Aidan Devine</span>
              <p>
                Inner west suburb Strathfield has a new record house price after a competitive
                auction where a dozen registered bidde...
              </p>
            </NewsCardContent>
            <a href="https://www.realestate.com.au/news/sydney-auctions-records-smashed-as-inner-west-house-sells-for-nearly-1m-over-reserve/?pid=ref-buy-homepage-feature-1">
              Sydney auctions: Records smashed as inner west house sells for nearly $1m over reserve
            </a>
          </NewsCard>
          <NewsCard>
            <NewsCardImg>
              <Img src={img_second}></Img>
            </NewsCardImg>
            <NewsCardContent>
              <h3>
                Sydney auctions: cheaper homes get strong response as fear of missing out gets
                replaced by fear of overpaying
              </h3>
              <span>by Aidan Devine</span>
              <p>
                The fear of missing out defined the mood of buyers at auctions earlier this year,
                but it’s been replaced by a new fea...
              </p>
            </NewsCardContent>
            <a href="https://www.realestate.com.au/news/sydney-auctions-cheaper-homes-get-strong-response-as-fear-of-missing-out-gets-replaced-by-fear-of-overpaying/?pid=ref-buy-homepage-feature-2">
              Sydney auctions: cheaper homes get strong response as fear of missing out gets
              replaced by fear of overpaying
            </a>
          </NewsCard>
          <NewsCard>
            <NewsCardImg>
              <Img src={img_third}></Img>
            </NewsCardImg>
            <NewsCardContent>
              <h3>Netflix series sheds light on major hurdle facing women fleeing violence</h3>
              <span>by Emily Hutchinson</span>
              <p>
                Netflix series Maid shed light on growing issue of housing for women fleeing
                domestic violence.
              </p>
            </NewsCardContent>
            <a href="https://www.realestate.com.au/news/more-spots-in-first-homebuyer-deposit-guarantee-scheme-reissued-by-the-federal-government/?pid=ref-buy-homepage-feature-1">
              Netflix series sheds light on major hurdle facing women fleeing violence
            </a>
          </NewsCard>
        </NewsContainer>
      </Container>
    );
  }
}
export default Home;
