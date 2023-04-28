import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage';
import { FlowLayout } from './pages/flow-layout';
import { General } from './pages/account/general';
import { Billing } from './pages/account/billing';
import { Integration } from './pages/account/integration';
import { CarrierAccount } from './pages/shipping/carrier-account';
import { Warehouse } from './pages/shipping/warehouse';
import { ShippingZones } from './pages/shipping/shipping-zones';
import { Rules } from './pages/shipping/rules-flat-rates';
import { LandedCostSettings } from './pages/landed-cost/landed-cost-settings';
import { TaxIds } from './pages/landed-cost/tax-ids';
import { Buffers } from './pages/landed-cost/buffers';
import { Team } from './pages/landed-cost/team';
import { AppEnable } from './pages/shopify/app-enable';
import { LoginLayout } from './pages/login-layout';
import { Login } from './pages/login';
import { Register } from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="checklist" element={<FlowLayout />}>
          <Route index element={<HomePage />} />
          <Route path="general" element={<General />} />
          <Route path="billing" element={<Billing />} />
          <Route path="integration" element={<Integration />} />
          <Route path="carrier-account" element={<CarrierAccount />} />
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="shipping-zones" element={<ShippingZones />} />
          <Route path="rules-flat-rates" element={<Rules />} />
          <Route path="landed-cost-settings" element={<LandedCostSettings />} />
          <Route path="tax-ids" element={<TaxIds />} />
          <Route path="buffers" element={<Buffers />} />
          <Route path="team" element={<Team />} />
          <Route path="app-enable" element={<AppEnable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
