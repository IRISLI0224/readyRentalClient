import React from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
import { getAllProperties } from '../../config/Properties';
import img_first from '../../assests/img/Homepage__NewsCard-first.jpeg';
import img_second from '../../assests/img/Homepage__NewsCard-second.png';
import img_third from '../../assests/img/Homepage__NewsCard-third.jpeg';
import { Button } from '../../hoc/Button';

const Container = styled.div`
  overflow: hidden;
  width: 55rem;
  height: 66rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
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

const NewsCardTitle = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  font-size: 1.3rem;
  color: #333f48;
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    display: none;
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

const SearchTitle = styled.div`
  width: 100%;
  height: 1.5rem;
  text-align: center;
  margin: auto;
  margin-top: 2.5rem;
  color: #808080;
  font-size: 0.7rem;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 50px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  text-align: center;
`;

const SearchText = styled.input`
  width: 50%;
  height: 100%;
  font-weight: 400;
  font-size: 1em;
`;

const TypeFilter = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  width: 100%;
  height: 10rem;
  padding-left: 1rem;
  padding-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0.8rem;
`;

const TypeFilterTitle = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  width: 100%;
  height: 20%;
  h2 {
    margin: 0;
  }
`;

const TypeFilterItem = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  text-align: left;
  width: 48%;
  &.range {
    height: 4.3rem;
    label {
      width: 98%;
    }
    select {
      width: 98%;
      height: 2.5rem;
    }
  }
  &.oneDrop {
    width: 100%;
    select {
      width: 100%;
      height: 2.5rem;
    }
  }
`;

const RangeDropDown = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  width: 100%;
  height: 8rem;
  padding-left: 1rem;
  padding-right: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.5rem 0.8rem 0.6rem 0.8rem;
`;

const SubmitSearch = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 0.1rem solid #808080;
  display: flex;
  justify-content: space-around;
  background-color: white;
  Button {
    margin-top: 0.5rem;
    height: 3rem;
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
