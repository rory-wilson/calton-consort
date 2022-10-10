import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";

export default () => (
  <Layout title="Get in touch" heading="/static/backgrounds/about.jpg">
    <Container>
      <Row>
        <Col md={9} sm={12}>
          <section className="padded">
            <p>
              If you are interesting in singing with Calton Consort, buying
              tickets for our next concert, borrowing some music, or would like to
              contact us for any other reason, please email{" "}
              <a href="mailto:caltonconsort@gmail.com">
                caltonconsort@gmail.com
              </a>
              .
            </p>
          </section>
          <section className="padded">
            <h2>Singing with us</h2>
            <p>
              Entry to the choir is by informal audition. Our members have a
              wide range of experience of singing in choirs and at least a
              reasonable level of sight-reading. Anyone interested in becoming a
              member is welcome to join us for a rehearsal. To arrange this or
              to audition please email{" "}
              <a href="mailto:caltonconsort@gmail.com">
                caltonconsort@gmail.com
              </a>
              .
            </p>
          </section>
          <section className="padded">
            <h2>Mailing list</h2>
            <p>
              We send out one or two emails per concert with information about
              the concert and a reminder of the date.{" "}
            </p>
            <p>
              To <strong>subscribe</strong>, send an email to{" "}
              <a href="mailto:caltonconsort@gmail.com?subject=Subscribe to CC Email list">
                caltonconsort@gmail.com
              </a>{" "}
              with subject "Subscribe to CC Email list".
            </p>
            <p>
              To <strong>unsubscribe</strong>, send an email to{" "}
              <a href="mailto:caltonconsort@gmail.com?subject=Unsubscribe from CC Email List">
                caltonconsort@gmail.com
              </a>{" "}
              with subject "Unsubscribe from CC Email List".
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
