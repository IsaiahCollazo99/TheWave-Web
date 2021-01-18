import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

// https://developers.soundcloud.com/
// https://developer.apple.com/documentation/applemusicapi/
// https://developers.google.com/youtube/v3
// https://developer.pandora.com/

function App() {
  return (
    <div className="App">
        <Header />

        <main className="App-Main">
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <SignUp />
          </Route>
        </main>
    </div>
  );
}

export default App;
