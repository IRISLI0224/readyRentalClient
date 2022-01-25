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
    this.onChange = this.onChange.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onFilterTextChange(filterText) {
    this.setState({
      filterText,
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
          onChange={this.onChange}
          onFilterTextChange={this.onFilterTextChange}
          clearInput={this.clearInput}
        ></SearchForm>
      </Container>
    );
  }
}
export default Home;
