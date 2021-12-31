import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Selection = styled.select`
    width: 15vw;
    padding: 5px 2px;
    margin-left: 5px;
`

const Sorting = ()=>{
    return(
        <>
            <Selection>
                <option value=""></option>
                <option value="Price">Price(Lowest-Highest)</option>
                <option value="Price">Price(Highest-Lowest)</option>
            </Selection>
        </>
    )
}

export default Sorting;