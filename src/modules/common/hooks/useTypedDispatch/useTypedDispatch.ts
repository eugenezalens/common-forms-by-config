import { useDispatch } from 'react-redux';
import { TDispatch } from 'store/store';

const useTypedDispatch = () => useDispatch<TDispatch>();

export default useTypedDispatch;
