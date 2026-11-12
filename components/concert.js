import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Concert({
  title,
  date,
  children,
  imgUrl,
  ticketsUrl,
  programmeUrl,
  spotifyUrl,
}) {
  return (
    <Row className="concert-row align-items-start">
      <Col sm={2} xs={12}>
        <div className="concert-date">{date}</div>
      </Col>
      <Col sm={imgUrl ? 7 : 10} xs={12}>
        <h3>{title}</h3>
        <p className="card-text mb-0">{children}</p>
        {(ticketsUrl || programmeUrl || spotifyUrl) && (
          <div className="d-flex flex-wrap gap-2 mt-3">
            {ticketsUrl && (
              <Button variant="primary" href={ticketsUrl}>
                Buy tickets
              </Button>
            )}
            {programmeUrl && (
              <Button variant="outline-dark" size="sm" href={programmeUrl}>
                Programme (PDF)
              </Button>
            )}
            {spotifyUrl && (
              <Button
                variant="outline-dark"
                size="sm"
                href={spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </Button>
            )}
          </div>
        )}
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
