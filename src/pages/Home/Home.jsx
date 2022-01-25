import React from 'react';
import styled from 'styled-components';
import { getAllProperties } from '../../config/Properties';
import SlideCardContainer from '../../components/SlideCardContainer';
import SearchForm from './components/SearchForm';
import WhyChooseUs from './components/WhyChooseUs';
import ExploreOurProperties from './components/ExploreOurProperties';
import TrendBanner from './components/TrendBanner';
import BottomBanner from './components/BottomBanner';
import ExploreCities from './components/ExploreCities';

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
        <TrendBanner />
        {properties.length > 0 ? (
          <div>
            <SlideCardContainer properties={properties} />
            <br />
          </div>
        ) : null}
        <ExploreCities />
        <BottomBanner />
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
