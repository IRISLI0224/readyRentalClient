import React, {useState} from "react";
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
    How to use this slider:
        Initially, when this component is called, the width and height both have to be
        defined as the component's properties. Then, a single javascript document needs
        to be created to store images which will be displayed inside the slider. The format
        of the storing images file is in line with Json sytle.
    Note: 
        1)The icons for buttons which help to slide are default and unchangable.
        2)Images inside the silder should have a same width and height. Otherwise,
        the frame of slider will be changed as changing to next/prev image.
    Example for the single javascript document structure:
        ./components/you_component/index.js;
        ./components/you_component/you_component.js;
        ./components/you_component/single_js_document.js;
    Example for the inside of the single javascript document:
        export const name = [{image: "path"},{image: "path"}]
    Example for calling the Slider:
        import { single_js_document } from './single_js_document.js;
        <Slider slides={single_js_document} width="1px" height="1px" />
*/
const Slider = styled.section`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props)=> props.width};
`;

const Propi = styled.img`
    width: 100%;
    object-fit: scale-down;
`;

const RightArrow = styled(BsChevronRight)`
    position: absolute;
    top: 50%;
    right: 2%;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    

    &:hover{
        color: #000;
    }
`;

const LeftArrow = styled(BsChevronLeft)`
    position: absolute;
    top: 50%;
    left: 2%;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    &:hover{
        color: #000;
    }
`;


const ImageSlider = ({slides, width}) => {
    const [current, setCurrnt] = useState(0);
    const length = slides?.length;
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
        <Slider width={width}>
            <LeftArrow onClick={prevSlide}/>
            <RightArrow onClick={nextSlide}/>
            {slides.map((slide, index) =>{
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                            {index === current && (<Propi src={slide} alt="properties"/>)} 
                        </div>
                    )
                })
            }
        </Slider>
    )
};

//To check weather the height and width are both defined
ImageSlider.propTypes = {
    width: PropTypes.string.isRequired,
};

export default ImageSlider;