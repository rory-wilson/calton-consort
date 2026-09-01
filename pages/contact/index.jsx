import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Layout from "../../components/layout";

export default function Contact() {
  return (
    <Layout
      title="Get in touch"
      heading="/static/backgrounds/get-in-touch.jpg"
      showMailingList={false}
      className="contact"
    >
      <Container>
        <Row className="gy-4 py-4">
          <Col lg={7}>
            <p className="page-intro">
              If you are interested in singing with Calton Consort, buying
              tickets for our next concert, borrowing some music, or would like
              to contact us for any other reason, please email{" "}
              <a href="mailto:caltonconsort@gmail.com">
                caltonconsort@gmail.com
              </a>
              .
            </p>

            <section className="padded pt-3">
              <p className="section-kicker">Membership</p>
              <h2>Singing with us</h2>
              <p>We are currently full in all voice parts.</p>
              <p>
                Entry to the choir is by informal audition. Our members have a
                wide range of experience of singing in choirs and at least a
                reasonable level of sight-reading. Anyone interested in becoming
                a member is welcome to email us at{" "}
                <a href="mailto:caltonconsort@gmail.com">
                  caltonconsort@gmail.com
                </a>{" "}
                to be added to our waiting list.
              </p>
            </section>

            <section className="padded pt-2">
              <p className="section-kicker">Library</p>
              <h2>Music hire</h2>
              <p>
                We have an{" "}
                <a href="/static/library.pdf">extensive music library</a> that
                is available for hire, which we welcome organisations to use and
                enjoy.
              </p>
              <p>
                Please email{" "}
                <a href="mailto:caltonconsort@gmail.com">
                  caltonconsort@gmail.com
                </a>{" "}
                to ask about borrowing a specific piece from our library.
              </p>
            </section>
          </Col>
          <Col lg={5}>
            <Card className="shadow-lg">
              <Card.Body className="p-4">
                <p className="section-kicker">Mailing list</p>
                <h2 className="h3">Concert reminders</h2>
                <p>
                  We send out one or two emails per concert with information
                  about the concert and a reminder of the date.
                </p>
                <p>
                  To <strong>subscribe</strong>, send an email to{" "}
                  <a href="mailto:caltonconsort@gmail.com?subject=Subscribe to CC Email list">
                    caltonconsort@gmail.com
                  </a>{" "}
                  with subject “Subscribe to CC Email list”.
                </p>
                <p className="mb-0">
                  To <strong>unsubscribe</strong>, send an email to{" "}
                  <a href="mailto:caltonconsort@gmail.com?subject=Unsubscribe from CC Email List">
                    caltonconsort@gmail.com
                  </a>{" "}
                  with subject “Unsubscribe from CC Email List”.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
