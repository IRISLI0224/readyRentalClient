import React from 'react';
import { Button } from '../../hoc/Button';
import styled from 'styled-components';
import PropertyDetailEditable from './component/PropertyDetailEditable';
import PropertyHeader from './component/PropertyHeader';
import { NoShadowWrapper } from './component/Wrapper';
import { getUserById } from '../../config/Users';
import { getPropertiesById } from '../../config/Properties';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 30px;
`;
class ListedProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = { properties: [], title: '' };
  }

  componentDidMount() {
    // ! why I cannot use await like so as below? it worked in BE project
    // const user = await getUserById('61bdc1ceb1a8d5e7b976f038');

    const getProperties = async () => {
      //todo: Now I used a hard coded id, it should be a prop passing in in the future
      const user = await getUserById('61bdc1ceb1a8d5e7b976f038');

      const properties = user.properties;
      const inspections = user.inspections;

      //put all the properties in inspections into an array
      const inspectionProperties = await Promise.all(
        inspections.map(async (inspection) => {
          const property = await getPropertiesById(inspection.property);
          return property;
        }),
      );

      //check if it should be landlord's listing page or tenant's inspection list
      if (this.props.isListing) {
        this.setState({ properties, title: 'My Listing' });
      } else {
        this.setState({ properties: inspectionProperties, title: 'My Inspection' });
      }
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
          <Button as="a" href="/property/post" size="140px" height="50px" primary>
            +Create Listing
          </Button>
        </NoShadowWrapper>
        <PropertyHeader />
        {properties.map((property) => {
          return <PropertyDetailEditable key={property._id} property={property} />;
        })}
      </Container>
    );
  }
}

ListedProperties.propTypes = {
  isListing: PropTypes.object.isRequired,
};

export default ListedProperties;
