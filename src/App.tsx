import { MainInput } from 'components';
import { QueryStore } from 'store/query';

function App() {
  const { query } = QueryStore();
  return (
    <div>
      {query}
      <MainInput />
    </div>
  );
}

export default App;
