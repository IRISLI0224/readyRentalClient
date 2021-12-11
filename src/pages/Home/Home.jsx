import React from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
import { getAllProperties } from '../../config/Properties'

const Container = styled.div`
  overflow: hidden;
  width: 45rem;
  height: 42rem;
  border-radius: 4rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
  display: flex;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };

  }
  
  componentDidMount(){
    this.getPropertiesInfo();
  }

  async getPropertiesInfo() {
    this.setState({
      properties: await getAllProperties(),
    });
  }
  
  render(){
    const {properties}=this.state;
    return(
     <Container>
       {properties.map((property,index) => (
          <PropertyCard PropertyInfo={property} key={index}></PropertyCard >
        ))}
     </Container>
    )
  }

}
export default Home;
