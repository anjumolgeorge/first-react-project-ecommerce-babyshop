import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userLogin } from '../App';
import { toast } from 'react-toastify';
import { NavDropdown } from 'react-bootstrap';
import { LiaOpencart } from "react-icons/lia";
import { GrUserAdmin } from "react-icons/gr";
import { RiLoginCircleLine ,RiLogoutCircleLine} from "react-icons/ri";



function NavScrollExample() {
  const navigate = useNavigate();
  const { login, setLogin, setCart } = useContext(userLogin);

  const Logout = () => {
    if (login) {
      setLogin(false);
      setCart([]);
      toast.success('Logout Success');
    } else {
      navigate('/login');
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container fluid>
        <Navbar.Brand>
          <h2 style={{ color: 'red', fontFamily: 'cursive' }}>Baby World</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => navigate('/Shops')}>Shop</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="icons" style={{ justifyContent: 'end' }}>
          <Nav style={{ gap: '0.6rem', alignItems: 'center' }}></Nav>

          <div
            onClick={login?() => navigate('/cart'):() => navigate('/login')}
            style={{ fontSize: '29px', marginRight: '1rem' }}
            title="Cart"
          >
            <LiaOpencart />

          </div>

          {login ? (
            <NavDropdown
              style={{ fontSize: '27px', marginRight: '1rem' }}
              title={<RiLogoutCircleLine
              onClick={Logout} />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">{login && login.name}</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link
              onClick={() => navigate('/login')}
              style={{ fontSize: '29px', marginRight: '1rem' }}
              title="login"
            >
             <RiLoginCircleLine />

            </Nav.Link>
          )}

          <Nav.Link
            style={{ fontSize: '29px', marginRight: '1rem' }}
            onClick={() => navigate('/adminlogin')}
            title="Admin"
          >
           <GrUserAdmin />

          </Nav.Link>

          <Nav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

