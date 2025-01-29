import logo from './logo.svg';
import './App.css';
import Reduxtodo from './Pages/Reduxtodo';
import {Provider} from "react-redux"
import Store from './Store/store';
function App() {
  return (
    <div className="App">
 <Provider store={Store}>
 <Reduxtodo/>
 </Provider>
   

    </div>
  );
}

export default App;
