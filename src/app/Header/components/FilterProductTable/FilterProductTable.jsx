import React from 'react';
import SearchTable from './components/SearchBar/SearchTable';
class FilterProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isHouse: false,
      isApartment: false,
      isTownHouse: false,
      isVilla: false,
      isLand: false,
      isAcreage: false,
      isRural: false,
      isBlock: false,
      isRetirement: false,
      bedMin: '',
      bedMax: '',
      priceMin: '',
      priceMax: '',
    };
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onHouseChange = this.onHouseChange.bind(this);
    this.onApartmentChange = this.onApartmentChange.bind(this);
    this.onTownHouseChange = this.onTownHouseChange.bind(this);
    this.onVillaChange = this.onVillaChange.bind(this);
    this.onLandChange = this.onLandChange.bind(this);
    this.onAcreageChange = this.onAcreageChange.bind(this);
    this.onRuralChange = this.onRuralChange.bind(this);
    this.onBlockChange = this.onBlockChange.bind(this);
    this.onRetirementChange = this.onRetirementChange.bind(this);
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
  onHouseChange(isHouse) {
    this.setState({
      isHouse,
    });
  }
  onApartmentChange(isApartment) {
    this.setState({
      isApartment,
    });
  }
  onTownHouseChange(isTownHouse) {
    this.setState({
      isTownHouse,
    });
  }
  onVillaChange(isVilla) {
    this.setState({
      isVilla,
    });
  }
  onLandChange(isLand) {
    this.setState({
      isLand,
    });
  }
  onAcreageChange(isAcreage) {
    this.setState({
      isAcreage,
    });
  }
  onRuralChange(isRural) {
    this.setState({
      isRural,
    });
  }
  onBlockChange(isBlock) {
    this.setState({
      isBlock,
    });
  }
  onRetirementChange(isRetirement) {
    this.setState({
      isRetirement,
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
    } = this.state;
    return (
      <div>
        <SearchTable
          filterText={filterText}
          isHouse={isHouse}
          isApartment={isApartment}
          isTownHouse={isTownHouse}
          isVilla={isVilla}
          isLand={isLand}
          isAcreage={isAcreage}
          isRural={isRural}
          isBlock={isBlock}
          isRetirement={isRetirement}
          bedMin={bedMin}
          bedMax={bedMax}
          priceMin={priceMin}
          priceMax={priceMax}
          onFilterTextChange={this.onFilterTextChange}
          onHouseChange={this.onHouseChange}
          onApartmentChange={this.onApartmentChange}
          onTownHouseChange={this.onTownHouseChange}
          onVillaChange={this.onVillaChange}
          onLandChange={this.onLandChange}
          onAcreageChange={this.onAcreageChange}
          onRuralChange={this.onRuralChange}
          onBlockChange={this.onBlockChange}
          onRetirementChange={this.onRetirementChange}
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
