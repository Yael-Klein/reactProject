import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";
import SearchStudents from '../SearchStudents';
import Enter from '../EnterHomeWork/Enter';
import MenuF from '../FirstMenu/MenuF';
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import SearchStudentByClass from '../SearchStudentByClass';
import Byclass from '../StatisticsByClass/Byclass';
import ByProffesion from '../StatisticsByClass/ByProffesion';
import ByStudent from '../StatisticsByClass/ByStudent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MainMenu() {
 const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
     className={classes.root}
     >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          // variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          centered
        >

  <Tab label=" צפיה בסטטיסטיקות"{...a11yProps(0)} /> 
         
          {/* icon={<PhoneIcon />}  */}
          <Tab label="צפיה בדוח תלמידים" {...a11yProps(1)}
          />
          {/* icon={<FavoriteIcon />} */}
          <Tab label="הוספה ועדכון תלמידים ומקצועות"
            //  icon={<PersonPinIcon />}
            {...a11yProps(2)} />
          <Tab label="עדכון מטלות שיעורי בית"
            //  icon={<HelpIcon />}
            {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Byclass></Byclass>
        <ByProffesion></ByProffesion>
        <ByStudent></ByStudent>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchStudents />
        <SearchStudentByClass></SearchStudentByClass>
      </TabPanel>
      <TabPanel value={value} index={2}>

      </TabPanel>
      <TabPanel value={value} index={3}>
        <Enter></Enter>
      </TabPanel>
    </div>
  );
}









// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

// export default function CenteredTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="Item One" />
//         <Tab label="Item Two" />
//         <Tab label="Item Three" />
//       </Tabs>
//     </Paper>
//   );
// }