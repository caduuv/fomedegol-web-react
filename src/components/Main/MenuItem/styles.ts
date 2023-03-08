import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomNavLink = styled(Link)`
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 2rem;
    padding: 0.5rem 0 0.5rem 1.5rem;
    position: relative;
    color: var(--first-color-alt);
    transition: 0.5s;
    margin-bottom: 1.5rem;
    &:hover {
    color: var(--white-color);
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.active {
    color: var(--white-color);
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 38px;
    width: 3px;
    background-color: var(--white-color);
    transition: 0.5s;
  }
`
