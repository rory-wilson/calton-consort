import ReactAudioPlayer from 'react-audio-player';
import { useState, useRef } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

export default () => {
    const [nowPlaying, setNowPlaying] = useState('');
    const [autoPlay, setAutoPlay] = useState(false);

    const play = (url) => {
        setNowPlaying(url);
        setAutoPlay(true);     
    }
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <h2>Listen to us</h2>
          <p className="lead">Listen to some live recordings at previous concerts</p>
          <ListGroup variant="flush" className="cc-list-group mb-3">
            <ListGroup.Item action onClick={() => play('/static/mp3/Arvo Part - Nunc Dimittis.mp3')}>Avro Pärt - Nunc Dimittis</ListGroup.Item>
            <ListGroup.Item action onClick={() => play('/static/mp3/John Tavener - Funeral Ikos.mp3')}>John Tavener - Funeral Ikos</ListGroup.Item>
          </ListGroup>

          {nowPlaying && <ReactAudioPlayer style={{ width: '100%'}}
            src={nowPlaying}
            controls
            autoPlay={autoPlay}
        />}
        </Col>
      </Row>
    </Container>
  );
};
