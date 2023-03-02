import React from 'react';
import * as C from './styles';

interface ButtonProps  {
    text: string;
    onClick: (e: any) => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    ref?: any;
}

const ConfirmationButton = (props: ButtonProps) => {

    const {text, onClick, type = "button", ref} = props;
    
    return (
        <C.Button ref={ref} type={type} onClick={onClick}>
            {text}
        </C.Button> 
    );
}

export default ConfirmationButton;