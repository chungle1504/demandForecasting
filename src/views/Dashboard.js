import React from "react";
import ChartistGraph from "react-chartist";
<<<<<<< HEAD
import axios from 'axios';
=======
import DistributedColumns from './Chart/DistributedColumns';
import Pie from './Chart/Pie';

// react-bootstrap components
>>>>>>> dev-giang
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

// const api = axios.create({
//   baseURL: `http://localhost:8000/result`
// })

//thay smapleData bang data tu backend
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

console.log(cateArr, dataArr, 11111)

//truyen barChartData vao barChart
var barChartData = {
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: cateArr
    },
  },
  series: [
    {
      name: "series-1",
      data: dataArr
    }
  ]
};

var pieChartData = {
  series: dataArr,
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: cateArr,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
  },
};

function Dashboard() {

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
              <label>City</label>
              <FormControl
                type="date"
              />
            </FormGroup>
          </Col>
          <Col lg="3" sm="3">
            {/* <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card> */}
            <FormGroup controlId="date" bsSize="large">
            <label>City</label>
              <FormControl
                type="date"
              />
            </FormGroup>
          </Col>
          <Col lg="4" sm="4">
            <Form.Group>
              <label>City</label>
              <Form.Control
                defaultValue="Mike"
                placeholder="City"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg="2" sm="2">
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
        //endRow
        //chart
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Store's Name</Card.Title>
                <p className="card-category">Date</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity" style={{minHeight:"330px"}}>
                  {/* <ChartistGraph
                    data={{
                      labels: [
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                        "Product's Name",
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          895,
                        ],
                        // [
                        //   412,
                        //   243,
                        //   280,
                        //   580,
                        //   453,
                        //   353,
                        //   300,
                        //   364,
                        //   368,
                        //   410,
                        //   636,
                        //   695,
                        // ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 5,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  /> */}
                  <DistributedColumns></DistributedColumns>
                </div>
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
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                  style={{minHeight:"330px"}}
                >
                  {/* <ChartistGraph
                    data={{
                      labels: ["40%", "20%", "40%"],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  /> */}
                  <Pie></Pie>
                </div>
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
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
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
