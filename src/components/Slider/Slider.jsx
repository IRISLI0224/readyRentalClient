import React, {useState} from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
    How to use this slider:
        Initially, when this component is called, the width and height both have to be
        defined as the component's properties. Then, a single javascript document needs
        to be created to store images which will be displayed inside the slider. The format
        of the storing images file is in line with Json sytle.
    Note: 
        1)The icons for buttons which help to slide are defaulty and unchangable.
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
    height: ${(props)=> props.height};
`;

const Propi = styled.img`
    width: 100%;
    height: 100%;
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


const ImageSlider = ({slides, width, height}) => {
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
            {slides.map((slide, index) =>{
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

//To check weather the height and width are both defined
ImageSlider.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
};

export default ImageSlider;