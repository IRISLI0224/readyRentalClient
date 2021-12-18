import React from 'react';
import Slider from '../../components/Slider';
import { SliderData } from '../../components/ListCard/SliderData';
import styled from 'styled-components';
import Card from '../../components/ListCard';
import {Button} from '../../hoc/Button'




// class SearchResult extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       properties: [],
//     };
//   }


//   render() {
//     return (
//      <div><Slider slides={SliderData}></Slider></div>
//     );
//   }
// }

const SearchResult = () => {
  return (
    <>
      <Card brand=".\public\experimental_img\brand.PNG"
        agentName="Frank"></Card>
      
      <Button primary onClick={()=> {return null}} size="500px" height="500px">
        <Slider slides={SliderData} width="300px" height="400px" />
      </Button>
    </>

  )
}
export default SearchResult;
