import logo from './logo.svg';
import './App.css';
import Registration from './component/pages/registration';
import Login from './component/pages/login';

import {useDispatch, useSelector} from "react-redux";
import Main from './services/Routing/routes';


function App() {
  return (
    <div className="App">
      <Main></Main>

    </div>
  );
}

export default App;
