import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';



const Navbar = () => {
  return (
    <>
      <nav>
        <Container className="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skill">Skill</Link>
        </Container>
      </nav>
    </>
  )
}

export default Navbar;
