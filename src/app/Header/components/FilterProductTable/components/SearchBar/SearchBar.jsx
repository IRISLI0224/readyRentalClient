import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../../hoc/Button/Button';
import DropFilter from './components/DropFilter';

const SearchText = styled.input`
  width: 400px;
  height: 48px;
  font-weight: 400;
  font-size: 1em;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
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
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleStockChange(e) {
    this.props.onStockChange(e.target.checked);
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
  handleCategoryChange(e) {
    this.props.onCategoryChange(e.target.checked);
  }
  render() {
    const {
      filterText,
      isStockOnly,
      filterCategory,
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
      <form>
        <SearchText
          type="text"
          placeholder="Search by state, suburb or postcode"
          value={filterText}
          onChange={this.handleFilterTextChange}
        ></SearchText>
        <Button className="primary">Search</Button>
        <p>
          {/* <input type="checkbox" checked={isStockOnly} onChange={this.handleStockChange} /> Only
          show products in stock?
          <input
            type="checkbox"
            checked={filterCategory}
            onChange={this.handleCategoryChange}
            value="House"
          />{' '}
          No */}
          <input type="checkbox" checked={isHouse} onChange={this.handleHouseChange} /> House
          <input type="checkbox" checked={isApartment} onChange={this.handleApartmentChange} />{' '}
          Apartment Units
          <input type="checkbox" checked={isTownHouse} onChange={this.handleTownHouseChange} />{' '}
          TownHouse
          <input type="checkbox" checked={isVilla} onChange={this.handleVillaChange} /> Villa
          <input type="checkbox" checked={isLand} onChange={this.handleLandChange} /> Land
          <input type="checkbox" checked={isAcreage} onChange={this.handleAcreageChange} /> Acreage
          <input type="checkbox" checked={isRural} onChange={this.handleRuralChange} /> Rural
          <input type="checkbox" checked={isBlock} onChange={this.handleBlockChange} /> Block
          <input
            type="checkbox"
            checked={isRetirement}
            onChange={this.handleRetirementChange}
          />{' '}
          Retirement
          <br />
          <br />
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
        </p>
      </form>
    );
  }
}

export default SearchBar;
