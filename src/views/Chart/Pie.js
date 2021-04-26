import React, { Component } from "react";
import Chart from "react-apexcharts";

class Pie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22, 23, 14, 45, 90, 12,44, 55, 13, 43, 22, 23, 14, 45, 90, 12,44, 55, 13, 43, 22, 23, 14, 45, 90, 12,44, 55, 13, 43, 22, 23, 14, 45, 90, 12,44, 55, 13, 43, 22, 23, 14, 45, 90, 12],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E','Team F', 'Team G', 'Team H', 'Team I', 'Team K','Team A', 'Team B', 'Team C', 'Team D', 'Team E','Team F', 'Team G', 'Team H', 'Team I', 'Team K','Team A', 'Team B', 'Team C', 'Team D', 'Team E','Team F', 'Team G', 'Team H', 'Team I', 'Team K','Team A', 'Team B', 'Team C', 'Team D', 'Team E','Team F', 'Team G', 'Team H', 'Team I', 'Team K','Team A', 'Team B', 'Team C', 'Team D', 'Team E','Team F', 'Team G', 'Team H', 'Team I', 'Team K'],
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
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width="400"
              style={{marginLeft:"-15px", marginTop:"20px"}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pie;