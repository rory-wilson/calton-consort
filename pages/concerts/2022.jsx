import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from './nav';

export default () => (
  <Layout title="Past Concerts - 2022" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
          <Nav />
        </Col>
        <Col md={10} sm={12}>
        
            <section className="padded">
            <h2 id="2022">2022</h2>

            <Concert title="Venite Gaudete" imgUrl="/static/flyers/2022_12 Venite Gaudete.jpg" date="3 Dec">
              Music by Peacock, Sandstrom, Tavener, Byrd and Whitacre. Conducted by Rory Wilson
            </Concert>

            <Concert title="Brahms German Requiem" imgUrl="/static/flyers/2022_11 Ein deutsches requiem.jpg" date="12 Nov">
            Collaboration with Scottish Chamber Choir and Meadows Orchestra. Conducted by Peter Evans
            </Concert>

            <Concert title="Songs of the Baltic Sea at the Edinburgh Fringe" imgUrl="/static/flyers/2022_08 Fringe Songs of the baltic sea.jpg" date="23 Aug">
              Music by Miškinis, Dubra, Ešenvalds, Gòrecki. Conducted by Rory Wilson
            </Concert>

            <Concert title="Songs of the Baltic Sea" imgUrl="/static/flyers/2022_06 Songs of thhe Baltic Sea.jpg" date="18 Jun">
              Music by Miškinis, Dubra, Ešenvalds, Gòrecki. Conducted by Rory Wilson
            </Concert>

            <Concert title="Greater Love" imgUrl="/static/flyers/2022_04 Greater Love.jpg" date="2 Apr">
              Allegri, Tavener, Mealor, Tallis, MacMillan, Pärt and others. Conducted by Rory Wilson            
            </Concert>
          </section>
        
        </Col>
      </Row>
    </Container>
  </Layout>
);
