import './App.css';
// import SearchStudents from './views/SearchStudents';
// import Button from '@material-ui/core/Button';
// import SignUp from './views/Login/SignUp';
// import SignIn from './views/Login/SignIn';
// import Enter from './views/EnterHomeWork/Enter';
// import MainMenu from './views/SecondMenu/MainMenu';
// import SearchStudentByClass from './views/SearchStudentByClass';
// import First from './views/FirstEnter/First';
// import SignInS from './views/LoginStudent/SignInS';
// import StudentHomeW from './views/StudentHW/StudentHomeW'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
 import UserContext from "./context/UserContext";
// import MenuF from './views/FirstMenu/MenuF'
// import Question from './views/StudentHW/Question';
import Flicker from './views/Flickr/Flicker';
import FlickerImage from './views/FlickerImage';


function App() {
  return (
   <UserContext>
  <Router>

  <Route component={Flicker} path="/" exact/> 
  <Route component={FlickerImage} path="/flicker_image" /> 


  </Router>  
  </UserContext>
 
  );
}


export default App;
