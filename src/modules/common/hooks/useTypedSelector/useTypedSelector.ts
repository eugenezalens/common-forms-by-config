import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from 'store/store';

const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default useTypedSelector;
