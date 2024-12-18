import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { User } from "@/types";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as User[],
    user: null as User | null,
  }),

  actions: {
    async createUser(createUserDto: Partial<User>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/users", createUserDto);
        this.users.push(response.data.data);
        ElNotification({
          type: "success",
          message: "User successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the user",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllUsers() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/users");
        this.users = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching users",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchUserById(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/users/${id}`);
        this.user = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the user",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateUser(id: string, updateUserDto: Partial<User>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/users/${id}`, updateUserDto);
        const updatedUser = response.data.data;
        this.users = this.users.map((user) =>
          user.id === id ? updatedUser : user
        );
        if (this.user && this.user.id === id) {
          this.user = updatedUser;
        }
        ElNotification({
          type: "success",
          message: "User successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the user",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteUser(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/users/${id}`);
        this.users = this.users.filter((user) => user.id !== id);
        ElNotification({
          type: "success",
          message: "User successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the user",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getUserById: (state) => (id: string) =>
      state.users.find((user) => user.id === id),
  },
});
