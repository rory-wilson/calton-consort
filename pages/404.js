import Container from "react-bootstrap/Container";
import Layout from "../components/layout";

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <Container className="py-5">
        <p className="section-kicker">404</p>
        <h1>Page not found</h1>
        <p className="page-intro">
          Please check the address and try again, or return to the{" "}
          <a href="/">homepage</a>.
        </p>
      </Container>
    </Layout>
  );
}
