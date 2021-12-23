import { Checkbox } from 'antd';
import React from 'react';

class Check extends React.Component {
  state = {
    checked: true,
  };

  onChange = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = `${this.state.checked ? 'Subscribed' : 'Unsubscribed'}`;
    return (
      <>
        <div style={{ marginBottom: '20px' }}>
          {label}
          <Checkbox
            checked={this.state.checked}
            onChange={this.onChange}
            style={{ paddingLeft: '10px' }}
          ></Checkbox>
        </div>
      </>
    );
  }
}
export default Check;
