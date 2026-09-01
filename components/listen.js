import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

const tracks = [
  {
    title: "Arvo Pärt — Nunc Dimittis",
    src: "/static/mp3/Arvo Part - Nunc Dimittis.mp3",
  },
  {
    title: "John Tavener — Funeral Ikos",
    src: "/static/mp3/John Tavener - Funeral Ikos.mp3",
  },
  {
    title: "Henryk Górecki — Totus Tuus",
    src: "/static/mp3/Henryk Gorecki - Totus Tuus.mp3",
  },
  {
    title: "Ēriks Ešenvalds — Stars",
    src: "/static/mp3/Eriks Esenvalds - Stars.mp3",
  },
];

export default function Listen() {
  const [nowPlaying, setNowPlaying] = useState("");
  const [autoPlay, setAutoPlay] = useState(false);

  const play = (url) => {
    setNowPlaying(url);
    setAutoPlay(true);
  };

  return (
    <Container>
      <Row className="gy-3">
        <Col lg={5}>
          <p className="section-kicker">Recordings</p>
          <h2>Listen to us</h2>
          <p className="lead page-intro">
            Live recordings from previous concerts. Press a title to play.
          </p>
        </Col>
        <Col lg={7}>
          <ListGroup variant="flush" className="cc-list-group mb-3">
            {tracks.map((track) => (
              <ListGroup.Item
                action
                key={track.src}
                active={nowPlaying === track.src}
                onClick={() => play(track.src)}
              >
                {track.title}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {nowPlaying && (
            <ReactAudioPlayer
              style={{ width: "100%" }}
              src={nowPlaying}
              controls
              autoPlay={autoPlay}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
