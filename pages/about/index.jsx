import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import PageSection, { sectionAnchor } from "../../components/pageSection";
import { getPage } from "../../lib/contentful";

export async function getStaticProps() {
  return { props: { page: await getPage("about") } };
}

export default function About({ page }) {
  return (
    <Layout
      title={page.title}
      heading={page.headerImageUrl || "/static/backgrounds/about.jpg"}
    >
      <Container>
        <Row className="gy-4">
          <Col md={{ order: "last", span: 3 }}>
            <ListGroup variant="flush" className="cc-list-group sticky-md-top">
              {page.sections.map((section) => (
                <ListGroup.Item
                  key={section.id}
                  action
                  href={`#${sectionAnchor(section)}`}
                >
                  {section.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={9} sm={12}>
            {page.sections.map((section, i) => (
              <PageSection
                key={section.id}
                section={section}
                className={i === 0 ? "padded pt-4" : "padded"}
                lead={i === 0}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
