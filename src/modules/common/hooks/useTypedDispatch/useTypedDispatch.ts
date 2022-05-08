import { useDispatch } from 'react-redux';
import { TTypedDispatch } from 'store/store';

const useTypedDispatch = () => useDispatch<TTypedDispatch>();

export default useTypedDispatch;
