import './App.css';
import Wrapper from './Components/Wrapper';

function App() {



  
  const dataGet =(data) =>{
    console.log(data);
  }

  return (
    <div className="App">
      <Wrapper dataGett={dataGet}/>
    </div>
  );
}

export default App;
