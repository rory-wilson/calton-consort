import ListGroup from "react-bootstrap/ListGroup";

export default () => (
<ListGroup variant="flush" className='cc-list-group'>
    <ListGroup.Item action href="/concerts">
        2024
    </ListGroup.Item>
    <ListGroup.Item action href="/concerts/2023">
        2023
    </ListGroup.Item>
    <ListGroup.Item action href="/concerts/2022">
        2022
    </ListGroup.Item>
    <ListGroup.Item action href="/concerts/2021">
        2021
    </ListGroup.Item>
    <ListGroup.Item action href="/concerts/2019">
        2019
    </ListGroup.Item>
    <ListGroup.Item action href="/concerts/2018">
        2018
    </ListGroup.Item>
    <ListGroup.Item action href="/concerts/2017">
        2017
    </ListGroup.Item>
    <ListGroup.Item action href="/concerts/2016">
        2016
    </ListGroup.Item>
</ListGroup>
);