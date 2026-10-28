import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import Nav from "../../components/concertsNav";

const TICKETS_URL = "https://www.ticketsource.co.uk/calton-consort";

export default function UpcomingConcerts() {
  return (
    <Layout title="Upcoming Concerts" heading="/static/backgrounds/concerts.jpg">
      <Container>
        <Row className="gy-4">
          <Col md={{ order: "last", span: 2 }}>
            <Nav active="upcoming" />
          </Col>
          <Col md={10} sm={12}>
            <section className="padded pt-4">
              <p className="section-kicker">Coming up</p>
              <h2 id="2026">2026</h2>
              <Concert
                title="Twenty-Five"
                imgUrl="/static/flyers/2026_11_twenty_five.jpg"
                date="7 Nov"
                ticketsUrl={TICKETS_URL}
              >
                Saturday 7 November, 5:00pm – 6:00pm
              </Concert>
              <Concert
                title="Carols by Candlelight"
                imgUrl="/static/flyers/2026_12_carols_candlelight.jpg"
                date="5 Dec"
                ticketsUrl={TICKETS_URL}
              >
                Saturday 5 December, 5:00pm – 6:00pm
              </Concert>

              <h2 id="2027">2027</h2>
              <Concert
                title="Seven Last Words"
                imgUrl="/static/flyers/2027_03_seven_last_words.jpg"
                date="20 Mar"
                ticketsUrl={TICKETS_URL}
              >
                Saturday 20 March, 7:30pm – 8:30pm
              </Concert>
              <Concert
                title="Lumière et Ombre"
                imgUrl="/static/flyers/2027_06_lumiere.jpg"
                date="12 Jun"
                ticketsUrl={TICKETS_URL}
              >
                Saturday 12 June, 7:30pm – 8:30pm
              </Concert>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
