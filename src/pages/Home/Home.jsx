import React from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
import { getAllProperties } from '../../config/Properties';
import img_first from '../../assests/img/Homepage__NewsCard-first.jpeg';
import img_second from '../../assests/img/Homepage__NewsCard-second.png';
import img_third from '../../assests/img/Homepage__NewsCard-third.jpeg';
import SlideCardContainer from '../../components/SlideCardContainer';
import { RRColors } from '../../utils/constants';
import {
  NewsContainer,
  NewsCardTitle,
  NewsCard,
  NewsCardImg,
  Img,
  NewsCardContent,
} from './components/Container';
import SearchForm from './components/SearchForm';
import WhyChooseUs from './components/WhyChooseUs';
import ExploreOurProperties from './components/ExploreOurProperties';

import SmallPropertyCard from '../../components/SmallPropertyCard';
//import SlideCard from '../../components/SlideCard';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const Container = styled.div`
  //overflow: hidden;
  width: 60%;
  height: auto;
  margin: auto;
  background-color: #fff;
  text-align: center;
  width: 100%;
  Form {
    padding-bottom: 80px;
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const PropertyBack = styled.div`
  height: 15rem;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-image: linear-gradient(#f8f8f8, #ffffff);
  text-align: center;
  padding: 40px 0;
  width: 100%;
`;

const PropertyContainer = styled.div`
  height: 15rem;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-image: linear-gradient(#ffffff, #ffffff);
  text-align: center;
  padding: 40px 0;
  width: 60%;
  opacity: 80%;
`;

const PropertyCardTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  font-size: 1.3rem;
  color: props.theme.footerBlue;
  margin-left: 20%;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      filterText: '',
      type: '',
      bedMin: '',
      bedMax: '',
      priceMin: '',
      priceMax: '',
    };
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onBedMinChange = this.onBedMinChange.bind(this);
    this.onBedMaxChange = this.onBedMaxChange.bind(this);
    this.onPriceMinChange = this.onPriceMinChange.bind(this);
    this.onPriceMaxChange = this.onPriceMaxChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  onFilterTextChange(filterText) {
    this.setState({
      filterText,
    });
  }
  onTypeChange(type) {
    this.setState({
      type,
    });
  }
  onBedMinChange(bedMin) {
    this.setState({
      bedMin,
    });
  }
  onBedMaxChange(bedMax) {
    this.setState({
      bedMax,
    });
  }
  onPriceMinChange(priceMin) {
    this.setState({
      priceMin,
    });
  }
  onPriceMaxChange(priceMax) {
    this.setState({
      priceMax,
    });
  }

  clearInput = () => {
    this.setState({
      filterText: '',
      type: '',
      bedMin: '',
      bedMax: '',
      priceMin: '',
      priceMax: '',
    });
  };

  componentDidMount() {
    this.getPropertiesInfo();
  }

  async getPropertiesInfo() {
    this.setState({
      properties: await getAllProperties(),
    });
  }

  render() {
    const { properties, filterText, type, bedMin, bedMax, priceMin, priceMax } = this.state;
    return (
      <Container>
        <WhyChooseUs />
        <ExploreOurProperties />
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
        {properties.length > 0 ? (
          <div>
            <SlideCardContainer properties={properties} />
            <br />
          </div>
        ) : null}
        <SearchForm
          filterText={filterText}
          type={type}
          bedMin={bedMin}
          bedMax={bedMax}
          priceMin={priceMin}
          priceMax={priceMax}
          onFilterTextChange={this.onFilterTextChange}
          onTypeChange={this.onTypeChange}
          onBedMinChange={this.onBedMinChange}
          onBedMaxChange={this.onBedMaxChange}
          onPriceMinChange={this.onPriceMinChange}
          onPriceMaxChange={this.onPriceMaxChange}
          clearInput={this.clearInput}
        ></SearchForm>
      </Container>
    );
  }
}
export default Home;
