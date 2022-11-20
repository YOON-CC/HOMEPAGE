import './App.css';
import Home from './Home'
import Choice from './Choice'

function App() {
  //

  //리턴 부분
  return (
    <div className='App_body'>

      <div className="home_div">
        <Home></Home>
      </div>

      <div className="home_div">
        <Choice></Choice>
      </div>

    </div>
  );
}

export default App;
