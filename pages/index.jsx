import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Layout from "../components/layout";
import Listen from "../components/listen";
import Upcoming from "../components/upcoming";
import { getHomepage } from "../lib/contentful";
import moment from "moment";

export async function getStaticProps() {
  const homepage = await getHomepage();
  console.log({homepage})
  return {
    props: {
      homepage
    },
  }
}

export default function Home({homepage} ) {
  return (
    <Layout title="Home" className="homepage">
      <section
        id="top"
        className="hero"
        style={{ backgroundImage: "url(https:" + homepage.mainImage.fields.file.url + ")" }}
      >
        <div className="hero-copy">
          <Container>
            <Row>
              <Col lg={8}>
                <p className="eyebrow">Next concert · {homepage.venue}</p>
                <h1>{homepage.heading}</h1>
                <p className="hero-meta">{moment(homepage.nextConcertDateTime).format('dddd DD MMM YYYY HH:mm')}</p>
                <p>
                  {homepage.description}
                </p>
                <p className="mt-4 mb-0">
                  <Button
                    variant="primary"
                    size="lg"
                    href="https://www.ticketsource.co.uk/calton-consort"
                    className="me-2 mb-2"
                  >
                    Buy tickets
                  </Button>
                 
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section id="concerts" className="padded">
        <Container>
          <Row className="gy-4">
            <Col lg={7}>
              <p className="section-kicker">Watch</p>
              <h2 className="mb-3">From the archive</h2>
              <div className="videoWrapper">
                <iframe
                  width="560"
                  height="349"
                  src="https://www.youtube.com/embed/UQ4-U0dV9zo"
                  title="Calton Consort performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col lg={5}>
              <p className="section-kicker">Coming up</p>
              <h2 className="mb-3">Upcoming concerts</h2>
              <Upcoming
                title={homepage.heading}
                date={moment(homepage.nextConcertDateTime).format('dddd DD MMM YYYY HH:mm')}
                footer={
                  <div className="d-grid gap-2">
                    Tickets £15 (£12 conc.). Under 18s free.
                    <Button
                      variant="primary"
                      href="https://www.ticketsource.co.uk/calton-consort"
                    >
                      Buy tickets
                    </Button>
                  </div>
                }
              >
                {homepage.description}
              </Upcoming>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="listen" className="padded">
        <Listen />
      </section>

      <section id="about-brief" className="padded">
        <Container>
          <Row className="align-items-center gy-4">
            <Col md={5}>
              <img
                src="/static/img/choir.jpg"
                alt="Calton Consort in rehearsal"
                className="img-fluid"
              />
            </Col>
            <Col md={7}>
              <p className="section-kicker">The choir</p>
              <h2>Edinburgh’s go-to chamber choir</h2>
              <p className="page-intro">
                Founded in 2001 by twelve friends for a church roof appeal,
                Calton Consort is now around thirty singers. Performances are
                often a cappella, with fresh readings of works that are heard
                too rarely.
              </p>
              <p>
                Three concerts a year, including the Edinburgh Festival Fringe —
                and a reputation for taking on music that asks something of both
                choir and audience.
              </p>
              <Button variant="outline-dark" href="/about">
                Meet us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="review">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <blockquote>
                “The ‘go-to choir’ for challenging and engaging music”
              </blockquote>
              <p>Bachtrack</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="social">
        <Container>
          <Row>
            <Col>
              <a className="instagram" href="https://instagram.com/CaltonConsort">
                Instagram
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
                YouTube
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
