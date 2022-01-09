import React from 'react';
import { Button } from 'antd';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class Submit extends React.Component {
  handleSubmit = () => {
    console.log(this.props);
    this.props.router.navigate('/');
  };
  render() {
    return (
      <Button
        type="primary"
        htmlType="submit"
        size={'large'}
        style={{
          background: '#e4022b',
          color: '#fff',
          fontSize: 24,
          height: 60,
          width: 350,
          fontWeight: 800,
        }}
        onClick={this.handleSubmit}
      >
        BACK TO HOME PAGE
      </Button>
    );
  }
}
export default withRouter(Submit);
