import { useSelector, useDispatch } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useState } from 'react';
import { getTableById, updateTableRequest } from '../../../redux/tablesReducer';
import { getStatus } from '../../../redux/statusReducer';
import { Navigate, useNavigate } from 'react-router-dom';

function TableForm({ actionText, ...props }) {
  const { tableId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statusData = useSelector(getStatus);
  const tableData = useSelector((state) => getTableById(state, tableId));
  const { id } = tableData;

  const [people, setPeople] = useState(props.people || '');
  const [status, setStatus] = useState(props.status || '');
  const [maxPeople, setMaxPeople] = useState(props.maxPeople || '');
  const [bill, setBill] = useState(props.bill || '');
  const [statusError, setStatusError] = useState(false);

  const handleSubmit = () => {
    setStatusError(!statusError);
    if (maxPeople) {
      dispatch(updateTableRequest({ id, people, maxPeople, bill, status }));
      navigate('/');
    }
  };

  if ((maxPeople) > 10) setMaxPeople(10);
  if ((maxPeople) < 0) setMaxPeople(0);
  if ((people) > maxPeople) setPeople(maxPeople);
  if ((people) < 0) setPeople(0);
  if ((bill) < 0) setBill(0);

  if (!tableData) return <Navigate to="/" />;

  return (
    <div>
      <Row className="mb-5">
        <h1>Table { id } </h1>
        <Form onSubmit={ handleSubmit }>
          <Form.Group className="mb-3">
            <Row className="mb-3">
              <Col md={ 1 }>
                <b>People:</b>
              </Col>
              <Form.Control
                className="pl-3"
                style={ { width: '50px', marginLeft: '10px', marginRight: '10px' } }
                type="number"
                value={ status === 'Busy' ? people : 0 }
                onChange={ (e) => setPeople(e.target.value) }
              />
              <Form.Control
                style={ { width: '50px', marginLeft: '10px' } }
                type="number"
                onChange={ (e) => setMaxPeople(e.target.value) }
                value={ maxPeople }
              />
            </Row>
            <Row className="mb-3">
              <Col md={ 1 }>
                <b>Status:</b>
              </Col>
              <Col md={ 2 }>
                <Form.Select
                  as="select"
                  onChange={ (e) => setStatus(e.target.value) }
                  value={ status }
                  aria-label="Select category">
                  <option disabled value="1">
                    Select category
                  </option>
                  { statusData.map((category, index) => (
                    <option key={ index } value={ category }>
                      { category }
                    </option>
                  )) }
                </Form.Select>
              </Col>
            </Row>
            { status === 'Busy' && (
              <Row>
                <Col md={ 1 }>
                  <Form.Label>
                    <b>Bill:</b>
                  </Form.Label>
                </Col>
                <Col md={ 2 }>
                  <Form.Control
                    type="number"
                    placeholder="current bill"
                    value={ status === 'Busy' ? bill : 0 }
                    onChange={ (e) => setBill(e.target.value) }
                  />
                </Col>
              </Row>
            ) }
          </Form.Group>
          <Button variant="dark" as="input" value={ actionText } type="submit" style={ { marginTop: '10px' } } />
        </Form>
      </Row>
    </div>
  );
}

export default TableForm;
