
import './App.css'; 


import { BrowserRouter, Route , Routes} from "react-router-dom";
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import Header from './components/Header';

function App() {
  return (
    <>
   
   
    <BrowserRouter>
    <Header />
    <div className='main'>
     
    <Routes>
   
    <Route path="/" Component={Homepage} exact/>
    <Route path="/coins/:id" Component={Coinpage} />
   
 
    </Routes>
    </div>
    </BrowserRouter>
  
    </>
  );
}

export default App;
