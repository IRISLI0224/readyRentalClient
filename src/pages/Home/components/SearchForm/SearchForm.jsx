import React from 'react';
import {
  SearchTitle,
  SearchBar,
  SearchText,
  TypeFilterTitle,
  TypeFilterItem,
  RangeDropDown,
  SubmitSearch,
} from '../../components/Container';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from '../../../../hoc/Button';
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleBedMinChange = this.handleBedMinChange.bind(this);
    this.handleBedMaxChange = this.handleBedMaxChange.bind(this);
    this.handlePriceMinChange = this.handlePriceMinChange.bind(this);
    this.handlePriceMaxChange = this.handlePriceMaxChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleTypeChange(e) {
    this.props.onTypeChange(e.target.value);
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
    const { filterText, type, bedMin, bedMax, priceMin, priceMax } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const query = new URLSearchParams();
          filterText && query.set('input', filterText);
          type && query.set('type', type);
          bedMin && query.set('bedMin', bedMin);
          bedMax && query.set('bedMax', bedMax);
          priceMin && query.set('rentMin', priceMin);
          priceMax && query.set('rentMax', priceMax);
          window.location.href = `/search?${query.toString()}`;
        }}
      >
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
          <SearchText
            type="text"
            placeholder="Search by state, suburb or postcode"
            name="location"
            id="location"
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
        </SearchBar>
        <RangeDropDown>
          <TypeFilterTitle>
            <h2>Property type</h2>
          </TypeFilterTitle>
          <TypeFilterItem className="oneDrop">
            <select name="type" id="type" onChange={this.handleTypeChange} value={type}>
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="studio">Studio</option>
            </select>
          </TypeFilterItem>
        </RangeDropDown>
        <hr />
        <RangeDropDown>
          <TypeFilterTitle>
            <h2>Price</h2>
          </TypeFilterTitle>
          <TypeFilterItem className="range">
            <label htmlFor="priceMin">Min</label>
            <br />
            <select
              name="priceMin"
              id="priceMin"
              onChange={this.handlePriceMinChange}
              value={priceMin}
            >
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
            <select
              name="priceMax"
              id="priceMax"
              onChange={this.handlePriceMaxChange}
              value={priceMax}
            >
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
            <select name="bedMin" id="bedMin" onChange={this.handleBedMinChange} value={bedMin}>
              <option value="">Any</option>
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
            <select name="bedMax" id="bedMax" onChange={this.handleBedMaxChange} value={bedMax}>
              <option value="">Any</option>
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
          <Button
            onClick={(e) => {
              e.preventDefault();
              this.props.clearInput();
            }}
          >
            Clear Filter
          </Button>
          <Button primary type="submit">
            Search
          </Button>
        </SubmitSearch>
      </form>
    );
  }
}

export default SearchForm;
