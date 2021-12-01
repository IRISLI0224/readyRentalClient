import React from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable/ProductTable';

class FilterProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false,
      isHouse: false,
      bedMin: '',
      bedMax: '',
      priceMin: '',
      priceMax: '',
      filterCategary: '',
    };
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onStockChange = this.onStockChange.bind(this);
    this.onHouseChange = this.onHouseChange.bind(this);
    this.onBedMinChange = this.onBedMinChange.bind(this);
    this.onBedMaxChange = this.onBedMaxChange.bind(this);
    this.onPriceMinChange = this.onPriceMinChange.bind(this);
    this.onPriceMaxChange = this.onPriceMaxChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
  }
  onFilterTextChange(filterText) {
    this.setState({
      filterText,
    });
  }
  onStockChange(isStockOnly) {
    this.setState({
      isStockOnly,
    });
  }
  onHouseChange(isHouse) {
    this.setState({
      isHouse,
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
  onCategoryChange(filterCategary) {
    this.setState({
      filterCategary,
    });
  }
  render() {
    const { filterText, isStockOnly, filterCategory, isHouse, bedMin, bedMax, priceMin, priceMax } =
      this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          isStockOnly={isStockOnly}
          isHouse={isHouse}
          bedMin={bedMin}
          bedMax={bedMax}
          priceMin={priceMin}
          priceMax={priceMax}
          filterCategary={filterCategory}
          onFilterTextChange={this.onFilterTextChange}
          onStockChange={this.onStockChange}
          onHouseChange={this.onHouseChange}
          onBedMinChange={this.onBedMinChange}
          onBedMaxChange={this.onBedMaxChange}
          onPriceMinChange={this.onPriceMinChange}
          onPriceMaxChange={this.onPriceMaxChange}
          onCategoryChange={this.onCategoryChange}
        />
        <ProductTable
          filterText={filterText}
          isStockOnly={isStockOnly}
          isHouse={isHouse}
          bedMin={bedMin}
          bedMax={bedMax}
          priceMin={priceMin}
          priceMax={priceMax}
          filterCategary={filterCategory}
          products={this.props.products}
        />
      </div>
    );
  }
}

export default FilterProductTable;
