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
            <h2 id="2024">2024</h2>
            <Concert title="Choral pride" imgUrl="/static/flyers/2024_06_choral_pride.jpg" date="15 Jun">
Kerry Andrew <i>All Things Are Quite Silent</i><br />
Derri Joseph Lewis <i>Softly</i><br />
Mari Esabel Valverde <i>Darest, O Soul</i><br />
Samuel Barber	<i>Agnus Dei</i><br />
Stuart Beatch <i>The Letter</i><br />
Judith Weir <i>Love Bade Me Welcome</i><br />
Ethel Smyth <i>Komm, Süsser Tod</i><br />
Michael Tippett <i>Five Spirituals from ‘A Child Of Our Time’</i><br />
Aaron Copeland <i>Help Us, Lord</i><br />
Ian Sutherland <i>Orphic Murmurations (* Premiere)</i><br />
Joanna Marsh <i>Thou Hast Searched Me and Known Me</i><br />
Jake Runestad <i>Let My Love Be Heard</i><br />
            </Concert>

            <Concert title="Stabat Mater" imgUrl="/static/flyers/2024_03_stabat_mater.jpg" date="16 Mar">
              Paul Mealor<i> Stabat Mater</i>,
              George Handel <i>Dixit Dominus</i>
            </Concert>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
