
import './App.css';
import Comp from './Comp';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Desc } from './Desc';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <div className="App">
        <Route path='/Desc'  component={Desc}/>
          <p style={{fontSize : '50px' , color :'blue', textAlign:'center'}}>Films et Séries</p> 
        <Route path='/' exact component={Comp}/>
        
        </div>
      </Switch>
    </BrowserRouter>
    
  );

}

export default App;
