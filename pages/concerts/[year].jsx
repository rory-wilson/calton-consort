import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Concert from "../../components/concert";
import ConcertDescription from "../../components/concertDescription";
import Nav from "../../components/concertsNav";
import { getConcertsByStatus } from "../../lib/contentful";
import { concertYears } from "../../lib/concerts";
import moment from "moment";

export async function getStaticPaths() {
  const { past } = await getConcertsByStatus();
  return {
    paths: concertYears(past).map((year) => ({ params: { year } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { past } = await getConcertsByStatus();
  return {
    props: {
      year: params.year,
      concerts: past.filter((c) => c.date.startsWith(params.year)),
      pastYears: concertYears(past),
    },
  };
}

export default function PastConcerts({ year, concerts, pastYears }) {
  return (
    <Layout
      title={`Past Concerts - ${year}`}
      heading="/static/backgrounds/concerts.jpg"
    >
      <Container>
        <Row className="gy-4">
          <Col md={{ order: "last", span: 2 }}>
            <Nav active={year} years={pastYears} />
          </Col>
          <Col md={10} sm={12}>
            <section className="padded pt-4">
              <p className="section-kicker">Archive</p>
              <h2 id={year}>{year}</h2>
              {concerts.map((concert) => (
                <Concert
                  key={concert.id}
                  title={concert.title}
                  imgUrl={concert.imageUrl}
                  date={moment.parseZone(concert.date).format("D MMM")}
                >
                  <ConcertDescription markdown={concert.description} />
                </Concert>
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
