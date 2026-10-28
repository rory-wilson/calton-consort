import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import ConcertDescription from "../../components/concertDescription";
import Nav from "../../components/concertsNav";
import { getConcertsByStatus } from "../../lib/contentful";
import { concertYears, concertWhen, DEFAULT_VENUE } from "../../lib/concerts";
import moment from "moment";

const TICKETS_URL = "https://www.ticketsource.co.uk/calton-consort";

export async function getStaticProps() {
  const { upcoming, past } = await getConcertsByStatus();
  return {
    props: {
      concerts: upcoming,
      pastYears: concertYears(past),
    },
  };
}

export default function UpcomingConcerts({ concerts, pastYears }) {
  const years = concertYears(concerts);

  return (
    <Layout title="Upcoming Concerts" heading="/static/backgrounds/concerts.jpg">
      <Container>
        <Row className="gy-4">
          <Col md={{ order: "last", span: 2 }}>
            <Nav active="upcoming" years={pastYears} />
          </Col>
          <Col md={10} sm={12}>
            <section className="padded pt-4">
              <p className="section-kicker">Coming up</p>
              {years.length === 0 && (
                <p className="page-intro">
                  Our next concert will be announced soon. Join the mailing
                  list below to hear first.
                </p>
              )}
              {years.map((year) => (
                <div key={year}>
                  <h2 id={year}>{year}</h2>
                  {concerts
                    .filter((c) => c.date.startsWith(year))
                    .map((concert) => (
                      <Concert
                        key={concert.id}
                        title={concert.title}
                        imgUrl={concert.imageUrl}
                        date={moment.parseZone(concert.date).format("D MMM")}
                        ticketsUrl={TICKETS_URL}
                      >
                        {concertWhen(concert.date)}
                        <br />
                        {concert.venue || DEFAULT_VENUE}
                        {concert.description && <br />}
                        <ConcertDescription markdown={concert.description} />
                      </Concert>
                    ))}
                </div>
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
