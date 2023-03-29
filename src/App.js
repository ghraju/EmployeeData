
import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Employee from './components/employee';

function App() {
  
  return (
    <div className="App">
   <BrowserRouter>
        <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path="/admin/*" element={<Dashboard/>}/>
           <Route path="/admin/emp/:id" element={<Employee/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
