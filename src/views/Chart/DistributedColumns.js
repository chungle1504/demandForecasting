import React, { Component } from "react";
import Chart from "react-apexcharts";

class DistributedColumns extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: this.props.categories
          // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
        },
      },
      series: [
        {
          name: "Sales: ",
          data: this.props.data
          // data: [30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28, 30, 40, 45, 50, 49, 60, 70, 91, 13, 28]
        }
      ]
    };
  }

  render() {
    return (
      // <div className="app">
      //   <div className="row">
      //     <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              // width="760"
              // height="360"
              style={{marginLeft:"10px"}}
            />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default DistributedColumns;