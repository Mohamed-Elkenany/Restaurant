import React,{useState} from "react"
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar({filterSea}) {
  const [search, setSearch] = useState("");
  const filterSearch = () => {
    filterSea(search)
    setSearch(" ");
  }
    return (
      <Row>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">مطعم عربي</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="me-2"
                  onChange={(e) => setSearch(e.target.value)}
                  defaultValue={search}
            />
                <Button onClick={()=>filterSearch()} className="me-2 bg-white text-black" >بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </Row>
  );
}

export default NavBar;