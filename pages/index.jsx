import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../components/layout";
import Listen from "../components/listen";
import Upcoming from '../components/upcoming';

export default () => (
  <Layout title="Home">
    <section
      id="top"
      className="hero position-relative"
      style={{ backgroundImage: "url(/static/backgrounds/jun_24.jpg)",}}
    >
      <div className="text-right position-absolute hero-copy">
        <h1 className="display-5">
          <Container><Row><Col>Choral Pride</Col></Row></Container>
        </h1>
        <Container><Row><Col> <p className="lead">A concert celebrating Pride Month featuring works by Kerry Andrew, <br/> Samuel Barber, Michael Tippett and Judith Weir.</p></Col></Row></Container>
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

            <Upcoming title="Choral Pride" date="Sat 15th June 2024 7.30pm">
              A concert celebrating Pride Month featuring works by LGBTQ+ composers and allies.
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
