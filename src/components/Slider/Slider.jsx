import React, {useState} from "react";
import { SliderData } from "./SliderData.js";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import styled from 'styled-components';

const Slider = styled.section`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Propi = styled.img`
    width: 640px;
    height: 480px;
`;

const RightArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    &:hover{
        color: #000;
    }
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    &:hover{
        color: #000;
    }
`;


const ImageSlider = ({slides}) => {
    const [current, setCurrnt] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrnt(current=== length-1 ? 0:current +1);
    }

    const prevSlide = () => {
        setCurrnt(current=== 0 ? length-1:current -1);
    }

    if(!Array.isArray(slides)||slides.length<=0){
        return null;
    }

    return(
        <Slider>
            <LeftArrow onClick={prevSlide}/>
            <RightArrow onClick={nextSlide}/>
            {SliderData.map((slide, index) =>{
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                            {index === current && (<Propi src={slide.image} alt="propoerties"/>)} 
                        </div>
                    )
                })
            }
        </Slider>
    )
};

export default ImageSlider;