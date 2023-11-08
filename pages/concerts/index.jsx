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
            <h2 id="2023">2023</h2>
            <Concert title="O Bone Jesu" imgUrl="/static/flyers/2023_11 o bone jesu.png" date="4 Nov">
              Music by Robert Carver, James MacMillan, Henry Purcell and Caroline Shaw. Premiere of a work by Eleanor Haward.
            </Concert>
            <Concert title="Sublime to Ridiculous" imgUrl="/static/flyers/2023_06_sublime_to_ridiculous.png" date="10 Jun">
              Music by Ola Gjeilo, Thea Musgrave, Eric Whitacre, Jaakko Mäntyjärvi, Jake Runestad, Knut Nystedt and György Ligeti.
            </Concert>
            <Concert title="holst & howells" imgUrl="/static/flyers/2023_04 Holst & Howells.jpg" date="1 Apr">
              Herbert Howells Take him earth for cherishing, Requiem and Salve Regina. Imogen Holst Mass in A Minor.
            </Concert>
          </section>
           
        </Col>
      </Row>
    </Container>
  </Layout>
);
