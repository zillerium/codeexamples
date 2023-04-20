import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'

const About = () => {



  return (
    <div >

<Container className="mt-5">
      <div >
	  <h1>About Us</h1>
	  <Row>
	  <Col>
                 <p>Doramo is an asset ledger. This site lists assets in the blockchain as a reference point. This is also issued as an NFT.
</p>
          </Col>
	  </Row>
	  <Row>
	  <Col></Col>
	  <Col className="d-flex justify-content-center">
	  <ReactPlayer url="https://www.youtube.com/watch?v=X30RLvIDbfU" />

	  </Col>

	  <Col></Col>


	  </Row>

      </div>
	  </Container>
    </div>
  );
}

export default About;
