import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from './nav';

export default () => (
  <Layout title="Past Concerts - 2019" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
          <Nav />
        </Col>
        <Col md={10} sm={12}>
          
          
          <section className="padded">
            <h2 id="2019">2019</h2>

            <Concert title="On St Andrew's Day" imgUrl="/static/flyers/2019_11 on st andrews day.jpg" date="30 Nov">
              Music by Walton, MacMillan, Boyle, Crecquillon, Hearne, Park, Leighton, Johnston
            </Concert>

            <Concert title="How can I Keep from Singing" date="15 Jun">
              Madrigals, songs and sonnets by Shearing, Finzi, Delius, Panufnik, Quartel
            </Concert>

            <Concert title="Penitence and Praise" imgUrl="/static/flyers/2019_03 penitence and praise.jpg" date="30 Nov">
              A musical journey through Holy Week Music by Rheinberger, Beach, Gibbons, Bruckner, MacDowall, Mealor, Lotti, Taverner, Howells
            </Concert>
          </section>

        
        </Col>
      </Row>
    </Container>
  </Layout>
);
