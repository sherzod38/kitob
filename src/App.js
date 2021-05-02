import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';

import Sidebar from './Containers/Sidebar'
import Kitob from './Components/Kitob'

import './Assets/styles/main.scss'

import BoshSahifa from './pages/BoshSahifa'
import Diniy from './pages/Diniy'
import Ilmiy from './pages/Ilmiy'
import Darsliklar from './pages/Darsliklar'
import Adabiyot from './pages/Adabiyot'
import Jurnallar from './pages/Jurnallar'
import KitobQoshish from './pages/KitobQoshish'
import ChatHona from './pages/ChatHona'
import Manzil from './pages/Manzil'



function App() {
  return (
    <Router>
      <div className="wrapper">
        <Kitob/>
      <div className="app">
        <Sidebar/>

        <div className="content">
          <Switch>
            <Route path='/boshsahifa' component={BoshSahifa}/>
            <Route path='/diniy' component={Diniy}/>
            <Route path='/darsliklar' component={Darsliklar}/>
            <Route path='/ilmiy' component={Ilmiy}/>
            <Route path='/adabiyot' component={Adabiyot}/>
            <Route path='/jurnallar' component={Jurnallar}/>
            <Route path='/kitobQoshish' component={KitobQoshish}/>
            <Route path='/chatHona' component={ChatHona}/>
            <Route path='/manzil' component={Manzil}/>

          </Switch>
        </div>

      </div>
      </div>
      
    </Router>
  );
}

export default App;
