
import './App.css';
import Comp from './Comp';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Desc  from './Desc';


function App() {
  
  return (

    <BrowserRouter>
    
      <Switch>
        
           
        <Route path='/' exact component={Comp}/>
        <Route path='/Desc/:index' children={<Desc />}>
          <Desc/>
        </Route>
 
      </Switch>
    </BrowserRouter>
    
  );

}

export default App;
