import { ProductType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalType {
  isOpen: boolean;
  data?: ProductType;
}

const initialState = {
  isOpen: false,
  data: {} as ProductType,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: ModalType, action: PayloadAction<ProductType>) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeModal: (state: ModalType) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
