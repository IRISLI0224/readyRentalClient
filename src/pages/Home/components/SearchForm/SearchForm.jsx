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
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import PropTypes from 'prop-types';
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      searchOptions: {
        componentRestrictions: { country: 'au' },
      },
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleBedMinChange = this.handleBedMinChange.bind(this);
    this.handleBedMaxChange = this.handleBedMaxChange.bind(this);
    this.handlePriceMinChange = this.handlePriceMinChange.bind(this);
    this.handlePriceMaxChange = this.handlePriceMaxChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error('Error', error));
  };

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
          <PlacesAutocomplete
            value={this.props.filterText}
            onChange={this.props.onFilterTextChange} //Cannot be changed
            searchOptions={this.state.searchOptions}
            debounce={1500}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
              suggestions === undefined ? (
                <div>undefined</div>
              ) : (
                <>
                  <SearchText
                    type="text"
                    placeholder="Search by state, suburb or postcode"
                    // name="location"
                    id="location"
                    list="searchList"
                    onSelect={this.handleSelect}
                    {...getInputProps()}
                  />
                  <datalist id="searchList">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      return (
                        <option
                          value={suggestion.description}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                          })}
                        >
                          {suggestion.description}
                        </option>
                      );
                    })}
                  </datalist>
                </>
              )
            }
          </PlacesAutocomplete>
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
            <h2>Price Min</h2>
          </TypeFilterTitle>
          <TypeFilterItem className="oneDrop">
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
        </RangeDropDown>
        <hr />
        <RangeDropDown>
          <TypeFilterTitle>
            <h2>Price Max</h2>
          </TypeFilterTitle>
          <TypeFilterItem className="oneDrop">
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
            <h2>Bedrooms Min</h2>
          </TypeFilterTitle>
          <TypeFilterItem className="oneDrop">
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
        </RangeDropDown>
        <hr />
        <RangeDropDown>
          <TypeFilterTitle>
            <h2>Bedrooms Max</h2>
          </TypeFilterTitle>
          <TypeFilterItem className="oneDrop">
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

SearchForm.propTypes = {
  filterText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedMin: PropTypes.string.isRequired,
  bedMax: PropTypes.string.isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onBedMinChange: PropTypes.func.isRequired,
  onBedMaxChange: PropTypes.func.isRequired,
  onPriceMinChange: PropTypes.func.isRequired,
  onPriceMaxChange: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
};

export default SearchForm;
