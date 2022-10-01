import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Layout from "../components/layout";
import Listen from "../components/listen";

export default () => (
  <Layout title="Home">
    <section
      id="top"
      className="hero"
      style={{ backgroundImage: "url(/static/backgrounds/brahms.jpg)", backgroundPositionY: '-50px' }}
    >
      <div className="text-left">
        <h1 className="display-5 fw-bold visually-hidden">
          Ein deutsches Requiem
        </h1>
        <p className="visually-hidden">
          Saturday 12th November 2022, 7.45pm St Cutherbert's Church
        </p>
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
                src="https://www.youtube.com/embed/hGhqstume4w"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <h2>Upcoming Concerts</h2>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title className="fs-2 mb-3">
                  Brahms: Ein deutsches requiem
                </Card.Title>
                <Card.Subtitle className="fs-5 mb-3">
                  Saturday 12th November 2022, 7.45pm <br />
                  St Cutherbert's Church Lothian Road Edinburgh
                </Card.Subtitle>
                <Card.Text className="fs-6">
                  In Collaboration with Scottish Chamber Choir and Meadows
                  Chamber Orchestra.
                </Card.Text>
                <Card.Text className="fs-6">
                  Conducted By Peter Evans.
                </Card.Text>
                <Card.Link href="https://www.ticketsource.co.uk/whats-on?q=scottish%20Chamber%20choir">
                  By tickets at Ticket Source
                </Card.Link>
              </Card.Body>
            </Card>
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
              "The 'go-to choir' for challenging and engaging music"{" "}
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
