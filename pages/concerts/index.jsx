import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";

export default () => (
  <Layout title="Past Concerts" heading="/static/backgrounds/concerts.jpg">
    <Container>
      <Row>
        <Col md={{ order: 'last' }}>
        <ListGroup variant="flush" className='cc-list-group'>
            <ListGroup.Item action href="#2022">
              2022
            </ListGroup.Item>
            <ListGroup.Item action href="#2021">
              2021
            </ListGroup.Item>
            <ListGroup.Item action href="#2019">
              2019
            </ListGroup.Item>
            <ListGroup.Item action href="#2018">
              2018
            </ListGroup.Item>
            <ListGroup.Item action href="#2017">
              2017
            </ListGroup.Item>
            <ListGroup.Item action href="#2016">
              2016
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9} sm={12}>
          <section className="padded">
            <h2 id="2022">2022</h2>
            <div className="mb-3">
              <h3>Songs of the Baltic Sea</h3>
              <p>
                Music by Miškinis, Dubra, Ešenvalds, Gòrecki Conducted by Rory
                Wilson
              </p>

              <p>18 June 2022 Canongate Kirk, Edinburgh</p>
            </div>

            <div className="mb-3">
              <h3>Greater Love</h3>
              <p>
                Allegri, Tavener, Mealor, Tallis, MacMillan, Pärt and others
                Conducted by Rory Wilson
              </p>
              <p>2 April 2022 Canongate Kirk, Edinburgh</p>
            </div>
          </section>
          <section className="padded">
            <h2 id="2021">2021</h2>

            <div className="mb-3">
              <h3>Rosa Sine Spina</h3>
              <p>
                Carols at Canongate: Chilcott, Britten, Poulenc and various
                women composers. Conducted by Frikki Walker
              </p>
              <p>11 December 2021 Canongate Kirk, Edinburgh</p>
            </div>
          </section>
          <section className="padded">
            <h2 id="2019">2019</h2>

            <div className="mb-3">
              <h3>On St Andrew's Day</h3>
              <p>
                Music by Walton, MacMillan, Boyle, Crecquillon, Hearne, Park,
                Leighton, Johnston
              </p>

              <p>
                30 November 2019 Old St Paul's Church, Jeffrey Street, Edinburgh
              </p>
            </div>

            <div className="mb-3">
              <h3>How can I Keep from Singing</h3>
              <p>
                Madrigals, songs and sonnets by Shearing, Finzi, Delius,
                Panufnik, Quartel
              </p>
              <p>15 June 2019 Canongate Kirk, Edinburgh</p>
            </div>

            <div className="mb-3">
              <h3>Penitence and Praise</h3>
              <p>
                A musical journey through Holy Week Music by Rheinberger, Beach,
                Gibbons, Bruckner, MacDowall, Mealor, Lotti, Taverner, Howells
              </p>
              <p>30 March 2019 Canongate Kirk, Edinburgh</p>
            </div>
          </section>

          <section className="padded">
            <h2 id="2018">2018</h2>

            <div className="mb-3">
              <h3>Into the Light</h3>
              <p>
                Music by Park, Rutter, Poulenc, Wood, Tallis, Rheinberger,
                Jackson, Whitacre
              </p>
              <p>1 December 2018 Canongate Kirk, Edinburgh</p>
            </div>

            <div className="mb-3">
              <h3>Northscapes</h3>
              <p>
                Music by Tavener, Sigurbjörnsson, MacMillan, Thorvaldsdottir,
                Vasks, Gjeilo
              </p>
              <p>16 June 2018 Canongate Kirk, Edinburgh</p>
            </div>

            <div className="mb-3">
              <h3>Speak to us of children</h3>
              <p>
                Music by Andrzej Panufnik, Roxanna Panufnik, Ronald Stevenson,
                Savourna Stevenson, Tom Cunningham
              </p>
              <p>24 March 2018 Canongate Kirk, Edinburgh</p>
            </div>
          </section>

          <section className="padded">
            <h2 id="2017">2017</h2>

            <div className="mb-3">
              <h3>Cantate Domino</h3>
              <p>
                J. S. Bach: Singet den Herrn plus music by Praetorius,
                Monteverdi, Pachelbel, Tomkins, Sweelinck, Peebles.
              </p>
              <p>25 November 2017 Canongate Kirk, Edinburgh</p>
            </div>

            <div className="mb-3">
              <h3>Chansons des Fleurs</h3>
              <p>
                Lauridsen: Chansons des Roses Britten: Five Flower Songs
                Macmillan: So Deep
              </p>
              <p>17 June 2017 Canongate Kirk, Edinburgh</p>
            </div>

            <div className="mb-3">
              <h3>Lobet den Herrn</h3>
              <p>
                Bach: Lobet den Herrn, alle Heiden Music by Arvo Pärt and
                Sven-David Sandström.
              </p>
              <p>11 March 2017 Canongate Kirk, Edinburgh</p>
            </div>
          </section>

          <section className="padded">
            <h2 id="2016">2016</h2>

            <div className="mb-3">
              <h3>A Boy was Born</h3>
              <p>
                Jonathan Dove: Seek Him That Maketh the Seven Stars Judith Weir:
                Psalm 148 Benjamin Britten: A Boy was Born Paul Spicer: Glory be
                to God for Dappled Things
              </p>
              <p>19 November 2016 Canongate Kirk, Edinburgh</p>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
