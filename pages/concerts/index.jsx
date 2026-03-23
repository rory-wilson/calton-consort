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
            <h2 id="2025">2026</h2>
             <Concert title="Luminous night of the soul" imgUrl="/static/flyers/2026_03_luminous.jpg" date="21 Mar">
              Lucy Walker <i>Today</i><br/>
              Ola Gjeilo <i>Dark night of the soul</i><br/>
              Michael Higgins <i>Cloths of heaven</i><br/>
              Ana Meredith <i>Heal you</i><br/>
              Lucy Croad <i>The bronte suite</i><br/>
              Ola Gjeilo <i>Luminous night of the soul</i><br/>
              Jake Runstadt	<i>Flower into kindness</i>
            </Concert>

          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
