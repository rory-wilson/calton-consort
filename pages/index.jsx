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
      style={{ backgroundImage: "url(/static/backgrounds/mar-25.jpg)",}}
    >
      <div className="text-right position-absolute hero-copy">
        <h1 className="display-5 text-light">
          <Container><Row><Col>Lamentations</Col></Row></Container>
        </h1>
        <Container><Row><Col lg={8}>
          <p className="lead text-light">Tallis, Sheppard, Whitacre, Rebecca Dale.</p>
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
                src="https://www.youtube.com/embed/RMNkhTEHrgA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <h2>Upcoming Concerts</h2>

            <Upcoming title="Lamentations" date="Sat 22nd March 2024 7.30pm"
            footer={ <div className="d-grid gap-2"> Tickets £15 (£12 conc.). Under 18s free! 
              <Button variant="success" href="https://www.ticketsource.co.uk/calton-consort">
              Buy tickets
              </Button></div>} >
              A choral programme of ancient and contemporary perspectives on love, loss, and faith.
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
