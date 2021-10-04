import './App.css';
import SearchStudents from './views/SearchStudents';
import Button from '@material-ui/core/Button';
import SignUp from './views/Login/SignUp';
import SignIn from './views/Login/SignIn';
import Enter from './views/EnterHomeWork/Enter';
import MainMenu from './views/SecondMenu/MainMenu';
import SearchStudentByClass from './views/SearchStudentByClass';
import First from './views/FirstEnter/First';
import SignInS from './views/LoginStudent/SignInS';
import StudentHomeW from './views/StudentHW/StudentHomeW'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import UserContext from "./context/UserContext";
import MenuF from './views/FirstMenu/MenuF'
import Question from './views/StudentHW/Question';


function App() {
  return (
    <UserContext>
  <Router>
    <Route component={First} path="/" exact /> 
    <Route component={First} path="/first"/> 
    <Route component={SignIn} path="/sign_in" />
    <Route component={SignInS} path="/sign_in_s" />
    <Route component={SignUp} path="/sign_up" />
    <Route component={MainMenu} path="/main_menu" />
    <Route component={MenuF} path="/first_menu" />
    <Route component={StudentHomeW} path="/student_home_work" /> 
    <Route component={SearchStudents} path="/search_students" />
    <Route component={SearchStudentByClass} path="/search_students_by_class" />
    <Route component={Question} path="/question" />

  </Router>
  </UserContext>
  );
}


export default App;
