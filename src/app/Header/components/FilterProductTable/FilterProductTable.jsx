import React from 'react';
import SearchTable from './components/SearchTable/SearchTable';
class FilterProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    const { filterText, type, bedMin, bedMax, priceMin, priceMax } = this.state;
    return (
      <div>
        <SearchTable
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
        />
      </div>
    );
  }
}

export default FilterProductTable;
