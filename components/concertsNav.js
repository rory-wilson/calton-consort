import ListGroup from "react-bootstrap/ListGroup";

export default function ConcertsNav({ active, years }) {
  return (
    <>
      <ListGroup variant="flush" className="cc-list-group mb-4">
        <ListGroup.Item
          action
          href="/concerts"
          active={active === "upcoming"}
        >
          Upcoming
        </ListGroup.Item>
      </ListGroup>
      <p className="section-kicker mb-2">Past concerts</p>
      <ListGroup variant="flush" className="cc-list-group">
        {years.map((year) => (
          <ListGroup.Item
            key={year}
            action
            href={`/concerts/${year}`}
            active={active === year}
          >
            {year}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
