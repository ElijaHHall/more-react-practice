import React, {Component} from 'react';
import Home from "./components/Home";
import MyRoutes from './config/routes';


class App extends Component{
  render() {
    return (
    <div className="App">
        {MyRoutes}
    </div>
  );
  }
  
}

export default App;
