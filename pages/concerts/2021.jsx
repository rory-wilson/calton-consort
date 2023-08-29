import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from './nav';

export default () => (
  <Layout title="Past Concerts - 2021" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
          <Nav />
        </Col>
        <Col md={10} sm={12}>
         
          <section className="padded">
            <h2 id="2021">2021</h2>

            <Concert title="Rosa Sine Spina" imgUrl="/static/flyers/2021_11 Rosa Sine Spina.jpg" date="11 Dec">
              Carols at Canongate: Chilcott, Britten, Poulenc and various women composers. Conducted by Frikki Walker
            </Concert>
          </section>
         
        </Col>
      </Row>
    </Container>
  </Layout>
);
