import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MainLayout from './components/layout/MainLayout/MainLayout';

function App() {
  return (
    <MainLayout>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
    
  );
}

export default App;
