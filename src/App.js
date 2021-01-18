import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
        <Header />

        <main className="App-Main">
          <Route path="/login">
            <Login />
          </Route>
        </main>
    </div>
  );
}

export default App;
