import styled from "styled-components";

export const Title = styled.h2`
    font-size: 23pt;
    font-weight: 700;
    right: 0;
`;

export const Subtitle = styled.p`
    font-size: 12pt;
    font-weight: 300;
    margin-bottom: 15px;
    right: 0;
`;

export const ErrorMessage = styled.p`
    font-size: 10pt;
    font-weight: 600;
    max-width: 350px;
    color: red;
    right: 0;
`;

export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ForgotPassword = styled.p`
    font-size: 14px;
    color: #32A287;
    font-weight: bold;
    transition: 0.3s;
    margin-top: 4px;
    margin-bottom: 15px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

export const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CreateAccount = styled.p`
    font-size: 14px;
    color: #32A287;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;