import { configureStore, ThunkAction, Action, PayloadAction } from '@reduxjs/toolkit';
import { formsSlice } from 'modules/common/store';
import { WritableDraft } from 'immer/dist/internal';

const store = configureStore({
  reducer: {
    forms: formsSlice,
  },
});

type TDispatch = typeof store.dispatch;
type TRootState = ReturnType<typeof store.getState>;
type TThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>;
type TAction<S, P = void> = (state: WritableDraft<S>, action?: PayloadAction<P>) => void;

export type { TDispatch, TRootState, TThunk, TAction };

export default store;
