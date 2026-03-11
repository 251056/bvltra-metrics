import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="glass-nav position-fixed">
      <Container fluid>
        <Navbar.Brand href="#" style={{ marginLeft: '15px', marginTop: '5px' }}>
          <img 
            src="/icon.png" 
            alt="Logo"
            // review size of the logo
            width="24"
            height="24"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="navbarScroll" className="circle-toggle" />
        
        <Navbar.Collapse id="navbarScroll">
          {/* Note: Original was 'gap-4' and 'align-items-center' to space the links evenly */}
          <Nav
            className="me-auto my-2 my-lg-0 gap-0 align-items-center"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: 'white', paddingLeft: '20px', paddingRight: '20px' }}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white', paddingLeft: '20px', paddingRight: '20px' }}>About</Nav.Link>
            <Nav.Link href="#action3" style={{ color: 'white', paddingLeft: '20px', paddingRight: '20px' }}>Projects</Nav.Link>
          </Nav>
          
          <Form className="d-flex gap-2 align-items-center">
            {/* Input */}
            <Form.Control
              type="search"
              placeholder="Search"
              className="glass-input"
              aria-label="Search"
            />
            {/* Search Button */}
            <Button variant="outline-light" className="circle-search-btn">
              {/* Raw SVG of a magnifying glass */}
              {/* To do: Learn more about SVGs */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;