import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
//import { energyConsumption as data } from '../../../demo-data/data-vizualization';
export default function Byclass() {
const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

//export default class Byclass extends React.PureComponent {
  // constructor(props) {
  //   super(props);

    // this.state = {
    //   data,
    // };
  // }

  // render() {
  //  const { data: chartData } = this.state;
  
    return (
     //const data = [
  //{ argument: 'Monday', value: 30 },
  //<BarSeries valueField="value" argumentField="argument" />
      <Paper>
        <Chart
          data={PRODUCTS}
        >
          <ArgumentAxis />
          <ValueAxis
            max={45}
          />
          <BarSeries
            name=" תלמידים שהכינו שיעורי בית"
            valueField="studentTrue"
            argumentField="class"
          />
          <BarSeries
            name="תלמידים שלא הכינו שיעורי בית"
            valueField="studentNo"
            argumentField="class"
          />
          {/* <BarSeries
            name=""
            valueField="studentTrue"
            argumentField="class"
          />
          <BarSeries
            name=""
            valueField="studentTrue"
            argumentField="class"
          />
          <BarSeries
            name=""
            valueField="studentTrue"
            argumentField="class"
          /> */}
          {/* <Animation /> */}
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="צפיה בהתפלגות הכנת שיעורי הבית לפי כיתות" />
          <Stack
            stacks={[
              { series: ['studentTrue','studentNo' ,'Coal', 'Nuclear'] },
            ]}
          />
        </Chart>
      </Paper>
    );
  }
// }
const PRODUCTS = [
  {class: 'ג1',studentTrue:15,studentNo:5},
  {class: 'ד3',studentTrue:22,studentNo:10},
  {class: 'ב2',studentTrue:17,studentNo:2},
  {class: 'א1',studentTrue:39,studentNo:8},
  {class: 'ג3',studentTrue:25,studentNo:22},
];


// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';

// const data = [
//   { class: 'א4', studentPrepare: 12 },
//   { class: 'ב', studentPrepare: 5 },
//   { class: 'ג2', studentPrepare: 17 },
//   { class: 'ד3', studentPrepare: 27 },
//   { class: 'ה6', studentPrepare: 36 },
//   { class: 'ה2', studentPrepare: 5 },
//   { class: 'ד1', studentPrepare: 2 },
//   { class: 'ג3', studentPrepare: 40 },
// ];
// export default class Byclass extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };
//   }

//   render() {
//     const { data: chartData } = this.state;

//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <PieSeries
//           name="כיתה"
//             valueField="studentPrepare"
//             argumentField="class"
//           />
//           <Title
//             text="תלמידים שהכינו שיעורי בית מכלל כיתות הלימוד"
//           />
//           <Animation />
//         </Chart>
//       </Paper>
//     );
//   }
// }

