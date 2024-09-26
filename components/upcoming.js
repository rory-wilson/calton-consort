import Card from "react-bootstrap/Card";

export default ({ title, date, children, where = "Canongate Kirk, Edinburgh", footer = "Tickets £15 (£12 conc.) on the door. Under 18s free!" }) => (
    <Card className="shadow-lg mb-2">
        <Card.Body>
        <Card.Title className="fs-2 mb-3">
           {title}
        </Card.Title>
        <Card.Subtitle>
           {date} <br />
            {where}
        </Card.Subtitle>
        <Card.Text className='mt-3'>
            {children}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
            {footer}
        </Card.Footer>
    </Card>
);