import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default ({ title, date, children, imgUrl }) => (
    <Row className="mb-3">
        <Col sm={1}>
            <div class="mb-1 text-body-secondary">{date}</div>
        </Col>
        <Col sm={8}>
            <h3 class="mb-0">{title}</h3>
            <p class="card-text mb-auto">{children}</p>
        </Col>
        {imgUrl && 
        <Col>
            <a href={imgUrl}><Image alt={title} src={imgUrl} fluid /></a>
        </Col>}
    </Row>
);