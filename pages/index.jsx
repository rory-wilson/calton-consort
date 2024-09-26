import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../components/layout";
import Listen from "../components/listen";
import Upcoming from '../components/upcoming';
import Button from "react-bootstrap/Button";

export default () => (
  <Layout title="Home">
    <section
      id="top"
      className="hero position-relative"
      style={{ backgroundImage: "url(/static/backgrounds/nov-24.jpg)",}}
    >
      <div className="text-right position-absolute hero-copy">
        <h1 className="display-5">
          <Container><Row><Col>path of miracles</Col></Row></Container>
        </h1>
        <Container><Row><Col lg={8}>
          <p className="lead">Calton Consort present this beautiful, thrilling and energetic work in the atmospheric setting of St. Giles’ Cathedral in a new immersive production.</p>
          <p>
            <Button variant="success" size="lg" href="https://www.ticketsource.co.uk/calton-consort">
            Buy tickets
            </Button>
         </p>
          </Col></Row></Container>
      </div>
    </section>
    <section id="concerts" className="padded">
      <Container>
        <Row> 
          <Col lg={8} sm={12}>
            <div className="videoWrapper">
              <iframe
                width="560"
                height="349"
                src="https://www.youtube.com/embed/dNp2Quhw_os"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <h2>Upcoming Concerts</h2>

            <Upcoming title="path of miracles" date="Sat 9th November 2024 7.30pm" where="St Giles' Cathedral, Edinburgh"
            footer={ <div className="d-grid gap-2"> Tickets £15 (£12 conc.). Under 18s free! <Button variant="success" href="https://www.ticketsource.co.uk/calton-consort">
              Buy tickets
              </Button></div>} >
            Joby Talbot’s Path of Miracles is a work of pilgrimage, describing four cardinal points on the famous Camino de Santiago, or the Way of St. James. 
            Written for 17 voices, it is a vocal tour-de-force and one of the greatest choral works of the 21st century.
            </Upcoming>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="listen" className="padded">
    <Listen/>
    </section>
    <section id="review" className="padded">
      <Container>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <blockquote>
              "The 'go-to choir' for challenging and engaging music"
            </blockquote>
            <p>BachTrack.com</p>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="social">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <a className="twitter" href="https://twitter.com/CaltonConsort">
              Twitter
            </a>
            <a
              className="facebook"
              href="https://www.facebook.com/caltonconsort/"
            >
              Facebook
            </a>
            <a
              className="youtube"
              href="http://www.youtube.com/UCRJZKhdHjI1VqPwD1hrx7_w"
            >
              You Tube
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);
