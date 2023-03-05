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
      className="hero position-relative"
      style={{ backgroundImage: "url(/static/backgrounds/apr-23.jpg)",}}
    >
      <div className="text-right position-absolute hero-copy">
        <h1 className="display-5">
          <Container><Row><Col>holst and howells</Col></Row></Container>
        </h1>
        <Container><Row><Col> <p className="lead">Imogen Holst: Mass in A minor<br/> Howells: Requiem</p></Col></Row></Container>
      </div>
      <div className='image-credit'>
      <Container><Row><Col>
        <a className='link-light' href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=water%20nature&position=0&from_view=keyword">Image by wirestock</a> on Freepik
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
                src="https://www.youtube.com/embed/Zfe5YVDU5WM"
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
                  holst and howells
                </Card.Title>
                <Card.Subtitle className="fs-5 mb-3">
                  Saturday 1st April 2023, 7.30pm <br />
                 Canongate Kirk Royal Mile Edinburgh
                </Card.Subtitle>
                
                <Card.Text className="fs-6">
                  Tickets £15 (£12 concessions) on the door. Under 18s free!
                </Card.Text>
               
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
