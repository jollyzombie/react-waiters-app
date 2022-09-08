import { Col, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTable = ({ status, id, bill }) => {
  return (
    <Container>
      <Row className='pt-4 pb-3 border-bottom'>
        <Col sm>
          <h5>Table {id}</h5>
        </Col>
        <Col sm>
          <b>Status:</b> {status}{' '}
        </Col>
        <Col sm>
          {' '}
          <b>Bill:</b> ${bill}
        </Col>
        <Col sm className='d-flex justify-content-end'>
          <Button variant='dark' as={Link} to={'/table/' + id}>
            Show more
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleTable;
