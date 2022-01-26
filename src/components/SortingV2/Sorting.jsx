import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Pagination } from '../../components/PaginationV2';
import { useLocation } from 'react-router-dom';
import backendApi from '../../api/backendApi';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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
  padding-top: 5px;
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

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const options = [
  // { label: ``, value: `` },
  { label: `Price (Low-High)`, value: `Price (Low-High)` },
  { label: `Price (High-Low)`, value: `Price (High-Low)` },
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
        sorted = properties.sort((a, b) => {
          return a.rent - b.rent;
        });
        setProperties(sorted);
        break;
      case 1:
        sorted = properties.sort((a, b) => {
          return b.rent - a.rent;
        });
        setProperties(sorted);
        break;
      default:
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
            <Select value={value.selectValue} label ="Sort By Price" onChange={_handleChange}>
            {options.map((i) => (
                <MenuItem key= {i.value} value={i.value}>{i.label}</MenuItem>
              ))}
            </Select>
            </FormControl>
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
