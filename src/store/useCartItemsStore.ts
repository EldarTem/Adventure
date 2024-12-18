import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { CartItem } from "@/types";

export const useCartItemStore = defineStore("cartItem", {
  state: () => ({
    cartItems: [] as CartItem[],
    cartItem: null as CartItem | null,
  }),

  actions: {
    async createCartItem(createCartItemDto: Partial<CartItem>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/cart-items", createCartItemDto);
        this.cartItems.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Cart item successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the cart item",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllCartItems() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/cart-items");
        this.cartItems = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching cart items",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchCartItemById(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/cart-items/${id}`);
        this.cartItem = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the cart item",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateCartItem(id: number, updateCartItemDto: Partial<CartItem>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(
          `/cart-items/${id}`,
          updateCartItemDto
        );
        const updatedCartItem = response.data.data;
        this.cartItems = this.cartItems.map((cartItem) =>
          cartItem.id === id ? updatedCartItem : cartItem
        );
        if (this.cartItem && this.cartItem.id === id) {
          this.cartItem = updatedCartItem;
        }
        ElNotification({
          type: "success",
          message: "Cart item successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the cart item",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteCartItem(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/cart-items/${id}`);
        this.cartItems = this.cartItems.filter(
          (cartItem) => cartItem.id !== id
        );
        ElNotification({
          type: "success",
          message: "Cart item successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the cart item",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getCartItemById: (state) => (id: number) =>
      state.cartItems.find((cartItem) => cartItem.id === id),
  },
});
