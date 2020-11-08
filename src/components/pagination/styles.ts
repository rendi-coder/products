import styled from 'styled-components';

const currentPageBackground = 'linear-gradient(180deg, #30A5E7 0%, #0059D6 100%)';

export const PaginationContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const PageItem = styled.button<{currentPage: any}>`
    outline: none;
    border: none;
    background: ${({currentPage}) => currentPage ? currentPageBackground : '#fff'};
    color:  ${({currentPage}) => currentPage ? '#fff' : '#30A5E7'};
    padding: 3px 0;
    width: 25px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    & > .page-number {
        
    }
    &:hover {
        cursor: pointer;
    }
`;