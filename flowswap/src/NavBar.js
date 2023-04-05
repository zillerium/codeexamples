import {Link, useMatch, useResolvedPath} from "react-router-dom"
import flowswap from './flowswap.png';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Button } from 'react-bootstrap';
import {ArrowRight, WalletFill, Wallet2} from 'react-bootstrap-icons';

const NavBar=() => {
	const cart = useContext(CartContext);

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="site-title">
            <img src={flowswap} className="img-fluid" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/admin">Register</Nav.Link>
            <Nav.Link to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link to="/invest">Invest</Nav.Link>
            <Nav.Link to="/investments">Investment</Nav.Link>
            <Nav.Link to="/addasset">Add Asset</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
	</Container>  
    </Navbar>
  );
};

 




const CustomLinks = ({to, children, ...props}) => {
   const path = window.location.pathname;
	const resolvedPath = useResolvedPath (to);
	const isActive = useMatch({ path: resolvedPath.pathname, end:true});
console.log("children = " + children);
console.log("children = " + children);
console.log("props = " + JSON.stringify({...props}));
   return (
      <li className={isActive ? "active" : ""}>
         <Link to={to} {...props}>
             {children}
	 </Link>
      </li>
   )
}

export default NavBar;
