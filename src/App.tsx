import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, List } from './pages';
import { DefaultLayout } from 'components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
