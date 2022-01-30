import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App" class="container">
      <h1>Favorite Authors</h1>
      <Switch>
        {/* EDIT */}
        <Route exact path="/authors/update/:id">
          <Update />
        </Route>

        {/* CREATE */}
        <Route exact path="/authors/new">
          <Create />
        </Route>
        
        {/* VIEW ONE */}
        <Route exact path="/authors/:id">
          <ViewOne />
        </Route>


        {/* HOME & VIEW ALL */}
        <Route exact path="/authors">
          <Main />
        </Route>
        
        {/* REDIRECT */}
        <Route path="/">
          <Redirect to="/authors" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
