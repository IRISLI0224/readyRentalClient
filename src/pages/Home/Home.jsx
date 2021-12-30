import React from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
import { getAllProperties } from '../../config/properties';
import img_first from '../../assests/img/Homepage__NewsCard-first.jpeg';
import img_second from '../../assests/img/Homepage__NewsCard-second.png';
import img_third from '../../assests/img/Homepage__NewsCard-third.jpeg';
import SlideCardContainer from '../../components/SlideCardContainer';
import { Button } from '../../hoc/Button';
import { SearchOutlined } from '@ant-design/icons';
import {
  NewsContainer,
  NewsCardTitle,
  NewsCard,
  NewsCardImg,
  Img,
  NewsCardContent,
  SearchTitle,
  SearchBar,
  SearchText,
  TypeFilter,
  TypeFilterTitle,
  TypeFilterItem,
  RangeDropDown,
  SubmitSearch,
} from './components/Container';
import Form from 'antd/lib/form/Form';
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
  color: #333f48;
  margin-left: 20%;
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
        {properties.length > 0 ? (
          <div>
            <PropertyCardTitle>
              <h2>Recommended Properties </h2>
            </PropertyCardTitle>
            <SlideCardContainer properties={properties} />
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
        <Form>
          <SearchTitle>
            <h1>Search property for rent</h1>
          </SearchTitle>
          <SearchBar>
            <SearchOutlined
              style={{
                fontSize: '1.4rem',
                position: 'absolute',
                left: '4.2%',
                zIndex: '1',
                color: '#808080',
              }}
            />
            <SearchText type="text" placeholder="Search by state, suburb or postcode" />
          </SearchBar>
          <TypeFilter>
            <TypeFilterTitle>
              <h2>Property type</h2>
            </TypeFilterTitle>
            <TypeFilterItem>
              <input type="checkbox" id="allType" />
              <label htmlFor="allType">&nbsp;All Type</label>
            </TypeFilterItem>
            <TypeFilterItem>
              <input type="checkbox" id="house" />
              <label htmlFor="house">&nbsp;House</label>
            </TypeFilterItem>
            <TypeFilterItem>
              <input type="checkbox" id="apartment" />
              <label htmlFor="apartment">&nbsp;Apartment Unit</label>
            </TypeFilterItem>
            <TypeFilterItem>
              <input type="checkbox" id="studio" />
              <label htmlFor="townHouse">&nbsp;Studio</label>
            </TypeFilterItem>
          </TypeFilter>
          <hr />
          <RangeDropDown>
            <TypeFilterTitle>
              <h2>Price</h2>
            </TypeFilterTitle>
            <TypeFilterItem className="range">
              <label htmlFor="priceMin">Min</label>
              <br />
              <select name="priceMin" id="priceMin">
                <option value="">Any</option>
                <option value="50">$50</option>
                <option value="75">$75</option>
                <option value="100">$100</option>
                <option value="125">$125</option>
                <option value="150">$150</option>
                <option value="175">$175</option>
                <option value="200">$200</option>
              </select>
            </TypeFilterItem>
            <TypeFilterItem className="range">
              <label htmlFor="priceMax">Max</label>
              <br />
              <select name="priceMax" id="priceMax">
                <option value="">Any</option>
                <option value="50">$50</option>
                <option value="75">$75</option>
                <option value="100">$100</option>
                <option value="125">$125</option>
                <option value="150">$150</option>
                <option value="175">$175</option>
                <option value="200">$200</option>
              </select>
            </TypeFilterItem>
          </RangeDropDown>
          <hr />
          <RangeDropDown>
            <TypeFilterTitle>
              <h2>Bedrooms</h2>
            </TypeFilterTitle>
            <TypeFilterItem className="range">
              <label htmlFor="bedMin">Min</label>
              <br />
              <select name="bedMin" id="bedMin">
                <option value="">Any</option>
                <option value="studio">Studio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </TypeFilterItem>
            <TypeFilterItem className="range">
              <label htmlFor="bedMax">Max</label>
              <br />
              <select name="bedMax" id="bedMax">
                <option value="">Any</option>
                <option value="studio">Studio</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </TypeFilterItem>
          </RangeDropDown>
          <hr />
          <RangeDropDown>
            <TypeFilterTitle>
              <h2>Bathrooms</h2>
            </TypeFilterTitle>
            <TypeFilterItem className="oneDrop">
              <select name="bathroom" id="bathroom">
                <option value="">Any</option>
                <option value="1+">1+</option>
                <option value="2+">2+</option>
                <option value="3+">3+</option>
                <option value="4+">4+</option>
                <option value="5+">5+</option>
                <option value="6+">6+</option>
              </select>
            </TypeFilterItem>
          </RangeDropDown>
          <hr />
          <RangeDropDown id="lastDrop">
            <TypeFilterTitle>
              <h2>Available Date</h2>
            </TypeFilterTitle>
            <TypeFilterItem className="oneDrop">
              <select name="date" id="date">
                <option value="">Any</option>
              </select>
            </TypeFilterItem>
          </RangeDropDown>
          <SubmitSearch>
            <Button>Clear Filter</Button>
            <Button primary type="submit">
              Search
            </Button>
          </SubmitSearch>
        </Form>
      </Container>
    );
  }
}
export default Home;
