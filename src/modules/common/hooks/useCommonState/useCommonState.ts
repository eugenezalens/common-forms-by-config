import { useCallback, useState } from 'react';

type THandleChangeState<T extends Record<keyof T, T[keyof T]>> = (value: Partial<T>) => void;

const useCommonState = <T extends Record<keyof T, T[keyof T]>>(initialState: T): [T, THandleChangeState<T>] => {
  const [state, setState] = useState<T>(initialState);

  const handleChangeState = useCallback<THandleChangeState<T>>((value) => setState({ ...state, ...value }), [state]);

  return [state, handleChangeState];
};

export default useCommonState;
