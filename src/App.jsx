import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import MoodyInsights from './pages/MoodyInsights';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/moody-insights" element={<MoodyInsights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
