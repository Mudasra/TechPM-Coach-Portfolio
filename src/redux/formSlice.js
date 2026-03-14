import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitLeadForm = createAsyncThunk(
  "form/submit",
  async (formData, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
          return { ...formData, submittedAt: new Date().toISOString() };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle", // 'idle' | 'loading' | 'success' | 'error'
    submittedData: null,
    error: null,
    isModalOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      if (state.status !== "success") {
        state.status = "idle";
        state.error = null;
      }
    },
    resetForm: (state) => {
      state.status = "idle";
      state.submittedData = null;
      state.error = null;
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLeadForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitLeadForm.fulfilled, (state, action) => {
        state.status = "success";
        state.submittedData = action.payload;
      })
      .addCase(submitLeadForm.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Something went wrong. Please try again.";
      });
  },
});

export const { openModal, closeModal, resetForm } = formSlice.actions;

export const selectFormStatus = (state) => state.form.status;
export const selectFormError = (state) => state.form.error;
export const selectIsModalOpen = (state) => state.form.isModalOpen;
export const selectSubmittedData = (state) => state.form.submittedData;

export default formSlice.reducer;
