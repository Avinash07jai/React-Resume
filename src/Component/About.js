import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';


const About = () => {
  return (
    <>
      <Container className='about'>
        <Badge bg="primary" ><h4>10<sup>th</sup></h4></Badge>
        <h2>S.S.C</h2>
        <h4>Maharashtra broad</h4>
        <h4>Mumbai University</h4>
        <br></br>
        <Badge bg="primary"><h3>12<sup>th</sup></h3></Badge>
        <h2>H.S.C</h2>
        <h4>Maharashtra broad</h4>
        <h4>Mumbai University</h4>
        <br></br>
        <br></br>
        <Badge bg="primary"><h3>Diploma in Electrical Engineering</h3></Badge>
        <h4>Kaling University</h4>
      </Container>

    </>
  )
}

export default About;
