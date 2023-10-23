/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { render } from '@testing-library/react';
import { QueryStore, QueryState, QueryStoreValueProps } from 'store/query';

interface TestComponentProps {
  selector: (store: QueryState) => QueryStoreValueProps | Partial<QueryState>;
  effect: jest.Mock<any, any>;
}

export const TestComponent = ({ selector, effect }: TestComponentProps) => {
  const items = QueryStore(selector);
  useEffect(() => effect(items), [items]);
  return null;
};

// Before Each Test, setState into its original State
const originalQueryState = QueryStore.getState();
beforeEach(() => {
  QueryStore.setState(originalQueryState);
});

// 초기 query 값 빈 문자열인지 확인
test('초기 store의 query 값이 빈 문자열임', () => {
  const selector = (store: QueryState): QueryStoreValueProps => store.query;
  const effect = jest.fn();
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledWith('');
});

test('입력한 값이 store의 query값으로 설정되며 effect로 반환됨', () => {
  const selector = (store: QueryState): Pick<QueryState, 'query' | 'setQuery'> => ({
    query: store.query,
    setQuery: store.setQuery,
  });
  const intialDemand = 'y2k 패션 추천해줘';
  let currentItem: QueryState;
  const effect = jest.fn().mockImplementation((item) => {
    currentItem = item;
    if (item.query.length === 0) {
      item.setQuery(intialDemand);
    }
  });
  render(<TestComponent selector={selector} effect={effect} />);
  expect(currentItem!.query).toEqual(intialDemand);
});

test('입력한 값을 가진 store의 query값이 빈 문자열로 초기화되어 effect로 반환됨', () => {
  const selector = (store: QueryState): Pick<QueryState, 'query' | 'setQuery' | 'resetQuery'> => ({
    query: store.query,
    setQuery: store.setQuery,
    resetQuery: store.resetQuery,
  });
  let enterInitialDemand = false;
  let currentItem: QueryState;
  const intialDemand = 'y2k 패션 추천해줘';
  const effect = jest.fn().mockImplementation((item) => {
    currentItem = item;
    if (!enterInitialDemand) {
      item.setQuery(intialDemand);
      enterInitialDemand = true;
    } else if (item.query.length > 0) {
      item.resetQuery();
    }
  });
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledTimes(3);
  expect(currentItem!.query).toEqual('');
});
