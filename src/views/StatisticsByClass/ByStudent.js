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
export default function ByStudent() {
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
            name="נביא"
            valueField="status"
            argumentField="student"
          />
          <BarSeries
            name="תורה"
            valueField="status"
            argumentField="student"
          />
          <BarSeries
            name="מטמתיקה"
            valueField="status"
            argumentField="student"
          />
          <BarSeries
            name="טבע"
            valueField="status"
            argumentField="student"
          />
          <BarSeries
            name="אנגלית"
            valueField="status"
            argumentField="student"
          />
          {/* <Animation /> */}
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="צפיה בהתפלגות הכנת שיעורי הבית לפי תלמידים" />
          <Stack
            stacks={[
              { series: ['יתב','יניד' ,'יליג', 'רמת','לעי'] },
            ]}
          />
        </Chart>
      </Paper>
    );
  }
// }
const PRODUCTS = [
  {student: 'לעי',profesion:"נביא", status:true},
  {student: 'רמת',profesion:"תורה", status:true},
  {student: 'יליג',profesion:"מטמתיקה", status:false},
  {student: 'יניד',profesion:"טבע", status:false},
  {student: 'יתב',profesion:"אנגלית", status:false},
];

