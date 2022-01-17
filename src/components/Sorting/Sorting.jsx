import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FlexWrap from '../../hoc/FlexWrap';
import { Pagination } from '../../components/Pagination';
import TextStyle from '../../hoc/Text';
import { useLocation } from 'react-router-dom';
import backendApi from '../../api/backendApi';

const Selection = styled.select`
  width: 15vw;
  padding: 5px 2px;
  margin-left: 5px;
  margin-bottom: 16px;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
const FlexWrapSearch = styled(FlexWrap)`
  @media screen and (max-width: 1024px) {
    margin: 0px 16px;
  }
`;

const options = [
  { label: ``, value: `` },
  { label: `Price(Lowest-Highest)`, value: `Price(Lowest-Highest)` },
  { label: `Price(Highest-Lowest)`, value: `Price(Highest-Lowest)` },
];

let selected;
const Sorting = () => {
  const [value, setValue] = useState({ selectValue: `` });
  const location = useLocation();
  const [properties, setProperties] = useState([]);

  const _handleChange = (e) => {
    setValue({ selectValue: e.target.value });
    options.forEach((items, index) => {
      if (items.value === e.target.value) selected = index;
    });
    let sorted;
    switch (selected) {
      case 0:
        break;
      case 1:
        sorted = properties.sort((a, b) => {
          return a.rent - b.rent;
        });
        setProperties(sorted);
        break;
      case 2:
        sorted = properties.sort((a, b) => {
          return b.rent - a.rent;
        });
        setProperties(sorted);
        break;
      default:
        console.log('click problem');
    }
  };

  useEffect(() => {
    backendApi.get(`/properties${location.search}`).then((res) => setProperties(res.data));
  }, []);

  return (
    <>
      <FlexWrapSearch direction="row">
        <TextStyle>Sort</TextStyle>
        <Selection value={value.selectValue} onChange={_handleChange}>
          {options.map((i) => (
            <option value={i.value}>{i.label}</option>
          ))}
        </Selection>
      </FlexWrapSearch>
      <FlexWrapSearch direction="row">
        <Pagination properties={properties} />
      </FlexWrapSearch>
    </>
  );
};

export { Sorting };
