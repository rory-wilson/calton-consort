import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from './nav';

export default () => (
  <Layout title="Past Concerts - 2017" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
          <Nav />
        </Col>
        <Col md={10} sm={12}>
          

          <section className="padded">
            <h2 id="2017">2017</h2>

            <Concert title="Cantate Domino" imgUrl="/static/flyers/2017_11 Cantate Domino.jpg" date="25 Nov">
            J. S. Bach: Singet den Herrn plus music by Praetorius, Monteverdi, Pachelbel, Tomkins, Sweelinck, Peebles.
            </Concert>

            <Concert title="Chansons des Fleurs" imgUrl="/static/flyers/2017_06 Chaonson des Fleurs.jpg" date="17 Jun">
            Lauridsen: Chansons des Roses, Britten: Five Flower Songs, Macmillan: So Deep
            </Concert>

            <Concert title="Lobet den Herrn" imgUrl="/static/flyers/2017_03 Lobet Den Herrn.jpg" date="11 Mar">
              Bach: Lobet den Herrn, alle Heiden Music by Arvo Pärt and Sven-David Sandström.
            </Concert>
          </section>

         
        </Col>
      </Row>
    </Container>
  </Layout>
);
