import styled from "styled-components";

export const LayoutWrapper = styled.div`
  position: fixed;
  height: 100vh;
  z-index: -1;
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  background-color: #ffffff;
`;

export const ImageWrapper = styled.img`
  position: fixed;
  bottom: 0;
  height: 70%;
  width: auto;
  right: 0;
`;