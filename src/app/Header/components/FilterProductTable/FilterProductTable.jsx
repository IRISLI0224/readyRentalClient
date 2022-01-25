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
    this.onChange = this.onChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  onFilterTextChange(filterText) {
    this.setState({
      filterText,
    });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  clearInput = () => {
    this.setState({
      filterText: '',
    });
  };
  render() {
    const { filterText, type, bedMin, bedMax, priceMin, priceMax } = this.state;
    return (
      <React.Fragment>
        <SearchTable
          filterText={filterText}
          type={type}
          bedMin={bedMin}
          bedMax={bedMax}
          priceMin={priceMin}
          priceMax={priceMax}
          onFilterTextChange={this.onFilterTextChange}
          onChange={this.onChange}
          clearInput={this.clearInput}
        />
      </React.Fragment>
    );
  }
}

export default FilterProductTable;
