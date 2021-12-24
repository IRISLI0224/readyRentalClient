import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../../hoc/Button';
import DropFilter from './components/DropFilter';
import { getAllProperties } from '../../../../../../config/Properties';
import CheckFilter from './components/CheckFilter';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

const SearchText = styled.input`
  width: 85%;
  height: 4.03rem;
  font-weight: 400;
  font-size: 1.5em;
  color: black;
  padding: 20px 65px 20px 45px;
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
  height: 100%;
  margin: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h1 {
    text-align: left;
    width: 100%;
    margin: auto;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 1.1rem;
    color: white;
  }
`;

const CheckFilterItem = styled.div`
  width: auto;
  height: 1.5rem;
`;

const Selection = styled.select`
  border: none;
  color: white;
  background: transparent;
`;
const Option = styled.option`
  color: black;
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
    return (
      <Container>
        <h1>Search properties for sale</h1>
        <form>
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
            <Button
              primary
              size="130px"
              height="3.9rem"
              type="submit"
              onClick={() => {
                getAllProperties();
              }}
            >
              Search
            </Button>
          </SearchPanel>
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
              <input
                type="checkbox"
                name="apartment"
                checked={isApartment}
                onChange={this.handleApartmentChange}
              />
              <label htmlFor="apartment">Apartment Units</label>
            </CheckFilterItem>
            <CheckFilterItem>
              <input type="checkbox" checked={isStudio} onChange={this.handleStudioChange} />
              Studio
            </CheckFilterItem>
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
