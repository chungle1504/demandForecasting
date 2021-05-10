import DistributedColumns from './Chart/DistributedColumns';
import LineGraph from './Chart/LineGraph';
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
import getItemFollowTime from 'api/getItemFollowTime';


function Dashboard() {

  // const [data, setData] = useState();
  const [cateArr, setCateArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [startDate, setStartDate] = useState(['2018-01-01']);
  const [endDate, setEndDate] = useState(['2018-01-09']);
  const [store, setStore] = useState([1]);
  const [item, setItem] = useState([1]);


  const fetchData = () => {
    console.log('fetch');
    // return getData(store, startDate, endDate).then(data => {
    //   const cate = data.map(d => d.item).filter((e, i, arr) => {
    //     return arr.indexOf(e) === i
    //   })
    //   console.log(data.map(d => d.item));
    //   setCateArr(cate);
    //   return getResult();
    // }).then(result => {
    //   setDataArr(result.map(d => d.sales_sum).filter(e => e !== null))
    //   console.log('done');
    // }).catch(err => {
    //   alert(err.message);
    // })
    getItemFollowTime(store, startDate, endDate, item).then(result => {
      result = result.filter(e => e.sales !== null);
      console.log(result);
      setCateArr(result.map(d => d.date));
      setDataArr(result.map(d => d.sales));
    }).catch(err => {
        alert(err.message);
    });
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
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Item</Form.Label>
            <Form.Control as="select" value={item} onChange={e => setItem(e.target.value)}>
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
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
              <option>32</option>
              <option>33</option>
              <option>34</option>
              <option>35</option>
              <option>36</option>
              <option>37</option>
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
              <option>44</option>
              <option>45</option>
              <option>46</option>
              <option>47</option>
              <option>48</option>
              <option>49</option>
              <option>50</option>
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
          <Col md="9">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Store's Name</Card.Title>
                <p className="card-category">Date</p>
              </Card.Header>
              <Card.Body>
                {/* <div className="ct-chart" id="chartActivity" style={{minHeight:"330px"}}> */}
                  {/* BAR CHART */}
                 
                  <LineGraph categories = {cateArr}
                                      data = {dataArr}>
                  </LineGraph>
                  {/* <LineGraph series={dataArr} options={cateArr}></LineGraph> */}
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
          <Col md="3">
            <Card>
              <Card.Header>
                <Card.Title as="h4">
                Item's Name
                </Card.Title>
                <Card.Title as="h5">
                Best sold day: ? with ... items
                </Card.Title>
                <Card.Title as="h5">
                Worst sold day: ? with ... items
                </Card.Title>
              </Card.Header>
              <Card.Body>
                {/* <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                  // style={{minHeight:"330px"}}
                > */}
                  {/* PIE CHART */}
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
      </Container>
    </>
  );
}

export default Dashboard;
