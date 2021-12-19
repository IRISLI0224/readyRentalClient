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
  display: flex;
`;

const Container = styled.div`
  width: 95%;
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

const CheckFilterItem = styled.div`
  width: auto;
  height: 1.5rem;
`;

class SearchTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleHouseChange = this.handleHouseChange.bind(this);
    this.handleApartmentChange = this.handleApartmentChange.bind(this);
    this.handleTownHouseChange = this.handleTownHouseChange.bind(this);
    this.handleVillaChange = this.handleVillaChange.bind(this);
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
            <SearchText
              type="text"
              placeholder="Search by state, suburb or postcode"
              value={filterText}
              onChange={this.handleFilterTextChange}
            ></SearchText>
            <Button primary size="15.5%" height="3rem" type="submit" onClick={getAllProperties()}>
              Search
            </Button>
          </SearchBar>
          <CheckFilter>
            <CheckFilterItem>
              <input
                type="checkbox"
                id="house"
                checked={isHouse}
                onChange={this.handleHouseChange}
              />
              <label htmlFor="house">House</label>
            </CheckFilterItem>
            <CheckFilterItem>
              <input type="checkbox" checked={isApartment} onChange={this.handleApartmentChange} />
              Apartment Units
            </CheckFilterItem>
            <CheckFilterItem>
              <input type="checkbox" checked={isTownHouse} onChange={this.handleTownHouseChange} />
              TownHouse
            </CheckFilterItem>
            <CheckFilterItem>
              <input type="checkbox" checked={isVilla} onChange={this.handleVillaChange} /> Villa
            </CheckFilterItem>
          </CheckFilter>
          <DropFilter>
            <select name="bedMin" id="" onChange={this.handleBedMinChange} value={bedMin}>
              <option value="" selected disabled hidden>
                Bed(Min)
              </option>
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select name="bedMax" id="" onChange={this.handleBedMaxChange} value={bedMax}>
              <option value="" selected disabled hidden>
                Bed(Max)
              </option>
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <select name="priceMin" id="" onChange={this.handlePriceMinChange} value={priceMin}>
              <option value="" selected disabled hidden>
                Price(Min)
              </option>
              <option value="">Any</option>
              <option value="500000">$500,000</option>
              <option value="600000">$600,000</option>
              <option value="700000">$700,000</option>
              <option value="800000">$800,000</option>
              <option value="900000">$900,000</option>
              <option value="1000000">$1,000,000</option>
            </select>
            <select name="priceMax" id="" onChange={this.handlePriceMaxChange} value={priceMax}>
              <option value="" selected disabled hidden>
                Price(Max)
              </option>
              <option value="">Any</option>
              <option value="500000">$500,000</option>
              <option value="600000">$600,000</option>
              <option value="700000">$700,000</option>
              <option value="800000">$800,000</option>
              <option value="900000">$900,000</option>
              <option value="1000000">$1,000,000</option>
            </select>
          </DropFilter>
        </form>
      </Container>
    );
  }
}

export default SearchTable;
