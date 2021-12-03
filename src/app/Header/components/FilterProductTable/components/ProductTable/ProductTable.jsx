import React from 'react';
import ProductRow from './components/ProductRow';
import ProductCategoryRow from './components/ProductCategoryRow';

class ProductTable extends React.Component {
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
    const map = new Map();
    this.props.products.forEach((product) => {
      const {
        category,
        name,
        stocked,
        house,
        apartment,
        townhouse,
        villa,
        land,
        acreage,
        rural,
        block,
        retirement,
        bed,
        price,
        location,
      } = product;
      if (location.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (isStockOnly && !stocked) {
        return;
      }
      if (isHouse && !house) {
        return;
      }
      if (isApartment && !apartment) {
        return;
      }
      if (isTownHouse && !townhouse) {
        return;
      }
      if (isVilla && !villa) {
        return;
      }
      if (isLand && !land) {
        return;
      }
      if (isAcreage && !acreage) {
        return;
      }
      if (isRural && !rural) {
        return;
      }
      if (isBlock && !block) {
        return;
      }
      if (isRetirement && !retirement) {
        return;
      }
      if (Number(bedMin) <= Number(bed) <= Number(bedMax)) {
        return;
      }
      if (Number(priceMin) <= Number(price) <= Number(priceMax)) {
        return;
      }
      if (filterCategory && category === 'House') {
        return;
      }
      let rows = map.get(category);
      if (!rows) {
        rows = [<ProductCategoryRow key={category} category={category} />];
        map.set(category, rows);
      }
      rows.push(<ProductRow key={name} product={product} />);
    });
    const allRows = [...map.values()].reduce((accum, item) => [...accum, ...item], []);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{allRows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
