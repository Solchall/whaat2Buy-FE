import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home, List } from './pages';
import { DefaultLayout } from 'components';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
