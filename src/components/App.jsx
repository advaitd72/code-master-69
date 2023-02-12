import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './LandingPage';
import Test from './Test';


const App = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<LandingPage/>} />
                    <Route path='/test' exact element={<Test/>} />
                </Routes>                    
            </BrowserRouter>
        </div>
    )
}

export default App;