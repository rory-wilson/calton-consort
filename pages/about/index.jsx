import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Layout from "../../components/layout";

export default function About() {
  return (
    <Layout
      title="Meet the Calton Consort"
      heading="/static/backgrounds/about.jpg"
    >
      <Container>
        <Row className="gy-4">
          <Col md={{ order: "last", span: 3 }}>
            <ListGroup variant="flush" className="cc-list-group sticky-md-top">
              <ListGroup.Item action href="#choir">
                Calton Consort
              </ListGroup.Item>
              <ListGroup.Item action href="#md">
                Musical Director
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9} sm={12}>
            <section className="padded pt-4">
              <p className="section-kicker">Since 2001</p>
              <h2 id="choir">Calton Consort</h2>
              <Row className="align-items-start gy-3">
                <Col md={3}>
                  <Image
                    src="/static/img/choir.jpg"
                    alt="Calton Consort"
                    roundedCircle
                    fluid
                    className="about-portrait"
                  />
                </Col>
                <Col>
                  <p className="page-intro">
                    Calton Consort has established itself as one of Edinburgh’s
                    most prominent chamber choirs, performing a varied and
                    challenging repertoire to high acclaim.
                  </p>
                  <p>
                    Performances are often a cappella and characterised by fresh
                    and dynamic interpretations of works from a wide range of
                    eras, with an emphasis on less frequently performed
                    compositions.
                  </p>
                  <p>
                    Calton Consort was founded in 2001 by 12 friends, who were
                    also singers, for a concert in aid of a church roof appeal.
                    The choir now comprises around 30 singers and typically
                    performs three concerts a year including appearances at the
                    Edinburgh Festival Fringe.
                  </p>
                </Col>
              </Row>
            </section>

            <section className="padded">
              <p className="section-kicker">Conductor</p>
              <h2 id="md">Musical Director</h2>
              <Row className="align-items-start gy-3">
                <Col md={3}>
                  <Image
                    src="/static/img/rory.jpg"
                    alt="Rory Wilson"
                    roundedCircle
                    fluid
                    className="about-portrait"
                  />
                </Col>
                <Col>
                  <h3>Rory Wilson</h3>
                  <p>
                    Born in Edinburgh, Rory Wilson is a tenor and choral
                    conductor.
                  </p>
                  <p>
                    Rory is currently co-director of the chamber choir Coro
                    Edina and has previously been the music director of the
                    Edinburgh University Renaissance Singers. He is also a
                    regular guest conductor at St. Giles’ Cathedral and the
                    Robin Chapel.
                  </p>
                  <p>
                    Recent projects include: a tour of Orkney and Shetland;
                    Victoria Requiem and Tenebrae Responsories; MacMillan
                    Strathclyde Motets and Carver O Bone Jesu; Brahms Ein
                    Deutsches Requiem; Mozart Requiem; Bach Magnificat and an
                    online concert of Byrd, Bruckner and Stanford.
                  </p>
                  <p>
                    In 2020 he received a commendation from the Royal
                    Philharmonic Society Inspiration Awards for his work on
                    virtual choirs during the coronavirus pandemic.
                  </p>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
