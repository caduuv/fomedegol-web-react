import React from 'react';
import Sidebar from '../Sidebar';
import JuniorSoccer from '../../../assets/junior_soccer.svg';
import * as C from './styles';


const Background = () => {
  return (
    <C.LayoutWrapper>
      <C.ContentWrapper />
      <Sidebar />
      <C.ImageWrapper src={JuniorSoccer} alt="Junior Soccer" />
    </C.LayoutWrapper>
  );
};

export default Background;

