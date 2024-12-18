import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Product } from "@/types";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    product: null as Product | null,
  }),

  actions: {
    async createProduct(createProductDto: Partial<Product>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/products", createProductDto);
        this.products.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Product successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the product",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllProducts() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/products");
        this.products = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching products",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchProductById(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/products/${id}`);
        this.product = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the product",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateProduct(id: string, updateProductDto: Partial<Product>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/products/${id}`, updateProductDto);
        const updatedProduct = response.data.data;
        this.products = this.products.map((product) =>
          product.id === id ? updatedProduct : product
        );
        if (this.product && this.product.id === id) {
          this.product = updatedProduct;
        }
        ElNotification({
          type: "success",
          message: "Product successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the product",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteProduct(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/products/${id}`);
        this.products = this.products.filter((product) => product.id !== id);
        ElNotification({
          type: "success",
          message: "Product successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the product",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getProductById: (state) => (id: string) =>
      state.products.find((product) => product.id === id),
  },
});
