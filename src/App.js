import logo from './logo.png'
import './App.scss'
import GlobalStats from "./GlobalStats"

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img src={logo} className="app__header__logo" alt="logo"/>
      </div>
    <GlobalStats />
    </div>
  );
}

export default App;
