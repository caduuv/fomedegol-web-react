import React from 'react';
import * as C from './styles';

const Input = (props: any) => {
    if (!props.error) {
        return (
            <C.Input
                value={props.value}
                ref={props.forwardedRef}
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}
                onKeyPress={props.onKeyPress}
                autoComplete="nope"
            />
        );
    } else {
        return (
            <C.InputError
                value={props.value}
                ref={props.forwardedRef}
                onChange={props.onChange}
                type={props.type}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                autoComplete="nope"
            />
        );
    }

}


export default Input;