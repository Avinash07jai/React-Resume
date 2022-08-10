import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Collapse } from 'bootstrap';

const Home = () => {
  return (
    <>
      <Container className="home">
        <Row>
          <Col>
            <h1>M.E.R.N Stack Developer</h1>
            <h2>Front End Developer</h2>
            <br></br>
            <img src="https://www.appsquadzeducation.com/blog/wp-content/uploads/mern-stack-appsquadz-education-350x249.png" />
          </Col>
          <Col>
            <h1>Avinash Jaiswal</h1>
            <h2> Contact No:- 9702733894</h2>
            <h3>avinash07.j@gmail.com</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;
