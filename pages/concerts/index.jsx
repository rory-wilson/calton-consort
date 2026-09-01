import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from "./nav";

export default function Concerts() {
  return (
    <Layout title="Past Concerts" heading="/static/backgrounds/concerts.jpg">
      <Container>
        <Row className="gy-4">
          <Col md={{ order: "last", span: 2 }}>
            <Nav />
          </Col>
          <Col md={10} sm={12}>
            <section className="padded pt-4">
              <p className="section-kicker">Archive</p>
              <h2 id="2026">2026</h2>
              <Concert
                title="Concerto for Choir"
                imgUrl="/static/flyers/2026_06_choirconcerto.jpg"
                date="13 June"
              >
                Galina Grigorjeva <i>On Leaving</i>
                <br />
                Anna Thorvaldsdóttir <i>Heyr þú oss himnum á</i>
                <br />
                Alfred Schnittke <i>Concerto for Choir</i>
              </Concert>
              <Concert
                title="Luminous night of the soul"
                imgUrl="/static/flyers/2026_03_luminous.jpg"
                date="21 Mar"
              >
                Lucy Walker <i>Today</i>
                <br />
                Ola Gjeilo <i>Dark night of the soul</i>
                <br />
                Michael Higgins <i>Cloths of heaven</i>
                <br />
                Ana Meredith <i>Heal you</i>
                <br />
                Lucy Croad <i>The bronte suite</i>
                <br />
                Ola Gjeilo <i>Luminous night of the soul</i>
                <br />
                Jake Runstadt <i>Flower into kindness</i>
              </Concert>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
