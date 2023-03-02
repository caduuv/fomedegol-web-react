import styled from "styled-components";

export const Button = styled.button`
    background-color: #44CF6C;
    border: none;
    border-radius: 15px;
    color: #000000;
    font-weight: 600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
    width: 200px;
    height: 50px;
    font-size: 18px;
    margin-bottom: 10pt;
    cursor: pointer;

    :hover {
        background-color: #A9FDAC;
    }
`

export const DisabledButton = styled.button`
    background-color: lightgrey;
    border: none;
    border-radius: 15px;
    color: grey;
    font-weight: 600;
    transition: 0.3s;
    width: 200px;
    height: 50px;
    font-size: 18px;
    margin-bottom: 10pt;
`