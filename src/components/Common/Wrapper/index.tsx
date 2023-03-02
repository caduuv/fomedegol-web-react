import React from 'react';
import * as C from './styles';

function Wrapper({children}:any) {
    return (
        <C.Wrapper>
            {children}
        </C.Wrapper>
    );
}

export default Wrapper;