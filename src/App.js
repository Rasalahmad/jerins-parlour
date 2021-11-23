import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/'>
        <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
