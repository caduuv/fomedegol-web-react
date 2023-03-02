import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background-color: #f2f2f2;

`;

export const SidebarGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to bottom, #A9FDAC, #44CF6C);
  opacity: 0.8;
  z-index: -1;
`;