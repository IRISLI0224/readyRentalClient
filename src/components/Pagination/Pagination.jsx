import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

//solution from:https://www.youtube.com/watch?v=6DtBw3PaeHs
const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`

const Page = styled.ul`
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0px;
`
const BsChevronLeft1 = styled(BsChevronLeft)`
    font-size: 1.2rem;
    padding-right: 8px;
    padding-top: 8px;
    font-weight: 500;
`
const BsChevronRight1 = styled(BsChevronRight)`
    font-size: 1.2rem;
    padding-left: 8px;
    padding-top: 8px;
    font-weight: 500;
`

const PageList = styled.li`
    float: left;
    font-weight: 500;
    min-width: ${props => (props.pointer ? `6.5rem` : `2.5rem`)};
    height: 2.5rem;
    border: 1px solid;
    // justify-content: center;
    line-height: 2.25rem;
    border-radius: 5%;
    margin: 0px 8px;
    display: ${props => props.status === 'end' ? `none` : `inline-block`};
    color: ${props => props.active === 'true' ? `#fff` : `#333`};
    border-color: ${props => props.active === 'true' ? `#a30000` : `#e6e6e6`};
    background: ${props => props.active === 'true' ? `#a30000` : `#fff`};
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

    &:active{
        opacity: 0.8;
    }
`

const Details = styled.p`
    margin-left: 8px;
    margin-top: 8px;
    font-weight: 500;
`

const renderData = (data) => {
    return (
        <ul>
            {data.map((todo, index) => {
                return <li key={index}>{todo.title}</li>
            })}
        </ul>
    )
}


const Pagination = (props) => {
    //***fake data state */
    const [data, setData] = useState([]);//input data management, from ajax request
    const [currentPage, setcurrentPage] = useState(1);// selected current page management, from clicking by users
    const [itemsPerpage, setitemsPerpage] = useState(5);// the interval of displayed items in each page(e.g. item 1, item 2, item 3, item 4, item 5 in each page when useState(5))

    const [pageNumberLimit, setpageNumberLimit] = useState(5);// the interval of displayed pages(e.g. 1 2 3 4 5 ... =>when useState(5))
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);// max number managent, for moving the pagination(e.g 1 2 3 4 5... => 6 7 8 9 10... the max interval of each group is 5(10-5))
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);// min number managent, for moving the pagination(e.g 1 2 3 4 5... => 6 7 8 9 10... the min interval of each group is 5(6-1))
    /******click handler */
    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    }

    //***********total pages should have based on the volumn of data divided by interval(5 in this case)  */
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerpage); i++) {
        pages.push(i);
    }
    /**** rendering pages number based on total pages calculated by above division*/
    const renderPageNumbers = pages.map((number) => {

        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <PageList key={number} id={number} onClick={handleClick} active={currentPage === number ? 'true' : ''}>{number}</PageList>
            )
        } else {
            return null;
        }
    })

    //***********items in each page should be displayed, slicing total data to allocate to each page*/
    const indexOfLastItem = currentPage * itemsPerpage;
    const indexOfFirstItem = indexOfLastItem - itemsPerpage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    //********data input************/
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    //********next&prev************/
    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    };
    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    };
    //********incretment for ... right************/
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip;</li>
    }
    //********incretment for ... left************/
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip;</li>
    }
    /******The first number should be displayed when the group of pages are lager than the interval (5 in the case)**/
    const handleFirstbtn = () => {
        setcurrentPage(1);
        setmaxPageNumberLimit(5);
        setminPageNumberLimit(0);
    }

    let pageFirstNumber = null;
    if (maxPageNumberLimit > pageNumberLimit) {
        pageFirstNumber = <PageList key={1} id={1} onClick={handleFirstbtn} active={currentPage === 1 ? 'true' : ''}>{1}</PageList>;
    }

    /******The last number should be displayed when the group of pages are the largest group(pages.length)(40 in the case)**/
    const handleLastbtn = () => {
        setcurrentPage(pages.length);
        setmaxPageNumberLimit(pages.length);
        setminPageNumberLimit(pages.length - pageNumberLimit);
    }

    let pageLastNumber = <PageList key={pages.length} id={pages.length} onClick={handleLastbtn} active={currentPage === pages.length ? 'true' : ''}>{pages.length}</PageList>;
    if (maxPageNumberLimit === pages.length) {
        pageLastNumber = null;
    }
    // dataOut(currentPage,itemsPerpage,data.length);
    return (
        <Main>
            <Page>
                <PageList pointer active="true" onClick={handlePrevbtn} status={currentPage === pages[0] ? 'end' : ``}>
                    <BsChevronLeft1 />Previous
                </PageList>
                {pageFirstNumber}
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                {pageLastNumber}
                <PageList pointer active="true" onClick={handleNextbtn} status={currentPage === pages[pages.length - 1] ? 'end' : ``}>
                    Next<BsChevronRight1 />
                </PageList>
            </Page>
            <Page> <Details>Viewing {(currentPage - 1) * itemsPerpage + 1}-{currentPage * itemsPerpage} of {data.length} results</Details></Page>
            {renderData(currentItems)}
        </Main>
    )
}


export { Pagination };
