import { ChangeEvent, FormEvent } from 'react';
import { QueryStore } from '../../store/query';

const Input = () => {
  const { query, setQuery } = QueryStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('페이지 이동');
  };
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  return (
    <>
      <div>
        query: <span role="queryInfo">{query}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          role="getInitialDemandQuery"
          onChange={handleQueryChange}
          value={query}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default Input;
