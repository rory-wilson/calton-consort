import Container from "react-bootstrap/Container";
import Nav from "./nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";

export default () => (
  <Layout title="Past Concerts - 2016" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
          <Nav />
        </Col>
        <Col md={10} sm={12}>
          <section className="padded">
            <h2 id="2016">2016</h2>

            <Concert title="A Boy was Born" imgUrl="/static/flyers/2016_11 a boy was born.jpg" date="19 Nov">
            Jonathan Dove: Seek Him That Maketh the Seven Stars Judith Weir:
                Psalm 148 Benjamin Britten: A Boy was Born Paul Spicer: Glory be
                to God for Dappled Things
            </Concert>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
