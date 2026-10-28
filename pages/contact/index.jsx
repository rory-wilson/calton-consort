import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Layout from "../../components/layout";
import Markdown from "../../components/markdown";
import PageSection from "../../components/pageSection";
import { getPage } from "../../lib/contentful";

export async function getStaticProps() {
  return { props: { page: await getPage("contact") } };
}

export default function Contact({ page }) {
  return (
    <Layout
      title={page.title}
      heading={page.headerImageUrl || "/static/backgrounds/get-in-touch.jpg"}
      showMailingList={false}
      className="contact"
    >
      <Container>
        <Row className="gy-4 py-4">
          <Col lg={7}>
            <Markdown paragraphClassName="page-intro">{page.intro}</Markdown>
            {page.sections.map((section, i) => (
              <PageSection
                key={section.id}
                section={section}
                className={i === 0 ? "padded pt-3" : "padded pt-2"}
              />
            ))}
          </Col>
          {page.sidePanel.length > 0 && (
            <Col lg={5}>
              {page.sidePanel.map((section) => (
                <Card key={section.id} className="shadow-lg mb-4">
                  <Card.Body className="p-4 side-panel-body">
                    {section.kicker && (
                      <p className="section-kicker">{section.kicker}</p>
                    )}
                    <h2 className="h3">{section.title}</h2>
                    <Markdown>{section.body}</Markdown>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          )}
        </Row>
      </Container>
    </Layout>
  );
}
