import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  z-index: 1;
`;

export const NavLink = styled(Link)`
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 4px 16px;
  border-radius: 8px 8px 0 0;
  color: #fafafa;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 300ms ease-in-out;

  &.active {
    color: #666666;
    background-color: #f6efee;
  }

  &:hover {
    color: #e365c1;
  }

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const NavMenu = styled.div`
  width: 50%;
`;
