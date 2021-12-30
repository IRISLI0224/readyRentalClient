import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../../hoc/Button';
import DropFilter from './components/DropFilter';
import { getAllProperties } from '../../../../../../config/Properties';
import CheckFilter from './components/CheckFilter';
// this is for checkbox, if no longer to use it, then delete, but just leave it at the moment
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

const SearchText = styled.input`
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
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleHouseChange = this.handleHouseChange.bind(this);
    this.handleApartmentChange = this.handleApartmentChange.bind(this);
    this.handleStudioChange = this.handleStudioChange.bind(this);
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
  handleStudioChange(e) {
    this.props.onStudioChange(e.target.checked);
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
    const { filterText, isHouse, isApartment, isStudio, bedMin, bedMax, priceMin, priceMax } =
      this.props;
    // isHouse, isApartment, isStudio for checkbox, if no longer to use, then delete, but just leave it at the moment
    return (
      <Container>
        <h1>Search properties for sale</h1>
        <form 
            onSubmit={(e) => {
              e.preventDefault();
              const query= new URLSearchParams();
              filterText && query.set('input', filterText); 
              bedMin && query.set('bedMin', bedMin);
              bedMax && query.set('bedMax', bedMax);
              priceMin && query.set('rentMin', priceMin);
              priceMax && query.set('rentMax', priceMax);
              window.location.href = `/search?${query.toString()}`;
              }}>
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
            <SearchText
              type="text"
              placeholder="Search by state, suburb or postcode"
              name="location"
              id="location"
              value={filterText}
              onChange={this.handleFilterTextChange}
            ></SearchText>
            <CloseOutlined
              style={{
                fontSize: '0.8rem',
                position: 'absolute',
                right: '150px',
                zIndex: '1',
                color: '#808080',
              }}
            />
            <Button primary size="130px" height="4.03rem" type="submit"onClick={getAllProperties} >
              Search
            </Button>
          </SearchPanel>
          <DropFilter>
            <Selection name="type" id="">
              <Option value="all" selected disabled hidden>
                All property types
              </Option>
              <Option value="all">All property types</Option>
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
