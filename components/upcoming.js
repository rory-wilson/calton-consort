import Card from "react-bootstrap/Card";

export default function Upcoming({
  title,
  date,
  children,
  where = "Canongate Kirk, Edinburgh",
  footer = "Tickets £15 (£12 conc.) on the door. Under 18s free!",
}) {
  return (
    <Card className="shadow-lg mb-2">
      <Card.Body className="p-4">
        <Card.Title className="fs-2 mb-3">{title}</Card.Title>
        <Card.Subtitle>
          {date}
          <br />
          {where}
        </Card.Subtitle>
        <Card.Text className="mt-3">{children}</Card.Text>
      </Card.Body>
      <Card.Footer className="p-4">{footer}</Card.Footer>
    </Card>
  );
}
