import React from 'react'
import GameDay from '../../../assets/game_day.svg'
import styled from 'styled-components'

const ImageWrapper = styled.img`
    width: 80%;
`

const BoasVindas = () => {
  return (
    <>
        <ImageWrapper src={GameDay}/>
    </>
  )
}

export default BoasVindas