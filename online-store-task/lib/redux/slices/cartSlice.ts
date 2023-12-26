import { ProductType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the CartState type
interface CartState {
  cartItems: ProductType[];
  totalQuantity: number;
  totalPriceofProduct: number;
}

// Define the initial state
const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPriceofProduct: 0,
};

// Create a cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity && existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalPriceofProduct = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeAProductFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity && existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) - Number(existingItem.price);
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
      state.totalPriceofProduct = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteProductsFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
      state.totalPriceofProduct = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

// Export the reducer and actions
export const { addToCart, removeAProductFromCart, deleteProductsFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
