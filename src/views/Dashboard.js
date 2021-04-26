import React from "react";
import ChartistGraph from "react-chartist";
import axios from 'axios';
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
          <Col lg="5" sm="5">
            <Card className="card-stats">
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
            </Card>
          </Col>
          <Col lg="5" sm="5">
            <Card className="card-stats">
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
            </Card>
          </Col>
          <Col lg="2" sm="2">
            <Card className="card-stats">
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
            </Card>
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
                <div className="ct-chart" id="chartActivity">
                  {/* <ChartistGraph
                    data={jsonBarData}
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
                </div>
              </Card.Body>
              <Card.Footer>
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
              </Card.Footer>
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
                >
                  {/* <ChartistGraph
                    data={{
                      labels: ["40%", "20%", "40%"],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  /> */}
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Bounce <i className="fas fa-circle text-warning"></i>
                  Unsubscribe
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
