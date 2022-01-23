import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Pagination } from '../../components/PaginationV2';
import TextStyle from '../../hoc/Text';
import { useLocation } from 'react-router-dom';
import backendApi from '../../api/backendApi';

const Listing = styled.div`
  display: inline-flex;
  width: 100%;
  font-size: 16px;
`;
const ListingLeft = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding-right: 15px;
  position: relative;
  padding-left: 30px;
  width: 100%;
  text-align: left;
`;
const ListingRight = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 15px;
  position: relative;
  padding-left: 15px;
  width: 100%;
`;
const Showing = styled.p`
  padding-left: 16px;
  margin-bottom: 0px !important;
  color: #696969;
  font-weight: 400;
`;
const Selection = styled.select`
  // margin-bottom: 30px;
  // @media screen and (max-width: 1024px) {
  //   width: 80%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
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
        //console.log('click problem');
    }
  };

  useEffect(() => {
    backendApi.get(`/properties${location.search}`).then((res) => setProperties(res.data));
  }, []);

  return (
    <>
      <Row>
        <Listing>
          <ListingLeft>
            <Showing>
              {properties.length} Showing
            </Showing>
          </ListingLeft>
          <ListingRight>  
            <TextStyle>Sort by</TextStyle>
            <Selection value={value.selectValue} onChange={_handleChange}>
              {options.map((i) => (
                <option key= {i.value} value={i.value}>{i.label}</option>
              ))}
            </Selection>
          </ListingRight>
        </Listing>
      </Row>
      <Row>
        <Pagination properties={properties} />
      </Row>
    </>
  );
};

export { Sorting };
