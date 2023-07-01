import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import formConfigList from 'configs/list/forms/forms.config';
import { IForm, IFormElement } from 'modules/common/models/forms';
import { IFormsState } from 'modules/common/store/forms/forms.types';
import { TRootState } from 'store/store';

const initialFormsState: IFormsState = {
  formList: {},
  formConfigList: formConfigList,
};

const formsSlice = createSlice({
  name: 'forms',
  initialState: initialFormsState,
  reducers: {
    setForm: (state, { payload }: PayloadAction<IForm>) => {
      state.formList[payload.uniqueKey] = payload;
    },
    handleChangeElement: (state, { payload }: PayloadAction<IFormElement>) => {
      state.formList[payload.formUniqueKey].elements = state.formList[payload.formUniqueKey].elements.map(
        (stateElement) => (stateElement.name === payload.name ? payload : stateElement)
      );
    },
  },
});

export const formsActions = formsSlice.actions;

export const formsSelector = (state: TRootState) => state.forms;

export default formsSlice.reducer;
