import React from 'react';

class ProductRow extends React.Component {
  render() {
    let { name, price, stocked, location } = this.props.product;
    const style = {
      color: 'red',
    };
    name = stocked ? name : <span style={style}>{name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{location}</td>
      </tr>
    );
  }
}

export default ProductRow;
