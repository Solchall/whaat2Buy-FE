import { ChangeEvent, FormEvent, useEffect } from 'react';
import { QueryStore, QueryPlaceHolderStore } from '../../../store';
import { PrefixIcon } from './prefix';
import { StyledButton, StyledFormContainer, StyledInputContainer, StyledInput } from './styles';
import { QueryPlaceHolder } from 'constant/texts';

const Input = () => {
  const { query, setQuery } = QueryStore();
  const { idx, setPlaceHolderIdx } = QueryPlaceHolderStore();

  useEffect(() => {
    const interval = setInterval(() => setPlaceHolderIdx(), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('페이지 이동');
  };
  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  return (
    <>
      <div className="w-full">
        <form className={StyledFormContainer} onSubmit={handleSubmit}>
          <div className={StyledInputContainer}>
            <PrefixIcon />
            <input
              className={StyledInput}
              placeholder={QueryPlaceHolder[idx]}
              name="query"
              role="getInitialDemandQuery"
              onChange={handleQueryChange}
              value={query}
            />
          </div>

          <button className={StyledButton} type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;
