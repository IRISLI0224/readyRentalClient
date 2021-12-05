import React from "react";
import { Component } from "react";
import styled from 'styled-components';
import Slider from "../Slider";
import { SliderData } from '../Slider/SliderData';

const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem 0px;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 30px;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


const RowTitle = styled.div`
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`;

const BrandImage = styled.img`
    max-width: 100%;
    display: block;
    height: 28px;
    margin: 11px;
`;

const AgentName = styled.p`
    margin-right: 80px;
    padding-right: 12px;
`;

const AgentIcon = styled.span`
    width: 78px;
    height: 78px;
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    border-color: white;
    border-width: 1px;
    display: inline-block;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1;
    overflow: hidden;
`;

const RowFrame = styled.div`
    width: 100%;
    position: relative;
`;

const AgentIconImg = styled.img`
    vertical-align: top;
    max-width: 100%;
`;

const PropertyImgImg = styled.img`
    max-width: 100%;
    object-fit: fill;
`;

const CarouselButtonLeft = styled.button`
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 2%;
    color: #fff;
    opacity: 0.75;
    cursor: pointer;
    transition: all 0.25s ease-out;
    border: none;
    background: none;
    font-size: 2.5rem;
    &:before{
        content: "/";
        display: inline-block;
        transform: rotate(28deg);
        position: absolute;
    }

    &:after{
        content: "/";
        display: inline-block;
        transform: rotate(-62deg);
        margin-top: 22px;
    }
    &:hover{
        color: #777;
    }
`;

const CarouselButtonRight = styled.button`
    position: absolute;
    z-index: 2;
    top: 40%;
    left:94%;
    color: #fff;
    opacity: 0.75;
    cursor: pointer;
    transition: all 0.25s ease-out;
    border: none;
    background: none;
    font-size: 2.5rem;
    &:after{
        content: "/";
        display: inline-block;
        transform: rotate(28deg);
        margin-top: 22px;
    }

    &:before{
        content: "/";
        display: inline-block;
        position: absolute;
        transform: rotate(-62deg);
    }
    &:hover{
        color: #777;
    }
`;

const RowResidencial = styled.div`
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const ContentDetail = styled.div`
    margin-bottom: 8px;
`;

const Price = styled.h2`
    margin-bottom: 8px;
    margin-top: 0px;
    font-size: 1rem;
    text-align: left;
`;

const Address = styled.p`
    margin: 0px;
    font-size: 0.5rem;
`;

const Structure = styled.div`
    display:flex;
    width: 100%;
`;

const HouseType = styled.p`
    margin: 0px;
    padding-left: 8px;
`;

const Position = styled.div`
    display: flex;
    padding-right: 8px;
    border-right: 1px solid rgb(207, 205, 205);
    align-items: center;
`;

const Bed = styled.div`
    &:before{
        content: "\\1F6CF";
    }
`;

const Bath = styled.div`
    &:before{
        content: "\\1F6BF";
        padding-left: 12px;;
    }
`;

const Car = styled.div`
    &:before{
        content: "\\01F697";
        padding-left: 12px;
        margin-bottom: 8px;
    }
`
const Star = styled.button`
    font-size: 2em;
    display: flex;
    justify-content: flex-start;
    padding: 0px;
    margin: -15px 0px;
    border: 0px;
    background-color: #fff;
    cursor: pointer;
`;

const Dots = styled.button`
    display: block;
    font-size: 2em;
    margin-top: -15px;
    border: 0px;
    background-color: #fff;
    padding-top: 20px;
    padding-right: 10px;
    transform: rotate(180deg);
    cursor: pointer;
`;

const LastFrame = styled.div`
    display: flex;
    align-items: star;
`;

const Cards = (props) => (
    <>
        <Card>
            <Row>
                <RowTitle>
                    <BrandImage src={props.brand} alt="icon" />
                    <div className="agent-name-and-photo">
                        <AgentName >{props.agentName}</AgentName>
                        <AgentIcon>
                            <AgentIconImg src={props.agentIcon} alt={props.agentName} />
                        </AgentIcon>
                    </div>
                </RowTitle>
            </Row>
            <RowFrame>
                {/* <div className="card-images"> */}
                    {/* <div className="card-images-carousel"> */}
                        {/* <PropertyImgImg src={props.propImg} alt={props.address} /> */}
                        <Slider slides={SliderData}></Slider>
                        {/* <CarouselButtonLeft/> */}
                        {/* <CarouselButtonRight/> */}
                    {/* </div> */}
                {/* </div> */}
            </RowFrame>
            <RowResidencial>
                <div className="row-residencial-content">
                    <ContentDetail>
                        <Price>{props.price}</Price>
                        <Address>{props.address}</Address>
                    </ContentDetail>
                    <Structure>
                        <Position>
                            <Bed>{props.bedNum}</Bed>
                            <Bath>{props.bathNum}</Bath>
                            <Car>{props.carNum}</Car>
                        </Position>
                        <HouseType>{props.typeProp}</HouseType>
                    </Structure>
                </div>
                <LastFrame>
                    <Star>☆</Star>
                    <Dots>...</Dots>
                </LastFrame>
            </RowResidencial>
        </Card>
    </>
)

export default Cards;
