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
      style={{ backgroundImage: "url(/static/backgrounds/jun-26.jpg)",}}
    >
      <div className="text-right position-absolute hero-copy">
        <h1 className="display-5 text-white">
          <Container><Row><Col>concerto for choir</Col></Row></Container>
        </h1>
        <Container><Row><Col lg={8}>
          <p className="text-white">13th June 2026</p>
          <p>
            <Button variant="secondary" size="lg" href="https://www.ticketsource.co.uk/calton-consort">
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
                src="https://www.youtube.com/embed/UQ4-U0dV9zo"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <h2>Upcoming Concerts</h2>
            <Upcoming title="Concerto for choir" date="Sat 13th june 2026 7.30pm"
            footer={ <div className="d-grid gap-2"> Tickets £15 (£12 conc.). Under 18s free! 
              <Button variant="success" href="https://www.ticketsource.co.uk/calton-consort">
              Buy tickets
              </Button></div>} >
              From the monumental Slavonic intensity of Schnittke’s Concerto for Choir to the ethereal Icelandic atmospheres of Anna Thorvaldsdóttir’s Heyr þú oss á himnum and the meditative stillness of Galina Grigorjeva’s On Leaving, this program offers an hour of reflection and sonic depth in the heart of the Royal Mile.
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
