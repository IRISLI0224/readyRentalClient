import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../../hoc/Button';
import DropFilter from './components/DropFilter';
import { getAllProperties } from '../../../../../../config/Properties';
import CheckFilter from './components/CheckFilter';

const SearchText = styled.input`
  width: 84.5%;
  height: 48px;
  font-weight: 400;
  font-size: 1em;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 2px;
  text-align: left;
`;

const Container = styled.div`
  width: 45vw;
  height: 215px;
  margin: auto;
  padding-top: 30px;
  h1 {
    text-align: left;
    width: 100%;
    margin: auto;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 1.5rem;
  }
`;

const Selection = styled.select`
  border: none;
  color: white;
  background: transparent;
`;
const Option = styled.option`
  color: black;
`;

const SearchPanel= styled.div`

  display:flex;

  flex-direction: row;

  justify-content: space-evenly;

  align-content: stretch;

  align-items: center;

  flex-wrap: nowrap;
`;

class SearchTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleHouseChange = this.handleHouseChange.bind(this);
    this.handleApartmentChange = this.handleApartmentChange.bind(this);
    this.handleTownHouseChange = this.handleTownHouseChange.bind(this);
    this.handleVillaChange = this.handleVillaChange.bind(this);
    this.handleLandChange = this.handleLandChange.bind(this);
    this.handleAcreageChange = this.handleAcreageChange.bind(this);
    this.handleRuralChange = this.handleRuralChange.bind(this);
    this.handleBlockChange = this.handleBlockChange.bind(this);
    this.handleRetirementChange = this.handleRetirementChange.bind(this);
    this.handleBedMinChange = this.handleBedMinChange.bind(this);
    this.handleBedMaxChange = this.handleBedMaxChange.bind(this);
    this.handlePriceMinChange = this.handlePriceMinChange.bind(this);
    this.handlePriceMaxChange = this.handlePriceMaxChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleHouseChange(e) {
    this.props.onHouseChange(e.target.checked);
  }
  handleApartmentChange(e) {
    this.props.onApartmentChange(e.target.checked);
  }
  handleTownHouseChange(e) {
    this.props.onTownHouseChange(e.target.checked);
  }
  handleVillaChange(e) {
    this.props.onVillaChange(e.target.checked);
  }
  handleLandChange(e) {
    this.props.onLandChange(e.target.checked);
  }
  handleAcreageChange(e) {
    this.props.onAcreageChange(e.target.checked);
  }
  handleRuralChange(e) {
    this.props.onRuralChange(e.target.checked);
  }
  handleBlockChange(e) {
    this.props.onBlockChange(e.target.checked);
  }
  handleRetirementChange(e) {
    this.props.onRetirementChange(e.target.checked);
  }
  handleBedMinChange(e) {
    this.props.onBedMinChange(e.target.value);
  }
  handleBedMaxChange(e) {
    this.props.onBedMaxChange(e.target.value);
  }
  handlePriceMinChange(e) {
    this.props.onPriceMinChange(e.target.value);
  }
  handlePriceMaxChange(e) {
    this.props.onPriceMaxChange(e.target.value);
  }
  render() {
    const {
      filterText,
      isHouse,
      isApartment,
      isTownHouse,
      isVilla,
      isLand,
      isAcreage,
      isRural,
      isBlock,
      isRetirement,
      bedMin,
      bedMax,
      priceMin,
      priceMax,
    } = this.props;
    return (
      <Container>
        <h1>Search properties for sale</h1>
        <form>
          <SearchBar>
          <SearchPanel>
            <SearchText
              type="text"
              placeholder="Search by state, suburb or postcode"
              value={filterText}
              onChange={this.handleFilterTextChange}
            ></SearchText>
            <Button primary size="113px" type="submit" onClick={getAllProperties()}>
              Search
            </Button>
            </SearchPanel>
          </SearchBar>
          <CheckFilter>
            <input type="checkbox" checked={isHouse} onChange={this.handleHouseChange} /> House
            <input type="checkbox" checked={isApartment} onChange={this.handleApartmentChange} />
            Apartment Units
            <input type="checkbox" checked={isTownHouse} onChange={this.handleTownHouseChange} />
            TownHouse
            <input type="checkbox" checked={isVilla} onChange={this.handleVillaChange} /> Villa
            <input type="checkbox" checked={isLand} onChange={this.handleLandChange} /> Land
            <input type="checkbox" checked={isAcreage} onChange={this.handleAcreageChange} />{' '}
            Acreage
            <input type="checkbox" checked={isRural} onChange={this.handleRuralChange} /> Rural
            <input type="checkbox" checked={isBlock} onChange={this.handleBlockChange} /> Block
            <input
              type="checkbox"
              checked={isRetirement}
              onChange={this.handleRetirementChange}
            />{' '}
            Retirement
          </CheckFilter>
          <DropFilter>
            <Selection name="bedMin" id="" onChange={this.handleBedMinChange} value={bedMin}>
              <Option value="" selected disabled hidden>
                Bed(Min)
              </Option>
              <Option value="">Any</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
            </Selection>
            <Selection name="bedMax" id="" onChange={this.handleBedMaxChange} value={bedMax}>
              <Option value="" selected disabled hidden>
                Bed(Max)
              </Option>
              <Option value="">Any</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
            </Selection>
            <Selection name="priceMin" id="" onChange={this.handlePriceMinChange} value={priceMin}>
              <Option value="" selected disabled hidden>
                Price(Min)
              </Option>
              <Option value="">Any</Option>
              <Option value="500000">$500,000</Option>
              <Option value="600000">$600,000</Option>
              <Option value="700000">$700,000</Option>
              <Option value="800000">$800,000</Option>
              <Option value="900000">$900,000</Option>
              <Option value="1000000">$1,000,000</Option>
            </Selection>
            <Selection name="priceMax" id="" onChange={this.handlePriceMaxChange} value={priceMax}>
              <Option value="" selected disabled hidden>
                Price(Max)
              </Option>
              <Option value="">Any</Option>
              <Option value="500000">$500,000</Option>
              <Option value="600000">$600,000</Option>
              <Option value="700000">$700,000</Option>
              <Option value="800000">$800,000</Option>
              <Option value="900000">$900,000</Option>
              <Option value="1000000">$1,000,000</Option>
            </Selection>
          </DropFilter>
        </form>
      </Container>
    );
  }
}

export default SearchTable;
