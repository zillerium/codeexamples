import { LinkContainer } from 'react-router-bootstrap';
import flowswap from './flowswap.png';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ArrowRight, WalletFill, Wallet2 } from 'react-bootstrap-icons';

const NavBar = () => {
  const cart = useContext(CartContext);

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={flowswap} className="img-fluid" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/admin">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/invest">
              <Nav.Link>Settle</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/investments">
              <Nav.Link>Trades</Nav.Link>
            </LinkContainer>
	    <NavDropdown  title="My Assets" id="basic-nav-dropdown" className="dropdown-menu-dark">
              <LinkContainer to="/addasset">
                <NavDropdown.Item className="text-dark">Add Asset</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/listassets">
	          <NavDropdown.Item className="text-dark">List Assets</NavDropdown.Item>

              </LinkContainer>
	    </NavDropdown>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
               <LinkContainer to="/search1">
                  <Nav.Link>Search</Nav.Link>
               </LinkContainer>
	     </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
