import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Head from "next/head";

export default function Layout({
  title,
  heading,
  children,
  className,
  showMailingList = true,
}) {
  const pageTitle = `${title} - Calton Consort`;

  return (
    <div className={className}>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Calton Consort — Edinburgh chamber choir performing challenging and engaging choral music."
        />
      </Head>

      <Navbar
        variant="dark"
        expand="lg"
        id="navigation"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/static/img/logo-white.png"
              alt="Calton Consort"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="cc-nav" />
          <Navbar.Collapse id="cc-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">Meet us</Nav.Link>
              <Nav.Link href="/concerts">Concerts</Nav.Link>
              <Nav.Link href="/contact">Get in touch</Nav.Link>
              <Nav.Link
                className="nav-cta"
                href="https://www.ticketsource.co.uk/calton-consort"
              >
                Tickets
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {heading && (
        <div
          className="page-heading"
          style={{ backgroundImage: `url(${heading})` }}
        >
          <Container>
            <Row>
              <Col>
                <h1>{title}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      <main>{children}</main>

      {showMailingList && (
        <section className="mailinglist py-5">
          <Container>
            <Row className="align-items-center gy-3">
              <Col lg={8}>
                <p className="section-kicker text-white-50 mb-2">Mailing list</p>
                <h2>Stay connected to Calton</h2>
                <p className="lead">
                  One or two emails per concert — dates, programmes and ticket
                  reminders. No noise.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Button
                  variant="outline-light"
                  size="lg"
                  href="mailto:caltonconsort@gmail.com?subject=Subscribe to CC Email list"
                >
                  Sign up
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <footer className="site-footer">
        <Container>
          <Row className="gy-4">
            <Col md={4}>
              <img
                src="/static/img/logo.png"
                alt="Calton Consort"
                className="footer-logo"
              />
              <p>
                Edinburgh chamber choir. Founded 2001. Around thirty voices,
                three concerts a year, including the Edinburgh Festival Fringe.
              </p>
              <p className="mb-0">
                <a
                  className="social instagram"
                  href="https://instagram.com/CaltonConsort"
                >
                  Instagram
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
                  YouTube
                </a>
              </p>
            </Col>
            <Col md={3}>
              <h3>Visit</h3>
              <ul className="footer-links">
                <li>
                  <a href="/about">Meet the choir</a>
                </li>
                <li>
                  <a href="/concerts">Past concerts</a>
                </li>
                <li>
                  <a href="/contact">Sing with us</a>
                </li>
                <li>
                  <a href="/hire">Music hire</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col md={5}>
              <h3>Supported by</h3>
              <img
                src="/static/img/making_music_new.png"
                alt="Making Music"
                height="72"
              />
              <p className="mt-3 mb-0 small">
                © {new Date().getFullYear()} Calton Consort ·{" "}
                <a href="mailto:caltonconsort@gmail.com">
                  caltonconsort@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      <script src="/static/js/navbar.js"></script>
    </div>
  );
}
