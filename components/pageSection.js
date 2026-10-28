import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Markdown from "./markdown";

export function sectionAnchor(section) {
  return (
    section.anchor ||
    section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  );
}

// A section of a Contentful-driven page. With an image, the text sits beside
// a round portrait. `lead` makes the first paragraph larger.
export default function PageSection({ section, className = "padded", lead = false }) {
  const text = (
    <>
      {section.subheading && <h3>{section.subheading}</h3>}
      <div className={lead ? "lead-first" : undefined}>
        <Markdown>{section.body}</Markdown>
      </div>
    </>
  );

  return (
    <section className={className}>
      {section.kicker && <p className="section-kicker">{section.kicker}</p>}
      <h2 id={sectionAnchor(section)}>{section.title}</h2>
      {section.imageUrl ? (
        <Row className="align-items-start gy-3">
          <Col md={3}>
            <Image
              src={section.imageUrl}
              alt={section.subheading || section.title}
              roundedCircle
              fluid
              className="about-portrait"
            />
          </Col>
          <Col>{text}</Col>
        </Row>
      ) : (
        text
      )}
    </section>
  );
}
