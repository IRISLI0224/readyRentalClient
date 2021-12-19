import React from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
import { getAllProperties } from '../../config/Properties';
import img_first from '../../assests/img/Homepage__NewsCard-first.jpeg';
import img_second from '../../assests/img/Homepage__NewsCard-second.png';
import img_third from '../../assests/img/Homepage__NewsCard-third.jpeg';
import { Button } from '../../hoc/Button';
import {
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

const Container = styled.div`
  overflow: hidden;
  width: 60%;
  height: 66rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    hr {
      width: 95%;
      height: 0.1rem;
    }
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
        {properties.map((property, index) => (
          <PropertyCard PropertyInfo={property} key={index}></PropertyCard>
        ))}
        <NewsCardTitle>
          <h2>Latest Property News</h2>
        </NewsCardTitle>
        <NewsCard>
          <NewsCardImg>
            <Img src={img_first}></Img>
          </NewsCardImg>
          <NewsCardContent>
            <h3>
              Sydney auctions: Records smashed as inner west house sells for nearly $1m over reserve
            </h3>
            <span>by Aidan Devine</span>
            <p>
              Inner west suburb Strathfield has a new record house price after a competitive auction
              where a dozen registered bidde...
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
              The fear of missing out defined the mood of buyers at auctions earlier this year, but
              it’s been replaced by a new fea...
            </p>
          </NewsCardContent>
          <a href="https://www.realestate.com.au/news/sydney-auctions-cheaper-homes-get-strong-response-as-fear-of-missing-out-gets-replaced-by-fear-of-overpaying/?pid=ref-buy-homepage-feature-2">
            Sydney auctions: cheaper homes get strong response as fear of missing out gets replaced
            by fear of overpaying
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
              Netflix series Maid shed light on growing issue of housing for women fleeing domestic
              violence.
            </p>
          </NewsCardContent>
          <a href="https://www.realestate.com.au/news/more-spots-in-first-homebuyer-deposit-guarantee-scheme-reissued-by-the-federal-government/?pid=ref-buy-homepage-feature-1">
            Netflix series sheds light on major hurdle facing women fleeing violence
          </a>
        </NewsCard>
        <form action="">
          <SearchTitle>
            <h1>Search property for rent</h1>
          </SearchTitle>
          <SearchBar>
            <SearchText type="text" placeholder="Search by state, suburb or postcode" />
          </SearchBar>
          <TypeFilter>
            <TypeFilterTitle>
              <h2>Property type</h2>
            </TypeFilterTitle>
            <TypeFilterItem>
              <input type="checkbox" id="allType" />
              <label htmlFor="allType">All Type</label>
            </TypeFilterItem>
            <TypeFilterItem>
              <input type="checkbox" id="house" />
              <label htmlFor="house">House</label>
            </TypeFilterItem>
            <TypeFilterItem>
              <input type="checkbox" id="apartment" />
              <label htmlFor="apartment">Apartment Unit</label>
            </TypeFilterItem>
            <TypeFilterItem>
              <input type="checkbox" id="townHouse" />
              <label htmlFor="townHouse">Townhouse</label>
            </TypeFilterItem>
            <TypeFilterItem>
              <input type="checkbox" id="villa" />
              <label htmlFor="villa">Villa</label>
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
          <RangeDropDown>
            <TypeFilterTitle>
              <h2>Available Date</h2>
            </TypeFilterTitle>
            <TypeFilterItem className="oneDrop">
              <select name="date" id="date">
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
          <SubmitSearch>
            <Button>Clear Filter</Button>
            <Button primary type="submit">
              Search
            </Button>
          </SubmitSearch>
        </form>
      </Container>
    );
  }
}
export default Home;
