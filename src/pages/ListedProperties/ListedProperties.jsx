import React from 'react';
import { Button } from '../../hoc/Button';
import styled from 'styled-components';
import PropertyDetailEditable from './component/PropertyDetailEditable';
import PropertyHeader from './component/PropertyHeader';
import { NoShadowWrapper } from './component/Wrapper';
import { getUserById } from '../../config/Users';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 30px;
`;
class ListedProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = { properties: [] };
  }

  componentDidMount() {
    // ! why I cannot use await like so as below? it worked in BE project
    // const user = await getUserById('61bdc1ceb1a8d5e7b976f038');

    const getProperties = async () => {
      const user = await getUserById('61bdc1ceb1a8d5e7b976f038');
      const properties = user.properties;
      this.setState({ properties });
      // console.log(user, 4);
      // console.log(properties);
    };
    getProperties();
  }

  render() {
    const properties = this.state.properties;

    if (!properties) return <div>Sorry we did not find any result</div>;

    return (
      <Container>
        <NoShadowWrapper>
          <h1>My Listings</h1>
          <Button as="a" href="https://www.google.com/" size="140px" height="50px" primary>
            +Create Listing
          </Button>
        </NoShadowWrapper>
        <PropertyHeader />
        {properties.map((property) => {
          return (
            <PropertyDetailEditable
              key={property._id}
              property={property}
              style={{ margin: '90px' }}
            />
          );
        })}

        <div></div>
      </Container>
    );
  }
}

export default ListedProperties;
