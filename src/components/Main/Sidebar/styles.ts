import styled from "styled-components";

export const SidebarWrapper = styled.div<{ show: boolean }>`
    position: relative;
    margin: var(--header-height) 0 0 0;
    padding: 0 1rem;
    font-size: 1rem;
    transition: 0.5s;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    a {
    text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    @media screen and (min-width: 768px) {
        margin: calc(var(--header-height) + 1rem) 0 0 0;
        padding: 0 1rem 0 calc(var(--nav-width) + 2rem);
    }
    padding-left: ${(props) => props.show ? `calc(var(--nav-width)) + 1rem)` : '0'};

`

export const Header = styled.header<{ show: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: var(--header-height);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white-color);
    padding: 0 1rem;
    transition: 0.5s;
    padding-left: ${props => props.show ? `calc(var(--nav-width) + 1rem)` : `0`};
    
    @media screen and (min-width: 768px) {
        height: calc(var(--header-height) + 1rem);
        padding-left: ${props => props.show ? `calc(var(--nav-width) + 188px)` : `calc(var(--nav-width) + 2rem)`};
    }
`;

export const HeaderToggle = styled.div`
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--first-color);
    margin-left: 15px;
    @media screen and (min-width: 768px) {
        margin-left: 0;
    }
`;

export const ActionsWrapper = styled.div`
    display: flex;
    justify-content: right;
`;