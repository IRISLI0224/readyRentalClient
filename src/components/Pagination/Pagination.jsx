import React, {useState} from 'react';
import styled from 'styled-components';
const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: flex-start;
`

const Page = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`

const PageList = styled.li`
    float: left;
    width: 30px;
    height: 30px;
    border: 1px solid #e6e6e6;
    text-align: center;
    line-height: 30px;
    color: #333;
    cursor: pointer;

    &:first-of-type, &:last-of-type{
        width: auto;
        padding: 0px 5px;
    }

    &:first-of-type{
        margin-right:10px;
    }

    &:last-of-type{
        margin-left:10px;
    }

    &:hover{
        background-color: transparent;
    }
`
const Active = styled(PageList)`
    color:#fff !important;
    background: #54b0bd;
    border-color:#54b0bd !important;
`

const Create = (props)=>{
    //current page decoration
    // const [current, setCurrnt] = useState(0);
    const _pageCurrent = (num)=>{
        // setCurrnt(current + num);
        console.log(num);
    }
    //total numbers of page are assembled
    const {totalPage} = props.config;
    let pages = [];
    pages.push(<PageList key={0}>上一页</PageList>);
    for(let i=1; i<= totalPage;i++){
        pages.push(<PageList key={i} onClick={()=>_pageCurrent(i)}>{i}</PageList>)
    }
    pages.push(<PageList key={totalPage+1}>下一页</PageList>);
    return pages;
}

const Pagination =  (props)=>(
        <Main>
            <Page>
                <Create config={props.config}/>
            </Page>
        </Main>
    )

export default Pagination;