import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Concert({ title, date, children, imgUrl }) {
  return (
    <Row className="concert-row align-items-start">
      <Col sm={2} xs={12}>
        <div className="concert-date">{date}</div>
      </Col>
      <Col sm={imgUrl ? 7 : 10} xs={12}>
        <h3>{title}</h3>
        <p className="card-text mb-0">{children}</p>
      </Col>
      {imgUrl && (
        <Col sm={3} xs={12} className="mt-3 mt-sm-0">
          <a href={imgUrl}>
            <Image alt={title} src={imgUrl} fluid />
          </a>
        </Col>
      )}
    </Row>
  );
}
