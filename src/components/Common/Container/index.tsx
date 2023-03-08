import React from 'react'
import styled from 'styled-components'


const ContentBox = styled.div`

    background-color: white;
    padding: 2rem;
    bottom: 0;
    margin-top: 18pt;
    z-index: -2;
    justify-content: center;
    align-items: center;
    display: flex;

    @media screen and (min-width: 768px) {
        margin: calc(var(--header-height) + 3rem) calc(108px - var(--nav-width)) calc(108px - var(--nav-width)) 108px;
    }

`
const Inner = styled.div`
    position: relative; height: auto;

`

const Container = ({ children }: any) => {
    return (
        <ContentBox>
                {children}
        </ContentBox>
    )
}

export default Container