import { Nav, NavLink, NavMenu } from "./style";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink exact to="/dashboard" activeStyle>
            diário
          </NavLink>
          <NavLink to="/dashboard/habits" activeStyle>
            hábitos
          </NavLink>
          <NavLink to="/dashboard/groups" activeStyle>
            grupos
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
