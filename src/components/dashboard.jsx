import Nav_bar from "./navbar";
import { Routes,Route } from "react-router-dom";
import Heading from "./heading";
import Create from "./create";
import Data from "./data";
const Dashboard = () => {
    
    return ( 
        <div className="Dashboard">
            <Nav_bar/>
        <Routes>
             <Route path="/" element={<Heading/>}/>
            <Route path="/create" element={<Create/>} />
            <Route path="/employee" element={<Data/>}/> 
        </Routes>
        
        </div>
     );
}
 
export default Dashboard;