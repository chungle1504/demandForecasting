import ChartistGraph from "react-chartist";
// import axios from 'axios';
import DistributedColumns from './Chart/DistributedColumns';
import Pie from './Chart/Pie';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
import { data } from "jquery";

// const api = axios.create({
//   baseURL: `http://localhost:8000/result`
// })

//thay smapleData bang data tu backend
// const axios = require('axios').default;

var sampleData = [
  {
      "id": 0,
      "store": 1,
      "item": 1,
      "sales": 10
  },
  {
      "id": 1,
      "store": 1,
      "item": 2,
      "sales": 10
  },
  {
      "id": 2,
      "store": 1,
      "item": 3,
      "sales": 10
  },
  {
      "id": 3,
      "store": 1,
      "item": 4,
      "sales": 10
  },
  {
      "id": 4,
      "store": 1,
      "item": 5,
      "sales": 10
  },
  {
      "id": 5,
      "store": 1,
      "item": 6,
      "sales": 10
  },
  {
      "id": 6,
      "store": 1,
      "item": 7,
      "sales": 10
  },
  {
      "id": 7,
      "store": 1,
      "item": 8,
      "sales": 10
  },
  {
      "id": 8,
      "store": 1,
      "item": 9,
      "sales": 10
  },
  {
      "id": 9,
      "store": 1,
      "item": 10,
      "sales": 10
  }
]

var cateArr = [],
    dataArr = [];
for (let i = 0; i < sampleData.length; i++) {
  cateArr.push(sampleData[i].item);
  dataArr.push(sampleData[i].sales);
}

// console.log(cateArr, dataArr, 11111)

//truyen barChartData vao barChart

function Dashboard() {

  // const [data, setData] = useState();
  // const [cateArr, setCateArr] = useState();
  // const [dataArr, setDataArr] = useState();

  // data.data.forEach(element => {
  //   cateTmpArr.push(element.item);
  //   dataArr.push(element.id);
  // });
 
  // useEffect(async () => {
  //   const result = await axios(
  //     'http://localhost:8000/get-result/1/2018-01-01/2018-01-03',
  //   );
  //   console.log("111");
  //   console.log(result);
  //   setData(result.data);
  //   console.log(result + "222");
  // });

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
                type="date"
              />
            </FormGroup>
          </Col>
          <Col lg="3" sm="3">
            <FormGroup controlId="date" bsSize="large">
            <label>Select End Date</label>
              <FormControl
                type="date"
              />
            </FormGroup>
          </Col>
          <Col lg="2" sm="2">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Store</Form.Label>
            <Form.Control as="select">
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
                  {sampleData.map((element, i) => {
                    
                  })}
                  <thead>
                    <tr>
                      <th className="border-0">Id</th>
                      <th className="border-0">Item</th>
                      <th className="border-0">Store</th>
                      <th className="border-0">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((element, i) => {
                      return(<tr>
                        <td>{element.id}</td>
                        <td>{element.item}</td>
                        <td>{element.store}</td>
                        <td>{element.sales}</td>
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
