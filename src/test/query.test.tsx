/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { render } from '@testing-library/react';
import { QueryStore } from 'store/query';
import { IQueryStoreValue, IQuery } from 'types';

interface TestComponentProps {
  selector: (store: IQuery) => IQueryStoreValue | Partial<IQuery>;
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
  const selector = (store: IQuery): IQueryStoreValue => store.query;
  const effect = jest.fn();
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledWith('');
});

test('입력한 값이 store의 query값으로 설정되며 effect로 반환됨', () => {
  const selector = (store: IQuery) => ({
    query: store.query,
    setQuery: store.actions.setQuery,
  });
  const intialDemand = 'y2k 패션 추천해줘';
  let currentItem: IQuery;
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
  const selector = (store: IQuery) => ({
    query: store.query,
    setQuery: store.actions.setQuery,
    resetQuery: store.actions.resetQuery,
  });
  let enterInitialDemand = false;
  let currentItem: IQuery;
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
