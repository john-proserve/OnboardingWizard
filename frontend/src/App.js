import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage';
import { Layout } from './pages/layout';
import { General } from './pages/account/general';
import { Billing } from './pages/account/billing';
import { Integration } from './pages/account/integration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/general' element={<General />} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/integration' element={<Integration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
