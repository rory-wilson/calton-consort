import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../components/layout";
import Image from "react-bootstrap/Image";

export default () => (
  <Layout
    title="Open call for composers 2025"
    heading="/static/backgrounds/calton.jpg"
  >
    <Container>
      <Row>
        <Col md={{ order: "last" }}>
          <ListGroup variant="flush" className="cc-list-group">
            <ListGroup.Item action href="#who_us">
              Who we are
            </ListGroup.Item>
            <ListGroup.Item action href="#what">
              What we're looking for
            </ListGroup.Item>
            <ListGroup.Item action href="#text">
              About the text
            </ListGroup.Item>
            <ListGroup.Item action href="#who_you">
             Who can apply
            </ListGroup.Item>
            <ListGroup.Item action href="#process">
            What’s the process?
            </ListGroup.Item>
            <ListGroup.Item action href="#legal">
            The small print
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9} sm={12}>
          <section className="padded">
            <p className="lead">Calton Consort is delighted to announce an open call for early-career composers.</p>
          </section>

          <section className="padded">
            <h2 id="who_us">Who we are</h2>
            <p>Calton Consort is an amateur chamber choir based in Edinburgh, Scotland with around 30 mixed-voice members. 
                Established in 2001, the choir has a reputation for performing challenging contemporary repertoire and supporting emerging composers. 
                Amongst our recent performances have been new works by Ian Sutherland, Eleanor Haward, Chris Hutchings and Stuart Murray Mitchell.</p>
          </section>
          
          <section className="padded">
            <h2 id="what">What we’re looking for</h2>
            <p>We are looking to commission a composer to write a short choral work, of around 4 minutes, for adult SATB choir. 
                The piece should be unaccompanied, and can employ divisi within vocal parts.</p>
            <p>We will perform the piece at our Winter 2025 concert.</p>
            <p>The text of the piece will be:</p>
            
            <Card>
                <Card.Body>
                    <figure>
                        <blockquote className="blockquote composition_text">
                            <h3 className="display-6">Casa de Luz</h3>
                            <p>Architecture is the masterly, correct and magnificent play of masses brought together in light.</p>
                            <p>A house: a shelter against heat, cold, rain, thieves and the inquisitive. A receptacle for light and sun.</p>
                            <p>Teach your children that a house is only habitable when it is full of light and air.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite>Le Corbusier - <i>Vers une architecture (Towards a New Architecture)</i></cite>
                        </figcaption>
                    </figure>
                </Card.Body>
            </Card>
          </section>

          <section className="padded">
            <h2 id="text">About the text</h2>
            <Row>
            <Col md={3} sm={12}>
              <Image alt={"Casa de Luz III"} src={"/static/img/eduardo-chillida-casa-de-luz-iii.jpg"} fluid />
              </Col>
              <Col>
              <p>The text is a selection of quotations from Le Corbusier's Towards a New Architecture, which concern the reflection of good architecture as
              a model for a good life. 
            </p>
            <p>The title is taken from Eduardo Chillida's sculpture series <i>Casa de Luz III</i> (House of Light III). The sculptures allow light to 
            penetrate the stone, reflecting and creating illusory spaces.</p>
            <quote>"Sculpture is a function of space... which lives within it and which is more effective the more unnoticeably it acts."</quote>
              </Col>
            </Row>
          </section>

          <section className="padded">
            <h2 id="who_you">Who can apply</h2>
            <p>Anyone can apply, whatever your personal or musical background.</p>
          </section>

          <section className="padded">
            <h2 id="process">What’s the process?</h2>
            <p>To be considered we would like you to write a response to the brief of no more than 500 words. You can also include any musical fragments you think might be useful to illustrate your vision.</p>
            <p><strong>PLEASE DO NOT SUBMIT COMPLETED SCORES AT THIS TIME.</strong></p>
            <p>In addition, we would also like your current musical CV, and 1 or 2 examples of previously composed works.</p>
            <p>Deadline for submission of application is <strong>25th April 2025</strong>. There will then be a shortlisting process which may involve remote interview.</p>
            <p>If you are successful and commissioned, the deadline for completion of the final work is 1st October 2025. You will also be invited to a choral workshop session with the choir before this time.</p>
            <p>The successful applicant will receive £1000 upon receipt of the final score.</p>
            <p>Email <a href="mailto:caltonconsort@gmail.com?subject=Composition2025">caltonconsort@gmail.com</a> to apply.</p>
          </section>

          <section className="padded">
            <h2 id="legal">The small print</h2>
            <p>Calton Consort will receive a license for 40 copies of the work for performance, and perform the premiere.</p>
            <p>The composer retains all other rights to the work and is then free to publish, re-sell and distribute the work after December 2025.</p>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
);
