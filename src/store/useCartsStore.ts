import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Cart } from "@/types";

export const useCartStore = defineStore("cart", {
  state: () => ({
    carts: [] as Cart[],
    cart: null as Cart | null,
  }),

  actions: {
    async createCart(createCartDto: Partial<Cart>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/carts", createCartDto);
        this.carts.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Cart successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the cart",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllCarts() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/carts");
        this.carts = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching carts",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchCartById(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/carts/${id}`);
        this.cart = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the cart",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateCart(id: number, updateCartDto: Partial<Cart>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/carts/${id}`, updateCartDto);
        const updatedCart = response.data.data;
        this.carts = this.carts.map((cart) =>
          cart.id === id ? updatedCart : cart
        );
        if (this.cart && this.cart.id === id) {
          this.cart = updatedCart;
        }
        ElNotification({
          type: "success",
          message: "Cart successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the cart",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteCart(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/carts/${id}`);
        this.carts = this.carts.filter((cart) => cart.id !== id);
        ElNotification({
          type: "success",
          message: "Cart successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the cart",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getCartById: (state) => (id: number) =>
      state.carts.find((cart) => cart.id === id),
  },
});
