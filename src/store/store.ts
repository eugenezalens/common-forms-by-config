import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
});

type TTypedDispatch = typeof store.dispatch;
type TRootState = ReturnType<typeof store.getState>;
type TTypedThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>;

export type { TTypedDispatch, TRootState, TTypedThunk };

export default store;
