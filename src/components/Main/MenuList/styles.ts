import { Link } from "react-router-dom";
import styled from "styled-components";

export const Asidebar = styled.div`
  position: fixed;
  top: 0;
  left: -30%;
  height: 100vh;
  width: var(--nav-width);
  background-color: var(--first-color);
  padding-top: 1rem;
  transition: 0.5s;
  
  @media screen and (min-width: 768px) {
    left: 0;
    padding: 1rem 0 0 0;
  }
  
  &.show {
    left: 0;
    @media screen and (min-width: 768px) {
      width: calc(var(--header-height) + 156px);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
`;

export const NavLogo = styled(Link)`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 2rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
  margin-bottom: 2rem;
  .nav-logo-icon {
    font-size: 1.25rem;
    color: var(--white-color);
    cursor: pointer;
    }
`;

export const NavLogoName = styled.div`
  font-weight: 700;
  color: var(--white-color);
`;