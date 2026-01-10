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
            <h2 id="2025">2025</h2>
             <Concert title="Midwinter" imgUrl="/static/flyers/2025_12_midwinter.jpg" date="6 Dec">
              Ēriks Ešenvalds		<i>Northern Lights</i><br/>
              Morten Lauridsen	<i>Mid-Winter Songs</i><br/>
              Arvo Pärt			<i>Magnificat</i><br/>
              Eric Whitacre		<i>Lux Aurumque</i><br/>
              Dan Abrahams		<i>Casa de Luz* (Commission)</i><br/>
              Ola Gjeilo			<i>The Rose</i><br/>
              Josef Rheinberger	<i>Abendlied</i><br/>
              Cecilia McDowall		<i>Of a Rose</i><br/>

            </Concert>


            <Concert title="Mozart Mass in C minor" imgUrl="/static/flyers/2025_11_mozart.jpg" date="15 Nov">
              Mozart <i>Mass in C minor</i><br/>
            </Concert>

            <Concert title="Midsummer" imgUrl="/static/flyers/2025_06_midsummer.jpg" date="14 Jun">
              Jonathan Dove <i>Passing of the year</i><br/>
              James MacMillan <i>The Gallant Weaver</i><br/>
              Joanna Marsh <i>Batter my heart</i><br/>
              Eric Whitacre <i>3 Flower Songs</i><br/>
              Eric Whitacre <i>All Seems Beautiful to Me</i><br/>
              Frank Ticheli <i>Earth Song</i><br/>
            </Concert>

            <Concert title="Lamentations" imgUrl="/static/flyers/2025_03_lamentations.jpg" date="22 Mar">
              John Sheppard	<i>In manus tuas</i><br />
              Giacomo Carissimi	<i>Plorate Israel</i><br />
              Thomas Tallis <i>Lamentations of Jeremiah I & II</i><br />
              Eric Whitacre		<i>When David Heard</i><br />
              Rebecca Dale <i>Stopping by Woods on a Snowy Evening (* Scottish Premiere)</i><br />
            </Concert>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
