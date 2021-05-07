import React, { Component } from "react";
import Chart from "react-apexcharts";

class Pie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
              <Chart
                options={{
                  chart: {
                    width: 1000,
                    type: 'pie',
                  },
                  labels: this.props.labels,
                  responsive: [{
                    options: {
                      chart: {
                        // width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }],
                }}
                series={this.props.series}
                type="pie"
                width="100%"
                // style={{marginLeft:"-13px"}}
              />
            {/* </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Pie;