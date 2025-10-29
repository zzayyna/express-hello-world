
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './design/App.css'
import Home from './components/Home';
import Cashier from './components/Cashier';
import Kiosk from './components/Kiosk';
import Manager from './components/Manager';
import Kitchen from './components/Kitchen';
import Menu from './components/Menu';
import { ContextProvider } from './components/GlobalContext';

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cashier" element={<Cashier />} />
            <Route path="kiosk" element={<Kiosk />} />
            <Route path="manager" element={<Manager />} />
            <Route path="kitchen" element={<Kitchen />} />
            <Route path="menu" element={<Menu />} />
            {/* <Route path="trends" element={<TrendsPage />} />
             */}
            
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App
