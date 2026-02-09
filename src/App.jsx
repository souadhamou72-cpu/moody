import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Landing from './pages/Landing';
import MoodyInsights from './pages/MoodyInsights';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" richColors />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/moody-insights" element={<MoodyInsights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
