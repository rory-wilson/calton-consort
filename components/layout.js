import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Head from "next/head";

export default ({ title, heading, children }) => {
    const pageTitle = `${title} - Calton Consort`;
    return (
  <>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <Navbar bg="dark" variant="dark" expand="lg" id="navigation">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/static/img/logo_white.png" fluid />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/concerts">Past concerts</Nav.Link>
            <Nav.Link href="/about">Meet us</Nav.Link>
            <Nav.Link href="/contact">Get in touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {heading && <div className='page-heading' style={{ 'backgroundImage': `url(${heading})`}}>
        <Container>
            <Row>
                <Col><h1>{title}</h1></Col>
            </Row>
        </Container>
    </div>}
    <main>{children}</main>
    <section className="mailinglist p-5">
      <Container>
        <Row className="align-items-end">
          <Col sm={9}>
            <h2>Stay connected to Calton</h2>
            <p className="lead">Subscribe to our mailing list for updates about our upcoming concerts</p>
          </Col>
          <Col sm={3}>
            <Button variant="outline-light" size="lg" href="mailto:caltonconsort@gmail.com?subject=Subscribe to CC Email list">Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <footer>
      <Container>
        <Row>
          <Col>
            <h2>Supported by</h2>
            <img src="/static/img/making_music_new.png" height="100" />
          </Col>
          <Col>
            <p>© 2022 Calton Consort</p>
            <p>
              <a
                className="social twitter"
                href="https://twitter.com/CaltonConsort"
              >
                Twitter
              </a>
              <a
                className="social facebook"
                href="https://www.facebook.com/caltonconsort/"
              >
                Facebook
              </a>
              <a
                className="social youtube"
                href="http://www.youtube.com/UCRJZKhdHjI1VqPwD1hrx7_w"
              >
                You Tube
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    <script language="javascript" src="/static/js/navbar.js"></script>
  </>
);
    }
