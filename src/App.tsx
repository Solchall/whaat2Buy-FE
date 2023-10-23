import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { DefaultLayout } from 'components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
