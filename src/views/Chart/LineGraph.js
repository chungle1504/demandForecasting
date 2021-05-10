import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

// class LineGraph extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
    
//       series: [{
//           name: "Desktops",
//           data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//       }],
//       options: {
//         chart: {
//           height: 350,
//           type: 'line',
//           zoom: {
//             enabled: false
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'straight'
//         },
//         title: {
//           text: 'Product Trends by Month',
//           align: 'left'
//         },
//         grid: {
//           row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//           },
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//         }
//       },
    
    
//     };
//   }
//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
//       </div>
//     );
//   }
// }

// export default LineGraph;
class LineGraph extends Component {

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
            height ={650}
              // width={this.props.categories.length * 50}
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
                }
              ]}
              type="line"
              style={{marginLeft:"10px"}}
            />
      </div>
      //   </div>
      // </div>
    );
  }
}

export default LineGraph;