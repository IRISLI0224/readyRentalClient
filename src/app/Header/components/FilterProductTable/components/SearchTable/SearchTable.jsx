import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../../hoc/Button';
import DropFilter from './components/DropFilter';
import { getAllProperties } from '../../../../../../config/Properties';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const SearchText = styled.input`
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
  width: 85%;
  height: 4rem;
  font-weight: 400;
  font-size: 1.5em;
  color: black;
  padding: 20px 65px 20px 45px;
  border: none;
  outline: none;
  border-radius: 2px;
`;

const Container = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h1 {
    text-align: left;
    width: 100%;
    margin: auto;
    margin: 4px 0px 4px;
    font-size: 1.6rem;
    color: white;
  }
  position: relative;
`;

const CheckFilterItem = styled.div`
  width: auto;
  height: 1.5rem;
  display: inline-block;
`;
const TypeLabel = styled.div`
  border: none;
  outline: none;
  color: white;
  background: transparent;
  cursor: pointer;
`;
const TypeSelection = styled.div`
  position: absolute;
  z-index: 99;
  bottom: -80px;
  background-color: white;
  width: 130px;
  height: 6rem;
  text-align: left;
  color: black;
  padding: 2px 2px 2px 2px;
`;

const Selection = styled.select`
  border: none;
  outline: none;
  color: white;
  background: transparent;
  cursor: pointer;
`;
const Option = styled.option`
  color: black;
  text-decoration: none;
  border: none;
  outline: none;
  width: 100%;
`;

const SearchPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  Button {
    font-size: 1.1rem;
  }
`;
class SearchTable extends React.Component {
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
      <Container>
        <h1>Search properties for sale</h1>
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
          <SearchPanel>
            <SearchOutlined
              style={{
                fontSize: '1.4rem',
                position: 'absolute',
                left: '1.8%',
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
                      name="location"
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
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
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
            {filterText && (
              <CloseOutlined
                style={{
                  fontSize: '0.8rem',
                  position: 'absolute',
                  right: '150px',
                  zIndex: '1',
                  color: '#808080',
                  opacity: 0.5,
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  this.props.clearInput();
                }}
              />
            )}
            <Button primary size="130px" height="4rem" type="submit">
              Search
            </Button>
          </SearchPanel>
          <DropFilter>
            <Selection name="type" id="" onChange={this.handleTypeChange} value={type}>
              <Option value="" selected disabled hidden>
                All property types
              </Option>
              <Option value="">All property types</Option>
              <Option value="house">House</Option>
              <Option value="apartment">Apartment</Option>
              <Option value="studio">Studio</Option>
            </Selection>
            <Selection name="bedMin" id="" onChange={this.handleBedMinChange} value={bedMin}>
              <Option value="" selected disabled hidden>
                Beds (min)
              </Option>
              <Option value="">Any</Option>
              <Option value="1">1 Bed</Option>
              <Option value="2">2 Beds</Option>
              <Option value="3">3 Beds</Option>
              <Option value="4">4 Beds</Option>
              <Option value="5">5 Beds</Option>
              <Option value="6">6 Beds</Option>
            </Selection>
            <Selection name="bedMax" id="" onChange={this.handleBedMaxChange} value={bedMax}>
              <Option value="" selected disabled hidden>
                Beds (max)
              </Option>
              <Option value="">Any</Option>
              <Option value="1">1 Bed</Option>
              <Option value="2">2 Beds</Option>
              <Option value="3">3 Beds</Option>
              <Option value="4">4 Beds</Option>
              <Option value="5">5 Beds</Option>
              <Option value="6">6 Beds</Option>
              <Option value="7">7 Beds</Option>
            </Selection>
            <Selection name="priceMin" id="" onChange={this.handlePriceMinChange} value={priceMin}>
              <Option value="" selected disabled hidden>
                Price pw (min)
              </Option>
              <Option value="">Any</Option>
              <Option value="50">$50pw</Option>
              <Option value="75">$75pw</Option>
              <Option value="100">$100pw</Option>
              <Option value="125">$125pw</Option>
              <Option value="150">$150pw</Option>
              <Option value="175">$175pw</Option>
            </Selection>
            <Selection name="priceMax" id="" onChange={this.handlePriceMaxChange} value={priceMax}>
              <Option value="" selected disabled hidden>
                Price pw (max)
              </Option>
              <Option value="">Any</Option>
              <Option value="50">$50pw</Option>
              <Option value="75">$75pw</Option>
              <Option value="100">$100pw</Option>
              <Option value="125">$125pw</Option>
              <Option value="150">$150pw</Option>
              <Option value="175">$175pw</Option>
            </Selection>
          </DropFilter>
        </form>
      </Container>
    );
  }
}

export default SearchTable;
