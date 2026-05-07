import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  licenses: string;
  acceptPolicy: boolean;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    licenses?: string;
    acceptPolicy?: string;
  };
  submitted: boolean;
  submitting: boolean;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  licenses: '',
  acceptPolicy: false,
  errors: {},
  submitted: false,
  submitting: false,
};

const formSlice = createSlice({
  name: 'proForm',
  initialState,
  reducers: {
    setField(
      state,
      action: PayloadAction<{
        field: keyof Omit<FormState, 'errors' | 'submitted' | 'submitting'>;
        value: string | boolean;
      }>
    ) {
      const { field, value } = action.payload;
      (state as Record<string, unknown>)[field] = value;
      // Clear error on change
      if (field in state.errors) {
        delete state.errors[field as keyof FormState['errors']];
      }
    },
    setErrors(state, action: PayloadAction<FormState['errors']>) {
      state.errors = action.payload;
    },
    setSubmitting(state, action: PayloadAction<boolean>) {
      state.submitting = action.payload;
    },
    setSubmitted(state, action: PayloadAction<boolean>) {
      state.submitted = action.payload;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const { setField, setErrors, setSubmitting, setSubmitted, resetForm } = formSlice.actions;
export default formSlice.reducer;
