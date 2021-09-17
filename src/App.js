
import './App.css';
import Comp from './Comp';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      
      <p style={{fontSize : '50px' , color :'blue', textAlign:'center'}}>Films et Séries</p>
      
      <Comp/>
    </div>
  );
}

export default App;
