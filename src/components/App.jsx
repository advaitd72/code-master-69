import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './LandingPage'


const App = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<LandingPage/>} />
                    <Route path='/signup' element={<LandingPage/>} />
                </Routes>                    
            </BrowserRouter>
        </div>
    )
}

export default App;