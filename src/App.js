import './App.css';
import { Route, Routes } from 'react-router-dom';
import People from './views/People';
import Planets from './views/Planets';
import Error from './views/ErrorPage';
import JediApplication from './components/JediApplication';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <JediApplication />
      <div>
      <h1>Routes</h1>
      <Routes>
          <Route path="/people/:id" element={<People />}/>
          <Route path="/planets/:id" element={<Planets />}/>
          <Route path="/*" element={<Error />}/>
      </Routes>
      </div>
      </header>
    </div>
  );
}

export default App;
