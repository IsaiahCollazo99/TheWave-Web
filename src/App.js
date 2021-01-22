import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { AuthRoute } from './util/routesUtil';

// https://developers.soundcloud.com/
// https://developer.apple.com/documentation/applemusicapi/
// https://developers.google.com/youtube/v3
// https://developer.pandora.com/

function App() {

  return (
    <div className="App">
        <Header />

        <main className="App-Main">
          <AuthRoute path="/login">
            <Login />
          </AuthRoute>

          <AuthRoute path="/register">
            <SignUp />
          </AuthRoute>

          <Route path="/" exact>
            <Home />
          </Route>
        </main>
    </div>
  );
}

export default App;
