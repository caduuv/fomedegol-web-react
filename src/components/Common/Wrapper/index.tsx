import React from 'react';
import * as C from './styles';

function Wrapper({ children }: any) {
    return (
        <C.OutsideWrapper>
            <C.Wrapper>
                {children}
            </C.Wrapper>
        </C.OutsideWrapper>
    );
}

export default Wrapper;