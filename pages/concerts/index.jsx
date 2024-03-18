import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from './nav';

export default () => (
  <Layout title="Past Concerts" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
          <Nav />
        </Col>
        <Col md={10} sm={12}>
          <section className="padded">
            <h2 id="2024">2024</h2>
            <Concert title="Stabat Mater" imgUrl="/static/flyers/2024_03_stabat_mater.jpg" date="16 Mar">
              Paul Mealor<i> Stabat Mater</i>,
              George Handel <i>Dixit Dominus</i>
            </Concert>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
