import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from './nav';

export default () => (
  <Layout title="Past Concerts - 2018" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
          <Nav />
        </Col>
        <Col md={10} sm={12}>
         

          <section className="padded">
            <h2 id="2018">2018</h2>

            <Concert title="Into the Light" imgUrl="/static/flyers/2018_12 into the light.jpg" date="1 Dec">
              Music by Park, Rutter, Poulenc, Wood, Tallis, Rheinberger, Jackson, Whitacre
            </Concert>

            <Concert title="Northscapes" imgUrl="/static/flyers/2018_06 Northscapes poster.jpg" date="16 Jun">
            Music by Tavener, Sigurbjörnsson, MacMillan, Thorvaldsdottir, Vasks, Gjeilo
            </Concert>

            <Concert title="Speak to us of children" imgUrl="/static/flyers/2018_03 speak to us of children.jpeg" date="24 Mar">
              Music by Andrzej Panufnik, Roxanna Panufnik, Ronald Stevenson, Savourna Stevenson, Tom Cunningham
            </Concert>
          </section>

        </Col>
      </Row>
    </Container>
  </Layout>
);
