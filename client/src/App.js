//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
//JS
import * as bootstrap from 'bootstrap'
import NavbarBootstrap from './components/header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import List from './pages/list/List.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
    return (
        <div className="App d-flex flex-column vh-100 justify-content-between">
            <BrowserRouter>
            <div>
                <NavbarBootstrap />

            </div>
                <div className='text-center'>
                    <Routes>
                        <Route path="/hotels" element={<List />} />
                        <Route path='/' element={<Home />}></Route>
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
