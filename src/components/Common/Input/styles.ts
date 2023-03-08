import styled from "styled-components";

export const Input = styled.input`
    padding: 15px;
    font-size: 16px;
    border: 1px solid #272727;
    font-family: 'Quicksand', normal;
    border-radius: 15px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    ::placeholder {
        color: #272727;
        font-weight: 200;
        opacity: 0.8;
        }
    :focus {    
        outline-color: #44CF6C;
    }
`;

export const InputError = styled.input`
    padding: 15px;
    font-size: 16px;
    border: 1px solid red;
    
    border-radius: 15px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    ::placeholder {
        color: red;
        font-weight: 200;
        opacity: 0.8;
        }
    :focus {    
        outline-color: red;
    }
`;