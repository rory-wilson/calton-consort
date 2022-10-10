import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";

export default () => (
  <Layout
    title="Music hire"
    heading="/static/backgrounds/about.jpg"
  >
    <Container>
      <Row>
        <Col md={9} sm={12}>
          <section className="padded">
            <p>
              We have an <a href='/static/library.pdf'>extensive music library</a> that is available for hire, which we welcome organisations to use and enjoy. 
            </p>
            <p>
              Please <a href='/contact'>contact us</a> to ask about borrowing a specific piece from our library.
            </p>          
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
