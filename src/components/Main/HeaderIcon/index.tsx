import React from 'react'
import styled from 'styled-components'

const HeaderIconComp = styled.div`
    color: var(--first-color);
    font-size: 1.25rem;
    cursor: pointer;
    margin-left: 15px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
    color: var(--first-color-alt);
  }
`

const HeaderIcon = ({onClick, children}:any) => {
    return (
        <HeaderIconComp onClick={(e: any) => { onClick()}}>
            {children}
        </HeaderIconComp>
    )
}

export default HeaderIcon