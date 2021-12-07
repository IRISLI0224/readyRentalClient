import React from 'react';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard';
<<<<<<< HEAD
import getAllProperties from '../../config/getAllProperties';
=======
import getAllProperties from '../../config/getAllProperties'
>>>>>>> 412209e (fix according to tutor's advice)

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
<<<<<<< HEAD
    //this.getPropertiesInfo();
  }

  componentDidMount() {
=======

  }
  
  componentDidMount(){
>>>>>>> 412209e (fix according to tutor's advice)
    this.getPropertiesInfo();
  }

  async getPropertiesInfo() {
    this.setState({
      properties: await getAllProperties(),
    });
  }
<<<<<<< HEAD

  render() {
    const { properties } = this.state;
    return (
      <Container>
        {properties.map((property, index) => (
          <PropertyCard PropertyInfo={property} key={index}></PropertyCard>
        ))}
      </Container>
    );
  }
=======
  
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

>>>>>>> 412209e (fix according to tutor's advice)
}
export default Home;
