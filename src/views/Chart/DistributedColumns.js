import React, { Component } from "react";
import Chart from "react-apexcharts";

class DistributedColumns extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="app">
      //   <div className="row">
      //     <div className="mixed-chart">
        <div style={{overflow:'auto'}}>
            <Chart
              height ={420}
              width={this.props.categories.length * 50}
              options={{
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: this.props.categories
                  // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
                },
                yaxis: {
                  labels: {
                    formatter: (value) => { return `${value}` }
                  }
                }
              }}
              series={[
                {
                  name: "Sales: ",
                  data: this.props.data
                  // data: [30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28]
                }
              ]}
              type="bar"
              // width="760"
              // height="360"
              style={{marginLeft:"10px"}}
            />
      </div>
      //   </div>
      // </div>
    );
  }
}

export default DistributedColumns;