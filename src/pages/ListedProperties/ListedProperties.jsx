import React from 'react';
import { Button } from '../../hoc/Button';
import styled from 'styled-components';
import PropertyDetailEditable from './component/PropertyDetailEditable';
import PropertyHeader from './component/PropertyHeader';
import { NoShadowWrapper } from './component/Wrapper';
import { getUserFromToken } from '../../utils/authentication';
import { getUserById } from '../../config/Users';
import { getPropertiesById, deletePropertyById } from '../../config/Properties';
import { deleteInspectionById } from '../../config/Inspections';
import DeletePopup from './component/DeletePopup';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const ControlledPopUp = styled(DeletePopup)`
  display: ${(props) => (props.isPopUp ? 'block' : 'none')};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
class ListedProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, properties: [], title: '', isPopUp: false, deletingPropertyId: {} };
  }

  componentDidMount() {
    const user = getUserFromToken();

    if (!user) window.location.href = '/login';

    const userId = user._id;

    const getProperties = async () => {
      const user = await getUserById(userId);
      this.setState({ user });

      const properties = user.properties;

      //sort properties by post time
      const compare = (a, b) => {
        if (a.postDate < b.postDate) return 1;
        if (a.postDate > b.postDate) return -1;
        return 0;
      };

      properties.sort(compare);

      const inspections = user.inspections;
      //put all the properties in inspections into an array
      const inspectionProperties = await Promise.all(
        inspections.map(async (inspection) => {
          const property = await getPropertiesById(inspection.property);
          return property;
        }),
      );

      inspectionProperties.sort(compare);

      //check if it should be landlord's listing page or tenant's inspection list
      if (this.props.isListing) {
        this.setState({ properties, title: 'My Listing' });
      } else {
        this.setState({ properties: inspectionProperties, title: 'My Inspection' });
      }
    };
    getProperties();
  }

  //Delete property/inspection button
  handleDelete = async (e, propertyId) => {
    e.preventDefault();
    this.setState({ isPopUp: true, deletingPropertyId: propertyId });
  };

  //Delete property/inspection truly at the pop up warning window
  handleDeleteTrue = async (e) => {
    e.preventDefault();
    const propertyId = this.state.deletingPropertyId;

    if (this.props.isListing) {
      await deletePropertyById(propertyId);
    } else if (this.props.isInspection) {
      const user = this.state.user;
      const inspections = user.inspections;
      const inspection = inspections.find((inspection) => (inspection.property = propertyId));
      await deleteInspectionById(inspection._id);
    }

    const newProperties = this.state.properties.filter((property) => property._id !== propertyId);
    this.setState({ properties: newProperties });

    this.setState({ isPopUp: false });
  };

  handleCancel = () => {
    this.setState({ isPopUp: false });
  };

  render() {
    const properties = this.state.properties;

    if (!properties) return <div>Sorry we did not find any result</div>;

    return (
      <>
        <ControlledPopUp
          isPopUp={this.state.isPopUp}
          onDeleteTrue={this.handleDeleteTrue}
          onCancel={this.handleCancel}
        />
        <Container>
          <NoShadowWrapper>
            <h1>{this.state.title}</h1>
            {this.props.isListing ? (
              <Button as="a" href="/property/post" size="140px" height="50px" primary>
                +Create Listing
              </Button>
            ) : null}
          </NoShadowWrapper>
          {properties?.length > 0 ? (
            <>
              <PropertyHeader />
              {properties.map((property) => {
                return (
                  <PropertyDetailEditable
                    key={property._id}
                    property={property}
                    onDelete={this.handleDelete}
                    isListing={this.props.isListing}
                  />
                );
              })}
            </>
          ) : (
            <h3>You have no item for now</h3>
          )}
        </Container>
      </>
    );
  }
}

ListedProperties.propTypes = {
  isListing: PropTypes.bool,
};

export default ListedProperties;
