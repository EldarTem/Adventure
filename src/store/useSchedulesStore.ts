import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Schedule } from "@/types";

export const useScheduleStore = defineStore("schedule", {
  state: () => ({
    schedules: [] as Schedule[],
    schedule: null as Schedule | null,
  }),

  actions: {
    async createSchedule(createScheduleDto: Partial<Schedule>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/schedules", createScheduleDto);
        this.schedules.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Schedule successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the schedule",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllSchedules() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/schedules");
        this.schedules = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching schedules",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchScheduleById(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/schedules/${id}`);
        this.schedule = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the schedule",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateSchedule(id: string, updateScheduleDto: Partial<Schedule>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/schedules/${id}`, updateScheduleDto);
        const updatedSchedule = response.data.data;
        this.schedules = this.schedules.map((schedule) =>
          schedule.id === id ? updatedSchedule : schedule
        );
        if (this.schedule && this.schedule.id === id) {
          this.schedule = updatedSchedule;
        }
        ElNotification({
          type: "success",
          message: "Schedule successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the schedule",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteSchedule(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/schedules/${id}`);
        this.schedules = this.schedules.filter(
          (schedule) => schedule.id !== id
        );
        ElNotification({
          type: "success",
          message: "Schedule successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the schedule",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getScheduleById: (state) => (id: string) =>
      state.schedules.find((schedule) => schedule.id === id),
  },
});
