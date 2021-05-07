import DistributedColumns from './Chart/DistributedColumns';
import Pie from './Chart/Pie';
import React, { useState, useEffect } from 'react';


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import getData from "api/getData";
import getResult from "api/getResult";


function Dashboard() {

  // const [data, setData] = useState();
  const [cateArr, setCateArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [startDate, setStartDate] = useState(['2018-01-01']);
  const [endDate, setEndDate] = useState(['2018-01-09']);
  const [store, setStore] = useState([1]);


  const fetchData = () => {
    console.log('fetch');
    return getData(store, startDate, endDate).then(data => {
      const cate = data.map(d => d.item).filter((e, i, arr) => {
        return arr.indexOf(e) === i
      })
      setCateArr(cate);
      return getResult();
    }).then(result => {
      setDataArr(result.map(d => d.sales_sum).filter(e => e !== null))
      console.log('done');
    }).catch(err => {
      alert(err.message);
    })
  }
  useEffect(async () => {
    fetchData();
  }, []);
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="3">
            {/* <Card className="card-stats"> 
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number</p>
                      <Card.Title as="h4">150GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card> */}
            <FormGroup controlId="date" bsSize="large">
              <label>Select Start Date</label>
              <FormControl
                onChange={e => setStartDate(e.target.value)}
                value={startDate}
                type="date"
              />
            </FormGroup>
          </Col>
          <Col lg="3" sm="3">
            <FormGroup controlId="date" bsSize="large">
            <label>Select End Date</label>
              <FormControl
                onChange={e => setEndDate(e.target.value)}
                value={endDate}
                type="date"
              />
            </FormGroup>
          </Col>
          <Col lg="2" sm="2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Store</Form.Label>
            <Form.Control as="select" value={store} onChange={e => setStore(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col lg="2" sm="2">
            <Button 
              className="btn-fill pull-right"
              type="submit"
              variant="info"
              style={{marginTop:"30px"}}
              onClick={fetchData}
            >
              Predict
            </Button>
          </Col>
        </Row>
        {/* endRow
        Chart */}
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Store's Name</Card.Title>
                <p className="card-category">Date</p>
              </Card.Header>
              <Card.Body>
                {/* <div className="ct-chart" id="chartActivity" style={{minHeight:"330px"}}> */}
                  {/* BAR CHART */}
                 
                  <DistributedColumns categories = {cateArr}
                                      data = {dataArr}>
                  </DistributedColumns>
                {/* </div> */}
              </Card.Body>
              {/* <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Tesla Model S <i className="fas fa-circle text-danger"></i>
                  BMW 5 Series
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Email Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                {/* <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                  // style={{minHeight:"330px"}}
                > */}
                  {/* PIE CHART */}
                  <Pie series = {dataArr} labels={cateArr}></Pie>
                {/* </div> */}
                {/* <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Bounce <i className="fas fa-circle text-warning"></i>
                  Unsubscribe
                </div> */}
                {/* <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              {/* {sampleData.forEach(element => {
                <h1>abcdef</h1>
              })} */}
              <Card.Body className="table-full-width table-responsive px-0">
                {/* TABLE */}
                <Table className="table-hover table-striped">
                
                  <thead>
                    <tr>
                      <th className="border-0">Item</th>
                      <th className="border-0">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataArr.map( (element,i) => {
                      return(<tr>
                        <td>{cateArr[i]}</td>
                        <td>{element}</td>
                      </tr>);
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
