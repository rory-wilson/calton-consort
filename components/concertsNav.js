import ListGroup from "react-bootstrap/ListGroup";

const PAST_YEARS = [
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2019",
  "2018",
  "2017",
  "2016",
];

export default function ConcertsNav({ active }) {
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
        {PAST_YEARS.map((year) => (
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
