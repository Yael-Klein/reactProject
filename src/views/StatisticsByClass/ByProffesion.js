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
export default function ByProffesion() {
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
            argumentField="profesion"
          />
          <BarSeries
            name="תלמידים שלא הכינו שיעורי בית"
            valueField="studentNo"
            argumentField="profesion"
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
          <Title text="צפיה בהתפלגות הכנת שיעורי הבית לפי מקצועות" />
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
  {profesion: 'איבנ',studentTrue:20,studentNo:5},
  {profesion: 'הרות',studentTrue:25,studentNo:10},
  {profesion: 'תילגנא',studentTrue:40,studentNo:2},
  {profesion: 'ןובשח',studentTrue:36,studentNo:8},
  {profesion: 'עבט',studentTrue:15,studentNo:22},
];