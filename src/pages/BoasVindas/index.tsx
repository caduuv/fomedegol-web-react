import React from 'react'
import GameDay from '../../assets/game_day.svg'
import styled from 'styled-components'
import Container from '../../components/Common/Container'

const ImageWrapper = styled.img`
  max-width: 45%;
`

const BoasVindas = () => {
  return (
    <Container>
        <ImageWrapper src={GameDay}/>
    </Container>
  )
}

export default BoasVindas